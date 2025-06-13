import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-screen h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600 flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl w-full mx-auto text-white">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-lg text-purple-200 text-center mb-10">
          Interested in collaborating? Let’s connect!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center text-red-800">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-red-600 break-all">Nidhibhawari28@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center text-red-800">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-red-600">+91 9076273706</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center text-red-800">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-red-600">India</p>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          <a
            href="https://github.com/Anomaly28"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition text-sm"
          >
            <FaGithub className="mr-2 text-lg" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nidhi-bhawari-508294297/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition text-sm"
          >
            <FaLinkedin className="mr-2 text-lg" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
