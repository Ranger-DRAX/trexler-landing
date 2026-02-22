import React from "react";

export type DescribeData = {
  number: string; // "01"
  categories: string[]; // ["Website", "Company Profile"]
  title: string; // reliable force
  client: string; // Reliable Force Co.
  services: string; // Full Stack, Cloud, UI/UX
  timeline: string; //3 Months
  tools: string[]; // ["Figma", "Next.js", "Tailwind", "CMS"]    

  context: string[];
  context_2: string[]; // optional second context section
  deliverables: string[];
  impact:  string[];

  challengeIntro: string;
  challengeBullets: string[];

  solutionIntro: string;
  solutionBullets: string[];

  testimonial: {
    rating: number; // 0-5
    quote: string;
    name: string;
    role: string;
    company: string;
  };
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
    className="rounded-full bg-[#E6E6E6] px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-[#111]">
      {children}
    </span>
  );
}

function ToolChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border
     border-[#c7c9cf] bg-white px-3 py-1 text-xs sm:text-sm font-medium  text-[#354c76] hover:bg-gray-50">
      {children}
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-lg text-trexler-dark">
      <span className=" text-orange-600 text-xl">✓</span>
      <span className="text-base">{children}</span>
    </li>
  );
}

function UpItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-lg text-trexler-dark">
      <span className="-mt-1 text-green-600 text-xl">↑</span>
      <span>{children}</span>
    </li>
  );
}

function IconBox({ variant }: { variant: "challenge" | "solution" }) {
  const isChallenge = variant === "challenge";
  return (
    <div className=" flex">
      {isChallenge ? (
        <div className="relative h-10 w-10">
          <span className="absolute inset-0 rounded-full border-4 border-trexler-yellow" />
          <span className="absolute inset-2 rounded-full border-4 border-trexler-yellow" />
          <span className="absolute inset-4 rounded-full border-4 border-trexler-yellow" />
        </div>
        
      ) : (
        <div className="grid h-10 w-10 place-items-center rounded-4xl bg-trexler-blue border-black/10">
        <span className="text-white text-2xl">✓</span>
        </div>
      )}
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={i < full ? "text-orange-500" : "text-black/15"}
          fill="currentColor"
>
          <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.9-.5L12 3.25 9.9 8.74 4 9.24l4.46 5.26-1.64 5.81L12 17.27z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProjectDescribe({ data }: { data: DescribeData }) {
  return (
    <section className="mx-auto w-full max-w-[1500px] font-family-inter">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[50px] lg:min-h-[1192px]">
        {/* Left Number Block */}
        <div className="shrink-0">
          <div className="w-[120px] h-[200px] rounded-3xl bg-trexler-yellow flex items-start justify-start p-5 ">
            <span className="text-6xl font-extrabold text-black">{data.number}</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 w-full">
          {/* Categories  with pill */}
          <div className="flex flex-wrap items-center gap-3 text-trexler-dark">
            {data.categories?.[0] && 
              <Pill>
                {data.categories[0]}
              </Pill>
            }

            {/* Remaining categories without pill */}
            {data.categories?.slice(1).map((cat, idx) => (
                <span
                key={`${cat}-${idx}`}
                className="text-xs sm:text-sm font-medium text-trexler-dark"
                >
                {cat}
                </span>
            ))}

          </div>

          {/* Title */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-trexler-dark">
            {data.title}
          </h2>

          {/* Meta row */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">Client</p>
              <p className="mt-2 text-2xl font-base text-gray-600">{data.client}</p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">Services</p>
              <p className="mt-2 text-2xl font-base text-gray-600">{data.services}</p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">Timeline</p>
              <p className="mt-2 text-2xl font-base text-gray-600">{data.timeline}</p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-trexler-dark">Tools</p>
              <div className="mt-2 flex flex-wrap gap-2 ">
                {data.tools.map((t) => (
                  <ToolChip key={t}>{t}</ToolChip>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-gray-300" />

          {/* Context */}
          <h3 className="mt-10 text-3xl font-bold text-trexler-dark">The Context</h3>
          <div className="mt-4 space-y-4 text-xl leading-6 text-black/60">
            {data.context.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-4 space-y-4 text-xl leading-6 text-trexler-dark">
            {data.context_2.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Deliverables + Impact */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="text-xl font-bold text-trexler-dark">Deliverables</p>
              <ul className="mt-4 space-y-2 ">
                {data.deliverables.map((d) => (
                  <CheckItem key={d}>{d}</CheckItem>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xl font-bold text-trexler-dark">Impact</p>
              <ul className="mt-4 space-y-2">
                {data.impact.map((m) => (
                  <UpItem key={m}>{m} </UpItem>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full bg-gray-300" />

          {/* Challenge */}
          <div className="mt-10 flex gap-6">
            <IconBox variant="challenge" />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-black">Challenge</h4>
              <p className="mt-2 text-lg text-trexler-dark ">{data.challengeIntro}</p>
              <ul className="mt-2 list-disc px-7 space-y-1 text-base text-trexler-dark">
                {data.challengeBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="mt-10 flex gap-6">
            <IconBox variant="solution" />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-black">Solution</h4>
              <p className="mt-2 text-lg text-trexler-dark">{data.solutionIntro}</p>
              <ul className="mt-2 list-disc px-7 space-y-1  text-base text-trexler-dark">
                {data.solutionBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-10 rounded-3xl bg-black/5 p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-black/70">{data.testimonial.rating.toFixed(1)}</span>
              <Stars rating={data.testimonial.rating} />
            </div>

            <p className="mt-5 text-lg sm:text-xl font-semibold italic text-black/80">
              “{data.testimonial.quote}”
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="text-lg font-bold text-black ">{data.testimonial.name}</span>
              <span className="text-black/30">|</span>
              <span className="text-sm font-medium text-black/50">
                {data.testimonial.role}, {data.testimonial.company}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}