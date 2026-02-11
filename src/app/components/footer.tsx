"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white font-family-inter">
      <div className="h-1 w-full bg-trexler-yellow" />
      {/* content */}
      <div className="mx-auto w-full max-h-screen px-6 lg:px-20">

        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-12 lg:gap-10">
          {/* Left: logo + description + socials */}
          <div className="lg:col-span-3 text-center lg:text-left flex flex-col items-center lg:items-start">


          <Link href="/" className="inline-flex items-center">

          <Image
                src="/assets/Trexler-Logo-black.png"
                alt="Trexler"
                width={220}
                height={60}
                priority
                className="h-11 w-auto" 
              />
            </Link>

            <p className="mt-6 max-w-[320px] text-[14px] leading-6 text-gray-500">
              Building Tomorrow&apos;s Solutions Today. A premier technology consulting
              firm for high-quality enterprise software.
            </p>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              {[
                {
                  href: "https://instagram.com",
                  label: "Instagram",
                  icon: "/assets/Instagram-logo.png",
                },
                { href: "https://twitter.com", label: "X", icon: "/assets/X-logo.png" },
                {
                  href: "https://facebook.com",
                  label: "Facebook",
                  icon: "/assets/facebook-logo.png",
                },
                {
                  href: "https://youtube.com",
                  label: "YouTube",
                  icon: "/assets/youtube-logo.png",
                },
                {
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  icon: "/assets/linekedin-logo.png",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md"
                >
                  <Image src={s.icon} alt={s.label} width={30} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Middle: Navigations */}
          <div className="lg:col-span-2 ">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-gray-900 text-center lg:text-left">
              NAVIGATIONS
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-3 text-[14px] text-gray-700 lg:block lg:space-y-4">
              <li>
                <Link href="/#about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gray-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Global Offices */}
          <div className="lg:col-span-7">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-gray-900 text-center lg:text-left">
              GLOBAL OFFICES
            </p>

            <div className="mt-6 grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-3 text-center lg:text-left">
              {/* US */}
              <div>
                <p className="text-[14px] font-semibold text-gray-900">United States</p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-trexler-yellow">
                  Headquarters
                </p>
                <p className="mt-3 text-[14px] leading-6 text-gray-700">
                  254 Chapman Rd, Ste 208 #10548
      
                  Newark, Delaware 19702
                </p>
              </div>

              {/* Indonesia */}
              
              <div>
                <p className="text-[14px] font-semibold text-gray-900">Indonesia</p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-trexler-yellow">
                  Regional Office
                </p>
                <p className="mt-3 text-[14px] leading-6 text-gray-700">
                  Bantul, Yogyakarta
                </p>
              </div>

              {/* Bangladesh */}
              <div>
                <p className="text-[14px] font-semibold text-gray-900">Bangladesh</p>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-trexler-yellow">
                  Regional Office
                </p>
                <p className="mt-3 text-[14px] leading-6 text-gray-700">
                  Mohammadpur, Dhaka
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Divider (thin grey line) */}
        <div className="h-px w-full bg-gray-400" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center text-center gap-4 py-10 text-[14px] text-gray-600 md:flex-row md:text-left md:items-center md:justify-between">
          <p>© 2025 Trexler Technology Systems. All rights reserved.</p>

          <div className="flex items-center justify-center gap-12 md:gap-16">
            <Link href="/privacy-policy" className="hover:text-gray-950">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-950">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
