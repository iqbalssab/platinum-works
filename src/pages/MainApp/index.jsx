import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from '../../components'
import Decoration from '../Decoration'
import Home from '../Home'

const MainApp = (path) => {


  return (
    <div>
        <div id='navigasi' className='header-wrapper absolute w-full'>
            <Navbar />
        </div>
        <div className='content-wrapper'>
            <Routes>
                <Route path='/' element={<Home />}  />
                <Route path='/decoration' element={<Decoration />}  />
            </Routes>
        </div>
        <div className='footer-wrapper'>
            <Footer />
        </div>
    </div>
  )
}

export default MainApp