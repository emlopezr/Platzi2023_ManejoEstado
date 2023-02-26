import React from 'react'
import ClassState from '../ClassState/ClassState'
import UseReducer from '../UseReducer/UseReducer'
import UseState from '../UseState/UseState'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <p>Código de seguridad: 'estado'</p>

      <UseState/>
      <UseReducer/>
      
      {/* <ClassState /> */}
    </div>
  )
}

export default App