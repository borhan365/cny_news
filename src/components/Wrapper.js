import React from 'react'

function Wrapper({ children, title, bgColor, borderColor }) {
  return (
    <>
      <div className='manage-menu-wrapper'>

        {/* menu item */}
        <div className={`manage-menu-item ${borderColor}`}>

          {/* title */}
          <div className='menu-title'>
            <h2 className={bgColor}>{title}</h2>
          </div>

          {/* body */}
            {children}

        </div>
      </div>
    </>
  )
}

export default Wrapper