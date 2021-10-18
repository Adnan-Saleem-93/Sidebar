import React, {useEffect, useRef} from 'react'
import './App.css'
import {useAppContext} from './context'
import {FaBars, FaRegEye} from 'react-icons/fa'
import SideBar from './Sidebar'
import Modal from './Modal'

function App() {
  const {handleOpenCloseSidebar, handleOpenCloseModal, showModal, showSidebar} = useAppContext()
  const btnSidebarRef = useRef()
  const btnModalRef = useRef()

  useEffect(() => {
    showSidebar
      ? btnSidebarRef.current.classList.add('disabled')
      : btnSidebarRef.current.classList.remove('disabled')
    showModal
      ? btnModalRef.current.classList.add('disabled')
      : btnModalRef.current.classList.remove('disabled')
  }, [showModal, showSidebar])
  return (
    <div className="App">
      <div className="main">
        <button
          className="btn-sidebar"
          ref={btnSidebarRef}
          onClick={handleOpenCloseSidebar}
          title="Open Sidebar"
        >
          <FaBars></FaBars>
        </button>
        <button className="btn-modal" ref={btnModalRef} onClick={handleOpenCloseModal}>
          <FaRegEye></FaRegEye> Open Modal
        </button>
      </div>
      <SideBar />
      <Modal />
    </div>
  )
}

export default App
