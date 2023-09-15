import { useState } from 'react'
import { BsArrowsMove, BsCart2, BsFolder2Open, BsFolderPlus } from 'react-icons/bs'
import { FaBloggerB, FaFolderOpen, FaRegUserCircle } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { MdGrid4X4 } from 'react-icons/md'
import { RiGridFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import SidebarMenuAccordion from './SidebarMenuAccordion'

function Sidebar({isCollaps, setIsCollaps}) {
  const [isOpen, setOpen] = useState('');
  return (
    <>
      <div className='sidebar-header'>
        <div><h3>Chalaman Newyork</h3></div>
        <div onClick={() => setIsCollaps(!isCollaps)}><MdGrid4X4 /></div>
      </div>
      <div className='sidebar-pages'>
          <ul>
            <li> 
              <RiGridFill />
              <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/'>Dashboard</NavLink>
            </li>

            {/* news */}
            <SidebarMenuAccordion isOpen={isOpen} setOpen={setOpen} title="News" icon={<FaBloggerB className='news-color' />}>
            <li>
              <div className='menu-group'>
                <li> <BsCart2 /> <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/news'>All news</NavLink></li>
                <li> <BsFolderPlus /> <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/create-new-news'>Add new news</NavLink></li>
              </div>
            </li>
            </SidebarMenuAccordion>

            {/* user */}
            <SidebarMenuAccordion isOpen={isOpen} setOpen={setOpen} title="User" icon={<FaRegUserCircle className='user-color' />}>
            <li>
              <div className='menu-group'>
                <h3>User</h3>
                <li> <FiUsers /> <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/users'>All users</NavLink></li>
                <li> <BsFolderPlus /> <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/create-new-user'>Add new user</NavLink></li>
              </div>
            </li>
            </SidebarMenuAccordion>

            {/* category */}
            <SidebarMenuAccordion isOpen={isOpen} setOpen={setOpen} title="Categories" icon={<FaFolderOpen className='category-color' />}>
            <li>
              <div className='menu-group'>
                <h3>Category</h3>
                <li> <BsFolder2Open /> <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/categories'>All category</NavLink></li>
  
                <li> <BsFolderPlus /> <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/create-new-category'>Add parent category</NavLink></li>
                <li> <BsFolderPlus /> <NavLink className={({ isActive }) => (isActive ? "navlink-active" : "navlink")} to='/create-sub-category'>Add sub category</NavLink></li>
              </div>
            </li>
            </SidebarMenuAccordion>

          </ul>
      </div>
    </>
  )
}

export default Sidebar
