import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainApp from '../pages/MainApp'


const Routing = () => {
  return (
    <Routes>
        <Route path='*' element={<MainApp />} />
        {/* <Route path='/decoration' element={<Decoration />} /> */}
        {/* <Route path='/transport' element={<Transport />} /> */}
    </Routes>
  )
}

export default Routing