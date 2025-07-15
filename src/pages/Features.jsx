const Features = () => {
  const features = [
    { title: 'Encrypted Mail', icon: '/features/icon1.png', description: 'Secure your communications.' },
    { title: 'Display Sharing', icon: '/features/icon2.png', description: 'Collaborate in real-time.' },
    { title: 'Private Notebook', icon: '/features/icon3.png', description: 'Keep your notes safe.' },
    { title: 'App Assistance', icon: '/features/icon4.png', description: 'Get help when you need it.' },
    { title: 'Multiple Printing', icon: '/features/icon5.png', description: 'Print with ease.' },
    { title: 'Free Sketch', icon: '/features/icon6.png', description: 'Design without limits.' },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-4">
        Features
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We provide a number of excellent features that will undoubtedly improve the user experience. We also provide a better support system
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={feature.icon} alt={feature.title} className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;