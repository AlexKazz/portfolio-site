import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export default function Navbar() {
  return (
    <header className='bg-gray-200 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <h2 className='title-font font-medium text-gray-800 mb-4 md:mb-0'>
          <a href='#about' className='mx-2 text-xl'>
            Alex Kazenoff
          </a>
        </h2>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mx-2 hover:text-white'>
            Projects
          </a>
          {/* <a href='#blog' className='mx-2 hover:text-white'>
            Blog
          </a> */}
          <a href='#contact' className='mx-2 hover:text-white'>
            Contact
          </a>
        </nav>
        <a
          href='https://www.linkedin.com/in/alex-kazenoff/'
          target={'_blank'}
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className='fa-xl inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded mt-4 md:mt-0'
          />
        </a>
        <a
          href='https://github.com/AlexKazz'
          target={'_blank'}
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            className='fa-xl inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0'
          />
        </a>
      </div>
    </header>
  );
}
