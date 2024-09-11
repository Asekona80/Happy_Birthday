import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjust the import path as needed

const HomePage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#f0f4f8] text-[#000000]'}`}>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${isDarkTheme ? 'text-[#ffffff]' : 'text-[#2b2d42]'}`}>
            Happy 30th Birthday, My Love!
          </h1>
          <p className={`text-lg md:text-xl mb-8 ${isDarkTheme ? 'text-[#0095D9]' : 'text-[#0095D9]'}`}>
            Celebrating three amazing decades of your life. Explore our special moments and join us in making this day unforgettable!
          </p>
          <a href="#memories">
            <button className={`py-3 px-6 rounded-lg text-lg transition-all duration-300 ${isDarkTheme ? 'bg-[#FF0000] text-[#ffffff] hover:bg-[#d80000]' : 'bg-[#0095D9] text-[#ffffff] hover:bg-[#007bb5]'}`}>
              Explore Our Memories
            </button>
          </a>
        </header>

        {/* Additional Sections */}
        <section id="memories" className="text-center">
          <h2 className={`text-3xl font-semibold mb-4 ${isDarkTheme ? 'text-[#ffffff]' : 'text-[#2b2d42]'}`}>
            About This Celebration
          </h2>
          <p className={`text-lg px-4 md:px-8 ${isDarkTheme ? 'text-[#cccccc]' : 'text-[#333]'}`}>
            Today we celebrate you and the incredible person you are. From the little moments to the grand adventures, this website is a tribute to our time together and a space to share our joy. Thank you for being you, and here’s to many more years of happiness!
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <footer className={`w-full text-center py-4 mt-12 ${isDarkTheme ? 'bg-[#000000] text-[#ffffff]' : 'bg-[#2b2d42] text-[#ffffff]'}`}>
        <p>&copy; 2024 Celebrating 30 Wonderful Years. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
