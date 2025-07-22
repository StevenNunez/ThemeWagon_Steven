const Projects = () => {
  const projects = [
    { src: '/projects/image1.png', aspect: 'aspect-[3/2]' },
    { src: '/projects/image2.png', aspect: 'aspect-square' },
    { src: '/projects/image3.png', aspect: 'aspect-square' },
    { src: '/projects/image4.png', aspect: 'aspect-[3/2]' },
    { src: '/projects/image5.png', aspect: 'aspect-[3/2]' },
    { src: '/projects/image6.png', aspect: 'aspect-square' },
  ];

  return (
    <section className="bg-gradient-to-br from-[#fdf6f6] via-white to-[#e8f8ff] py-20 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Our Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 text-sm max-w-2xl mx-auto">
          A project is a single or team activity, combining research and design with best effort.
          Here are some of our team's projects.
        </p>
        <div className="bg-transparent rounded-3xl p-4 md:p-6 shadow-lg border border-[#eeeeff]">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {projects.map(({ src, aspect }, i) => (
              <img
                key={i}
                src={src}
                alt={`Project ${i + 1}`}
                className={`${aspect} w-full rounded-xl mb-4 object-cover hover:scale-105 transition-transform duration-300`}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="text-sm font-medium px-6 py-2 border border-blue-400 text-blue-500 rounded-full hover:bg-blue-50 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
