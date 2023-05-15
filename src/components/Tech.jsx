import React from 'react'
// import { BallCanvas } from './canvas'
import { technologies } from '../constants/constants'

const Technology = ({name, icon}) => {
  return (
    <div className='flex flex-col justify-center items-center my-2'>
      <img src={icon} alt={name} className='cursor-pointer mb-2' />
      <h2>{name}</h2>
    </div>
  )
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
      {technologies.map((technology) => (
        <div key={technology.name} className='w-20 h-28'>
          {/* <BallCanvas icon={technology.icon} /> */}
          <Technology {...technology} />
        </div>
      ))}
    </div>
  )
}

export default Tech