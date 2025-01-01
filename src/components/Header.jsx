import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from '../assets/images/logot.svg'
import menu from '../assets/images/menu.svg'
import close from '../assets/images/close.svg'

import { navLinks } from '../constants'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const activeNavLink = window.location.pathname
  const home = activeNavLink === '/' ? true : false

  window.onscroll = () => {
    var top = window.scrollY;
    if (top > 100) {
        document.querySelector('header').classList.add('headerScroll')
  } else {
        document.querySelector('header').classList.remove('headerScroll')
    }
  }

  return (
    <header className={`w-full h-[72px] sticky top-0 py-2 px-2 md:px-6 flex items-center justify-between z-[9999] transition-all duration-300 ease-in-out ${home ? 'bg-transparent' : 'bg-white'}`}>
      <div className='w-[210px]'>
        <Link to='/' onClick={() => window.scroll(0,0)}>
          <img src={logo} alt='Gentle Hands Logo' className='w-full h-full object-contain'/>          
        </Link>
      </div>

      <div className='md:hidden'>
        <div className='w-[24px] h-[24px]'>
          <img src={toggle ? close : menu} alt='Mobile Navbar Open' className='w-full h-full object-contain' onClick={() => setToggle(prev => !prev)} />
        </div>

        <div className={`${toggle ? 'flex' : 'hidden'} fixed top-0 right-0 flex-col bg-logo1 h-full min-h-[100vh] w-2/3 p-4 items-center`}>
          <div className='w-full flex justify-end pr-4 pt-2'>
            <img src={close} alt='Mobile Navbar Close' onClick={() => setToggle(prev => !prev)}/>
          </div>

          <nav className='h-full flex items-center'>
            <ul className='w-full flex flex-col items-center gap-8'>
              {navLinks.map((navLink) => (
                <li key={navLink.title}>
                  <Link to={navLink.link} className={`${navLink.link === activeNavLink ? 'text-add' : ''} text-white text-[22px] p-2 px-4 transition-all duration-200`}>
                    {navLink.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className='hidden md:flex items-center'>
        <nav className='flex items-center'>
          <ul className='flex items-center'>
            {navLinks.map((navLink) => (
              <li key={navLink.title}>
                <Link to={navLink.link} className={`${navLink.link === activeNavLink ? 'text-add' : ''} hover:text-add text-[18px] px-4 transition-all duration-200`}>
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>

    </header>
  )
}
