"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbHours24 } from "react-icons/tb";
import BackgroundImage from "../Images/back.png";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log("Form submitted:", formData); // Log the form data
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000); // Hide thank-you message after 3 seconds
    } else {
      console.error("Error sending message");
    }
  };

  return (
    <main>
      <div className="text-center">
        <h1 className="text-4xl md:text-8xl font-bold font-serif bg-primaryColor text-white px-4 py-2 md:px-8 md:py-4">
          Contact Us
        </h1>
      </div>
      <div
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          opacity: "100%",
        }}
      >
        <div className="px-6 py-12 md:px-24 md:py-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold">We’re Here to Help!</h1>
            <p className="text-lg md:text-xl py-3 md:py-5 font-semibold font-mono">
              At This Store, we value your feedback and inquiries. Whether you have questions about our products, need
              assistance with an order, or want to share your thoughts, we’re here for you!
            </p>
            <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
            <div className="py-4 mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <FaPhone size={40} className="text-primaryColor" />
                <p className="text-2xl md:text-4xl font-semibold text-white">+923702537927</p>
              </div>
              <div className="flex items-center gap-4">
                <IoIosMail size={40} className="text-primaryColor" />
                <p className="text-2xl md:text-4xl font-semibold text-white">azeemhusnain048@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <TbHours24 size={40} className="text-primaryColor" />
                <p className="text-2xl md:text-4xl font-semibold text-white">Open 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-1/2">
            {submitted ? (
              <p className="text-cyan-700 font-bold text-xl md:text-2xl text-center mt-48 lg:mt-96">
                Thank you for contacting us! We'll get back to you soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full p-6 md:p-8 rounded-lg shadow-lg space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-950 text-white font-bold rounded-md hover:bg-cyan-700 transition-colors duration-300"
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
