import React from 'react'
// import { GlobalContext } from '../store'
import { Counter } from '../redux'

export default function ShowComponent() {
  const data = {
    userName: '',
    age: '',
    skill: {}
  }
  const [state, setState] = React.useState(data) // [name, setName] name随意起，只要是这个形式即可
  React.useEffect(() => {
      getData()
      console.log('componentDidMount: 组件加载后')
      return () => {
        console.log('componentWillUnmount: 组件卸载， 做一些清理工作')
      }
  }, [])

  React.useEffect(() => {
    console.log('componentDidUpdate： 更新userName')
  }, [state.userName])

  let getData = () =>{
    setState({
      ...state,
      userName: '玉狐',
      age: 20,
      skill: {
        a: '画画',
        b: '唱歌',
        c: '跳舞',
      }
    })
  }
  let changeName = () => {
    setState({
      ...state,
      userName: '刘倩',
      skill: {
        ...state.skill,
        b: '打游戏',
        c: '嘻哈rap',
      }
    })
  }
  let changeAge = () => {
    setState({
      ...state, // 不加这个会将state整个替换为 {age: 24}
      age: 24,
    })
  }
  const skills = { ...state.skill }
  const store = Counter()
  // console.log(store)
  return (
    <div>
      <h1>{state.userName}</h1>
      <h1>{state.age}</h1>
      <p>
        <span>{skills.a}</span>
        <span style={{ marginLeft: '10px' }}>{skills.b}</span>
        <span style={{ marginLeft: '10px' }}>{skills.c}</span>
      </p>
      {/**/}
      <p>
        <input type='text' placeholder='input a username'
          onChange={(event) => setState({...state, userName: event.target.value})}></input>
        <input type='text' placeholder='input a age' style={{ marginLeft: '20px' }}
          onChange={(event) => setState({...state, age: event.target.value})}></input>
      </p>
      <p>
        <button onClick={changeName}>改变姓名&兴趣爱好</button>
        <button onClick={changeAge} style={{ marginLeft: '20px' }}>改变年龄</button>
      </p>

      <div>
          <h1>{store.state.count}</h1>
          <button
            onClick={() => store.dispatch({type: 'reset'})}>
            重置
          </button>
          <button onClick={() => store.dispatch({type: 'increment'})} style={{ marginLeft: '20px' }}>+</button>
          <button onClick={() => store.dispatch({type: 'decrement'})} style={{ marginLeft: '20px' }}>-</button>
      </div>
    </div>
  )
}
