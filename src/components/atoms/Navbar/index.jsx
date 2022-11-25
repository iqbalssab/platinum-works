import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { LogoHead } from '../../../assets'
import Button from '../Button'
import NavLinks from './NavLinks'

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <nav className='bg-transparent sticky'>
        <div className='flex items-center font-medium justify-around'>
            <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
                <img src={LogoHead} className='w-10 h-10 md:cursor-pointer' alt='logo' />
                <div className='text-3xl md:hidden' onClick={()=>setOpen(!open)}>
                    <ion-icon name={`${ open ? 'close' : 'menu' }`}></ion-icon>
                </div>
            </div>
            <ul className='md:flex hidden uppercase items-center gap-8 font-[poppins]'>
                <li>
                    <Link to='/' className='py-7 px-3 inline-block hover:text-primary'>
                        Home
                    </Link>
                </li>
                <NavLinks />
            </ul>
            <div className='md:block hidden'>
                <Button />
            </div>
            {/* Mobile Nav */}
            <ul className={`
                md:hidden bg-white fixed w-full h-full overflow-visible bottom-0 py-24 pl-4 duration-500 ${ open ? 'left-0 ' : 'left-[-100%]' }
            `}>
                <li>
                    <Link to='/' className='py-7 px-3 inline-block' onClick={()=>setOpen(!open)}>
                        Home
                    </Link>
                </li>
                <NavLinks onClick={()=>setOpen(!open)}/>
                <div className='py-5'>
                    <Button />
                </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar