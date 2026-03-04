import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-accent px-4 py-20">
      <div className="font-family-inter container mx-auto max-w-5xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-black sm:text-4xl md:text-6xl">
          Ready to transform your business?
        </h2>
        <p className="mb-8 text-xl font-semibold text-black">
          Partner with Trexler Technology Systems to build the future today.
        </p>
        <Link
          href="/contact"
          className="inline-flex transform items-center gap-3 rounded-full bg-black px-10 py-5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
