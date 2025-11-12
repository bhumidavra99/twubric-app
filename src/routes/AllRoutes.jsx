import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

const AllRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/" element={<Dashboard />} />

    </Routes>
    </Suspense>

  )
}

export default AllRoutes
