import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <header className='bg-gray-300 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <h2 className='title-font font-medium text-xl text-gray-800 mb-4 md:mb-0'>
          Alex Kazenoff
        </h2>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <Link
            to='/'
            className='mx-2 hover:text-white transition link link-underline'
          >
            Projects
          </Link>
          {/* <a href='#blog' className='mx-2 hover:text-white'>
            Blog
          </a> */}
          <Link
            to='/contact'
            className='mx-2 hover:text-white transition link link-underline'
          >
            Contact
          </Link>
        </nav>
        <a
          href='https://www.linkedin.com/in/alex-kazenoff/'
          target={'_blank'}
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className='fa-xl inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-white transition rounded mt-4 md:mt-0'
          />
        </a>
        <a
          href='https://github.com/AlexKazz'
          target={'_blank'}
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            className='fa-xl inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-white transition rounded mt-4 md:mt-0'
          />
        </a>
      </div>
    </header>
  );
}
