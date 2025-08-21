import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#17CFE3] rounded-lg flex items-center justify-center flex-shrink-0">
        <img 
          src="/assets/images/logo.png" 
          alt="GRAVIT Logo" 
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      </div>
      <span className="text-xl sm:text-2xl font-bold text-[#E8F2F4] tracking-wide flex-shrink-0">
        GRAVIT
      </span>
    </div>
  );
};

export default Logo;
