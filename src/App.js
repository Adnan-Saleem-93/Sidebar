import React from 'react'
import './App.css'
import {useGlobalContext} from './context'
import {FaBars, FaRegEye} from 'react-icons/fa'

function App() {
  const {handleOpenCloseSidebar, handleOpenCloseModal} = useGlobalContext()
  return (
    <div className="App">
      <button className="btn-sidebar" onClick={handleOpenCloseSidebar}>
        <FaBars></FaBars>
      </button>
      <button className="btn-modal" onClick={handleOpenCloseModal}>
        <FaRegEye></FaRegEye> Open Modal
      </button>
    </div>
  )
}

export default App
