'use client'

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_97wbjfj', // Replace with your EmailJS Service ID
          'template_eyfjale', // Replace with your EmailJS Template ID
          formRef.current,
          'MskzAknlsPi6Dgfc1' // Replace with your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSent(true); // Show success message
            formRef.current?.reset(); // Reset the form
          },
          (error) => {
            console.error(error.text);
          }
        );
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="justify-center text-center">
      <h2 className="text-4xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          required
          className="w-full px-3 py-2 text-sm text-black placeholder-black bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          required
          className="w-full px-3 py-2 text-sm text-black placeholder-black bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          required
          className="w-full px-3 py-2 text-sm text-black placeholder-black bg-white border-0 rounded shadow"
        />
      </div>
      <button
        type="submit"
        className="px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        Send a message
      </button>
      {isSent && <p className="text-green-500 mt-3">Message sent successfully!</p>}
    </form>
  );
};

export default ContactForm;
