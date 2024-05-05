import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const {user} = useSelector(state=>state.login)
  // const user=state=> state.login.user

  return user.text ? <Outlet/> :<Navigate to="/"/>
   
}

export default PrivateRouter