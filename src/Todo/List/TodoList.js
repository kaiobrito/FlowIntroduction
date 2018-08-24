import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import TodoItem from "../Item/TodoItem";

class TodoList extends React.Component {
  static defaultProps = {
    todos: []
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

const mapStateToProps = state => {
  return {
    todos: state.todo.list
  };
};

export default connect(mapStateToProps)(TodoList);
