"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="inset-x-0 top-0 z-50 w-full px-2 sm:px-4 pt-4">
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
          <Link href="/" className="flex items-center gap-2 ">
            <Image
              src="/assets/Trexler-Logo-Yellow.png"
              alt="Trexler Technology Systems"
              width={145}
              height={42}
              priority
              className="h-6 w-auto sm:h-7 md:h-8 lg:h-9"
            />
          </Link>

          {/* Responsive links */}
          <nav className="flex items-center gap-2 sm:gap-2 md:gap-6 lg:gap-10 xl:gap-30">
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

          {/* Contact button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-trexler-yellow px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 text-xs sm:text-sm font-normal text-black shadow-sm transition hover:brightness-95"
          >
            <span className="hidden sm:inline">Contact Us</span>
            <span className="sm:hidden">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}