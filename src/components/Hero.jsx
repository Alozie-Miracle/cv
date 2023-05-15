import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleQueryChange);

    return() => {
      mediaQuery.removeEventListener('change', handleQueryChange);
    }
  }, [])

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex mx-auto flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={isMobile ? `${styles.heroSubTextMobile} text-white` : `${styles.heroHeadText} text-white`}
          
          >Hi, I'm <span className='text-[#915eff] ml-2'> Alozie Miracle Patrick</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop 3D visuals, user <br className='sm:block hidden'/> interfaces and  web  applications
          </p>
        </div>

      </div>
        <ComputersCanvas />

        <div className={isMobile ? 'absolute bottom-24 w-full flex justify-center items-center' : 'absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'}>
          <a href="#about">
            <div className={isMobile ? 'w-[30px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-center p-2' : 
            'w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2'}>
              <motion.div 
              animate = {{
                y: isMobile ? [0,20,0] : [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: isFinite,
                repeatType: 'loop'
              }}

              className={isMobile ? 'w-2 h-2 rounded-full bg-white ' : 'w-3 h-3 rounded-full bg-secondary mb-1'}
              />
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero