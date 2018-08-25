import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import TodoItem from "../Item/TodoItem";
import { actionCreators } from "./Actions";

class TodoList extends React.PureComponent {
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

const mapStateToProps = state => {
  return {
    todos: state.todo.list
  };
};

const mapActions = {
  fetch: actionCreators.fetch,
  toggleTodo: actionCreators.toggle
};
export default connect(
  mapStateToProps,
  mapActions
)(TodoList);
