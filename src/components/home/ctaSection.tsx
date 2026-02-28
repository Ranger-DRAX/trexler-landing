import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="container mx-auto max-w-5xl text-center font-family-inter">
        <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-black mb-6">
          Ready to transform your business?
        </h2>
        <p className="text-xl text-black mb-8 font-semibold">
          Partner with Trexler Technology Systems to build the future today.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-black
                hover:bg-gray-900 text-white font-semibold px-10 py-5 rounded-full
                  transition-all duration-300 transform hover:scale-105  "
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
