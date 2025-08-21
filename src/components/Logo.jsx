import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-8 bg-[#17CFE3] rounded-lg flex items-center justify-center">
        <img 
          src="/assets/images/logo.png" 
          alt="GRAVIT Logo" 
          className="w-6 h-6 object-contain"
        />
      </div>
      <span className="text-2xl font-bold text-[#E8F2F4] tracking-wide">
        GRAVIT
      </span>
    </div>
  );
};

export default Logo;
