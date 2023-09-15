import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { FaSignOutAlt } from 'react-icons/fa'

function Header({isCollaps, setIsCollaps}) {

  return (
    <>
      <div className='main-header card'>

          <div className='header-name'>
            <AiOutlineMenuFold onClick={() => setIsCollaps(!isCollaps)}/>
            <p>Md Borhan</p>
          </div>

          <div className='logout'>
            <FaSignOutAlt />
            <p> LOGOUT</p>
          </div>

      </div>
    </>
  )
}

export default Header
