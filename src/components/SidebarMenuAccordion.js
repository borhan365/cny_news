import React, { useState } from 'react'

function Accordion ({title, children, position, icon, parentClass, isOpen, setOpen}) {

  return (
    <div className={`sidebar-accordion-wrapper ${parentClass}`}>
      
      <div className={`accordion-title sidebar-accordion-title ${isOpen === title ? "open" : ""}`}
        onClick={() => {
          if (isOpen === title) {
            setOpen('wait')
          } else {
            setOpen(title)
          }
        }}>
        <h3> {icon} {title}</h3>
      </div>
      <div className={`accordion-item ${isOpen !== title ? "collapsed" : ""}`}>
        <div className="accordion-list">{children}</div>
      </div>
    </div>
  )
}
export default Accordion
