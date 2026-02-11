"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const mobileItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  // Controls the full-screen mobile menu overlay.
  const [open, setOpen] = useState(false);


  return (
  <header className="inset-x-0 top-0 z-50 w-full">
    {/* Mobile header : flat bar with logo + hamburger */}
      <div className="md:hidden w-full bg-trexler-dark px-4 py-4">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Trexler-Logo-Yellow.png"
              alt="Trexler Technology Systems"
              width={145}
              height={42}
              priority
              className="h-7 w-auto"
            />
          </Link>
          {/* Opens the full-screen mobile menu */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex items-center justify-center p-2 text-white/90"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop navbar : pill container with links + contact button */}
      <div className="hidden md:block px-2 sm:px-4 pt-4">
        <div className="mx-auto max-w-screen-2xl">
          <div
            className="relative flex w-full items-center justify-between
            rounded-full border border-gray-800 bg-trexler-dark
            px-3 py-2 shadow-lg backdrop-blur-lg 
            sm:px-4 sm:py-2.5
            md:px-10 md:py-4 
            lg:px-12
            mx-auto"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/Trexler-Logo-Yellow.png"
                alt="Trexler Technology Systems"
                width={145}
                height={40}
                priority
                className="h-8 w-auto sm:h-12 md:h-14 lg:h-16"
              />
            </Link>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-2 sm:gap-2 md:gap-6 lg:gap-10">
              <Link
                href="/#about"
                className="px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 lg:px-6 md:py-3 text-xs sm:text-sm font-medium text-white/90 rounded-full border-2 border-transparent hover:border-trexler-yellow transition-colors duration-300"
              >
                <span className="hidden sm:inline">About Us</span>
                <span className="sm:hidden">About</span>
              </Link>

              <Link
                href="/capabilities"
                className="px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 lg:px-6 md:py-3 text-xs sm:text-sm font-medium text-white/90 rounded-full border-2 border-transparent hover:border-trexler-yellow transition-colors duration-300"
              >
                Services
              </Link>

              <Link
                href="/projects"
                className="px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 lg:px-6 md:py-3 text-xs sm:text-sm font-medium text-white/90 rounded-full border-2 border-transparent hover:border-trexler-yellow transition-colors duration-300"
              >
                Projects
              </Link>
            </nav>

            {/* Desktop contact button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-trexler-yellow px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 text-xs sm:text-sm font-normal text-black shadow-sm transition hover:brightness-95"
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
            </Link>
          </div>
        </div>
      </div>


      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-999 bg-trexler-dark">
            <div className="relative flex h-full flex-col items-end px-2 py-5 gap-25">
              {/* Right-aligned column menu */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="self-end text-white p-2 mb-2"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* menu list */}
              <nav className="flex flex-col items-end gap-8 pr-4 ">
                {mobileItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-3xl font-sans transition ${
                      item.label === "Home" ? "text-trexler-yellow" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
      )}

    </header>
  );
}
