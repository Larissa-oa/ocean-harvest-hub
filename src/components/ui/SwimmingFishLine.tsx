import blauweVis from "@/assets/Blauwe-vis.png";
import groeneVis from "@/assets/Groene-vis.png";

const FISH = [
  { src: blauweVis, alt: "", delay: 0, duration: 2.5, isGreen: false },
  { src: groeneVis, alt: "", delay: 0.4, duration: 2.8, isGreen: true },
  { src: blauweVis, alt: "", delay: 0.8, duration: 2.2, isGreen: false },
  { src: groeneVis, alt: "", delay: 0.2, duration: 3, isGreen: true },
  { src: blauweVis, alt: "", delay: 0.6, duration: 2.6, isGreen: false },
  { src: groeneVis, alt: "", delay: 0.1, duration: 2.4, isGreen: true },
  { src: blauweVis, alt: "", delay: 0.5, duration: 2.9, isGreen: false },
  { src: groeneVis, alt: "", delay: 0.3, duration: 2.3, isGreen: true },
  { src: blauweVis, alt: "", delay: 0.7, duration: 2.7, isGreen: false },
  { src: groeneVis, alt: "", delay: 0.9, duration: 2.5, isGreen: true },
  { src: blauweVis, alt: "", delay: 0.15, duration: 2.55, isGreen: false },
  { src: groeneVis, alt: "", delay: 0.45, duration: 2.75, isGreen: true },
];

export const SwimmingFishLine = () => {
  return (
    <div
      className="w-full min-w-full overflow-hidden bg-primary pt-5 pb-3 px-4 md:px-6 flex items-center justify-between gap-2 md:gap-2"
      style={{ width: "100%", boxSizing: "border-box" }}
      aria-hidden
    >
      {FISH.map((fish, i) => (
        <div
          key={i}
          className={`animate-swim flex-shrink-0 ${i >= 8 ? "hidden md:flex" : ""}`}
          style={{
            animationDelay: `${fish.delay}s`,
            animationDuration: `${fish.duration}s`,
          }}
        >
          <img
            src={fish.src}
            alt={fish.alt}
            className={`h-6 w-8 md:h-8 md:w-10 object-contain object-center opacity-50 ${fish.isGreen ? "scale-x-[-1]" : ""}`}
          />
        </div>
      ))}
    </div>
  );
};
