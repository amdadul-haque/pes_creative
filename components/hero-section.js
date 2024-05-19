'use client'
import React from 'react'
import { motion } from 'framer-motion'
import AnimatedHeader from './animated-header'

const HeroSection = () => {
  return (
    <div className='bg-gradient-to-b from-[#000] to to-[#111] '>
      <section className='section relative flex items-center justify-center sfpro-medium bg-gradient-to-b from-[#222] to to-[#000]'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          <div className='flex flex-col justify-center'>
            {/* <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
            >
              <h2 className='section-header'> tempur material</h2>
            </motion.div> */}
            <AnimatedHeader>
              tempur material
            </AnimatedHeader>
          </div>
        </div>
      </section>
      <motion.section className='section xl:h-[1000px] flex items-center bg-earth relative'>
        <motion.div className='h-full flex items-center justify-center absolute top-0 bottom-0 right-0 w-full z-[10]'
          initial={{ background: 'rgba(0,0,0,0.8)' }}
          whileInView={{ background: 'rgba(0,0,0,0)' }}
          transition={{ duration: .9, delay: 0.3 }}
          viewport={{ amount: 0.6 }}
        >
          <AnimatedHeader>
            born from space <br /> and perfected for <br /> sleep
          </AnimatedHeader>
        </motion.div>
      </motion.section >

      <section className='section xl:h-[1000px] flex items-center'>
        <div className='container-wrapper h-full flex items-center justify-center '>
          <AnimatedHeader>
            but what's the <br /> <span className='text-[#7155eb] text-gradient'> difference</span>
          </AnimatedHeader>
        </div>
      </section>
      <section className='section xl:h-[1000px] flex items-center bg-video'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          {/* <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <h2 className='section-header'> </h2>
          </motion.div> */}
          <AnimatedHeader>
            better pressure reliefe &
          </AnimatedHeader>
        </div>
      </section>
      <section className='section xl:h-[1000px] flex items-center bg-motion'>
        <div className='container-wrapper h-full flex items-center justify-center'>
          
          <AnimatedHeader>
            better motiin absorbtion
          </AnimatedHeader>
        </div>
      </section>
    </div >
  )
}

export default HeroSection