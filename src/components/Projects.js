// import { CodeBracketIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <FontAwesomeIcon
            icon={faDisplay}
            className='fa-xl mx-auto inline-block w-10 mb-4'
          />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
            Apps I've Made
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            These are some of the applications I've built, both with a team and
            on my own.
          </p>
        </div>
        <div className='flex flex-col -m-4 items-center'>
          {projects.map((project) => (
            <a
              href={project.link}
              target={'_blank'}
              rel='noreferrer'
              key={project.image}
              className='sm:w-3/4 w-100 p-4'
            >
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full object-cover object-center'
                  src={project.image}
                />
                <div className='px-8 py-12 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracket-widest text-sm title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-white mb-3'>
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
