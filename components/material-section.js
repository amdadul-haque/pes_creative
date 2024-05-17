'use client'
import React from 'react'
import { motion } from 'framer-motion'

const MaterialSection = () => {
  return (
    <div className='bg-gradient-to-b from-[#040816] to to-[#1C0B5B] '>
      <section className='section relative flex items-center justify-center sfpro-medium'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          <div className='flex flex-col justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h2 className='section-header mb-10'> a material</h2>
              <h2 className='section-header'> thats neither liquid <br /> nor solid</h2>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='absolute top-0 translate-y-[-150%] left-[10%]'
          animate={{
            scale: [0.4, 0.7, 0.4],
            // y: [-50, -50, -50]
          }}
          transition={{ duration: 8, repeat: Infinity }}>
          <img src="./images/dot.png" alt="blob" className='' />
        </motion.div>


        <motion.div
          className='absolute top-[18%] left-[25%]'
          animate={{
            scale: [0.1, .5, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity }}>
          <img src="./images/dot.png" alt="blob" className='' />
        </motion.div>

        <motion.div
          className='absolute top-[68%] left-[35%]'
          animate={{
            scale: [0.1, .5, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity }}>
          <img src="./images/dot.png" alt="blob" className='' />
        </motion.div>

        <motion.div
          className='absolute top-[68%] right-[35%]'
          animate={{
            scale: [0.3, .8, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity }}>
          <img src="./images/dot.png" alt="blob" className='' />
        </motion.div>

        <motion.div
          className='absolute top-[8%] left-[45%]'
          animate={{
            scale: [0.5, 1, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}>
          <img src="./images/dot.png" alt="blob" className='' />
        </motion.div>

        <motion.div
          className='absolute top-[5%] right-[2%]'
          animate={{
            scale: [0.4, 0.7, 0.4],
            // rotate: [0, 0, 270, 270, 0],
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 8, repeat: Infinity }}>
          <img src="./images/dot.png" alt="blob" className='' />
        </motion.div>


        <img src="./images/blob.png" alt="blob" className='absolute left-0 translate-x-[-50%] top-[40%] w-32 md:w-[180px] lg:w-[200px] xl:w-[300px]' />
        <img src="./images/blob.png" alt="blob" className='absolute right-0 translate-x-[50%] top-[30%] w-32 md:w-[180px] lg:w-[200px] xl:w-[300px]' />
      </section>
      <section className='section xl:h-[1000px] flex items-center'>
        <div className='container-wrapper h-full flex items-center justify-center '>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-header '> that adapts like <br /> nothing else on <br /> the earth</h2>
          </motion.div>
        </div>
      </section>
      <section className='section xl:h-[1000px] flex items-center'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-header'> what's the difference <br />the difference is <br />tempure &reg;</h2>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MaterialSection