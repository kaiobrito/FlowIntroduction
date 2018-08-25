//@flow
import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { List } from "immutable";
import { connect } from "react-redux";
import type { AppState, Todo } from "@Types";
import TodoItem from "../Item/TodoItem";
import { actionCreators } from "./Actions";
import type { TodoActionCreator } from "./Actions";

type Props = {
  todos: List<Todo>,
  fetch: () => any | void,
  toggle: Todo => any | void
};

class TodoList extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.fetch();
  }

  renderItem = (item: Todo) => {
    return (
      <TouchableOpacity key={item.id} onPress={() => this.props.toggle(item)}>
        <TodoItem todo={item} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={{ flex: 1 }}>{this.props.todos.map(this.renderItem)}</View>
      </ScrollView>
    );
  }
}

type MapProps = AppState => { todos: $ElementType<Props, "todos"> };

const mapStateToProps: MapProps = (state: AppState) => {
  return {
    todos: state.todo.list
  };
};

type MapActions = {
  fetch: $ElementType<Props, "fetch">,
  toggle: $ElementType<Props, "toggle">
};

const mapActions: MapActions = {
  fetch: actionCreators.fetch,
  toggle: actionCreators.toggle
};

export default connect(
  mapStateToProps,
  mapActions
)(TodoList);
