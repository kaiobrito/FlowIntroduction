import data from "./data.json";
import { actionTypes } from "./Actions";

const INITIAL_STATE = {
  list: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH:
      return { ...state, list: data };
    case actionTypes.TOGGLE:
      const list = state.list.map(item => {
        if (item.id === payload.id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
      return { ...state, list: list };
    default:
      return state;
  }
};
