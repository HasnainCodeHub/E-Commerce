"use client";
import BackgroundImage from '../Images/back.png';
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbHours24 } from "react-icons/tb";
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send the form data to your backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000); // Hide the thank you message after 5 seconds
    } else {
      console.error('Error sending message');
    }
  };

  return (
    <main>
      <div className="text-center">
        <h1 className="text-8xl font-bold font-serif bg-primaryColor text-white px-8 py-4">Contact Us</h1>
      </div>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "900px",
          opacity: "100%",
        }}
      >
        <div className="flex px-24 py-12 gap-16">
          <div className="w-1/2">
            <h1 className='text-6xl font-bold'>We’re Here to Help!</h1>
            <p className='text-xl py-5 font-semibold font-mono'>
              At This Store, we value your feedback and inquiries. <br />
              Whether you have questions about our products,<br />
              need assistance with an order,<br />
              or want to share your thoughts, we’re here for you!
            </p>
            <h1 className='text-6xl font-bold'>Get in Touch</h1>
            <div className='gap-4 py-3 px-8 mt-8'>
              <div className='flex gap-10'>
                <p className='text-primaryColor'><FaPhone size={50} /></p>
                <p className='font-semibold text-4xl text-white'>+923702537927</p>
              </div>
              <div className='flex mt-8 gap-10'>
                <p className='text-primaryColor'><IoIosMail size={50} /></p>
                <p className='font-semibold text-white text-4xl'>azeemhusnain048@gmail.com</p>
              </div>
              <div className='flex gap-10'>
                <p className='text-primaryColor py-8'><TbHours24 size={50} /></p>
                <p className='font-semibold text-white text-4xl py-8'>Open 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-1/2">
            {submitted ? (
              <p className='text-orange-600 font-bold text-2xl text-center mt-96'>Thank you for contacting us! We'll get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className='w-full bg-white p-8 rounded-lg shadow-lg space-y-6'>
                <div>
                  <label htmlFor='name' className='block text-lg font-medium text-gray-700'>Your Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter your name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Your Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Enter your email'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className='w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-950'
                    placeholder='Enter your message'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full py-3 bg-cyan-950 text-white font-bold rounded-md hover:bg-cyan-700 transition-colors duration-300'
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
