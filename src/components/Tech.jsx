import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants/constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div key={technology.name} className='w-20 h-28'>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech