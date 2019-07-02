import React from 'react'
import { GlobalContext } from '../store'

export default function ButtonComponent() {
  const store = React.useContext(GlobalContext)
  let add = () => {
    return store.setAppName(store.appName + 1)
  }
  let reduce = () => {
    // if (store.appName > 1) {
    //   return store.setAppName(store.appName-1)
    // } else {
    //   return store.setAppName(0)
    // }
    return store.setAppName(store.appName-1)
  }
  let zero = () => {
    return store.setAppName(0)
  }
  const changeStuName = () => {
    return store.setStuName('王五')
  }
  const changeCount = () => {
    store.dispatch({type: 'increment'})
  }
  const changenum = () => {
    store.countdispatch({type: 'decrement'})
  }
  return (
    <div>
      <p>这个是button组件,点击按钮操作</p>
      <button onClick={add}>加一</button>
      <button onClick={reduce} style={{ marginLeft: '20px' }}>减一</button>
      <button onClick={zero} style={{ marginLeft: '20px' }}>重置</button>
      <button onClick={changeStuName} style={{ marginLeft: '20px' }}>换一个</button>
      <button onClick={changeCount} style={{ marginLeft: '20px' }}>+++</button>
      <button onClick={changenum} style={{ marginLeft: '20px' }}>---</button>
    </div>
  )
}
