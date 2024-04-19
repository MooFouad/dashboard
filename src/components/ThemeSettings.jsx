import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import {themeColors} from '../data/dummy'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs';
import {useStateContext} from '../contexts/ContextProvider'

const ThemeSettings = () => {

  const {setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext()

  return (
    <div className='bg-half-transparent fixed w-screen nav-item top-0 right-0 w-[100%]'>
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg p-2">
        {/* title */}
        <div className="flex justify-between items-center p-4 ml-4">
          <p className='bold text-xl'>
            Settings
          </p>
          <button type="button" 
          onClick={() =>{setThemeSettings(false)}}
          style={{color: 'rgb(153, 171, 180)', borderRadius : '50%'}}
          className='text-xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
            <MdOutlineCancel />
          </button>
        </div>
        {/* options */}

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className='bold text-lg'>
            Theme Options
          </p>
          {/* light input */}
          <div className="mt-4">
            <input 
              type="radio" 
              id='light'
              name='theme'
              value='Light'
              onClick={setMode}
              checked={currentMode === 'Light'}
              className='cursor-pointer'
            />
            <label 
            htmlFor="light"
            className='ml-2 cursor-pointer'>
              Light
            </label>
          </div>
          {/* dark input */}
          <div className="my-4">
            <input 
              type="radio" 
              id='dark'
              name='theme'
              value='Dark'
              onClick={setMode}
              checked={currentMode === 'Dark'}
              className='cursor-pointer'
            />
            <label 
            htmlFor="dark"
            className='ml-2 cursor-pointer'>
              Dark
            </label>
          </div>
          <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className='bold text-lg'>
            Theme Colors
          </p>
          {/* colors */}
          <div className="flex gap-3 flex-wrap items-center justify-center">
            {
              themeColors.map((item, index)=>(
                <TooltipComponent key={index} content={item.name} position='TopCenter'>
                  <div className='relative mt-2 cursor-pointer flex gap-5 items-center '>
                    <button type='button' 
                    onClick = {()=>{
                      setColor(item.color)
                    }}
                    style={{backgroundColor : item.color}}
                    className='h-10 w-10 rounded-full cursor-pointer'>
                      <BsCheck className={`ml-2 text-2xl  text-white ${item.color === currentColor ? 'block' : 'hidden'} `} />
                    </button>
                  </div>
                </TooltipComponent>
              ))
            }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings