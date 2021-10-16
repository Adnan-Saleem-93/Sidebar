import React, {useRef, useEffect} from 'react'
import {useAppContext} from './context'
import {links, social} from './data'
import {FaTimes} from 'react-icons/fa'

const SideBar = () => {
  const sidebarRef = useRef()
  const {showSidebar, handleOpenCloseSidebar} = useAppContext()

  useEffect(() => {
    // change translate css property based on value of 'showSidebar'
    sidebarRef.current.style.transform = `translateX(${showSidebar ? '0' : '-100%'})`
  }, [showSidebar])

  return (
    <section className="sidebar" ref={sidebarRef}>
      <article className="header">
        <h3 style={{marginBottom: '0px', color: '#054b60d6'}}>Sidebar</h3>
        <button className="btn-closeSidebar" onClick={handleOpenCloseSidebar} title="Close Sidebar">
          <FaTimes></FaTimes>
        </button>
      </article>
      <article className="links">
        {links.map((link, index) => {
          let {text, icon, url} = link
          return (
            <a href={url} className="single-link" key={index}>
              <i className="link-icon">{icon}</i>
              <span className="link-text">{text}</span>
            </a>
          )
        })}
      </article>
      <article className="social">
        <h3 style={{marginBottom: '0px', color: '#054b60d6'}} className="header">
          Social
        </h3>
        {social.map((link, index) => {
          let {icon, url, title} = link
          return (
            <a
              href={url}
              className="social-link"
              key={index}
              target="_blank"
              rel="noreferrer"
              title={title}
            >
              <i className="link-icon">{icon}</i>
            </a>
          )
        })}
      </article>
    </section>
  )
}

export default SideBar
