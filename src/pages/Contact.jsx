const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#fdf6f6] via-[#f5f7ff] to-[#e8f8ff] py-12 md:py-24 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
        <div className="bg-white bg-opacity-50 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8">
          <form className="space-y-4 sm:space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Write your name"
                className="w-full px-10 sm:px-12 py-2 sm:py-3 text-xs sm:text-sm rounded-full border border-white shadow-sm outline-none"
              />
              <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg">👤</span>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Write your email"
                className="w-full px-10 sm:px-12 py-2 sm:py-3 text-xs sm:text-sm rounded-full border border-white shadow-sm outline-none"
              />
              <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg">📧</span>
            </div>
            <div className="relative">
              <textarea
                placeholder="Write your message"
                rows={5}
                className="w-full px-10 sm:px-12 py-2 sm:py-3 text-xs sm:text-sm rounded-2xl border border-white shadow-sm outline-none resize-none"
              ></textarea>
              <span className="absolute left-3 sm:left-4 top-4 text-gray-400 text-base sm:text-lg">✏️</span>
            </div>
            <button
              type="submit"
              className="w-full py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="relative bg-white bg-opacity-40 rounded-2xl p-6 sm:p-8 overflow-hidden">
          <img
            src="/contact/image1.png"
            alt="map background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 space-y-6 sm:space-y-8 text-gray-800">
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-50 p-2 sm:p-3 rounded-xl shadow text-base sm:text-xl">📞</div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Phone</p>
                <p className="text-xs sm:text-sm">+880124332334</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-50 p-2 sm:p-3 rounded-xl shadow text-base sm:text-xl">✉️</div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Email</p>
                <p className="text-xs sm:text-sm">something@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-50 p-2 sm:p-3 rounded-xl shadow text-base sm:text-xl">📍</div>
              <div>
                <p className="font-semibold text-sm sm:text-base">Location</p>
                <p className="text-xs sm:text-sm">
                  43/A Spooner Street, <br />
                  St laurence, Virginia, <br />
                  Texas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;