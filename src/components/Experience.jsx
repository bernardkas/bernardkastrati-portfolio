import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/git.png';
import tailwind from '../assets/tailwind.png';
import csharp from '../assets/csharp.png';
import python from '../assets/python.png';
import sass from '../assets/sass.png';
import graphql from '../assets/graphql.png';
import nextjs from '../assets/nextjs.png';
import mysql from '../assets/mysql.png';
import typescript from '../assets/typescript.png';
import prisma from '../assets/prisma.png';
import linux from '../assets/linux.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: github,
      title: 'Git',
      style: 'shadow-gray-500 pt-8',
    },
    {
      id: 6,
      src: tailwind,
      title: 'TailWind',
      style: 'shadow-sky-400',
    },
    {
      id: 7,
      src: csharp,
      title: 'C#',
      style: 'shadow-purple-700',
    },
    {
      id: 8,
      src: python,
      title: 'Python',
      style: 'shadow-blue-700',
    },
    {
      id: 9,
      src: sass,
      title: 'SASS',
      style: 'shadow-pink-700',
    },
    {
      id: 10,
      src: graphql,
      title: 'GraphQL',
      style: 'shadow-pink-700',
    },
    {
      id: 11,
      src: nextjs,
      title: 'NextJs',
      style: 'shadow-gray-700',
    },
    {
      id: 12,
      src: mysql,
      title: 'SQL',
      style: 'shadow-orange-700',
    },
    {
      id: 13,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-700',
    },
    {
      id: 13,
      src: prisma,
      title: 'Prisma',
      style: 'shadow-blue-700',
    },
    {
      id: 14,
      src: linux,
      title: 'Linux',
      style: 'shadow-blue-700',
    },
  ];
  return (
    <div
      name='experience'
      className='bg-gradient-to-b from-gray-800 to-black w-full h-auto sm:pt-30 md:pt-60'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
            Experience
          </p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                'shadow-md hover:scale-105 duration-500 rounded-lg' +
                ' ' +
                style
              }>
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
