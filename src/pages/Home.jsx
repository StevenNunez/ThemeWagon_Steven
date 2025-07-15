const Home = () => {
  const clients = [
    '/home/google.png',
    '/home/microsoft.png',
    '/home/netflix.png',
    '/home/themewagon.png',
    '/home/mailbluster.png',
  ];

  return (
    <section id="home" className="pt-24 pb-16 px-4 bg-light">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
            Bootstrap 5 theme
            crafted by ThemeWagon

          </h1>
          <p className="text-lg text-gray-600 mb-6">
            ThemeWagon offers an wide array of category-oriented
            Free and Premium Bootstrap HTML Templates and Themes.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Demo
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="/home/hero.png"
            alt="Hero"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {clients.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;