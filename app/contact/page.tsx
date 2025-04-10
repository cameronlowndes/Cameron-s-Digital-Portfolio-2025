// pages/contact.tsx

"use client"; // This line ensures the file is treated as a client-side component.

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setStatus("Your message has been sent successfully.");
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col pt-24 pb-1 px-4">
      <Head>
        <title>Contact | Cameron Lowndes - Full-Stack Developer</title>
        <meta
          name="description"
          content="Get in touch with Cameron Lowndes, a full-stack developer. Reach out for web development, cloud solutions, or custom software services."
        />
        <meta property="og:title" content="Contact - Cameron Lowndes" />
        <meta
          property="og:description"
          content="Get in touch with Cameron Lowndes, a full-stack developer. Reach out for web development, cloud solutions, or custom software services."
        />
        <meta
          property="og:image"
          content="/image/cameron.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <section className="max-w-4xl mx-auto mt-12 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact</h1>

        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I'd love to hear from you! Whether you have questions, want to collaborate, or are interested in my services, feel free to reach out. Use the form below or contact me directly.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="subject" className="text-lg font-medium text-gray-700 mb-2">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Subject"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-lavender-400 text-black px-6 py-3 rounded-md"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && <p className="text-lg text-gray-700 mt-4">{status}</p>}

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h3>
            <p className="text-lg text-gray-700 mb-4">
              You can also reach me directly via the following channels:
            </p>
            <ul className="text-lg text-gray-700">
              <li>Email: <strong>cameronlowndes@gmail.com</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer with mt-auto */}
      <Footer className="mt-auto" />

    </div>
  );
}
