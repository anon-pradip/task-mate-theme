import React from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'

const App = () => {
  return (
    <div className='bg-slate-200 min-h-screen'>
      <div className='max-w-3xl mx-auto'>
        <Header />
        <AddTask />
        <ShowTask />
      </div>
    </div>
  )
}

export default App