'use client'
import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-b from-[#000] to to-[#111] '>
      <section className='section relative flex items-center justify-center sfpro-medium'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          <div className='flex flex-col justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h2 className='section-header'> tempur material</h2>
            </motion.div>
          </div>
        </div>
      </section>
      <section className='section xl:h-[1000px] flex items-center bg-earth'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-header'> born from space <br /> and perfected for <br /> sleep</h2>
          </motion.div>
        </div>
      </section>

      <section className='section xl:h-[1000px] flex items-center'>
        <div className='container-wrapper h-full flex items-center justify-center '>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-header '> but what's the <br /> <span className='text-[#7155eb]'> difference</span></h2>
          </motion.div>
        </div>
      </section>
      <section className='section xl:h-[1000px] flex items-center bg-video'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-header'> better pressure reliefe &</h2>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection