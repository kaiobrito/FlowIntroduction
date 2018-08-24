import data from "./data.json";
import { actionTypes } from "./Actions";

const INITIAL_STATE = {
  list: data
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.TOGGLE:
      const list = state.list.map(item => {
        if (item.id === payload.id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
      return Object.assign(state, { list: list });
    default:
      return state;
  }
};
