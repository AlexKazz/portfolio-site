// import { CodeBracketIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id='projects' className='text-gray-800 body-font pb-6'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <FontAwesomeIcon
            icon={faDisplay}
            className='fa-xl mx-auto inline-block w-10 mb-4'
          />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-800'>
            Applications
          </h1>
          <p className='mx-auto leading-relaxed text-base'>
            These are some of the applications I've built, both with a team and
            on my own.
          </p>
        </div>
        <div className='flex md:flex-row'>
          {projects.map((project) => (
            <a
              href={project.link}
              target={'_blank'}
              rel='noreferrer'
              key={project.image}
              className='sm:w-3/4 w-100'
            >
              <div className='flex relative mx-4'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full object-cover object-center border border-slate-800'
                  src={project.image}
                />
                <div className='p-5 relative z-10 w-full border-2 border-gray-800 bg-gray-200 opacity-0 hover:opacity-100'>
                  <h1 className='title-font text-lg font-medium text-gray-400 mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
