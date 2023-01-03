import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  return (
    <header className='bg-stone-800 md:sticky top-0 z-10 text-white'>
      <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
        <h2 className='title-font font-medium text-2xl md:mb-0 mx-10'>
          Alex Kazenoff
        </h2>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center'>
          <Link
            to='/'
            className='mr-20 hover:text-custom-cream-500 transition link link-underline'
          >
            Home
          </Link>
          <Link
            to='/projects'
            className='mr-20 hover:text-custom-cream-500 transition link link-underline'
          >
            Projects
          </Link>
          {/* <a href='#blog' className='mx-2 hover:text-white'>
            Blog
          </a> */}
          <Link
            to='/contact'
            className='hover:text-custom-cream-500 transition link link-underline'
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
            className='fa-2xl inline-flex items-center border-0 py-1 px-10 focus:outline-none transition link link-underline rounded mt-4 md:mt-0'
          />
        </a>
        <a
          href='https://github.com/AlexKazz'
          target={'_blank'}
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            className='fa-2xl inline-flex items-center border-0 py-1 px-10 focus:outline-none transition link link-underline rounded mt-4 md:mt-0'
          />
        </a>
      </div>
    </header>
  );
}
