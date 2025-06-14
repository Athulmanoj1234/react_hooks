"use client"
import React, { useContext } from 'react'
import { AuthContext } from '../context2'

const Sidebar = () => {
    const { user } = useContext(AuthContext)

  return (
    <div>
      sidebar
      <h1>hello {user?.password}</h1>
    </div>
  )
}

export default Sidebar
