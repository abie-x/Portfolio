'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Abhiram, a software developer who thrives on building scalable web
        applications that solve real-world problems. With 2+ years of experience
        in the MERN stack, I’ve navigated the tech world from co-founding a
        startup to diving deep into coding, design, and product management.{' '}
      </p>
      <br />
      <p>
        {' '}
        I’m passionate about building applications that are both practical and
        impactful. My journey in tech is guided by a commitment to excellence,
        always striving to deliver clean, efficient, and cutting-edge code that
        meets the needs of users. As a co-founder of Vybes Lifestyle, I’ve worn
        many hats—from coding and design to marketing and sales. This experience
        has shaped my approach to technology, blending entrepreneurial insight
        with a love for creating efficient, user-friendly solutions.
      </p>
      <br />
      <p>
        Beyond the Code Outside of work, I’m an avid reader with a taste for
        good coffee and craft beer. I find inspiration in books, caffeine, and
        the occasional late-night coding session.
      </p>
    </motion.section>
  );
}
