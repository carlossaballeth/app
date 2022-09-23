import './header.css'
import { Logo } from '../logo/logo'
import { navItems } from './header.consts'
import { TiThMenu } from 'react-icons/ti'
import { Toggle } from '../toggle/toggle'

export const Header = () => {
  return (
    <div className='header'>
      <nav className='nav'>
        <TiThMenu className='mobile-menu' size={20} />
        <Logo />
        <div className='nav__menu'>
          <ul className='nav__list'>
            {
              navItems.map((item, index) => (
                <li className='nav__item' key={index}>
                  <a href={item.href} className='nav__link'> {item.label} </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='nav__right-buttons'>
          <div className='nav__social'>
            <Toggle/>
          </div>
        </div>
      </nav>
    </div>
  )
}