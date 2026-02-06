import schmidtFish from "@/assets/schmidt-fish.png";

/** Fish icon (Schmidt fish) in primary blue, flipped to face left. Use className for size, e.g. h-4 w-4 */
export const FishIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <span
    className={`inline-block flex-shrink-0 ${className}`}
    style={{
      WebkitMaskImage: `url(${schmidtFish})`,
      WebkitMaskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskImage: `url(${schmidtFish})`,
      maskSize: "contain",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      backgroundColor: "#193A54",
      transform: "scaleX(-1)",
    }}
    aria-hidden
  />
);
