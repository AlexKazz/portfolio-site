// import { CodeBracketIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { projects } from '../data';
import ToolTip from './ToolTip';

export default function Projects() {
  return (
    <section id='projects' className='body-font bg-custom-cream-500'>
      <div className='container py-3 mx-auto text-center lg:px-40 w-5/6'>
        <div className='flex flex-col w-full mb-3 bg-white rounded-2xl p-3'>
          <FontAwesomeIcon
            icon={faDisplay}
            className='fa-xl mx-auto inline-block w-10 mb-4'
          />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4'>
            Applications
          </h1>
          <p className='mx-auto leading-relaxed text-base'>
            These are some of the applications I've built, both with a team and
            on my own.
          </p>
        </div>
        <div className='flex flex-wrap justify-center bg-white rounded-2xl p-6'>
          {projects.map((project) => (
            <a
              href={project.link}
              target={'_blank'}
              rel='noreferrer'
              key={project.image}
              className='w-2/3 m-4 p-4 hover:bg-custom-cream-500 transition rounded-lg group'
            >
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='inset-0 w-full object-cover object-center border border-slate-800 rounded-lg '
                  src={project.image}
                />
                {/* <div className='p-5 relative z-10 w-full border-2 border-gray-800 bg-gray-200 opacity-0 hover:opacity-100'>
                  <h1 className='title-font text-lg font-medium text-gray-600 mb-4'>
                    {project.title}
                  </h1>
                </div> */}
              </div>
              <p className='leading-relaxed m-2'>{project.description}</p>
              {/* <div className='leading-relaxed m-2 z-10 opacity-0 hover:opacity-100'>
                <p className='title-font text-lg font-medium text-gray-600 mb-4'>
                  {project.title}
                </p>
              </div> */}
              <p className='opacity-0 group-hover:opacity-100 transition text-sm text-slate-600'>
                Click to view source code
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
