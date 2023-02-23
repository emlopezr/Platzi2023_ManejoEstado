import React from 'react'
import ClassState from '../ClassState/ClassState'
import UseState from '../UseState/UseState'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <UseState/>
      <ClassState />
    </div>
  )
}

export default App