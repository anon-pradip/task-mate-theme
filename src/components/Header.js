import React from 'react'
import task from "../assets/task.png"

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-white p-2 rounded-md'>
      <div className=' flex space-x-1 justify-center items-center'>
        <img src={task} alt="" className='h-8 w-8' />
        <p className=' font-bold font-mono'>Taskmate</p>
      </div>
      <div className='flex justify-center items-center space-x-1'>
        <span className=' h-4 w-4 bg-slate-300 rounded-full active:h-6 active:w-6 hover:cursor-pointer'></span>
        <span className=' h-4 w-4 bg-black rounded-full active:h-6 active:w-6 hover:cursor-pointer'></span>
        <span className=' h-4 w-4 bg-gradient-to-r from-blue-200 via-blue-500 to-indigo-700 rounded-full active:h-6 active:w-6 hover:cursor-pointer'></span>
        <span className=' h-4 w-4 bg-gradient-to-bl from-white to-black rounded-full active:h-6 active:w-6 hover:cursor-pointer'></span>
        <span></span>
      </div>
    </div>
  )
}

export default Header