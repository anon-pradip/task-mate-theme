import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'

const App = () => {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
  const [task, setTask] = useState({});
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div className={`bg-slate-200 min-h-screen ${theme === "dark" && "bg-slate-900 text-gray-100"}`}>
      <div className='max-w-3xl mx-auto'>
        <Header theme={theme} setTheme={setTheme} />
        <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
        <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}

export default App