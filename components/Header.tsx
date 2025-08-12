"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sections = [
  "home",
  "aboutus",
  "features",
  "services",
  "courses",
  "howitworks",
  "whydifferent",
  "testimonials",
  "contact",
  "cta",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top - 80 && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "aboutus", label: "About Us" },
    { id: "features", label: "Features" },
    { id: "services", label: "Services" },
    { id: "courses", label: "Courses" },
    { id: "howitworks", label: "How It Works" },
    { id: "whydifferent", label: "Why Different" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Us" },
    { id: "cta", label: "Get Started", isButton: true },
  ];

  return (
    <header className="w-full bg-black shadow fixed top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center md:px-8">
        {/* Logo */}
        <div className="relative h-12 w-36 md:h-16 md:w-48 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="QUICKR MATHCODES"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) =>
            link.isButton ? (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="bg-[#e9c49a] text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[#e9c49a] cursor-pointer hover:text-gray-400 transition ${
                  activeSection === link.id
                    ? "font-bold underline underline-offset-4"
                    : ""
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 focus:outline-none focus:ring-2 focus:ring-[#e9c49a] rounded"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6 text-[#e9c49a]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-[#e9c49a]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden px-4 pb-4 overflow-hidden transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className={`flex flex-col space-y-4 ${isOpen ? "opacity-100" : "opacity-0"} text-[#e9c49a] text-base`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.isButton ? (
                <a
                  href={`#${link.id}`}
                  className="block bg-[#e9c49a] text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={`#${link.id}`}
                  className={`block hover:text-gray-400 ${
                    activeSection === link.id ? "font-bold underline underline-offset-4" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
