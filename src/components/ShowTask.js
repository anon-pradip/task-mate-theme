import React from 'react'

const ShowTask = ({ taskList, setTaskList }) => {
  console.log(taskList)
  return (
    <div className=' mt-4 bg-white px-2 py-2'>
      <div className=' flex justify-between items-center'>
        <div className=' flex justify-center items-center space-x-1'>
          <p className=' font-semibold'>Todo</p>
          <span className=' bg-slate-300 rounded-full w-6 text-center'>{taskList.length}</span>
        </div>
        <div>
          <button className='bg-blue-600 text-white px-3 py-1 rounded-sm' onClick={() => setTaskList([])}>Clear All</button>
        </div>
      </div>
      <hr className=' mt-2' />

      {/* TASKS */}
      <div className='px-2 mt-4 flex flex-wrap gap-4 justify-center items-center '>
        {taskList.length < 1 && <p className='text-2xl my-4 font-bold'>Empty List!</p>}
        {taskList.map((task, index) => (
          //  INDIVIDUAL TASK 

          <div key={index} className='flex justify-between items-start px-1 border border-l-2 border-l-blue-400 rounded-sm max-w-xs'>
            {/* LEFT PART */}
            <div className=' flex flex-col'>
              <p className=' font-semibold break-all'>{task.name}</p>
              <p className=' text-slate-500 text-sm'>{task.time}</p>
            </div>
            {/* RIGHT SIDE */}
            <div className=' flex space-x-1'>
              <button>✍🏻</button>
              <button>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowTask