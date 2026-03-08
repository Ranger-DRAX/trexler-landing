"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TrexlerLogoYellow from "@/assets/logo/Trexler-Logo-Yellow.svg";

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
      <div className="bg-primary w-full px-4 py-4 md:hidden">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={TrexlerLogoYellow}
              alt="Trexler Technology Systems"
              width={145}
              height={42}
              priority
              className="h-10"
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
      <div className="hidden px-2 pt-4 sm:px-4 md:block">
        <div className="mx-auto max-w-screen-2xl">
          <div className="bg-primary relative mx-auto flex w-full items-center justify-between rounded-full border border-gray-800 px-3 py-2 shadow-lg backdrop-blur-lg sm:px-4 sm:py-2.5 md:px-10 md:py-4 lg:px-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/Trexler-Logo.png"
                alt="Trexler Technology Systems"
                width={145}
                height={40}
                priority
                className="h-8 w-auto sm:h-12 md:h-14 lg:h-16"
              />
            </Link>

            {/* Desktop links */}
            <nav className="hidden items-center gap-2 sm:gap-2 md:flex md:gap-6 lg:gap-10">
              <Link
                href="/#about"
                className="hover:border-accent rounded-full border-2 border-transparent px-2 py-1.5 text-xs font-medium text-white/90 transition-colors duration-300 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 lg:px-6"
              >
                <span className="hidden sm:inline">About Us</span>
                <span className="sm:hidden">About</span>
              </Link>

              <Link
                href="/capabilities"
                className="hover:border-accent rounded-full border-2 border-transparent px-2 py-1.5 text-xs font-medium text-white/90 transition-colors duration-300 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 lg:px-6"
              >
                Services
              </Link>

              <Link
                href="/projects"
                className="hover:border-accent rounded-full border-2 border-transparent px-2 py-1.5 text-xs font-medium text-white/90 transition-colors duration-300 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 lg:px-6"
              >
                Projects
              </Link>
            </nav>

            {/* Desktop contact button */}
            <Link
              href="/contact"
              className="bg-accent hidden items-center justify-center rounded-full px-3 py-1.5 text-xs font-normal text-black shadow-sm transition hover:brightness-95 sm:px-4 sm:py-2 sm:text-sm md:inline-flex md:px-6 md:py-2.5"
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="bg-primary fixed inset-0 z-999">
          <div className="relative flex h-full flex-col items-end gap-25 px-2 py-5">
            {/* Right-aligned column menu */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="mb-2 self-end p-2 text-white"
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
            <nav className="flex flex-col items-end gap-8 pr-4">
              {mobileItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-sans text-3xl transition ${
                    item.label === "Home" ? "text-accent" : "text-white"
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
