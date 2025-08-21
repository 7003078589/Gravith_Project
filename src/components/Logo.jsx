import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Enhanced Logo Icon with Animations */}
      <div className="relative">
        <div className="w-8 h-8 bg-[#17CFE3] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#17CFE3]/50">
          <img 
            src="/assets/images/logo.png" 
            alt="GRAVIT Logo" 
            className="w-6 h-6 object-contain transition-all duration-300 group-hover:rotate-12"
          />
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17CFE3] to-[#17CFE3]/50 rounded-lg blur opacity-0 group-hover:opacity-75 transition-all duration-500 group-hover:duration-200 -z-10"></div>
        
        {/* Floating particles around logo */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#17CFE3] rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-[#17CFE3] rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500 delay-100"></div>
      </div>
      
      {/* Enhanced Brand Text with Letter Animation */}
      <span className="text-2xl font-bold text-[#E8F2F4] tracking-wide transition-all duration-300 group-hover:text-[#17CFE3]">
        <span className="inline-block">
          {'GRAVIT'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-300 group-hover:animate-bounce"
              style={{
                animationDelay: `${index * 50}ms`,
                transform: 'translateY(0)',
                transitionDelay: `${index * 20}ms`
              }}
            >
              {letter}
            </span>
          ))}
        </span>
        
        {/* Animated underline */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#17CFE3] to-[#17CFE3]/50 group-hover:w-full transition-all duration-700 ease-out"></div>
      </span>
    </div>
  );
};

export default Logo;
