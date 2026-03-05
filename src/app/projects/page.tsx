"use client";

import { useMemo, useState } from "react";
import ProjectsSlider, {
  type ProjectSlide,
} from "@/components/projects/ProjectsSlider";
import ProjectDescribe, {
  type DescribeData,
} from "@/components/projects/ProjectDescribe";

import slideContentImage1 from "@/assets/slide-content/Reliable-Force-screen-shot-1.png";
import slideContentImage2 from "@/assets/slide-content/Reliable-Force-screen-shot-2.png";
import slideContentImage3 from "@/assets/slide-content/Reliable-Force-screen-shot-3.png";

type Project = ProjectSlide & { describe: DescribeData };

const projects: Project[] = [
  {
    id: 1,
    shots: [
      { src: slideContentImage1.src },
      { src: slideContentImage2.src },
      { src: slideContentImage3.src },
    ],
    describe: {
      number: "01",
      categories: ["Website", "Company Profile"],
      title: "Reliable Force",
      client: "Reliable Force Co.",
      services: "Full Stack, Cloud, UI/UX",
      timeline: "3 Months",
      tools: ["Figma", "Next.js", "Tailwind", "CMS"],

      context: [
        "Reliable Force is a multifaceted leader providing comprehensive solutions across business consultation, trading, services, construction, and manpower supply.",
      ],
      context_2: [
        "We were tasked with building a unified “Digital Nerve Center”—a high-performance ecosystem capable of managing diverse service lines while providing real-time data visibility to corporate stakeholders and field operators alike.",
      ],
      deliverables: [
        "Corporate Identity",
        "Scalable Infrastructure",
        "Resource Management",
      ],
      impact: ["45% Efficiency Gain", "Real-time Monitoring"],
      challengeIntro:
        "Need for accurate, real-time health tracking and personalized daily insights for company profile website.",
      challengeBullets: [
        "Data Silos: Six different departments using incompatible software platforms.",
        "Scale Issues: Latency in reporting prevented agile decision-making during peak construction cycles.",
        "Security: Managing sensitive manpower data across multiple legal jurisdictions.",
      ],

      solutionIntro:
        "Our approach centered on a Next.js architecture with a centralized database hosted on cloud infrastructure.",
      solutionBullets: [
        "Created a unified dashboard with modular widgets for different business units.",
        "Real-time logistics tracking integrated with field manpower mobile apps.",
        "Encrypted storage for secure document handling and compliance.",
      ],

      testimonial: {
        rating: 5.0,
        quote:
          "Working with Trexler felt like working with an internal team. Communication was clear, the process was smooth, and the result was exactly what we needed.",
        name: "Jean Goldfish",
        role: "Director of Operations",
        company: "Reliable Force Co.",
      },
    },
  },
  {
    id: 2,
    shots: [
      { src: slideContentImage1.src },
      { src: slideContentImage2.src },
      { src: slideContentImage3.src },
    ],
    describe: {
      number: "02",
      categories: ["Website", "Company Profile"],
      title: "Reliable Force",
      client: "Reliable Force Co.",
      services: "Full Stack, Cloud, UI/UX",
      timeline: "3 Months",
      tools: ["Figma", "Next.js", "Tailwind", "CMS"],

      context: [
        "Reliable Force is a multifaceted leader providing comprehensive solutions across business consultation, trading, services, construction, and manpower supply.",
      ],
      context_2: [
        "We were tasked with building a unified “Digital Nerve Center”—a high-performance ecosystem capable of managing diverse service lines while providing real-time data visibility to corporate stakeholders and field operators alike.",
      ],
      deliverables: [
        "Corporate Identity",
        "Scalable Infrastructure",
        "Resource Management",
      ],
      impact: ["45% Efficiency Gain", "Real-time Monitoring"],

      challengeIntro:
        "Need for accurate, real-time health tracking and personalized daily insights for company profile website.",
      challengeBullets: [
        "Data Silos: Six different departments using incompatible software platforms.",
        "Scale Issues: Latency in reporting prevented agile decision-making during peak construction cycles.",
        "Security: Managing sensitive manpower data across multiple legal jurisdictions.",
      ],

      solutionIntro:
        "Our approach centered on a Next.js architecture with a centralized database hosted on cloud infrastructure.",
      solutionBullets: [
        "Created a unified dashboard with modular widgets for different business units.",
        "Real-time logistics tracking integrated with field manpower mobile apps.",
        "Encrypted storage for secure document handling and compliance.",
      ],

      testimonial: {
        rating: 5.0,
        quote:
          "Working with Trexler felt like working with an internal team. Communication was clear, the process was smooth, and the result was exactly what we needed.",
        name: "Jean Goldfish",
        role: "Director of Operations",
        company: "Reliable Force Co.",
      },
    },
  },
  // Add projects 02..10 here (shots + describe)
];

export default function ProjectPage() {
  const [activeProject, setActiveProject] = useState(0);

  const current = useMemo(
    () => projects[activeProject] ?? projects[0],
    [activeProject],
  );

  return (
    <main className="min-h-svh space-y-14 px-5 py-14 sm:px-8 lg:px-18">
      <ProjectsSlider projects={projects} onProjectChange={setActiveProject} />
      <ProjectDescribe data={current.describe} />
    </main>
  );
}
