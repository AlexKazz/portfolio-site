import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xknezbop');

  if (state.succeeded) {
    return <p className='text-center pb-8'>Your message was sent!</p>;
  }

  return (
    <>
      <div className='px-5 sm:flex-nowrap flex-col'>
        <div className='lg:w-2/3 md:w-1/2 flex justify-center flex-col m-auto w-full md:pt-8 mt-8 md:mt-0'>
          <div className='relative flex flex-wrap rounded'>
            <div className='lg:w-1/2 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-500 tracking-widest text-xs'>
                LOCATION
              </h2>
              <p className='mt-1'>Los Angeles, CA</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-500 tracking-widest text-xs'>
                EMAIL
              </h2>
              <h2 className='text-indigo-400 leading-relaxed'>
                akazenoff@gmail.com
              </h2>
            </div>
          </div>
        </div>
        <form
          name='contact'
          onSubmit={handleSubmit}
          className='lg:w-2/3 md:w-1/2 justify-center flex-col m-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-gray-800 sm:text-4xl text-3xl mb-1 font-medium title-font'>
            Contact Me
          </h2>
          <p className='leading-relaxed mb-5'>
            If you'd like to get in contact, feel free to send me an email
            below:
          </p>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-500'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              name='email'
              className='w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <ValidationError prefix='Email' field='email' errors={state.errors} />
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-500'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <button
            // onClick={state.errors ? () => errorMsg() : null}
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
