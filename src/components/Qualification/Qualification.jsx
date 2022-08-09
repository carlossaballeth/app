export const Qualification = () => {
  return (
    <section className='qualification section' id='qualification'>
      <h2 className='section__title'>Qualificaton</h2>
      <span className='section__subtitle'>My personal journey</span>
      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className='qualification__button button--flex qualification__active' data-target='#education'>
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>
          <div className='qualification__button button--flex' data-target='#work'>
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Work
          </div>
        </div>
        <div className='qualification__sections'>
          <div className='qualification__content qualification__active' data-content id='education'>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Electronic Engineer</h3>
                <span className='qualification__subtitle'>Colombia - Universidad Popular del Cesar</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2015
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Fullstack web development</h3>
                <span className='qualification__subtitle'>Argentina - Henry</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2020
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Electronic Engineer</h3>
                <span className='qualification__subtitle'>Colombia - Universidad Popular del Cesar</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2015
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>

              </div>
            </div>
          </div>

          <div className='qualification__content' data-content id='work'>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Trabajo 1</h3>
                <span className='qualification__subtitle'>Colombia - Universidad Popular del Cesar</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2015
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Trabajo 2</h3>
                <span className='qualification__subtitle'>Argentina - Henry</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2020
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Trabajo 3</h3>
                <span className='qualification__subtitle'>Colombia - Universidad Popular del Cesar</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2015
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}