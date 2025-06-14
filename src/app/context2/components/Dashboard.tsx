"use client"
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context2'

const Dashboard = () => {
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        setUser({ ...user, name: "athul", password: "simple" });
    }, []);

  return (
    <div>
      Dashboard
      <h1>hello {user?.name}</h1>
    </div>
  )
}

export default Dashboard
