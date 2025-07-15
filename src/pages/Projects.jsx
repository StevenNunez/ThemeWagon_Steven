const Projects = () => {
  const projects = [
    '/projects/image1.png',
    '/projects/image2.png',
    '/projects/image3.png',
    '/projects/image4.png',
    '/projects/image5.png',
    '/projects/image6.png',
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
          Our Projects
        </h2>
        <p className="text-center text-gray-600 mb-12">
          A project is a single or team activity, combining research and design with best effort. Here are some of our team's projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((src, idx) => (
            <div key={idx} className="relative group">
              <img
                src={src}
                alt={`Project ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;