import { useEffect } from 'react'
import { Header } from '../components/Header/Header'
import { Home } from '../components/Home/Home'
import { About } from '../components/About/About'
import { Skills } from '../components/Skills/Skills'
import { Qualification } from '../components/Qualification/Qualification'
import { Services } from '../components/Services/Services'
import { Portfolio } from '../components/Portfolio/Portfolio'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/Footer/Footer'
import ArrowUp from '@iconscout/react-unicons/icons/uil-arrow-up'
import './App.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const App = () => {
  useEffect(() => {
    function scrollUp() {
      const scrollUp = document.getElementById('scroll-up')
      if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
      } else {
        scrollUp.classList.remove('show-scroll')
      }
    }
    window.addEventListener('scroll', scrollUp)
  }, [])

  const ScrollTop = () => {
    return (
      <a href='#home' className='scrollup' id='scroll-up'>
        <ArrowUp size={28} className='scrollup__icon' />
      </a>
    )
  }

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <div>---</div>
    </>
  )
}

export default App