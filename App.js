/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { TodoList } from "./src/Todo/List";
import Store from "./src/Store";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Text style={styles.title}>Todo List</Text>
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 40,
    paddingLeft: 16
  },
  title: {
    textAlign: "left",
    fontWeight: "500"
  }
});
