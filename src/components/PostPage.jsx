import React from 'react';
import PostContent from './PostContent';
import PostIndex from './PostIndex';

const PostPage = () => {
  return (
    <div className='bg-custom-cream-500 h-full flex flex-col md:flex-row leading-relaxed text-xl'>
      <div className='md:w-1/4 text-center md:h-screen md:sticky md:top-0'>
        <PostIndex />
      </div>
      <div className='md:w-3/4'>
        <PostContent />
      </div>
    </div>
  );
};

export default PostPage;
