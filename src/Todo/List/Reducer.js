//@flow
import { Record } from "immutable";
import type { Todo, TodoReducer } from "@Types";
import { TodoFactory } from "@Types";
import { actionTypes } from "./Actions";
import type { TodoAction } from "./Actions";
import data from "./data.json";

const INITIAL_STATE: TodoReducer = Record({
  list: []
})();

const todos: Array<Todo> = data.map(TodoFactory);

export default (state: TodoReducer = INITIAL_STATE, action: TodoAction) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return state.set("list", todos);
    case actionTypes.TOGGLE:
      return state.update("list", (list: Array<Todo>) => {
        const todo = (action.payload: any | Todo);
        return list.map((item: Todo) => {
          if (item.id === todo.id) {
            return item.set("done", !item.done);
          }
          return item;
        });
      });
    default:
      return state;
  }
};
