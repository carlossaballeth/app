import './Header.css'
import { useEffect, useState } from 'react'
import Apps from '@iconscout/react-unicons/icons/uil-apps'
import Close from '@iconscout/react-unicons/icons/uil-times'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Home from '@iconscout/react-unicons/icons/uil-estate'
import { darkTheme, navItems, selectedIcon, selectedTheme } from './Header.consts'

export const Header = () => {
  const [currentIconTheme, setCurrentIconTheme] = useState(selectedIcon)
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'uil-sun' : 'uil-moon'

  useEffect(() => {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    setCurrentIconTheme(getCurrentIcon())

    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
      const scrollY = window.pageYOffset

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link')
        } else {
          document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link')
        }
      })
    }

    window.addEventListener('scroll', scrollActive)
  }, [])

  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('show-menu')
  }

  function scrollHeader() {
    const header = document.getElementById('header')
    header.classList[this.scrollY >= 80 ? 'add' : 'remove']('scroll-header')
  }

  function toggleTheme() {
    document.body.classList.toggle(darkTheme)
    setCurrentIconTheme(getCurrentIcon())
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  }

  window.addEventListener('scroll', scrollHeader)

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>@carlossaballeth</a>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link' onClick={toggleMenu}>
                <Home size={20} className='nav__icon' /> Home
              </a>
            </li>
            {
              navItems.map((navItem, index) => (
                <li className='nav__item' key={index}>
                  <a href={navItem.href} className='nav__link' onClick={toggleMenu}>
                    {navItem.icon} {navItem.text}
                  </a>
                </li>
              ))
            }
          </ul>
          <Close size={28} className='nav__close' id='nav-close' onClick={toggleMenu} />
        </div>
        <div className='nav__btns'>
          {
            currentIconTheme === 'uil-sun'
              ? <Sun size={18} className='change-theme' onClick={toggleTheme} />
              : <Moon size={18} className='change-theme' onClick={toggleTheme} />
          }

          <div className='nav__toggle' id='nav-toggle' onClick={toggleMenu}>
            <Apps size={18} />
          </div>
        </div>
      </nav>
    </header>
  )
}