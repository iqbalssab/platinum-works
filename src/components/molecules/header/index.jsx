import React from 'react'
import { LogoHead } from '../../../assets'

const Header = () => {
  
    const changeBurger = () =>{
        const hamburger = document.querySelector('#hamburger')
        const navMenu = document.querySelector('#nav-menu')

        
            hamburger.classList.toggle('hamburger-active')
            navMenu.classList.toggle('hidden')
    }

    // Navbar Fixed
        window.onscroll = () => {
            const header = document.querySelector('header')
            const fixedNav = header.offsetTop
            const judul = document.querySelector('#judul')

            if(window.pageYOffset > fixedNav) {
                header.classList.add('navbar-fixed')
                judul.classList.remove('hidden')
            } else {
                header.classList.remove('navbar-fixed')
                judul.classList.add('hidden')
            }
        }

  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition duration-300 ease-out'>
    <div className='container'>
        <div className="flex items-center justify-between relative border-b-2">
            <div className='px-4'>
                <img src={LogoHead} style={{width: 32, height:32 }} className='inline-block' alt='logo'/>
                <a href="#Home" id='judul' className='hidden font-bold text-xl inline text-dark ml-2 py-6'>Platinum Corp</a>
            </div>
            <div className="flex items-center px-4">
                        <button onClick={changeBurger} id="hamburger" name="hamburger" className="block absolute right-4 ">
                            <span className="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
                            <span className="hamburger-line transition duration-500 ease-in-out"></span>
                            <span className="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white/50 backdrop-blur-sm shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full ">
                            <ul className="block">
                                <li className="group">
                                    <a href="#home" className="text-base text-dark py-2 px-8 flex hover:text-primary">Home</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base text-dark py-2 px-8 flex hover:text-primary">Decoration</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base text-dark py-2 px-8 flex hover:text-primary">Transport</a>
                                </li>
                                <li className="group">
                                    <a href="#clients" className="text-base text-dark py-2 px-8 flex hover:text-primary">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="text-base text-dark py-2 px-8 flex hover:text-primary">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
        </div>
    </div>
    </header>
  )
}

export default Header