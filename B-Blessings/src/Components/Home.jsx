import React, { useState } from 'react';
import Navbar from './Navbar'; 

const HomePage = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkTheme ? 'bg-[#1e1e1e] text-[#f5f5f5]' : 'bg-[#ffffff] text-[#333333]'}`} style={{ backgroundImage: isDarkTheme ? 'url(/path-to-dark-mode-background.jpg)' : 'url(/path-to-light-mode-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      
      {/* Main Content */}
      <div className={`flex-grow flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-12 ${isDarkTheme ? 'bg-[#2b2b2b] shadow-xl' : 'bg-[#f9f9f9] shadow-lg'} rounded-lg ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'} border`}>

        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkTheme ? 'text-[#f5f5f5]' : 'text-[#0095D9]'}`}>
            Happy 30th Birthday, My Love!
          </h1>
          <p className={`text-md mb-8 ${isDarkTheme ? 'text-[#dcdcdc]' : 'text-[#0095D9]'}`}>
            Celebrating you and the amazing person you are!
          </p>
          <a href="#memories">
            <button className={`py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300 ${isDarkTheme ? 'bg-[#e63946] text-[#ffffff] hover:bg-[#f1a6a6]' : 'bg-[#0095D9] text-[#ffffff] hover:bg-[#007bb5]'}`}>
              Explore
            </button>
          </a>
        </header>

       
      </div>

      {/* Footer Section */}
      <footer className={`w-full text-center py-6 mt-12 ${isDarkTheme ? 'bg-[#1e1e1e] text-[#f5f5f5]' : 'bg-[#f9f9f9] text-[#333333]'}`}>
        <p className={`text-sm ${isDarkTheme ? 'text-[#dcdcdc]' : 'text-[#666666]'}`}>&copy; 2024 Celebrating 30 Wonderful Years. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
