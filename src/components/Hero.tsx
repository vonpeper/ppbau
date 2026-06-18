"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="inicio"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Background Parallax Image */}
      <div
        className="parallax-bg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%", // Extra height to allow room for parallax shifting
          zIndex: 1,
          opacity: 0.9,
        }}
      >
        <Image
          src="/images/hero_main_v2.jpg"
          alt="Pp Bau - Cantante, Guitarrista y Productor"
          fill
          priority
          unoptimized={true}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "right center", // Position to the right to keep the artist clear of text on the left
          }}
        />
        {/* Dark Premium Editorial Gradient Overlay: Solid dark on the left fading to transparent on the right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #0a0a0a 35%, rgba(10,10,10,0.45) 65%, rgba(10,10,10,0) 100%), linear-gradient(to bottom, rgba(10,10,10,0) 70%, #0a0a0a 100%)",
          }}
        />
      </div>

      {/* Floating neon glow circles */}
      <div className="glowing-bg glow-magenta" style={{ zIndex: 1, opacity: 0.08 }} />
      <div className="glowing-bg glow-red" style={{ zIndex: 1, opacity: 0.08, right: "10%" }} />

      {/* Hero Content */}
      <div
        className="container mobile-center-flex"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          className="animate-fade-in-up mobile-center-flex"
          style={{
            maxWidth: "700px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Main H1 for SEO compliance */}
          <h1 className="sr-only">
            Pepe Bau | Cantante, Guitarrista, Compositor y Productor Mexicano
          </h1>

          {/* Subtle Announcement tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "50px",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--accent-magenta)",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "var(--accent-magenta)",
                borderRadius: "50%",
                boxShadow: "0 0 8px var(--accent-magenta)",
              }}
            />
            Proyecto Solista 2026
          </div>

          {/* Main Title (Brand Logo in Light Version for dark background) */}
          <div style={{ margin: "10px 0" }}>
            <img
              src="/images/logo_light.png"
              alt="Pepe Bau Logo"
              style={{
                width: "100%",
                maxWidth: "min(360px, 85vw)",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Subtitle */}
          <h2
            className="hero-subtitle"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontFamily: "var(--font-heading)",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.85)",
              letterSpacing: "0.05em",
              borderLeft: "3px solid var(--accent-red)",
              paddingLeft: "16px",
            }}
          >
            Cantante <span style={{ color: "var(--accent-magenta)" }}>·</span> Guitarrista{" "}
            <span style={{ color: "var(--accent-magenta)" }}>·</span> Productor{" "}
            <span style={{ color: "var(--accent-magenta)" }}>·</span> Compositor
          </h2>

          {/* Intro paragraph snippet */}
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.65,
            }}
          >
            La evolución natural de una vida dedicada a la música. Fusionando la energía del pop rock contemporáneo con más de dos décadas de producción y escenarios.
          </p>

          {/* Action Buttons */}
          <div
            className="mobile-center-flex"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "12px",
            }}
          >
            <a href="#musica" className="btn btn-primary">
              Escuchar música
            </a>
            <a href="#sobre-mi" className="btn btn-secondary">
              Ver biografía
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: "20px",
            height: "32px",
            border: "2px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            className="scroll-dot"
            style={{
              width: "4px",
              height: "8px",
              backgroundColor: "var(--accent-magenta)",
              borderRadius: "2px",
              position: "absolute",
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollMove {
          0% { transform: translate(-50%, 0); opacity: 1; }
          50% { transform: translate(-50%, 8px); opacity: 0.3; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        .scroll-dot {
          animation: scrollMove 2s infinite ease-in-out;
        }
      `}</style>
    </header>
  );
}
