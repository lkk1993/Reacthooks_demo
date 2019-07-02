import React from 'react'

export const GlobalContext = React.createContext({})

const reducer = (state, action) => {
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

export function GlobalProvider(props) {
  const [appName, setAppName] = React.useState(0)
  const [stuName, setStuName] = React.useState('张三')
  const [state, dispatch] = React.useReducer(reducer, {count: 5})
  const [countState, countdispatch] = React.useReducer(reducer, {count: 8})
  return (
    <GlobalContext.Provider
      value={{
        appName,
        setAppName,
        stuName,
        setStuName,
        state,
        dispatch,
        countState,
        countdispatch
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
