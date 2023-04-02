import React, { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'

const App = () => {
  const [taskList, setTaskList] = useState([])
  const [task, setTask] = useState({});
  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='max-w-3xl mx-auto'>
        <Header />
        <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      </div>
    </div>
  )
}

export default App