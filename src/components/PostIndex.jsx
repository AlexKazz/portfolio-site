import { HashLink } from 'react-router-hash-link';

const PostIndex = () => {
  return (
    <div className='bg-custom-cream-500'>
      <div className='bg-white mx-5 my-3 px-3 py-10 rounded-2xl text-2xl'>
        {/* <a href={'#post1'}>Grabbing Data With API Calls</a> */}
        <div className='mb-5 hover:underline'>
          <HashLink to='#post1'>Grabbing Data With API Calls</HashLink>
        </div>
        <div className='mb-5 hover:underline'>
          <HashLink to='#post2'>Express</HashLink>
        </div>
        <div className='mb-5 hover:underline'>
          <HashLink to='#post3'>UI Layout</HashLink>
        </div>
      </div>
    </div>
  );
};

export default PostIndex;
