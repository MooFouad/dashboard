import React, {useEffect} from 'react'
import { useStateContext } from '../contexts/ContextProvider'
import { AiOutlineMenu } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'


const NavButton = ({ title, customFun, icon, color,  dotColor}) =>(
  <TooltipComponent content={title} position='BottomCenter'>
    <button onClick={customFun} style={{color}} 
    type='button'
    className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span 
      className='absolute inline-flex h-2 w-2 right-2 top-2 rounded-full'
      style={{background : dotColor}}/>
        {icon}
    </button>
  </TooltipComponent>
)


const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, screenSize, currentColor, setScreenSize} = useStateContext()


  useEffect(()=>{
    const handleResize = ()=>{
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize();
    return () => window.removeEventListener('resize', handleResize)

  }, [])
  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      {/* menu */}
      <NavButton 
      title='menu' 
      customFun={()=> setActiveMenu((pervActiveMenu)=> !pervActiveMenu)} color={currentColor} 
      icon={<AiOutlineMenu/>} />
      <div className="flex">
        {/* cart */}
        <NavButton 
        title='cart' 
        // customFun={()=> {}} 
        color={currentColor} 
        icon={<FiShoppingCart/>} />
        {/* chat */}
        <NavButton 
        dotColor='#03C9D7'
        title='chat' 
        // customFun={()=> {}} 
        color={currentColor}  
        icon={<BsChatLeft/>} />
        {/* notifications */}
        <NavButton 
        dotColor='#03C9D7'
        title='notifications' 
        // customFun={()=> {}} 
        color={currentColor}
        icon={<RiNotification3Line />} />
        {/* user profile */}
        <TooltipComponent content='profile' position='BottomCenter'>
          <div 
          // onClick={()=> {}}
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img 
            className='rounded-full w-8 h-8'
            src={avatar} alt="avatar" />
            <p className='text-gray-400 text-14'>
              <span>Hi, </span>{' '}
              <span className='bold'>Moo</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default Navbar