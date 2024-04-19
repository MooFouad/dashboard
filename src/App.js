import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import './App.css'
import { Navbar, Footer, Sidebar, ThemeSettings} from './components'
import { Ecommerce, Calendar, Orders, Editor, Employees, Customers, ColorPicker, Kanban, Area, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked } from './pages'
import { useStateContext } from './contexts/ContextProvider'



const App = () => {
  const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()
  return (
    <div className={currentMode === 'Dark' ? 'dark' : '' }>
      <BrowserRouter>
      {/* App Container */}
        <div className='flex relative dark:bg-main-dark-bg'>
          {/* settings */}
          <div
          className='fixed right-4 bottom-4 z-10'>
            <TooltipComponent content='settings' position='top'>
              <button 
              onClick={()=>setThemeSettings(true)}
              className='text-2xl p-2 hover:bg-drop-shadow-xl text-white hover:bg-light-gray  rounded-full'
              style={{background : currentColor }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* SideBar */}
          {
            activeMenu ? (
              <div className='fixed w-72 sidebar dark:bg-secondry-dark-bg bg-white'>
                <Sidebar/>
              </div>
            ):(
              <div className='w-0 overflow-hidden'>
                <Sidebar/>
              </div>
            )
          }
          {/* Navbar */}
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
            ${activeMenu 
              ? ' md:pl-72'
              : 'flex-2'}`
          }>
            <div className='fixex md:static navbar dark:bg-main-dark-bg bg-main-bg w-full'>
              <Navbar />
            </div>
          {/* Main Routing */}
          <div>
            {themeSettings && <ThemeSettings/>}
            <Routes>
              {/* dashboard */}
              <Route path='/' element={<Ecommerce/>}/>
              <Route path='/ecommerce' element={<Ecommerce/>}/>
              {/* 3 pages */}
              <Route path='/orders' element={<Orders/>}/>
              <Route path='/employees' element={<Employees/>}/>
              <Route path='/customers' element={<Customers/>}/>
              {/* 4 Apps */}
              <Route path='/kanban' element={<Kanban/>}/>
              <Route path='/editor' element={<Editor/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/color-picker' element={<ColorPicker/>}/>
              {/* 7 Charts */}
              <Route path='/line' element={<Line/>}/>
              <Route path='/area' element={<Area/>}/>
              <Route path='/bar' element={<Bar/>}/>
              <Route path='/pie' element={<Pie/>}/>
              <Route path='/financial' element={<Financial/>}/>
              <Route path='/color-mapping' element={<ColorMapping/>}/>
              <Route path='/pyramid' element={<Pyramid/>}/>
              <Route path='/stacked' element={<Stacked/>}/>
            </Routes>
          </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App