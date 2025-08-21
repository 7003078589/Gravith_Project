import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-[88px] font-extrabold text-[#E8F2F4] leading-[0.95] mb-6">
              Driving
              <br />
              Business
              <br />
              Growth
            </h1>
            
            <p className="text-xl md:text-2xl text-[#17CFE3] font-semibold mb-8 animate-fade-in">
              Your Business, Our Expertise
            </p>
            
            <button className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-semibold bg-[#17CFE3] text-slate-900 shadow-lg shadow-cyan-500/10 hover:brightness-110 transition animate-fade-in">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 text-[#E8F2F4]/30 text-sm animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#17CFE3] rounded-full"></div>
          <span>Technology Solutions</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
