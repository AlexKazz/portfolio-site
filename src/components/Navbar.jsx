import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <header className='bg-stone-800 md:sticky lg:sticky top-0 z-10 text-white'>
      <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
        <h2 className='title-font font-extrabold text-2xl md:mb-0 lg:pl-10'>
          Alex Kazenoff
        </h2>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center'>
          <Link
            to='/'
            className={`mr-10 hover:text-custom-cream-500 transition link link-underline ${
              pathname === '/' ? 'underline underline-offset-4' : ''
            }`}
          >
            About
          </Link>
          <Link
            to='/projects'
            className={`mr-10 hover:text-custom-cream-500 transition link link-underline ${
              pathname === '/projects' ? 'underline underline-offset-4' : ''
            }`}
          >
            Projects
          </Link>

          <Link
            to='/posts'
            className={`mr-10 hover:text-custom-cream-500 transition link link-underline ${
              pathname === '/posts' ? 'underline underline-offset-4' : ''
            }`}
          >
            Posts
          </Link>
          <Link
            to='/contact'
            className={`hover:text-custom-cream-500 transition link link-underline ${
              pathname === '/contact' ? 'underline underline-offset-4' : ''
            }`}
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
            className='fa-2xl inline-flex items-center border-0 py-1 mx-8 focus:outline-none transition link link-underline rounded mt-1 md:mt-0'
          />
        </a>
        <a
          href='https://github.com/AlexKazz'
          target={'_blank'}
          rel='noreferrer'
        >
          <FontAwesomeIcon
            icon={faGithub}
            className='fa-2xl inline-flex items-center border-0 py-1 mx-8 focus:outline-none transition link link-underline rounded mt-1 md:mt-0'
          />
        </a>
      </div>
    </header>
  );
}
