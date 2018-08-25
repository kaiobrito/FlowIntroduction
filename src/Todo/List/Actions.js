//@flow
import type { Todo } from "@Types";

export const actionTypes = {
  FETCH: "TODO/FETCH",
  TOGGLE: "TODO/TOGGLE"
};

type TYPES = $Values<typeof actionTypes>;

export type TodoAction = { type: TYPES, payload?: any | Todo };

export type TodoActionCreator = { [string]: (any) => TodoAction };

const fetch: () => TodoAction = () => ({
  type: actionTypes.FETCH
});
const toggle: (todo: Todo) => TodoAction = (todo: Todo) => ({
  type: actionTypes.TOGGLE,
  payload: todo
});

export const actionCreators: TodoActionCreator = {
  fetch,
  toggle
};
