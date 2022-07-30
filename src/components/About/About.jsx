import Download from '@iconscout/react-unicons/icons/uil-download-alt'
import aboutImg from '../../assets/img/about.jpg'

export const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My introduction</span>
      <div className='about__container container grid'>
        <img src={aboutImg} alt='' className='about__img' />
          <div className='about__data'>
            <p className='about__description'>
              Web developer, with extensive knowledge and years of experience, working in
              web technologies and Ui / Ux design, delivering quality work.
            </p>
            <div className='about__info'>
              <div>
                <span className='about__info-title'>08+</span>
                <span className='about__info-name'>Years <br /> experience</span>
              </div>
              <div>
                <span className='about__info-title'>20+</span>
                <span className='about__info-name'>Completed <br /> project</span>
              </div>
              <div>
                <span className='about__info-title'>05+</span>
                <span className='about__info-name'>Companies <br /> worked</span>
              </div>
            </div>

            <div className='about__buttons'>
              <a download='' href='assets/pdf/Alexa-Cv.pdf' className='button button--flex'>
                Download CV <Download size={20} className='button__icon' />
              </a>
            </div>
          </div>
      </div>
    </section>
  )
}