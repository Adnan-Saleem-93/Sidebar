import React, {useEffect, useRef} from 'react'
import {FaTimes} from 'react-icons/fa'
import {useAppContext} from './context'

const Modal = () => {
  const {handleOpenCloseModal, showModal} = useAppContext()
  const modalRef = useRef()
  useEffect(() => {
    // modalRef.current.style.display = `${showModal ? 'block' : 'none'}`
    modalRef.current.classList.remove(`${showModal ? 'hidden' : 'visible'}`)
    modalRef.current.classList.add(`${showModal ? 'visible' : 'hidden'}`)
    // modalRef.current.style.transform = `translateY(${showModal ? '0' : '-100vh'})`
  }, [showModal])
  return (
    <>
      <section className="modal-sect hidden" ref={modalRef}>
        <div className="modal-header">
          <h3>Modal</h3>
          <button className="btn-closeSidebar" onClick={handleOpenCloseModal} title="Close Modal">
            <FaTimes></FaTimes>
          </button>
        </div>
        <h5 className="modal-body">Modal Content</h5>
      </section>
    </>
  )
}

export default Modal
