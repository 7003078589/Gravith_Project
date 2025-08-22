import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLinkRef = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Move focus into drawer on open (basic focus trap)
  useEffect(() => {
    if (open && firstLinkRef.current) firstLinkRef.current.focus();
  }, [open]);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#042B35]/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <a href="#home">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            className="relative text-white/90 hover:text-white transition-colors duration-200 group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17CFE3] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a 
            href="#about" 
            className="relative text-white/90 hover:text-white transition-colors duration-200 group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17CFE3] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a 
            href="#services" 
            className="relative text-white/90 hover:text-white transition-colors duration-200 group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17CFE3] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            className="relative text-white/90 hover:text-white transition-colors duration-200 group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17CFE3] transition-all duration-200 group-hover:w-full"></span>
          </a>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/20">
            <a 
              href="https://linkedin.com/company/gravit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#17CFE3] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/gravit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#17CFE3] transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/gravit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#17CFE3] transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.369-.315-.49-.753-.49-1.243 0-.49.121-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.369.315.49.753.49 1.243 0 .49-.121.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-200"
          aria-label="Open menu"
          aria-controls="mobile-drawer"
          aria-expanded={open}
        >
          {/* Hamburger icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        id="mobile-drawer"
        className={`fixed right-0 top-0 z-50 h-dvh w-80 max-w-[85vw] transform bg-[#042B35]/95 backdrop-blur-md ring-1 ring-white/10 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Menu"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-2 grid gap-1 px-4 text-lg">
          <a 
            ref={firstLinkRef} 
            href="#home" 
            className="rounded-lg px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center group" 
            onClick={() => setOpen(false)}
          >
            <span className="w-1 h-1 bg-[#17CFE3] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            Home
          </a>
          <a 
            href="#about" 
            className="rounded-lg px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center group" 
            onClick={() => setOpen(false)}
          >
            <span className="w-1 h-1 bg-[#17CFE3] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            About
          </a>
          <a 
            href="#services" 
            className="rounded-lg px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center group" 
            onClick={() => setOpen(false)}
          >
            <span className="w-1 h-1 bg-[#17CFE3] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            Services
          </a>
          <a 
            href="#contact" 
            className="rounded-lg px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center group" 
            onClick={() => setOpen(false)}
          >
            <span className="w-1 h-1 bg-[#17CFE3] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            Contact
          </a>
        </nav>

        {/* Mobile Social Media */}
        <div className="mt-auto px-4 py-6">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a 
              href="https://linkedin.com/company/gravit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#17CFE3] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/gravit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#17CFE3] transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/gravit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#17CFE3] transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.369-.315-.49-.753-.49-1.243 0-.49.121-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.369.315.49.753.49 1.243 0 .49-.121.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
              </svg>
            </a>
          </div>
          <div className="text-center text-xs text-white/60">
            © {new Date().getFullYear()} Gravit
          </div>
        </div>
      </aside>
    </header>
  );
}
