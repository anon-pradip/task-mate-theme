import React, { useEffect } from 'react'
import task from "../assets/task.png"

const Header = ({ theme, setTheme }) => {
  useEffect(() => {
    document.documentElement.classList.add(theme)
  }, [theme])
  return (
    <div className='flex justify-between bg-white items-center dark:text-black p-2 rounded-md'>
      <div className=' flex space-x-1 justify-center items-center'>
        <img src={task} alt="" className='h-8 w-8' />
        <p className=' font-bold font-mono'>Taskmate</p>
      </div>
      <div className='flex justify-center items-center space-x-1'>
        <span className="h-3 w-3 bg-slate-300 rounded-full hover:cursor-pointer"
          onClick={() => setTheme("light")}
        ></span>
        <span className="h-3 w-3 bg-black rounded-full hover:cursor-pointer"
          onClick={() => setTheme("dark")}
        ></span>
      </div>
    </div>
  )
}

export default Header