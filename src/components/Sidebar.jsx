import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext()

  const handleColseSidebar = ()=>{
    if( activeMenu && screenSize <= 900 ){
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  m-2 text:md'
  
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700  dark:text-gray-200 hover:bg-light-gray hover-text-black m-2 text:md '
  return (
    <div className="ml-3 h-screen overflow-auto pb-10 dark:bg-secondary-dark-bg">
      {
        activeMenu && <>
          <div className='flex justify-between items-center'>
            <Link to='/' onClick={handleColseSidebar}
            className='flex gap-3 ml-3 mt-4 text-xl font-extrabold items-center tracking-tight dark:text-white text-slate-900'>
              <SiShopware/> <span> Shoppy </span> 
            </Link>
            <TooltipComponent content='menu' positin='BottomCenter'>
              <button type='button' onClick={()=>
              {setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}} className='text-xl p-3 mt-4 rounded-full  hover:bg-light-gray'>
                <MdOutlineCancel/>
              </button>
            </TooltipComponent>
          </div>
          <div className='mt-10'>
            {
              links.map((item, index)=>(
                <div key={index}>
                  <p className='text-gray-400 m-3 mt-4 uppercase bold cursor-pointer'>
                    {item.title}
                  </p>
                  {
                    item.links.map((link, index)=>(
                      <NavLink 
                      to={`/${link.name}`}
                      key={index}
                      style={({isActive})=>({
                        backgroundColor : isActive ?currentColor : ''
                      })}
                      onClick={handleColseSidebar}
                      className={({isActive})=> isActive ? activeLink : normalLink}>
                        {link.icon}
                        <span className='capitalize'>
                          {link.name}
                        </span>
                      </NavLink>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </>
      }
    </div>
  )
}
export default Sidebar