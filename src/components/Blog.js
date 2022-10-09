import React from 'react';
import { CommandLineIcon, BookOpenIcon } from '@heroicons/react/20/solid';
import { blogPosts } from '../data';

export default function Blog() {
  return (
    <section id='blog'>
      <div className='container px-5 py-10 mx-auto text-center'>
        <BookOpenIcon className='w-10 inline-block mb-4' />
        <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-12'>
          Blog Posts
        </h1>
        <div className='flex flex-wrap m-4'>
          {blogPosts.map((blogPost) => (
            <div className='p-4 md:w-1/2 w-full'>
              <div className='h-full bg-gray-800 bg-opacity-40 p-8 rounded'>
                <CommandLineIcon className='block w-8 text-gray-500 mb-4' />
                <p className='leading-relaxed mb-6'>{blogPost.content}</p>
                <div className='inline-flex items-center'>
                  <span className='flex-grow flex flex-col pl-4'>
                    <span className='title-font font-medium text-white'>
                      {blogPost.date}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
