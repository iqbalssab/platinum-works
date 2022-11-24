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
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 transition duration-300 ease-out">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                    <img src={LogoHead} className='inline w-16 h-16' alt='logo' />
                        <a href="#hero" id='judul' className="font-bold text-lg inline text-primary py-6">Platinum Works</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" className="block absolute right-4 lg:hidden" onClick={changeBurger}>
                            <span className="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
                            <span className="hamburger-line transition duration-500 ease-in-out"></span>
                            <span className="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#hero" className="text-base text-dark py-2 px-8 flex hover:text-primary">Beranda</a>
                                </li>
                                <li className="group">
                                    <a href="#unit" className="text-base text-dark py-2 px-8 flex hover:text-primary">Unit Bisnis</a>
                                    <ul>
                                        <li className='hidden group-hover:block'>
                                            Platinum Decoration
                                        </li>
                                        <li className='hidden'>
                                            Platinum Transport
                                        </li>
                                    </ul>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base text-dark py-2 px-8 flex hover:text-primary">Tentang Kami</a>
                                </li>
                                <li className="group">
                                    <a href="#clients" className="text-base text-dark py-2 px-8 flex hover:text-primary">Testimoni</a>
                                </li>
                                <li className="group">
                                    <a href="#blog" className="text-base text-dark py-2 px-8 flex hover:text-primary">Contact</a>
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