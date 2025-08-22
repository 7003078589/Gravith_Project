import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#042B35] via-[#063C49] to-[#073D4C] overflow-hidden text-[#E8F2F4]">
      <Navbar />

      {/* HERO ONLY */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Responsive background layers */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {/* 1) Base gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                // tight cyan glow in the very corner
                'radial-gradient(42% 42% at 96% 4%, rgba(30,208,226,.26) 0%, rgba(30,208,226,0) 60%)',
                // subtle navbar fade so header stays readable
                'linear-gradient(to bottom, rgba(0,0,0,.10) 0, rgba(0,0,0,0) 120px)'
              ].join(', ')
            }}
          />

          {/* 2) Responsive G Watermark */}
          <div
            aria-hidden
            className="
              absolute z-0 pointer-events-none select-none
              right-[-3%] top-[-8%]        /* desktop positioning */
              aspect-square
              hidden sm:block              /* hide on mobile */
            "
            style={{
              // desktop sizing
              width: "clamp(840px, 64vw, 1220px)",

              // mask: only paint inside the G shape (no box)
              WebkitMask: "url('/g-watermark.png') center / contain no-repeat",
              mask:       "url('/g-watermark.png') center / contain no-repeat",

              // teal fill with gentle depth
              background:
                "linear-gradient(180deg, rgba(32,203,219,.62) 0%, rgba(23,149,174,.50) 42%, rgba(7,61,76,.34) 100%)",

              // soft edge + a touch of glow
              filter: "drop-shadow(0 22px 58px rgba(30,208,226,.10)) blur(.15px)",
            }}
          />

          {/* 3) Mobile-specific G Watermark */}
          <div
            aria-hidden
            className="
              absolute z-0 pointer-events-none select-none
              right-[-10%] top-[-5%]       /* mobile positioning */
              aspect-square
              block sm:hidden              /* show only on mobile */
            "
            style={{
              // mobile sizing - smaller and more centered
              width: "clamp(300px, 80vw, 600px)",

              // mask: only paint inside the G shape (no box)
              WebkitMask: "url('/g-watermark.png') center / contain no-repeat",
              mask:       "url('/g-watermark.png') center / contain no-repeat",

              // teal fill with gentle depth
              background:
                "linear-gradient(180deg, rgba(32,203,219,.62) 0%, rgba(23,149,174,.50) 42%, rgba(7,61,76,.34) 100%)",

              // soft edge + a touch of glow
              filter: "drop-shadow(0 22px 58px rgba(30,208,226,.10)) blur(.15px)",
            }}
          />
        </div>

        {/* hero content above background */}
        <div className="relative z-10">
          <Hero />
        </div>
      </section>

      {/* Other sections */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#063C49]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F2F4] mb-4 sm:mb-6">
              About GRAVIT
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#E8F2F4]/80 max-w-3xl mx-auto px-4">
              We understand client requirements and provide solutions based on the problems. 
              Currently we make use of all 3rd party applications to fix the solutions for our clients problems.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#073D4C]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F2F4] mb-4 sm:mb-6">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#E8F2F4]/80 max-w-3xl mx-auto px-4">
              From elaborate Excel sheets to better managed tools, websites for companies, 
              systems and business practices - we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Technology Solutions",
                description: "Custom technology solutions tailored to your business needs."
              },
              {
                title: "Process Optimization",
                description: "Streamline your business processes with modern tools and systems."
              },
              {
                title: "Digital Transformation",
                description: "Transform your business with cutting-edge digital solutions."
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#042B35]/50 p-6 sm:p-8 rounded-2xl border border-[#17CFE3]/20 hover:border-[#17CFE3]/40 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E8F2F4] mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-[#E8F2F4]/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#042B35]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8F2F4] mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#E8F2F4]/80 mb-6 sm:mb-8 px-4">
              Ready to drive your business growth? Let's talk.
            </p>
            <button className="inline-flex items-center justify-center rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-[#17CFE3] text-slate-900 shadow-lg shadow-cyan-500/10 hover:brightness-110 transition w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
