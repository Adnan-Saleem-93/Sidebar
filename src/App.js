import React from 'react'
import './App.css'
import {useAppContext} from './context'
import {FaBars, FaRegEye} from 'react-icons/fa'
import SideBar from './Sidebar'

function App() {
  const {handleOpenCloseSidebar, handleOpenCloseModal} = useAppContext()
  return (
    <div className="App">
      <div className="main">
        <button className="btn-sidebar" onClick={handleOpenCloseSidebar} title="Open Sidebar">
          <FaBars></FaBars>
        </button>
        <button className="btn-modal" onClick={handleOpenCloseModal}>
          <FaRegEye></FaRegEye> Open Modal
        </button>
      </div>
      <SideBar />
    </div>
  )
}

export default App
