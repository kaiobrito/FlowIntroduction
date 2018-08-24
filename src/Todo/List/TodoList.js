import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import data from "./data.json";
import TodoItem from "../Item/TodoItem";

export default class TodoList extends React.Component {
  static defaultProps = {
    todos: data
  };

  renderItem = ({ item }) => {
    return <TodoItem todo={item} />;
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
