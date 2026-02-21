import ProjectsSlider from "../components/ProjectsSlider";

export default function ProjectPage() {
  return (
    <main className="min-h-svh px-5 sm:px-8 lg:px-18 py-14">
      <ProjectsSlider
        projects={[
          {
            id: 1,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          }
          ,
          {
            id: 2,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 3,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 4,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 5,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 6,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 7,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 8,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 9,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          },
          {
            id: 10,
            shots: [
              { src: "/assets/Reliable-Force-screen-shot-1.png" },
              { src: "/assets/Reliable-Force-screen-shot-2.png" },
              { src: "/assets/Reliable-Force-screen-shot-3.png" },
            ],
          }
          // add up to 10 projects here...
        ]}
      />
    </main>
  );
}
