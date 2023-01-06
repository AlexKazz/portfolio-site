import React from 'react';
import PostContent from './PostContent';
import PostIndex from './PostIndex';

const PostPage = () => {
  return (
    <div className='container flex'>
      <PostContent />
      <PostIndex />
    </div>
  );
};

export default PostPage;
