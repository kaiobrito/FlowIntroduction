//@flow

import data from "./data.json";
import { actionTypes } from "./Actions";
import type { TodoAction } from "./Actions";
import type { TodoReducer, Todo } from "@Types";

const INITIAL_STATE: TodoReducer = {
  list: []
};

export default (state: TodoReducer = INITIAL_STATE, action: TodoAction) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return { ...state, list: data };
    case actionTypes.TOGGLE:
      const todo = (Object.assign({}, action.payload): Todo);

      const list = state.list.map(item => {
        if (item.id === todo.id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
      return Object.assign(state, { list: list });
    default:
      return state;
  }
};
