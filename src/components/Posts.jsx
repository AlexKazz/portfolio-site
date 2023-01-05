import React from 'react';
import { posts } from '../data';

const Posts = () => {
  return (
    <section className='bg-custom-cream-500'>
      <div className='flex justify-center mx-10 mt-3'>
        <div className='bg-white p-5 rounded-2xl mb-10'>
          {posts.map((post) => (
            <div key={post.content} className='mb-10'>
              <h2 className='text-2xl font-extrabold mb-3 underline underline-offset-8 decoration-1'>
                {post.title}
              </h2>{' '}
              <p>{post.content}</p>
            </div>
          ))}
        </div>
        <div className='bg-white mx-5 p-5 rounded-2xl'>
          {posts.map((post) => (
            <div key={post.title} className='mb-5'>
              {post.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
