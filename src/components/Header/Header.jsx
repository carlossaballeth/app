import { useEffect } from 'react'
import Apps from '@iconscout/react-unicons/icons/uil-apps'
import Close from '@iconscout/react-unicons/icons/uil-times'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Home from '@iconscout/react-unicons/icons/uil-estate'
import About from '@iconscout/react-unicons/icons/uil-user'
import Skills from '@iconscout/react-unicons/icons/uil-file-alt'
import Services from '@iconscout/react-unicons/icons/uil-briefcase-alt'
import Portfolio from '@iconscout/react-unicons/icons/uil-scenery'
import Contact from '@iconscout/react-unicons/icons/uil-message'
import './Header.css'

export const Header = () => {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu')
    const navToggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')
    const navLink = document.querySelectorAll('.nav__link')

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
      })
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
      })
    }

    const linkAction = () => {
      const navMenu = document.getElementById('nav-menu')
      navMenu.classList.remove('show-menu')
    }

    navLink.forEach(a => a.addEventListener('click', linkAction))
  }, [])

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>@carlossaballeth</a>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link'>
                <Home size={20} className='nav__icon' /> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <About size={20} className='nav__icon' /> About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <Skills size={20} className='nav__icon' /> Skills
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <Services size={20} className='nav__icon' /> Services
              </a>
            </li>
            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <Portfolio size={20} className='nav__icon' /> Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <Contact size={20} className='nav__icon' /> Contact
              </a>
            </li>
          </ul>
          <Close size={28} className='nav__close' id='nav-close' />
        </div>
        <div className='nav__btns'>
          <Moon size={18} className='change-theme' id='theme-button' />
          <div className='nav__toggle' id='nav-toggle'>
            <Apps size={18} />
          </div>
        </div>
      </nav>
    </header>
  )
}