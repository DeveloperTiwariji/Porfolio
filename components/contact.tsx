"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-24 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">tiwarisatyam4685@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">+917052483865</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Phagwara, Punjab</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
  {/* GitHub */}
  <a
    href="https://github.com/DeveloperTiwariji" // Replace with your GitHub URL
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
  >
    <span className="sr-only">GitHub</span>
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48
          0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.35-3.37-1.35-.46-1.17-1.12-1.48-1.12-1.48
          -.91-.62.07-.61.07-.61 1.01.07 1.54 1.03 1.54 1.03.89 1.52 2.34 1.08 2.91.83
          .09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68
          -.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02
          2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95
          .36.31.69.92.69 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10.01 10.01 0 0 0 22 12
          c0-5.52-4.48-10-10-10z"
      />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/satyam-tiwari1/" // Replace with your LinkedIn URL
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 transition-colors"
  >
    <span className="sr-only">LinkedIn</span>
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 
        2.24 5 5 5h14c2.76 0 5-2.24 
        5-5v-14c0-2.76-2.24-5-5-5zm-11.75 
        19h-2.5v-9h2.5v9zm-1.25-10.29c-.83 
        0-1.5-.67-1.5-1.5s.67-1.5 
        1.5-1.5 1.5.67 1.5 
        1.5-.67 1.5-1.5 1.5zm13 
        10.29h-2.5v-4.5c0-1.1-.9-2-2-2s-2 
        .9-2 2v4.5h-2.5v-9h2.5v1.25c.55-.85 
        1.52-1.25 2.5-1.25 1.93 0 3.5 1.57 
        3.5 3.5v5.5z" />
    </svg>
  </a>
</div>

            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center">Oops! Something went wrong.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
