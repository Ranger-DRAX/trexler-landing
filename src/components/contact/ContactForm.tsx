"use client";

export default function ContactForm() {
  return (
    <main className="bg-white px-4 pt-5 pb-4 md:px-10 md:pt-8 md:pb-25">
      <section className="font-family-inter mx-auto w-full max-w-screen-2xl rounded-3xl bg-[#f3f3f3] p-8 md:p-10">
        <div className="grid gap-2 md:grid-cols-[320px_1fr]">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-widest text-black/70">
              GET IN TOUCH
            </p>

            <h1 className="pb-8 text-4xl leading-[1.05] font-extrabold text-black md:text-5xl">
              Let’s <br />
              start our <br />
              project.
            </h1>
          </div>

          {/* Right form */}
          <form className="space-y-6">
            {/* Top row */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="">
                <label className="block text-sm font-semibold text-black/80">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 h-11 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-black ring-0 outline-none focus:border-[#f3c969] md:mt-2"
                />
              </div>

              <div className="">
                <label className="text-sm font-semibold text-black/80 md:px-2">
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 h-11 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-black ring-0 outline-none focus:border-[#f3c969] md:mt-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-black/80 md:px-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="mt-2 h-11 w-full rounded-xl border border-transparent bg-white px-4 text-sm text-black outline-none focus:border-[#f3c969] md:mt-2"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-black/80 md:px-2">
                Message
              </label>

              <div className="mt-2 rounded-2xl bg-white p-4 px-2 md:mt-2 md:px-2">
                <textarea
                  rows={5}
                  placeholder="Describe your project"
                  className="w-full resize-none bg-transparent text-sm text-black outline-none"
                  maxLength={2000}
                />
                <div className="mt-2 text-right text-xs text-black/40">
                  0/2000
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
