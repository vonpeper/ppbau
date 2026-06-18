"use client";

interface MarqueeProps {
  text?: string;
  speed?: string;
  rotation?: string;
}

export default function Marquee({ 
  text = "PEPE BAU • ESTAR CONTIGO • ORIGINAL POP ROCK • GUITARRAS ATMOSFÉRICAS • NUEVO SENCILLO • ",
  speed = "25s",
  rotation = "-1deg"
}: MarqueeProps) {
  // Repeat the text 4 times to fill horizontal screen space and avoid gaps on loop wrap
  const repeatText = Array(4).fill(text).join("");

  return (
    <div 
      className="marquee-wrapper" 
      style={{ 
        transform: `rotate(${rotation})`,
        animationDuration: speed
      }}
    >
      <div className="marquee-content">
        <span>{repeatText}</span>
        <span>{repeatText}</span>
      </div>
    </div>
  );
}
