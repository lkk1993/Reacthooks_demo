import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalProvider } from './store'


import ButtonComponent from './components/button'
import ShowComponent from './components/show'
import ViewComponent from './components/view'

const App = function (){
  // const [title,setTitle] = React.useState('react-redux')
  return (
    <div>
      <ButtonComponent />
      <ShowComponent />
      <ViewComponent />
    </div>
  )
}

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
  , document.getElementById('root'))
