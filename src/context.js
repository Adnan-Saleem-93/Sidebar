import React, {useState, useContext, createContext} from 'react'

export const AppContext = createContext(null)

export const AppProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const handleOpenCloseModal = () => {
    console.log(`modal ${showModal ? 'open' : 'closed'}`)
    setShowModal(!showModal)
  }
  const handleOpenCloseSidebar = () => {
    console.log(`sidebar ${showSidebar ? 'open' : 'closed'}`)
    setShowSidebar(!showSidebar)
  }

  return (
    <AppContext.Provider
      value={{handleOpenCloseModal, handleOpenCloseSidebar, showModal, showSidebar}}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
