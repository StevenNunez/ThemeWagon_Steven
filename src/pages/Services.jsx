const services = [
  {
    icon: "/services/icon1.png",
    title: "Send Texts Instantly",
    description: "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
  },
  {
    icon: "/services/icon2.png",
    title: "Better Organized",
    description: "Latest technology and experienced guidance, trained HR specialists to keep updated.",
  },
  {
    icon: "/services/icon3.png",
    title: "Analytical Statistics",
    description: "Messages, real-time reminders, memos, and many more will keep your team in sync.",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-[#fdf6f6] via-[#f5f7ff] to-[#e8f8ff] py-12 md:py-20 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Service</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          We offer youth with chances for career development in their practice. 
          We also support a wide range of services to ensure client satisfaction.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-50 rounded-3xl shadow-md p-6 sm:p-8 text-center border border-gray-100 hover:shadow-xl transition"
          >
            <img src={service.icon} alt={service.title} className="h-12 sm:h-16 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{service.description}</p>
            <a
              href="#"
              className="text-blue-500 text-xs sm:text-sm font-medium hover:underline inline-flex items-center gap-1"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;