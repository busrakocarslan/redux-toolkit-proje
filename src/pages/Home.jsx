import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import { useDispatch } from 'react-redux'
import { getNews } from '../features/apiSlice'

const Home = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getNews())
   
  }, [])
  


  return (
    <div>
      <Navbar/>
      HOME
    </div>
  )
}

export default Home