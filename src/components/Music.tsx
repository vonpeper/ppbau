"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Music() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play error: ", err));
      }
      setPlaying(!playing);
    }
  };

  return (
    <section id="musica" className="section-padding" style={{ position: "relative", overflow: "hidden", padding: "140px 0" }}>
      {/* Parallax Background Container */}
      <div
        className="parallax-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "130%", // Extra height for parallax movement
          zIndex: 1,
          opacity: 0.12, // Blend into page background
        }}
      >
        <Image
          src="/images/gallery_live_pointing.jpg"
          alt="Concierto en Vivo - Escenario Quimera"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            filter: "grayscale(100%) brightness(1.2)"
          }}
        />
        {/* Light Vignette Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, var(--background-solid) 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.3) 60%, var(--background-solid) 100%)",
          }}
        />
      </div>

      {/* Decorative lasers (SVG beam graphics for pop rock concert vibe) */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: 0,
          width: "100%",
          height: "80%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.3 }}>
          {/* Laser beam vectors */}
          <line x1="0" y1="600" x2="600" y2="0" stroke="url(#laser-magenta)" strokeWidth="3" />
          <line x1="1440" y1="600" x2="840" y2="0" stroke="url(#laser-red)" strokeWidth="3" />
          <line x1="720" y1="600" x2="720" y2="0" stroke="url(#laser-magenta-2)" strokeWidth="1" strokeDasharray="5 5" />
          
          <defs>
            <linearGradient id="laser-magenta" x1="0" y1="600" x2="600" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4B5D4E" />
              <stop offset="1" stopColor="#4B5D4E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="laser-red" x1="1440" y1="600" x2="840" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5C483C" />
              <stop offset="1" stopColor="#5C483C" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="laser-magenta-2" x1="720" y1="600" x2="720" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4B5D4E" />
              <stop offset="1" stopColor="#4B5D4E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div className="section-header scroll-fade-in js-scroll-element">
          <span className="section-subtitle" style={{ textShadow: "0 0 12px var(--accent-magenta-glow)" }}>
            Nuevo Lanzamiento
          </span>
          <h2 className="section-title">Música Nueva</h2>
        </div>

        {/* Music Single Launchboard Billboard */}
        <div
          className="launch-billboard scroll-scale-in js-scroll-element"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(75, 93, 78, 0.3)",
            borderRadius: "24px",
            padding: "48px",
            boxShadow: "0 10px 40px rgba(92, 75, 62, 0.08)",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Interactive Spinning Vinyl Disk */}
          {/* Left Column: Interactive Spinning Vinyl Disk & Audio Player */}
          <div className={`vinyl-container ${playing ? "playing" : ""}`}>
            {/* HTML5 Audio Element */}
            <audio 
              ref={audioRef} 
              src="/audio/Pepe Bau - Estar Contigo.mp3" 
              loop 
              onEnded={() => setPlaying(false)}
              crossOrigin="anonymous"
            />

            {/* Vinyl disk that slides out on hover/play */}
            <div className="vinyl-disk">
              <div className="vinyl-label">
                <div className="vinyl-center-hole" />
              </div>
            </div>
            
            {/* Sleeve cover */}
            <div className="vinyl-sleeve" style={{ position: "relative" }}>
              <Image
                src="/images/estar_contigo_v2.png"
                alt="Estar Contigo - Pepe Bau Single"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
              
              {/* Glassmorphic Play/Pause Button Overlay */}
              <button
                onClick={togglePlay}
                aria-label={playing ? "Pausar música" : "Escuchar adelanto"}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 3,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                className="vinyl-play-btn"
              >
                {playing ? (
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                ) : (
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16" style={{ transform: "translateX(2px)" }}>
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                  </svg>
                )}
              </button>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  boxShadow: "inset 0 0 40px rgba(0,0,0,0.15)",
                  pointerEvents: "none",
                  zIndex: 2
                }}
              />
            </div>
          </div>

          {/* Right Column: Descriptions & Pre-save CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              {/* Release date badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 16px",
                  borderRadius: "50px",
                  backgroundColor: "rgba(92, 75, 62, 0.1)",
                  border: "1px solid rgba(92, 75, 62, 0.25)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--accent-red)",
                  letterSpacing: "0.08em",
                  marginBottom: "16px",
                }}
              >
                Lanzamiento Solista · Noviembre 2026
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.8rem",
                  color: "var(--foreground)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Estar <span className="gradient-text-magenta-red">contigo</span>
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--foreground-muted)",
                  marginTop: "16px",
                  lineHeight: 1.6,
                }}
              >
                Una balada pop-rock de energía arrolladora, guitarras atmosféricas y lírica profunda. &quot;Estar contigo&quot; captura la esencia melódica del pop contemporáneo con la crudeza interpretativa de Pepe Bau, forjando una propuesta de nivel y proyección internacional.
              </p>
            </div>

            {/* Simulated Live Audio Wave visualizer details */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--foreground-muted)", fontSize: "0.85rem" }}>
              <span style={{ display: "flex", gap: "2px" }}>
                {[6, 12, 18, 8, 14, 10, 4].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      width: "3px",
                      height: `${h}px`,
                      backgroundColor: "var(--accent-magenta)",
                      borderRadius: "1px",
                      animation: "waveAnim 1.2s infinite ease-in-out",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </span>
              <span>Audio en proceso de masterización final</span>
            </div>

            {/* Coming Soon Status Indicator */}
            <div>
              <div
                style={{
                  padding: "16px 28px",
                  borderRadius: "50px",
                  backgroundColor: "rgba(100, 74, 64, 0.05)",
                  border: "1.5px dashed var(--primary)",
                  color: "var(--primary)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Próximamente
              </div>
            </div>

            {/* Platforms list */}
            <div
              className="music-platforms-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
                borderTop: "1px solid rgba(45, 63, 52, 0.12)",
                fontSize: "0.85rem",
                color: "var(--foreground-muted)",
              }}
            >
              <span>Disponible en:</span>
              <div className="music-platforms-list" style={{ display: "flex", gap: "20px" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }} className="platform-tag">
                  Spotify
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }} className="platform-tag">
                  Apple Music
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }} className="platform-tag">
                  YouTube
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .platform-tag {
          transition: var(--transition-smooth);
        }
        .platform-tag:hover {
          color: var(--foreground) !important;
        }
        @media (max-width: 991px) {
          .launch-billboard {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
