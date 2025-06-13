import React from 'react';

const Certifications = () => {
  const certs = [
    { name: "MERN Full Stack", file: "/mern.pdf" },
    { name: "Java Developer and DSA", file: "/java.pdf" },
    { name: "MySQL", file: "/mysql.pdf" }
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen w-full bg-gradient-to-br from-black via-purple-900 to-purple-600 py-20 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-22 xl:px-32">
        <h2 className="text-6xl font-bold text-center text-white mb-20">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-64">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-lg shadow-lg border-l-5 border-purple-500"
            >
              <h3 className="text-lg font-bold text-purple-800 mb-2">{cert.name}</h3>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 underline hover:text-purple-800"
              >
                View Full Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
