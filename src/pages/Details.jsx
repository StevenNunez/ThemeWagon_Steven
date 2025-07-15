const Details = () => {
  const details = [
    {
      title: 'A creative team which builds stunning UI/UX',
      description: 'Today, I like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience.The most stunning, cutting-edge UI/UX. Klean is an elegant HTML5 template and a perfect starting point for your next SaaS oriented site, carefully curated by ThemeWagon.',
      image: '/details/illustration3.png',
    },
    {
      title: 'Devoted to defining the cutting edge.',
      description: '"This new creation is cutting-edge technology," says the researcher, "whose study originates from a business at the forefront of space science." Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon',
      image: '/details/illustration6.png',
    },
  ];

  return (
    <section id="details" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
    
        {details.map((detail, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              idx % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            <div className="md:w-1/2">
              <img
                src={detail.image}
                alt={detail.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:px-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">{detail.title}</h3>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;