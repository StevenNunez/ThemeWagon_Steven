const Services = () => {
  const services = [
    {
      title: 'Send Texts Instantly',
      icon: '/services/icon1.png',
      description: 'Send messages quickly and effectively with real-time response.',
    },
    {
      title: 'Better Organized',
      icon: '/services/icon2.png',
      description: 'Keep your team aligned and tasks well structured.',
    },
    {
      title: 'Analytical Statistics',
      icon: '/services/icon3.png',
      description: 'Gain insights with easy-to-understand analytics and charts.',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
         Services
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We offer you the best chances for carer development and success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-light p-6 rounded-lg shadow-md text-center">
              <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">

        </div>
      </div>
    </section>
  );
};

export default Services;