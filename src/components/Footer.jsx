const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#fdf6f6] via-[#f5f7ff] to-[#e8f8ff] py-12 md:py-16 px-4 text-xs sm:text-sm text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
        <div>
          <h5 className="font-bold mb-4 text-sm sm:text-base">About</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Prices</a></li>
            <li><a href="#" className="hover:text-primary">About</a></li>
            <li><a href="#" className="hover:text-primary">Resources</a></li>
            <li><a href="#" className="hover:text-primary">Team</a></li>
            <li><a href="#" className="hover:text-primary">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 text-sm sm:text-base">Resources</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Terms</a></li>
            <li><a href="#" className="hover:text-primary">Help</a></li>
            <li><a href="#" className="hover:text-primary">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 text-sm sm:text-base">Team</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">Developer</a></li>
            <li><a href="#" className="hover:text-primary">Designer</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 text-sm sm:text-base">Blog</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary">CEO</a></li>
            <li><a href="#" className="hover:text-primary">Lifestyle</a></li>
            <li><a href="#" className="hover:text-primary">Article</a></li>
            <li><a href="#" className="hover:text-primary">Tech</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4 text-sm sm:text-base">Follow Us</h5>
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <a href="#" className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full border border-purple-400 text-purple-500 hover:bg-purple-100">f</a>
            <a href="#" className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full border border-purple-400 text-purple-500 hover:bg-purple-100">t</a>
            <a href="#" className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full border border-purple-400 text-purple-500 hover:bg-purple-100">in</a>
            <a href="#" className="w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center rounded-full border border-purple-400 text-purple-500 hover:bg-purple-100">▶</a>
          </div>
          <p className="mb-2 text-xs sm:text-sm">Subscribe to our newsletter</p>
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
            <span className="text-gray-400 mr-2 text-sm">✉️</span>
            <input
              type="email"
              placeholder="email"
              className="bg-transparent outline-none w-full text-xs sm:text-sm text-gray-600"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-blue-100 mt-8 md:mt-12 pt-4 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-4 text-xs text-gray-500">
        <p>All rights Reserved © Steven, 2025</p>
        <p className="mt-2 sm:mt-0">
          Made with <span className="text-red-500">♥</span> by <span className="text-indigo-500 font-semibold">StevenNunez</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;