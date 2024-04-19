import React from 'react'
import {Stacked, Pie, Button, SparkLine} from '../components'
import {earningData, ecomPieChartData, SparklineAreaData} from '../data/dummy'
import { GoDotFill, GoPrimitiveDot } from 'react-icons/go';
import {useStateContext} from '../contexts/ContextProvider'


const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className='mt-12'>
      <div className="flex justify-center
      flex-wrap lg:flex-nowrap ">
          <div className="bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 dark:bg-secondary-dark-bg ">
            <div className='flex justify-between items-center '>
              <div className="">
                <p className='bold text-gray-400'>
                  Earnings
                </p>
                <p className='text-2xl'>
                  $1,543.23
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Button
                color='white'
                bgColor={currentColor}
                text='Download'
                borderRadius='10px'
                size='lg'
              />
            </div>
          </div>
          {/* cards container */}
          <div className="flex items-center justify-center flex-wrap gap-2 m-3">
            {
              earningData.map((item, index) =>(
                <div 
                key={index}
                className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-50 p-5 pt-9 rounded-2xl flex flex-col justify-center items-center">
                  <button type="button" 
                  style={{ 
                    backgroundColor: item.iconBg,
                    color : item.iconColor,
                  }}
                  className='text-2xl rounded-full p-4 opacity-0.9 hover:drop-shadow-xl'>
                    {item.icon}
                  </button>
                  <p className='pt-3 text-lg'>
                    <span className='bold'>
                      {item.amount}
                    </span>
                    <span className={`ml-2 text-sm text-${item.pcColor}`}>
                      {item.percentage}
                    </span>
                  </p>
                  <p className='text-sm text-gray-400 my-1'>
                    {item.title}
                  </p>
                </div>
              ))
            }
          </div>
      </div>
      {/* Revenue updates section */}
      <div className="flex gap-10 justify-center flex-wrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-780 p-4 m-3 rounded-2xl w-full">
          {/* title */}
          <div className="flex justify-between items-center">
            <p className='bold text-xl'>
              Revenue Updates
            </p>
            <div className="flex items-center gap-4 text-gray-400 hover:drop-shadow-xl">
              <p className='flex items-center gap-2 text-gray-600 drop-shadow-xl'>
                <span>
                  <GoDotFill/>
                </span>
                <span>
                  Expense
                </span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <GoDotFill/>
                </span>
                <span>
                  Budget
                </span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 justify-center items-center max-md:flex-col">
          {/* right container */}
            <div className="md:border-r-1 m-4 pr-10 md:border-color md:flex-1 flex-wrap">
              <div>
              <p>
                <span className='text-2xl bold'>$93,438</span>
                <span className='p-1 rounded-full text-white hover:drop-shadow-xl bg-green-400 ml-2 text-xs'>23%</span>
              </p>
              <p className='text-gray-400 my-1'>
                Budget
              </p>
              </div>
            
            <div className='mt-8'>
              <p>
                <span className='text-2xl bold'>$48,487</span>
              </p>
              <p className='text-gray-400 my-1'>
                Expense
              </p>
            </div>
            {/* SparkLine chart */}
            <div className="mt-6">
              <SparkLine 
                id='line-sparkline'
                type='Line'
                height='180px'
                width='250px'
                data={SparklineAreaData}
                color={currentColor}
                currentColor={currentColor}
              />
            </div>
            {/* btn */}
            <div className='mt-10'>
              <Button
                color='white'
                bgColor={currentColor}
                text='Download Report'
                borderRadius='10px'
              />
            </div>
            </div>
            {/* right Stacked Chart */}
            <div className="flex flex-col md:flex-1">
              <Stacked 
                width = '320px'
                height = '360px'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce