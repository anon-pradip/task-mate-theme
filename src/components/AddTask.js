import React from 'react'

const AddTask = ({ taskList, setTaskList, setTask, task }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const task = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList, task])
    e.target.task.value = ""
  }

  return (
    <div className='max-w-xs mx-auto'>
      <form className='bg-white mt-7 px-1 py-1 rounded-sm flex justify-between items-center' onSubmit={handleSubmit}>
        <input type="text" name='task' placeholder='add task' className='border px-1 py-1 w-full mr-1 rounded-sm ring-slate-300 focus:outline-none' />
        <button className=' bg-green-600 text-white px-3 py-1 rounded-sm' type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddTask