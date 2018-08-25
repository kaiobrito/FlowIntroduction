// @flow
import React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";
import type { Todo } from "@Types";

const styles: { [string]: mixed } = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    marginLeft: 16
  }
});

type Props = {
  +todo: Todo
};

export default class TodoItem extends React.PureComponent<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Switch value={this.props.todo.done} disabled />
        <Text style={styles.text}>{this.props.todo.name}</Text>
      </View>
    );
  }
}
