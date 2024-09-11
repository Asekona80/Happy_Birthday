import React from 'react';

const Navbar = ({ isDarkTheme, toggleTheme }) => {
  const [nav, setNav] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        isSticky ? (isDarkTheme ? 'bg-[#000000] shadow-lg' : 'bg-[#2b2d42] shadow-lg') : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <img 
          src="/path-to-your-logo/logo.png" 
          alt="Logo" 
          className="h-12 w-auto" 
        />

        {/* Menu Button (for mobile) */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={handleNav}>
          {nav ? 'Close Menu' : 'Open Menu'}
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 text-lg ${isDarkTheme ? 'text-[#ffffff]' : 'text-[#0095D9]'}`}>
          <li className="hover:text-[#03071e] cursor-pointer">Home</li>
          <li className="hover:text-[#03071e] cursor-pointer">Memories</li>
          <li className="hover:text-[#03071e] cursor-pointer">To-You</li>
          <li className="hover:text-[#03071e] cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-0 w-full h-screen flex flex-col items-center justify-center space-y-8 text-2xl transform ${
            nav ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-500 ease-in-out md:hidden ${isDarkTheme ? 'bg-[#1f1f1f]' : 'bg-[#d3d3d3]'}`}
        >
          <li className={`list-none ${isDarkTheme ? 'text-[#ffffff]' : 'text-[#0095D9]'} hover:text-[#03071e] cursor-pointer`}>Home</li>
          <li className={`list-none ${isDarkTheme ? 'text-[#ffffff]' : 'text-[#0095D9]'} hover:text-[#03071e] cursor-pointer`}>Memories</li>
          <li className={`list-none ${isDarkTheme ? 'text-[#ffffff]' : 'text-[#0095D9]'} hover:text-[#03071e] cursor-pointer`}>To-You</li>
          <li className={`list-none ${isDarkTheme ? 'text-[#ffffff]' : 'text-[#0095D9]'} hover:text-[#03071e] cursor-pointer`}>Contact</li>
        </div>

        {/* Theme Switch Button */}
        <button
          onClick={toggleTheme}
          className={`ml-4 p-2 rounded-full ${isDarkTheme ? 'bg-[#FF0000] text-[#ffffff]' : 'bg-[#0095D9] text-[#ffffff]'}`}
        >
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
