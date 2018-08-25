// @flow
import React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";
import type { Todo } from "@Types";

const styles = StyleSheet.create({
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
  todo: Todo
};

export default (props: Props) => (
  <View style={styles.container}>
    <Switch value={props.todo.done} disabled />
    <Text style={styles.text}>{props.todo.name}</Text>
  </View>
);
