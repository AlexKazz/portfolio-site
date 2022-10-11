import React from 'react';
import { CommandLineIcon, BookOpenIcon } from '@heroicons/react/20/solid';
import { blogPosts } from '../data';

export default function Blog() {
  return (
    <section id='blog'>
      <div className='container px-5 py-10 mx-auto text-center'>
        <BookOpenIcon className='w-10 inline-block mb-4' />
        <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-12'>
          Blog
        </h1>
        <div className='flex flex-col lg:w-4/5 items-center sm:mx-auto sm:mb-2 -mx-2'>
          {blogPosts.map((blogPost) => (
            <div
              key={blogPost.date}
              className='rounded mb-1 relative w-full overflow-hidden'
            >
              <input
                type='checkbox'
                className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'
              />
              <div className='bg-gray-800 h-12 w-full pl-5 flex items-center'>
                <h1 className='text-lg font-semibold text-white'>
                  {blogPost.date}
                </h1>
              </div>

              {/* Arrow Icon */}
              <div className='absolute top-3 right-3 text-white transition-transform duration-300 rotate-0 peer-checked:rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </div>
              <div
                className='
          bg-white text-gray-800 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full'
              >
                <div className='p-4'>
                  <p>{blogPost.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
