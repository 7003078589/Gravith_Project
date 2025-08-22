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

        <div className="mt-auto px-4 py-6 text-xs text-white/60">
          © {new Date().getFullYear()} Gravit
        </div>
      </aside>
    </header>
  );
}
