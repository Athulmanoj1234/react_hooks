import React from 'react'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import { AuthProvider } from './context2'

const page = () => {
  return (
    <div>
      <AuthProvider>
        <Dashboard />
        <Sidebar />
      </AuthProvider>
    </div>
  )
}

export default page
