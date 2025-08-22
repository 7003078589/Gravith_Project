import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Pattern for Mobile */}
      <div className="absolute inset-0 opacity-30 sm:opacity-50 md:opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2317CFE3' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Large Background G for Mobile */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 sm:opacity-20 md:opacity-30 flex items-center justify-center">
        <div className="text-[#17CFE3] text-[200px] sm:text-[300px] md:text-[400px] lg:text-[500px] font-bold select-none">
          G
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="animate-slide-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[88px] font-extrabold text-[#E8F2F4] leading-[0.9] sm:leading-[0.95] mb-4 sm:mb-6">
              Driving
              <br />
              Business
              <br />
              Growth
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#17CFE3] font-semibold mb-6 sm:mb-8 animate-fade-in">
              Your Business, Our Expertise
            </p>
            
            <button className="inline-flex items-center justify-center rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-[#17CFE3] text-slate-900 shadow-lg shadow-cyan-500/10 hover:brightness-110 transition animate-fade-in w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on very small screens */}
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-[#E8F2F4]/30 text-xs sm:text-sm animate-fade-in hidden sm:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#17CFE3] rounded-full"></div>
          <span>Technology Solutions</span>
        </div>
      </div>

      {/* Mobile-specific decorative element */}
      <div className="absolute bottom-4 left-4 text-[#E8F2F4]/20 text-xs animate-fade-in sm:hidden">
        <div className="flex items-center gap-1">
          <div className="w-1 h-1 bg-[#17CFE3] rounded-full"></div>
          <span>Tech Solutions</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
