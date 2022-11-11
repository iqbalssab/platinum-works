import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer, Header } from '../../components'
import Home from '../Home'

const MainApp = () => {
  return (
    <div>
        <div className='header-wrapper'>
            <Header />
        </div>
        <div className='content-wrapper'>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
        <div className='footer-wrapper'>
            <Footer />
        </div>
    </div>
  )
}

export default MainApp