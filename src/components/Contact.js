import React, { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xknezbop');

  const errorMsg = () =>
    toast.warn('Email and Message fields are empty!', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const notify = () =>
    toast.success('Message sent!', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  if (state.succeeded) {
    return <p className='text-center pb-8'>Your message was sent!</p>;
  }

  return (
    <>
      <section id='contact' className='relative'>
        <div className='container px-5 mx-auto flex sm:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
            <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
              <div className='lg:w-1/2 px-6'>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                  LOCATION
                </h2>
                <p className='mt-1'>Los Angeles, CA</p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
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
            className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
          >
            <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
              Contact Me
            </h2>
            <p className='leading-relaxed mb-5'>
              If you'd like to get in contact, feel free to send me an email
              below:
            </p>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='leading-7 text-sm text-gray-400'
              >
                Email Address
              </label>
              <input
                id='email'
                type='email'
                name='email'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-400'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
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
            {/* <ToastContainer
              position='bottom-center'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              theme='colored'
            /> */}
          </form>
        </div>
      </section>
    </>
  );
}
