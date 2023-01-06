import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const PostIndex = () => {
  const apiSection = useRef(null);
  const expressSection = useRef(null);
  const scrollTo1 = () => {
    console.log('scrollTo1');
    window.scrollTo({
      top: apiSection.current,
      behavior: 'smooth',
    });
  };
  const scrollTo2 = () => {
    console.log('scrollTo2');
    window.scrollTo({
      top: expressSection.current,
      behavior: 'smooth',
    });
  };
  return (
    <div className='bg-custom-cream-500'>
      <div className='bg-white my-3 p-3 rounded-2xl'>
        {/* <a href={'#post1'}>Grabbing Data With API Calls</a> */}
        <div className='mb-5'>
          <HashLink to='#post1'>Grabbing Data With API Calls</HashLink>
        </div>
        <div className='mb-5'>
          <HashLink to='#post2'>Express</HashLink>
        </div>
        <div className='mb-5'>
          <HashLink to='#post3'>UI Layout</HashLink>
        </div>
      </div>
    </div>
  );
};

export default PostIndex;
