import './Header.css'
import { useEffect, useState } from 'react'
import Menu from '@iconscout/react-unicons/icons/uil-apps'
import Close from '@iconscout/react-unicons/icons/uil-multiply'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import { darkTheme, navItems, selectedIcon, selectedTheme } from './Header.consts'

export const Header = () => {
  const [currentIconTheme, setCurrentIconTheme] = useState(selectedIcon)
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => document.body.classList.contains(darkTheme) ? 'sun' : 'moon'

  useEffect(() => {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    setCurrentIconTheme(getCurrentIcon())
    const homeLink = document.getElementsByClassName('nav__link')[0]
    homeLink.classList.add('active-link')
  }, [])

  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('show-menu')
  }

  function toggleTheme() {
    document.body.classList.toggle(darkTheme)
    setCurrentIconTheme(getCurrentIcon())
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  }

  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href='#' className='nav__logo'>
          @carlossaballeth
        </a>
        <div className='nav__menu' id='nav-menu'>
          <ul className='nav__list grid'>
            {
              navItems.map((navItem, index) => (
                <li className='nav__item' key={index}>
                  <a
                    href={navItem.href}
                    className='nav__link'
                    onClick={toggleMenu}
                  >
                    {navItem.icon} {navItem.text}
                  </a>
                </li>
              ))
            }
          </ul>
          <Close className='nav__close' id='nav-close' onClick={toggleMenu} />
        </div>
        <div className='nav__btns'>
          {
            currentIconTheme === 'sun'
              ? <Sun className='change-theme' onClick={toggleTheme} />
              : <Moon className='change-theme' onClick={toggleTheme} />
          }
          <Menu className='nav__toggle' id='nav-toggle' onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  )
}