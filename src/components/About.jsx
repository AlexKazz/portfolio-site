import React from 'react';

export default function About() {
  return (
    <section id='about' className='bg-custom-cream-500'>
      <div className='container mx-auto flex px-10 py-3 lg:flex-row flex-col items-center'>
        <div className='lg:mr-3 lg:flex-grow md:w-4/5 lg:pr-8 md:pr-16 flex flex-col md:items-start md:text-left mb-3 md:mb-0 items-center bg-white rounded-2xl p-6'>
          <h1 className='title-font sm:text-4xl text-3xl mb-6 font-medium '>
            Hi, I'm Alex.
          </h1>
          <p className='leading-relaxed text-xl'>
            I develop front-end UI and back-end servers / API / databases for
            web applications.
          </p>
          <br />
          <p className='leading-relaxed text-xl'>
            My background is in audio engineering and post production,
            recording, mixing and mastering commercial songs for clients and
            teaching piano & music theory to people of all ages and experience
            levels.
          </p>
          <br />
          <p className='leading-relaxed text-xl'>
            I love the problem-solving aspect of software development, and my
            experiences have taught me that regardless of what field you're in,
            communication, empathy, and curiosity are key to working through
            challenges.
          </p>
        </div>
        <br />
        <div className='lg:max-w-lg lg:w-96 md:w-4/5 bg-white rounded-2xl p-3'>
          <img
            className='object-cover object-center rounded'
            // src='./alex-ernie-clipped.png'
            src='./alex-ernie-clipped.png'
            alt='A guy with his cute lil dog named Ernie (short for Ernest)'
          />
        </div>
      </div>
    </section>
  );
}
