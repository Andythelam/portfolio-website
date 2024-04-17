'use client';
import {motion} from 'framer-motion';
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = 'Say Hello';

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className='h-full'
      initial={{y: '-200vh'}}
      animate={{y: '0%'}}
      transition={{duration: 1}}
    >
      <div className='flex flex-col items-center px-4 md:px-6 xl:px-20'>
        {/* BIOGRAPHY AND TEXT CONTAINER */}
        <div className='w-full flex flex-col items-center space-y-10 pt-10'>
          {/* BIOGRAPHY IMAGE */}
          <Image
            src='/images/circle-pic.png'
            alt=''
            width={112}
            height={112}
            className='w-40 h-40 rounded-full object-cover'
          />
          {/* TEXT CONTAINER */}
          <div className='text-6xl pb-12'>
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className='md:w-[600px] h-[600px] w-full bg-white rounded-2xl text-xl flex flex-col gap-4 justify-center md:p-10 p-6 mx-auto'
        >
          <h2 className='text-2xl font-bold mb-4 text-center'>Contact</h2>
          <input
            id='user_subject'
            name='user_subject'
            type='text'
            className='border-2 bg-gray-100 outline-none rounded-lg p-1 text-sm mb-2'
            placeholder='Subject'
          />

          <input
            id='user_email'
            name='user_email'
            type='email'
            className='border-2 bg-gray-100 outline-none rounded-lg p-1 text-sm mb-2'
            placeholder='Your Email'
          />

          <textarea
            id='user_message'
            rows={10}
            className='border-2 bg-gray-100 outline-none rounded-lg p-2 text-sm'
            name='user_message'
            placeholder='Your Message'
          />

          {/* Inputs */}
          <button className='bg-green-300 rounded font-semibold text-gray-600 p-2 text-sm'>
            Send
          </button>
          {success && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className='p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
              role='alert'
            >
              <span className='font-medium'>Success!</span> Your message has
              been sent successfully.
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
              role='alert'
            >
              <span className='font-medium'>Error!</span> Something went wrong,
              please try again.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
