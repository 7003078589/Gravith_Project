import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#17CFE3] font-bold text-white">G</span>
          <span className="text-white font-semibold tracking-wide">GRAVIT</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-white/90">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#cta" className="rounded-lg bg-[#17CFE3] px-4 py-2 font-medium text-slate-900 hover:bg-[#17CFE3]/90">
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20"
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
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#17CFE3] font-bold text-white">G</span>
            <span className="text-white font-semibold tracking-wide">GRAVIT</span>
          </div>
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

        <nav className="mt-2 grid gap-3 px-4 text-lg">
          <a 
            ref={firstLinkRef} 
            href="#home" 
            className="rounded-md px-2 py-2 text-white hover:bg-white/10" 
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="rounded-md px-2 py-2 text-white hover:bg-white/10" 
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="rounded-md px-2 py-2 text-white hover:bg-white/10" 
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="rounded-md px-2 py-2 text-white hover:bg-white/10" 
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#cta" 
            className="mt-2 rounded-md bg-[#17CFE3] px-3 py-2 text-slate-900 font-semibold hover:bg-[#17CFE3]/90" 
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </nav>

        <div className="mt-auto px-4 py-6 text-xs text-white/60">
          © {new Date().getFullYear()} Gravit
        </div>
      </aside>
    </header>
  );
}
