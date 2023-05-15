import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';

import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef()
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setform({...form, [name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //serviceID then templateID and Public Key

    emailjs.send('service_rikf2lp','template_6277rwe', {
      from_name: form.name,
      to_name: 'Alozie Miracle Patrick',
      from_email: form.email,
      to_email:'miracleoliver8@gmail.com',
      message: form.message
    },
    'WiKBubn0S7MQvAqJl'
    )
    .then(() => {
      setLoading(false)
      alert("Thank you. I will get back to you as soon as possible.")
      setform({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)

      console.log(error);
      alert("Try again, something went wrong.")
    })
  }

  //template_6277rwe

  //service_rikf2lp

  //WiKBubn0S7MQvAqJl

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gao-10 overflow-hidden mt-12' id='contact'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.7] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}> Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact. </h3>

        <form action="" ref={formRef} onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" value={form.name} name='name' onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' placeholder="what's your name?"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" value={form.email} name='email' onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' placeholder="what's your email?"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea row='7' type="text" value={form.message} name='message' onChange={handleChange}
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' placeholder="what do youn want to say?"
            />
          </label>
          <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shaow-md shadow-primary rounded-xl' type='submit'>
            {loading ? 'send...' : 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default Contact