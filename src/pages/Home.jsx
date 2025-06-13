import React from 'react';
import myPhoto from '../assets/my-photo.jpg';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-br from-black via-purple-900 to-purple-600 py-20 overflow-hidden"
    >
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">

        {/* Grid for Image and Intro Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-80 h-100 rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={myPhoto}
                alt="Nidhi Bhawari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-white">Nidhi Bhawari</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-4">Full Stack Developer</p>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              I create beautiful, responsive web applications and user experiences.
              Passionate about clean code, modern design, and solving complex problems.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Frontend Development</h3>
            <p className="text-gray-600">Java, Swing, React, Tailwind CSS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
            <div className="text-3xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Backend Development</h3>
            <p className="text-gray-600">Node.js, MongoDB, MySQL</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <div className="text-3xl mb-4">☁️</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Cloud & Tools</h3>
            <p className="text-gray-600">GCP, Git, VS Code, Postman</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
