import data from "./data.json";

const INITIAL_STATE = {
  list: data
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
