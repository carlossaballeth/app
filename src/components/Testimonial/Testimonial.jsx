import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import Star from '@iconscout/react-unicons/icons/uil-star'

import testimonial1 from '../../assets/img/testimonial1.jpg'
import testimonial2 from '../../assets/img/testimonial2.jpg'
import testimonial3 from '../../assets/img/testimonial3.jpg'

export const Testimonial = () => {
  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((key) => <Star size={15} key={key} className='testimonial__icon-start'/>)
  }
  return (
    <section className='testimonial section'>
      <h2 className='section__title'>Testimonial</h2>
      <span className='section__subtitle'>My client saying</span>
      <div className='testimonial__container container'>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={48}
          pagination={{
            type: 'bullets',
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Pagination]}
          breakpoints={{
            568: {
              slidesPerView: 2
            }
          }}
        >
          <SwiperSlide>
            <div className='testimonial__content'>
              <div className='testimonial__data'>
                <div className='testimonial__header'>
                  <img src={testimonial1} alt='' className='testimonial__img' />
                  <div>
                    <h3 className='testimonial__name'>Sara Smith</h3>
                    <span className='testimonial__client'>Client</span>
                  </div>
                </div>

                <div>
                  {renderStars()}
                </div>
              </div>
              <p className='testimonial__description'>asdasd asdfsdfsdf sdfsdf sdfsdf sdf sdfsdf
                sdf sdfsdfsdfsdf sdfsdfsdfsdf sdfsdf </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='testimonial__content'>
              <div className='testimonial__data'>
                <div className='testimonial__header'>
                  <img src={testimonial2} alt='' className='testimonial__img' />
                  <div>
                    <h3 className='testimonial__name'>Sara Smith</h3>
                    <span className='testimonial__client'>Client</span>
                  </div>
                </div>

                <div>
                  {renderStars()}
                </div>
              </div>

              <p className='testimonial__description'>asdasd asdfsdfsdf sdfsdf sdfsdf sdf sdfsdf
                sdf sdfsdfsdfsdf sdfsdfsdfsdf sdfsdf </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='testimonial__content'>
              <div className='testimonial__data'>
                <div className='testimonial__header'>
                  <img src={testimonial3} alt='' className='testimonial__img' />
                  <div>
                    <h3 className='testimonial__name'>Sara Smith</h3>
                    <span className='testimonial__client'>Client</span>
                  </div>
                </div>

                <div>
                  {renderStars()}
                </div>
              </div>

              <p className='testimonial__description'>asdasd asdfsdfsdf sdfsdf sdfsdf sdf sdfsdf
                sdf sdfsdfsdfsdf sdfsdfsdfsdf sdfsdf </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}