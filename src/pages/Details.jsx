const Details = () => {
  const details = [
    {
      title: "A creative team which builds stunning UI/UX",
      description:
        "Today, I like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX. Klean is an elegant HTML5 template and a perfect starting point for your next SaaS oriented site, carefully curated by ThemeWagon.",
      image: "/details/illustration3.png",
    },
    {
      title: "Devoted to defining the cutting edge.",
      description:
        '"This new creation is cutting-edge technology," says the researcher, "whose study originates from a business at the forefront of space science." Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon',
      image: "/details/illustration6.png",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#fdf6f6] via-[#f5f7ff] to-[#e8f8ff] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {details.map((detail, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center mb-10 sm:mb-12 ${
              idx % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={detail.image}
                alt={detail.title}
                className="w-full max-w-md mx-auto md:max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:px-4 sm:md:px-6 text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">{detail.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">{detail.description}</p>
              <button className="text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 border border-purple-400 text-purple-500 rounded-full hover:bg-purple-50 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;