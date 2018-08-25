//@flow
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import TodoItem from "../Item/TodoItem";
import { actionCreators } from "./Actions";
import type { TodoActionCreator } from "./Actions";
import type { Todo, AppState } from "../../Types";
import { List } from "immutable";

type Props = {
  todos: Array<Todo>,
  fetch: () => void,
  toggleTodo: Todo => void
};

class TodoList extends React.PureComponent<Props> {
  static defaultProps = {
    todos: []
  };

  componentDidMount() {
    this.props.fetch();
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.props.toggleTodo(item)}>
        <TodoItem todo={item} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        style={{ flex: 1, width: "100%" }}
        data={this.props.todos}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    todos: state.todo.list
  };
};

const mapActions: { [any]: TodoActionCreator } = {
  fetch: actionCreators.fetch,
  toggleTodo: actionCreators.toggle
};

export default connect(
  mapStateToProps,
  mapActions
)(TodoList);
