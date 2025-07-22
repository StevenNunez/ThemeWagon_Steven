const Features = () => {
  const features = [
    { title: 'Encrypted Mail', icon: '/features/icon1.png', description: 'A process of encrypting email communications.' },
    { title: 'Display Sharing', icon: '/features/icon2.png', description: 'With other participants, you may share your screen' },
    { title: 'Private Notebook', icon: '/features/icon3.png', description: 'Private Notebook is an application that is protected' },
    { title: 'App Assistance', icon: '/features/icon4.png', description: 'App Assistant is quickly and effectively ran the system' },
    { title: 'Multiple Printing', icon: '/features/icon5.png', description: 'Our canvas prints are crafted on top-notch canvas' },
    { title: 'Free Sketch', icon: '/features/icon6.png', description: 'Our canvas prints are crafted on top-notch canvas' },
  ];

  return (
 <section className="bg-gradient-to-br from-[#fdf6f6] via-[#f5f7ff] to-[#e8f8ff] py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Features</h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
          We provide a number of excellent features that will undoubtedly improve the user experience. 
          We also provide a better support system
        </p>
      </div>
      <div className=" w-235 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-transparent rounded-2xl  p-6 transition hover:shadow-xl"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <img src={feature.icon} alt={feature.title} className="h-15 w-15" />
            </div>
            <h3 className="text-base font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;