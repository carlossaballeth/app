import { useState } from 'react'
import Frontend from '@iconscout/react-unicons/icons/uil-brackets-curly'
import Backend from '@iconscout/react-unicons/icons/uil-server-network'
import AngleDown from '@iconscout/react-unicons/icons/uil-angle-down'
import { frontendSkills, backendSkills } from './Skills.consts'

export const Skills = () => {
  const [open, setOpen] = useState({
    frontend: true,
    backend: false
  })

  const handleOpen = () => {
    setOpen({
      frontend: !open.frontend,
      backend: !open.backend
    })
  }

  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className='skills__container container grid'>
        <div>
          <div className={`skills__content ${open.frontend ? 'skills__open' : 'skills__close'}`} onClick={() => handleOpen()}>
            <div className='skills__header'>
              <Frontend size={32} className='skills__icon' />
              <div>
                <h1 className='skills__titles'>Frontend developer</h1>
                <span className='skills__subtitle'>More than 4 years</span>
              </div>
              <AngleDown size={32} className='skills__arrow' />
            </div>
            <div className='skills__list grid'>
              {
                frontendSkills.map((skill, index) => (
                  <div className='skills__data' key={index}>
                    <div className='skills__titles'>
                      <h3 className='skills__name'>{skill.name}</h3>
                      <span className='skills__number'>{skill.number}%</span>
                    </div>
                    <div className='skills__bar'>
                      <span className={`skills__percentage ${skill.percentageClass}`}></span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div>
          <div className={`skills__content ${open.backend ? 'skills__open' : 'skills__close'}`} onClick={() => handleOpen()}>
            <div className='skills__header'>
              <Backend size={32} className='skills__icon' />
              <div>
                <h1 className='skills__titles'>Backend developer</h1>
                <span className='skills__subtitle'>More than 2 years</span>
              </div>
              <AngleDown size={32} className='skills__arrow' />
            </div>
            <div className='skills__list grid'>
              {
                backendSkills.map((skill, index) => (
                  <div className='skills__data' key={index}>
                    <div className='skills__titles'>
                      <h3 className='skills__name'>{skill.name}</h3>
                      <span className='skills__number'>{skill.number}%</span>
                    </div>
                    <div className='skills__bar'>
                      <span className={`skills__percentage ${skill.percentageClass}`}></span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}