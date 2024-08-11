import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { MdDeveloperMode, MdBusinessCenter } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import qkart from '../public/qkart.png';
import accident from '../public/accident.png';
import qtrip from '../public/qtrip.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import jyovote from '../public/jyovote.jpg';
import microstore from '../public/microstore.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated from Full stack developer bootcamp',
    location: '',
    description:
      'Successfully completed immersive full stack development track in MERN stack by crio. Experienced hands on coding on html, css, javascript and MERN stack.',
    icon: React.createElement(LuGraduationCap),
    date: '2021 - 2022',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Bengaluru, Karnataka',
    description:
      'Interned at a fintech startup named Converj. Built the initial version of vendor onboarding app in React native.',
    icon: React.createElement(MdDeveloperMode),
    date: '2022',
  },
  {
    title: 'Co-Founder',
    location: 'Bengaluru, Karnataka',
    description:
      'Founded travel gear rental platform called Vybes Lifestyle, while in college. Formulated the business plan, launched the mobile app and eventually scaled the project to 275+ customers across south india.',
    icon: React.createElement(MdBusinessCenter),
    date: '2022 - 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Q-Kart',
    description:
      'Fully featured e-commerce web application with advanced functionalities like search and filter built using the MERN stack.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    imageUrl: qkart,
  },
  {
    title: 'ResQ',
    description:
      'Developed an Accident Detection System as part of our final year project, utilizing OpenCV, TensorFlow and ML for real-time accident recognition.',
    tags: ['OpenCV', 'Tensorflow', 'Node.js', 'Express.js', 'Flutter'],
    imageUrl: accident,
  },
  {
    title: 'Microstore',
    description:
      'Cloud-based multi-service app built using Docker and Kubernetes, with a Server-Side Rendered React app handling data from microservices.',
    tags: [
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Redis',
      'Docker',
      'Kubernetes',
    ],
    imageUrl: microstore,
  },
  {
    title: 'Q-Trip',
    description:
      'An intuitive travel booking app built with HTML, CSS, and JavaScript, offering a user-friendly interface for searching and booking travel options.',
    tags: ['html', 'css', 'javascript', 'web hosting'],
    imageUrl: qtrip,
  },
  {
    title: 'JyoVote',
    description:
      'An online voting system for our college, built with the MERN stack. Features include candidate registration, secure voting, and automated result publication.',
    tags: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
    imageUrl: jyovote,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
  'Docker',
  'Kubernetes',
  'Figma',
] as const;
