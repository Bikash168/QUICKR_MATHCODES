import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-[#e9c49a] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* Left side - copyright */}
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} QUICKR MATHCODES. All rights reserved.
        </p>

        {/* Center - Quick links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
        </nav>

        {/* Right side - Social media icons */}
        <div className="flex justify-center md:justify-end gap-6 text-[#e9c49a]">
          {/* Facebook */}
          <a
            href="https://facebook.com/quickrmathcodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12a10 10 0 10-11.62 9.87v-6.98h-2.7v-2.9h2.7v-2.22c0-2.66 1.58-4.13 4-4.13 1.16 0 2.38.2 2.38.2v2.62h-1.34c-1.32 0-1.73.82-1.73 1.66v2.07h2.95l-.47 2.9h-2.48v6.98A10 10 0 0022 12z" />
            </svg>
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/quickrmathcodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.18 9.18 0 01-2.89 1.1A4.5 4.5 0 0016.17 0c-2.5 0-4.5 2.02-4.5 4.5 0 .35.04.7.11 1.03A12.8 12.8 0 013 1.67a4.49 4.49 0 001.4 6.02 4.37 4.37 0 01-2.04-.57v.06c0 2.15 1.53 3.95 3.56 4.36a4.52 4.52 0 01-2.02.08 4.5 4.5 0 004.2 3.13A9.06 9.06 0 012 19.54a12.76 12.76 0 006.92 2.02c8.3 0 12.84-6.86 12.84-12.8 0-.2 0-.4-.01-.6A9.18 9.18 0 0023 3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/quickrmathcodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5 2a5 5 0 11-4.999 5A5 5 0 0112 5.5zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/quickrmathcodes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4.98 3.5a2.5 2.5 0 11-.002 5.002 2.5 2.5 0 01.002-5.002zM3 8.98h4v11H3v-11zm7 0h3.6v1.54h.05c.5-.95 1.73-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75v6.7h-4v-5.93c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.53-2.25 3.1v6.03h-4v-11z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
