import './toggle.css'
import { useEffect, useState } from 'react'
import { RiSunFill as SunIcon, RiMoonFill as MoonIcon } from 'react-icons/ri'

export const Toggle = () => {
  const [isEnabled, setIsEnabled] = useState(true)

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState)
  }

  useEffect(() => {
    console.log('Change theme')
  }, [isEnabled])

  return (
    <label className='toggle-wrapper' htmlFor='toggle'>
      <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
        <div className="icons">
          <SunIcon className='light-icon'/>
          <MoonIcon className='dark-icon'/>
        </div>
        <input
          id='toggle'
          name='toggle'
          type='checkbox'
          checked={isEnabled}
          onChange={toggleState}
        />
      </div>
    </label>
  )
}