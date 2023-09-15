import React, { useState } from 'react';

function Accordion ({title, children, position, icon}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="sidebar-accordion-wrapper">
      
      <div className={`accordion-title sidebar-accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}>
        <h3> {icon} {title}</h3>
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-list">{children}</div>
      </div>
    </div>
  )
}
export default Accordion
