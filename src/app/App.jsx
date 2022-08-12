import { Header } from '../components/Header/Header'
import { Home } from '../components/Home/Home'
import { About } from '../components/About/About'
import { Skills } from '../components/Skills/Skills'
import { Qualification } from '../components/Qualification/Qualification'
import { Footer } from '../components/Footer/Footer'
import ArrowUp from '@iconscout/react-unicons/icons/uil-arrow-up'
import './App.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const App = () => {
  const ScrollTop = () => {
    return (
      <a href='#home' className='scrollup' id='scroll-up'>
        <ArrowUp size={28} className='scrollup__icon' />
      </a>
    )
  }

  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    const showScroll = this.scrollY >= 560
    scrollUp.classList[showScroll ? 'add' : 'remove']('show-scroll')
  }

  function scrollHeader() {
    const header = document.getElementById('header')
    header.classList[this.scrollY >= 80 ? 'add' : 'remove']('scroll-header')
  }

  function scrollActive() {
    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute('id')
      const onSection = scrollY > sectionTop && scrollY <= sectionTop + sectionHeight

      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList[onSection ? 'add' : 'remove']('active-link')
    })
  }

  window.addEventListener('scroll', scrollUp)
  window.addEventListener('scroll', scrollHeader)
  window.addEventListener('scroll', scrollActive)

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App