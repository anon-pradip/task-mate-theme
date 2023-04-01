import React from 'react'
import ProductsList from './components/ProductsList'

const App = () => {
  return (
    <div className=' px-4'>
      <h1 className=' text-4xl text-center font-bold'>Products List</h1>
      <ProductsList />
    </div>
  )
}

export default App