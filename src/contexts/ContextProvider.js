import { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
}

export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')


  const [themeSettings, setThemeSettings] = useState(false)

  const setMode = (e)=>{
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
    setThemeSettings(false)
  }
// no need to destructure the value by e.target.value because it will returen undefined string
  const setColor = (color)=>{
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
  }

  const handleClick = (clicked)=>{
    // initialState is an object 
    setIsClicked({...initialState, [clicked] : true})
  }

  return (
    <StateContext.Provider 
    value={{ 
      activeMenu, setActiveMenu,
      isClicked, setIsClicked,
      handleClick,
      screenSize, setScreenSize,
      currentColor, setCurrentColor,
      currentMode, setCurrentMode,
      // these 2 instead of setCurrenrColor/Mode
      setColor, setMode,
      themeSettings, setThemeSettings,
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = ()=> useContext(StateContext)