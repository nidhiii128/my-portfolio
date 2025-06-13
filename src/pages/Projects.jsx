import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Bill Generator Including GST",
      description: "Desktop app to generate bills with GST, includes billing, tax and printable invoices.",
      tech: "Java Swing",
      github: "https://github.com/Anomaly28/bill-generator-including-gst---java",
      color: "blue"
    },
    {
      title: "Student Management System",
      description: "GUI-based app to manage student records. Add/view student info.",
      tech: "Java Swing",
      github: "https://github.com/Anomaly28/student-management-using-java-swing",
      color: "green"
    },
    {
      title: "Food Ordering App",
      description: "Responsive web app for ordering food items with an intuitive UI.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/Anomaly28/food-app",
      color: "yellow"
    },
    {
      title: "QR Code Generator",
      description: "Generates QR code for any URL. Integrated with Firebase.",
      tech: "HTML, CSS, JavaScript, Firebase",
      github: "https://github.com/Anomaly28/qrcode-generator-using-firebase",
      color: "red"
    },
    {
      title: "Motivational Message Generator",
      description: "Displays random motivational quotes. Includes a to-do list.",
      tech: "HTML, JavaScript",
      github: "https://github.com/Anomaly28/motivationa_app_task_1",
      color: "purple"
    },
    {
      title: "Pacman Game",
      description: "Classic Pacman game built from scratch with UI and collision logic.",
      tech: "Java Swing",
      github: "https://github.com/Anomaly28/pacman-game",
      color: "indigo"
    },
    {
      title: "Employee Management System",
      description: "Android app to manage employee records with CRUD features.",
      tech: "Android (Java)",
      github: "https://github.com/Anomaly28/employee-management-android-using-java-",
      color: "pink"
    },
    {
      title: "IoT-Based Fire Detection System",
      description: "Real-time fire detection system using sensors and mobile alerts.",
      tech: "Arduino, Blynk",
      github: "https://github.com/your-username/fire-detection-iot",
      color: "blue"
    },
    {
      title: "E-Waste Management System",
      description: "Platform to manage e-waste collection and awareness campaigns.",
      tech: "MERN Stack",
      github: "https://github.com/your-username/e-waste-management",
      color: "yellow"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600 flex items-center justify-center py-20">
      <div className="w-full mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-48 bg-${project.color}-500 flex items-center justify-center`}>
                <span className="text-white text-lg font-bold">Project Screenshot</span>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold text-${project.color}-800 mb-2`}>{project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <p className={`text-sm text-${project.color}-600 font-medium mb-3`}>{project.tech}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-${project.color}-700 hover:underline`}
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
