import React from 'react'
import { Link } from 'react-router-dom'
import { links } from './Mylinks'
const NavLinks = (props) => {
  return (
    <>
        {
            links.map((link, i) => (
                <>
                    <div key={i} className='px-3 text-left md:cursor-pointer hover:text-primary group'>
                        <h1 className='py-7 flex justify-between items-center '>
                            <a
                            onClick={props.onClick} 
                            href={link.link}>
                                {link.name}
                            </a>
                        </h1>
                        {link.submenu && (
                        <div>
                            <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute -mt-8 bg-white rotate-45'>
                                    </div>
                                </div>
                                <div className='bg-white -mt-9 p-3.5'>
                                    {
                                        link.sublinks.map((mysublinks, j) => (
                                            <div key={j} className='text-primary py-2.5 px-1'>
                                                {mysublinks.sublink.map((slink) => (
                                                    <Link 
                                                        to={slink.link} className='text-secondary my-2.5 hover:text-primary flex items-center'>
                                                        {slink.name}
                                                    </Link>

                                                ))}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                            )}
                    </div>
                        {/* Mobile menus */}
                        {/* <div>
                            {link.sublinks.map((slinks) => (
                                <div>
                                    <div>
                                        <div>
                                        {slinks.sublink.map(slink => (
                                            <li>
                                                <Link to={slink.link}>
                                                    {slink.name}
                                                </Link>
                                            </li>
                                        ))}

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    
                </>
            ))
        }
    </>
  )
}

export default NavLinks