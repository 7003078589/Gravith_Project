import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#042B35]/90 backdrop-blur-xl border-b border-gradient-to-r from-[#17CFE3] via-[#17CFE3]/50 to-transparent shadow-2xl shadow-[#17CFE3]/10' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-[#17CFE3] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-[#17CFE3] rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-12 left-1/2 w-1.5 h-1.5 bg-[#17CFE3] rounded-full animate-ping opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo with Animation */}
          <div className="group">
            <Logo />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#17CFE3] to-[#17CFE3]/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-tilt"></div>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="relative text-[#E8F2F4] hover:text-[#17CFE3] transition-all duration-300 font-medium text-lg overflow-hidden"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Letter-by-letter animation */}
                  <span className="inline-block">
                    {item.name.split('').map((letter, letterIndex) => (
                      <span
                        key={letterIndex}
                        className={`inline-block transition-all duration-300 ${
                          hoveredItem === item.name 
                            ? 'animate-bounce' 
                            : 'animate-none'
                        }`}
                        style={{
                          animationDelay: `${letterIndex * 50}ms`,
                          transform: hoveredItem === item.name ? 'translateY(-2px)' : 'translateY(0)'
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#17CFE3] to-[#17CFE3]/50 group-hover:w-full transition-all duration-500 ease-out"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#17CFE3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
                </a>
              </div>
            ))}
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-[#E8F2F4] hover:text-[#17CFE3] transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#17CFE3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-sm"></div>
            
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-[#E8F2F4] hover:text-[#17CFE3] transition-all duration-300 font-medium block text-lg py-2 group overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Slide-in animation */}
                <span className={`inline-block transition-transform duration-500 ${
                  isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                  {item.name}
                </span>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#17CFE3] to-[#17CFE3]/50 group-hover:w-full transition-all duration-500 ease-out"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#17CFE3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
