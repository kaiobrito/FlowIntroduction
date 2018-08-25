//@flow
import type { RecordOf, RecordFactory } from "immutable";
import { Record } from "immutable";

type TodoSchema = {
  id: string,
  name: string,
  done: boolean
};

export const TodoFactory: RecordFactory<TodoSchema> = Record({
  done: false,
  id: "",
  name: ""
});

export type Todo = RecordOf<TodoSchema>;

export type TodoReducer = RecordOf<{
  +list: Array<Todo>
}>;
