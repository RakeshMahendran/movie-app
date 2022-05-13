import React from 'react'
import "./header.css"

const header = () => {
  return (
    <span onClick={() => window.scroll(0,0)} className="header"> Entertainment Hub </span>
  )
}

export default header