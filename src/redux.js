import React from 'react'
// const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    default:
      throw new Error();
  }
}

export function Counter(initialState = {count: 0}) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return  { state, dispatch }
}
