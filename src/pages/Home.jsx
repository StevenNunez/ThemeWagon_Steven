const Home = () => {
  const clients = [
    '/home/google.png',
    '/home/microsoft.png',
    '/home/netflix.png',
    '/home/themewagon.png',
    '/home/mailbluster.png',
  ];

  return (
      <section id="home" className="relative bg-white text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-purple-400">Bootstrap 5 theme</span><br />
            <span className="text-gray-400 font-semibold">crafted by ThemeWagon</span>
          </h1>
          <p className="mt-6 text-gray-400 text-sm max-w-md">
            ThemeWagon offers an wide array of category-oriented Free and Premium Bootstrap HTML Templates and Themes.
          </p>
          <button className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full shadow-lg text-white font-semibold text-sm hover:opacity-90 transition duration-300">
            Check Demo
          </button>
        </div>
        <div className="relative">
          <img
            src="/home/hero.png"
            alt="Hero Illustration"
            className="w-full"
          />
        </div>
      </div>
      
      <div className="bg-white py-12 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {clients.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Client ${idx + 1}`}
                className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;