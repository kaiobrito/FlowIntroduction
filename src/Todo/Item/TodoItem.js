import React from "react";
import { View, Switch, Text, StyleSheet } from "react-native";

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

export default class TodoItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch value={this.props.todo.done} disabled />
        <Text style={styles.text}>{this.props.todo.name}</Text>
      </View>
    );
  }
}
