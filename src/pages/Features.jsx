const Features = () => {
  const features = [
    { title: "Encrypted Mail", icon: "/features/icon1.png", description: "A process of encrypting email communications." },
    { title: "Display Sharing", icon: "/features/icon2.png", description: "With other participants, you may share your screen" },
    { title: "Private Notebook", icon: "/features/icon3.png", description: "Private Notebook is an application that is protected" },
    { title: "App Assistance", icon: "/features/icon4.png", description: "App Assistant is quickly and effectively ran the system" },
    { title: "Multiple Printing", icon: "/features/icon5.png", description: "Our canvas prints are crafted on top-notch canvas" },
    { title: "Free Sketch", icon: "/features/icon6.png", description: "Our canvas prints are crafted on top-notch canvas" },
  ];

  return (
    <section className="bg-gradient-to-br from-[#fdf6f6] via-white to-[#e8f8ff] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Features</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
          We provide a number of excellent features that will undoubtedly improve the user experience. 
          We also provide a better support system
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-transparent rounded-2xl p-4 sm:p-6 transition hover:shadow-xl"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
              <img src={feature.icon} alt={feature.title} className="h-12 w-12 sm:h-15 sm:w-15" />
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;