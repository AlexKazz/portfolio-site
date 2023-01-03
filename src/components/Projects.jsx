// import { CodeBracketIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { projects } from '../data';
// import ToolTip from './ToolTip';

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
        <div className='flex flex-wrap -m-4 justify-center'>
          {projects.map((project) => (
            // <ToolTip tooltip='View source code on GitHub'>
            <a
              href={project.link}
              target={'_blank'}
              rel='noreferrer'
              key={project.image}
              className='w-2/3 m-4 hover:bg-slate-200 transition rounded-lg'
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
              <p className='leading-relaxed m-5'>{project.description}</p>
            </a>
            // </ToolTip>
          ))}
        </div>
      </div>
    </section>
  );
}
