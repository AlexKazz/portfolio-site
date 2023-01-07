import React from 'react';
import PostContent from './PostContent';
import PostIndex from './PostIndex';

const PostPage = () => {
  return (
    <div className='bg-custom-cream-500 h-full flex flex-col-reverse md:flex-row leading-relaxed text-xl'>
      <div className='md:w-2/3 lg:2/3'>
        <PostContent />
      </div>
      <div className='md:w-1/3 lg:1/3 text-center'>
        <PostIndex />
      </div>
    </div>
  );
};

export default PostPage;
