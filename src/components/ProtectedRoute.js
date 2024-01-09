import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children, isLogged}) {
  if(isLogged) {
   return children
  } else {
   return <Navigate to={"/sign-in"} replace/>
  }
}
