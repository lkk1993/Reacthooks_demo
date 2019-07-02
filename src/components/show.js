import React from 'react'
import { GlobalContext } from '../store'
import { Counter } from '../redux'

export default function ShowComponent() {
  const store = React.useContext(GlobalContext)
  let num = Counter({count: 5})

  // const [state, setState] = React.useState({count: num.state.count})
  // React.useEffect(() => {
  //   store.setCount({count: 6})
  //   console.log('componentDidUpdate： 更新userName')
  // }, [])
  return (
    <div>
      <h1>{store.appName}</h1>
      <h1>{store.stuName}</h1>
      <h2><span>count：</span>{num.state.count}</h2>
      <button
        onClick={() => num.dispatch({type: 'reset'})}>
        重置
      </button>
      <button onClick={() => num.dispatch({type: 'increment'})} style={{ marginLeft: '20px' }}>+</button>
      <button onClick={() => num.dispatch({type: 'decrement'})} style={{ marginLeft: '20px' }}>-</button>
      <p>{store.state.count}</p>
      <p>{store.countState.count}</p>
    </div>
  )
}
