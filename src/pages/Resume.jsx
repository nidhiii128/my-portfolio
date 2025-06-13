import React from 'react';

const Resume = () => {
  return (
    <div
      id="resume"
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <iframe
        src="/resume.pdf"
        title="Resume"
        className="w-full h-full"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
