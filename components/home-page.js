'use client'
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import HeroSection from './hero-section';
import MaterialSection from './material-section';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const initialColor1 = '#e0e0e0'; // Adjust this for your initial color
  const initialColor2 = '#f0f0f0'; // Adjust this for your second initial color
  const finalColor1 = '#333'; // Adjust this for your final color
  const finalColor2 = '#222'; // Adjust this for your second final color
  const documentHeight = document.documentElement.scrollHeight; // Get document height

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = scrollY / (documentHeight - window.innerHeight); // Calculate scroll progress (0 to 1)

  // Calculate color values based on scroll progress
  const color1 = `${initialColor1} + ((${finalColor1} - ${initialColor1}) * ${scrollProgress})`;
  const color2 = `${initialColor2} + ((${finalColor2} - ${initialColor2}) * ${scrollProgress})`;

  const gradient = `linear-gradient(to bottom, ${color1} 0%, ${color2} 100%)`;

  return (
    <motion.div
      // style={{
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      //   width: '100vw',
      //   height: '100vh', // Use '100vh' for full viewport height
      //   background: gradient,
      // }}
    >
      <HeroSection />
      <MaterialSection />
    </motion.div>
  );
};

export default HomePage;
