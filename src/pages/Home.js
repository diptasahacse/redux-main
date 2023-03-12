import React from 'react'

import { useSelector } from 'react-redux'
const Home = () => {

  const state = useSelector(state => state)
  console.log(state)
  return (
    <div>
      <div className='container'>
  Home
     
      </div>
    </div>
  )
}

export default Home