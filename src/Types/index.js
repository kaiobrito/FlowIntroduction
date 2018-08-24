//@flow

export type Todo = {
  id: string,
  name: string,
  done: boolean
};

export type TodoReducer = {
  list: Array<Todo>
};

export type AppState = {
  todo: TodoReducer
};
