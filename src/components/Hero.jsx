import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-dvh flex items-center overflow-hidden">
      {/* Gradient base layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#042B35] via-[#063C49] to-[#073D4C]"></div>
      
      {/* Background G watermark */}
      <img 
        src="/g-watermark.png"
        alt=""
        className="
          pointer-events-none select-none absolute -z-10
          right-[-40vw] top-[-25vw] w-[160vw] max-w-none opacity-20
          sm:right-[-30vw] sm:top-[-20vw] sm:w-[140vw]
          md:right-[-20vw] md:top-[-15vw] md:w-[120vw]
          lg:right-[-10vw] lg:top-[-10vw] lg:w-[110vw]
        "
      />



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
