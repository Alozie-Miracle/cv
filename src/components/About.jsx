import React from 'react'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/constants'
import {fadeIn, textVariant } from '../utils/motion'
import ServiceCard from './ServiceCard'


const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>
      <span id='about' className='hash-span' />
      
      <motion.p 
      variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-30'
      
      >
        Hi there! my name is Miracle. I'm a skilled software developer and I've been coding for over 3 years now with experience in javascript. I have experties in frameworks like React, Node.js, Three.js. As a Full Stack developer I've worked both with startups and large corporations to help build & scale their companies. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real world problems. I'm a detailed oriented student with knowledge of methods design, process development and prototyping. Aiming to leverage my abilities to successfully fill the vacancy at your company. Frequently praised as deligent by my pairs, I can be relied  upon to help your company archieve its goals, let's work together to bring your ideas to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default About
