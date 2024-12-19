"use client";
import { useState } from "react";
import BgImage from '@/assets/contact-bg.png'; // Ensure this path is correct

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formspree.io/f/mvgojlkg", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSuccess(true); // Show a success message
        event.target.reset(); // Reset the form
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="pt-20 pb-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage.src})`, // Correct way to reference the image
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-lg space-y-6"
        >
          <div className="space-y-2">
          <h2 className="text-4xl font-bold text-white text-center mb-6">
          Get in Touch
        </h2>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-white"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message here..."
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition focus:ring-2 focus:ring-red-500 focus:outline-none"
          >
            Send Message
          </button>
        </form>

        {success && (
          <p className="text-green-600 font-medium text-center mt-6">
            Thank you for reaching out! We will get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
}
