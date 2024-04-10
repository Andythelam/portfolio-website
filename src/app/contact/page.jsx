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
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* BIOGRAPHY AND TEXT CONTAINER */}
        <div className='lg:w-1/2 h-full flex flex-col justify-center items-center space-y-10'>
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
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className='lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-24'
        >
          <h2 className='text-2xl font-bold mb-4 text-center'>Contact</h2>
          <input
            id='user_subject'
            name='user_subject'
            type='text'
            className='border-2 border-gray-300 outline-none rounded-lg p-1 text-sm mb-2'
            placeholder='Subject'
          />

          <input
            id='user_email'
            name='user_email'
            type='email'
            className='border-2 border-gray-300 outline-none rounded-lg p-1 text-sm mb-2'
            placeholder='Your Email'
          />

          <textarea
            id='user_message'
            rows={10}
            className='border-2 border-gray-300 outline-none rounded-lg p-2 text-sm'
            name='user_message'
            placeholder='Your Message'
          />

          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-2 text-sm'>
            Send
          </button>
          {success && (
            <span className='text-green-600 font-semibold'>
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className='text-red-600 font-semibold'>
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
