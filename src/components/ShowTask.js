import React from 'react'

const ShowTask = () => {
  return (
    <div className=' mt-4 bg-white px-2 py-2'>
      <div className=' flex justify-between items-center'>
        <div className=' flex justify-center items-center space-x-1'>
          <p className=' font-semibold'>Todo</p>
          <span className=' bg-slate-300 rounded-full w-6 text-center'>2</span>
        </div>
        <div>
          <button className='bg-blue-600 text-white px-3 py-1 rounded-sm'>Clear All</button>
        </div>
      </div>
      <hr className=' mt-2' />

      {/* TASKS */}
      <div className='px-2 mt-4'>
        {/* INDIVIDUAL TASK */}
        <div className='flex justify-between items-start px-1 border border-l-2 border-l-blue-400 rounded-sm max-w-xs'>
          {/* LEFT PART */}
          <div className=' flex flex-col'>
            <p>Task 1</p>
            <p>date and time</p>
          </div>
          {/* RIGHT SIDE */}
          <div className=' flex space-x-1'>
            <button>✍🏻</button>
            <button>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowTask