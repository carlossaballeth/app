import Home from '@iconscout/react-unicons/icons/uil-estate'
import About from '@iconscout/react-unicons/icons/uil-user'
import Skills from '@iconscout/react-unicons/icons/uil-file-alt'
import Qualification from '@iconscout/react-unicons/icons/uil-briefcase-alt'

export const navItems = [
  {
    text: 'Home',
    icon: <Home className='nav__icon' />,
    href: '#home'
  },
  {
    text: 'About',
    icon: <About className='nav__icon' />,
    href: '#about'
  },
  {
    text: 'Skills',
    icon: <Skills className='nav__icon' />,
    href: '#skills'
  },
  {
    text: 'Qualification',
    icon: <Qualification className='nav__icon' />,
    href: '#qualification'
  }
]

export const darkTheme = 'dark-theme'
export const selectedTheme = localStorage.getItem('selected-theme')
export const selectedIcon = localStorage.getItem('selected-icon')