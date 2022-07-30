import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import portfolio1 from '../../assets/img/portfolio1.jpg'
import portfolio2 from '../../assets/img/portfolio2.jpg'
import portfolio3 from '../../assets/img/portfolio3.jpg'

export const Portfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}></span>`
    }
  }
  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Most recent work</span>
      <div className='portfolio__container container'>
        <Swiper
          cssMode={true}
          loop={true}
          navigation={true}
          pagination={pagination}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className='portfolio__content grid'>
              <img src={portfolio1} alt='' className='portfolio__img' />
              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Modern website</h3>
                <p className='portfolio__description'>Website adaptable to all devices,
                  with ui components and animated interactions</p>
                <a href='#' className='button button--flex button--small portfolio__button'>
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__content grid'>
              <img src={portfolio2} alt='' className='portfolio__img' />
              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Brand design</h3>
                <p className='portfolio__description'>Website adaptable to all devices,
                  with ui components and animated interactions</p>
                <a href='#' className='button button--flex button--small portfolio__button'>
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='portfolio__content grid'>
              <img src={portfolio3} alt='' className='portfolio__img' />
              <div className='portfolio__data'>
                <h3 className='portfolio__title'>Online store</h3>
                <p className='portfolio__description'>Website adaptable to all devices,
                  with ui components and animated interactions</p>
                <a href='#' className='button button--flex button--small portfolio__button'>
                  Demo
                  <i className='uil uil-arrow-right button__icon'></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}