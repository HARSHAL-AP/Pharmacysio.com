
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const PrivetRoute = ({children}) => {
  const isAuth=useSelector(store=>store.Authreducer.isAuth)
  
  if(!isAuth){
    return <Navigate to="/login"/>
  }

  return children
}