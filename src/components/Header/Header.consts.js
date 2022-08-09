import About from '@iconscout/react-unicons/icons/uil-user'
import Skills from '@iconscout/react-unicons/icons/uil-file-alt'
import Services from '@iconscout/react-unicons/icons/uil-briefcase-alt'
// import Portfolio from '@iconscout/react-unicons/icons/uil-scenery'
// import Contact from '@iconscout/react-unicons/icons/uil-message'

export const navItems = [
  {
    text: 'About',
    icon: <About size={20} className='nav__icon' />,
    href: '#about'
  },
  {
    text: 'Skills',
    icon: <Skills size={20} className='nav__icon' />,
    href: '#skills'
  },
  {
    text: 'Qualification',
    icon: <Services size={20} className='nav__icon' />,
    href: '#qualification'
  }
  // {
  //   text: 'Portfolio',
  //   icon: <Portfolio size={20} className='nav__icon' />,
  //   href: '#portfolio'
  // },
  // {
  //   text: 'Contact',
  //   icon: <Contact size={20} className='nav__icon' />,
  //   href: '#contact'
  // }
]

export const darkTheme = 'dark-theme'
export const selectedTheme = localStorage.getItem('selected-theme')
export const selectedIcon = localStorage.getItem('selected-icon')