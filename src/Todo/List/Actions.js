export const actionTypes = {
  TOGGLE: "TODO/TOGGLE"
};

export const actionCreators = {
  toggle: todo => ({
    type: actionTypes.TOGGLE,
    payload: todo
  })
};
