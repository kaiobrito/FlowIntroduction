export const actionTypes = {
  FETCH: "TODO/FETCH",
  TOGGLE: "TODO/TOGGLE"
};

export const actionCreators = {
  fetch: () => ({
    type: actionTypes.FETCH
  }),
  toggle: todo => ({
    type: actionTypes.TOGGLE,
    payload: todo
  })
};
