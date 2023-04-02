import React from 'react'

const AddTask = ({ taskList, setTaskList, setTask, task }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) => (todo.id === task.id ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : todo))
      setTaskList(updatedTaskList)
      setTask({})
    } else {
      const date = new Date();
      const task = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, task])
      setTask({})
    }
  }

  return (
    <div className='max-w-xs mx-auto dark:text-black'>
      <form className='bg-white mt-7 px-1 py-1 rounded-sm flex justify-between items-center' onSubmit={handleSubmit}>
        <input type="text" name='task' placeholder='add task' className='border px-1 py-1 w-full mr-1 rounded-sm ring-slate-300 focus:outline-none' value={task.name || ""} onChange={(e) => setTask({ ...task, name: e.target.value })} />
        <button className=' bg-green-600 text-white px-3 py-1 rounded-sm' type='submit'>{task.id ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}

export default AddTask