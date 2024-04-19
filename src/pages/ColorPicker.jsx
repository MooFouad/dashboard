import React from 'react'
import { Header } from '../components'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

const ColorPicker = () => {

  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category="Page" title="ColorPicker" /> 
      <div className="text-center">
        <div id='preview' />
        <div className="flex justify-center items-center md:gap-20 gap-6 flex-wrap">
          {/* left picker */}
          <div className="">
            <p className='text-2xl mt-2 bold mb-4'>
              Inline Pallete
            </p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change = {change}
            />
          </div>
          {/* right picker */}
          <div className="">
            <p className='text-2xl mt-2 bold mb-4'>
              Inline Picker
            </p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change = {change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker