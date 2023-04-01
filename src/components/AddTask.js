import React from 'react'

const AddTask = () => {
  return (
    <div className='max-w-xs mx-auto'>
      <div className='bg-white mt-7 px-1 py-1 rounded-sm flex justify-between items-center'>
        <input type="text" placeholder='add task' className='border px-1 py-1 w-full mr-1 rounded-sm ring-slate-300 focus:outline-none' />
        <button className=' bg-green-600 text-white px-3 py-1 rounded-sm'>Add</button>
      </div>
    </div>
  )
}

export default AddTask