import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#17CFE3] rounded-lg flex items-center justify-center flex-shrink-0">
        <img 
          src="/assets/images/logo.png" 
          alt="GRAVIT Logo" 
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
        />
      </div>
      <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#E8F2F4] tracking-wide flex-shrink-0">
        GRAVIT
      </span>
    </div>
  );
};

export default Logo;
