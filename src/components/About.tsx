"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Track {
  id: string;
  trackNo: string;
  title: string;
  plays: string;
  duration: string;
  audioUrl?: string;
  isUpcoming?: boolean;
}

export default function About() {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [showBioModal, setShowBioModal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const popularTracks: Track[] = [
    { id: "estar-contigo", trackNo: "1", title: "Estar Contigo (Preview)", plays: "Escuchar adelanto", duration: "0:45", audioUrl: "/audio/Pepe Bau - Estar Contigo.mp3" },
    { id: "pacto", trackNo: "2", title: "Pacto", plays: "Próximamente", duration: "--", isUpcoming: true },
    { id: "a-ti-tal-vez", trackNo: "3", title: "A ti tal vez", plays: "Próximamente", duration: "--", isUpcoming: true },
    { id: "el-triste", trackNo: "4", title: "El Triste (Cover)", plays: "Próximamente", duration: "--", isUpcoming: true },
  ];

  const toggleTrack = (track: Track) => {
    if (!track.audioUrl) {
      // For simulated tracks without real audio files, we just simulate play/pause toggle
      if (playingTrackId === track.id) {
        setPlayingTrackId(null);
      } else {
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setPlayingTrackId(track.id);
      }
      return;
    }

    if (audioRef.current) {
      if (playingTrackId === track.id) {
        audioRef.current.pause();
        setPlayingTrackId(null);
      } else {
        audioRef.current.src = track.audioUrl;
        audioRef.current.play().catch((err) => console.log("Audio play error: ", err));
        setPlayingTrackId(track.id);
      }
    }
  };

  // Stop audio if modal opens/closes, or clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <section id="sobre-mi" className="section-padding alternate-section" style={{ overflow: "hidden" }}>
      {/* Background ambient glows */}
      <div className="glowing-bg glow-red" style={{ top: "15%", left: "10%", opacity: 0.05 }} />
      <div className="glowing-bg glow-magenta" style={{ bottom: "15%", right: "10%", opacity: 0.05 }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header scroll-fade-in js-scroll-element" style={{ marginBottom: "50px" }}>
          <span className="section-subtitle" style={{ textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--primary)" }}>
            Perfil Oficial
          </span>
          <h2 className="section-title">El Artista</h2>
        </div>

        {/* Local audio player element */}
        <audio
          ref={audioRef}
          onEnded={() => setPlayingTrackId(null)}
          loop
          crossOrigin="anonymous"
        />

        {/* Spotify Verified Artist Profile Card */}
        <div className="spotify-profile-header scroll-fade-in js-scroll-element">
          
          {/* Header Row: Circular Avatar, Verified Badge, Artist Name, Metrics */}
          <div
            className="spotify-profile-header-top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
              borderBottom: "1px solid rgba(100, 74, 64, 0.15)",
              paddingBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            {/* Round Avatar Picture */}
            <div
              style={{
                position: "relative",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #FFFFFF",
                boxShadow: "0 10px 30px rgba(100, 74, 64, 0.12)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/bio_portrait_official.jpg"
                alt="Pepe Bau - Retrato Oficial"
                fill
                sizes="150px"
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />
            </div>

            {/* Title Details */}
            <div style={{ flex: 1, minWidth: "250px" }}>
              <div className="spotify-verified-badge-row" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span className="spotify-verified-badge">
                  <svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                  </svg>
                  Artista Verificado
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3.2rem",
                  fontWeight: 850,
                  color: "var(--foreground)",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  margin: "4px 0 10px 0",
                }}
              >
                Pepe Bau
              </h3>
              <div
                className="spotify-details-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--foreground-muted)",
                }}
              >
                <span>Proyecto Solista Pop Rock</span>
                <span style={{ opacity: 0.4 }}>•</span>
                <span>Toluca, EdoMex</span>
              </div>
            </div>
          </div>

          {/* Profile Content Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "40px",
              marginTop: "40px",
            }}
            className="spotify-profile-grid"
          >
            {/* Left Side: Popular Tracks Player */}
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--foreground)",
                  marginBottom: "20px",
                  letterSpacing: "0.02em",
                }}
              >
                Populares
              </h4>

              {/* Tracks List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {popularTracks.map((track) => {
                  const isCurrentPlaying = playingTrackId === track.id;
                  
                  return (
                    <div
                      key={track.id}
                      onClick={() => !track.isUpcoming && toggleTrack(track)}
                      className={`spotify-track-row ${isCurrentPlaying ? "active" : ""} ${track.isUpcoming ? "upcoming" : ""}`}
                      style={track.isUpcoming ? { opacity: 0.5, cursor: "default" } : {}}
                    >
                      {/* Track index or play/pause button on hover */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="spotify-track-number" style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.5 }}>
                          {track.trackNo}
                        </span>
                        {!track.isUpcoming && (
                          <span className="spotify-play-icon">
                            {isCurrentPlaying ? (
                              <svg width="14" height="14" fill="var(--accent-magenta)" viewBox="0 0 16 16">
                                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                              </svg>
                            ) : (
                              <svg width="14" height="14" fill="var(--primary)" viewBox="0 0 16 16">
                                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                              </svg>
                            )}
                          </span>
                        )}
                      </div>

                      {/* Track Title & Visualizer */}
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", overflow: "hidden" }}>
                        <span style={{ fontWeight: 700, fontSize: "0.95rem", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                          {track.title}
                        </span>
                        {isCurrentPlaying && (
                          <div style={{ display: "flex", gap: "2px", alignItems: "center", height: "12px" }}>
                            {[1, 2, 3, 4].map((i) => (
                              <span
                                key={i}
                                style={{
                                  width: "2px",
                                  height: "100%",
                                  backgroundColor: "var(--accent-magenta)",
                                  borderRadius: "1px",
                                  animation: "waveAnim 1s infinite ease-in-out",
                                  animationDelay: `${i * 0.15}s`,
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Stream Count / Status */}
                      <span style={{ fontSize: "0.85rem", opacity: 0.6, fontWeight: 700, textAlign: "right" }}>
                        {track.plays}
                      </span>

                      {/* Duration */}
                      <span style={{ fontSize: "0.85rem", opacity: 0.6, fontWeight: 500, textAlign: "right" }}>
                        {track.duration}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side: Artist Pick & Bio Summary Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              
              {/* Artist Pick */}
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--foreground)",
                    marginBottom: "16px",
                    letterSpacing: "0.02em",
                  }}
                >
                  Selección del artista
                </h4>

                <div className="spotify-artist-pick">
                  {/* Square cover thumb */}
                  <div
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "80px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/estar_contigo_v2.png"
                      alt="Estar Contigo"
                      fill
                      sizes="80px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  {/* Pick Description details */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", color: "var(--accent-red)", letterSpacing: "0.05em" }}>
                      Nuevo Lanzamiento
                    </div>
                    <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--foreground)" }}>Estar contigo</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--foreground-muted)", lineHeight: "1.3" }}>
                      Escucha el preview de nuestro primer sencillo solista.
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Preview Card */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  border: "1px solid rgba(100, 74, 64, 0.12)",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--foreground)",
                    letterSpacing: "0.02em",
                  }}
                >
                  Biografía
                </h4>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.5, margin: 0, color: "var(--foreground-muted)" }}>
                  Pepe Bau es el proyecto solista de José Alberto Bautista Romero Paredes, guitarrista, compositor y productor originario de Toluca. Con más de dos décadas de trayectoria...
                </p>
                <button
                  onClick={() => setShowBioModal(true)}
                  style={{
                    alignSelf: "flex-start",
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    padding: "4px 0",
                    borderBottom: "1.5px solid var(--primary)",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-magenta)";
                    e.currentTarget.style.borderColor = "var(--accent-magenta)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.borderColor = "var(--primary)";
                  }}
                >
                  Leer biografía completa
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FULL EXPANDABLE BIOGRAPHY MODAL */}
      {showBioModal && (
        <div className="spotify-bio-overlay" onClick={() => setShowBioModal(false)}>
          <div className="spotify-bio-card" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setShowBioModal(false)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                fontSize: "2rem",
                cursor: "pointer",
                color: "var(--foreground)",
                opacity: 0.6,
                lineHeight: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
              aria-label="Cerrar modal"
            >
              ×
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: "28px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "var(--accent-red)", letterSpacing: "0.1em", fontFamily: "var(--font-heading)" }}>
                Trayectoria Completa
              </span>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "2.4rem", fontWeight: 850, textTransform: "uppercase", color: "var(--foreground)", marginTop: "4px" }}>
                Pepe Bau
              </h3>
            </div>

            {/* Biography Detailed Text */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "var(--foreground)",
              }}
            >
              <p>
                Pepe Bau es el proyecto solista de José Alberto Bautista Romero Paredes, guitarrista, cantante, compositor y productor originario de Toluca, Estado de México. Con más de dos décadas de trayectoria artística, ha desarrollado una carrera que combina la interpretación en vivo, la composición, la producción musical y la dirección de proyectos escénicos.
              </p>
              
              <p>
                Su historia musical comenzó a los 11 años, cuando descubrió en la guitarra una forma de expresión definitiva. A los 14 años inició su formación sobre los escenarios participando en concursos y foros culturales nocturnos de Toluca. Sus primeras plataformas a gran escala incluyeron la presentación en vivo en el Teletón Guadalajara 2008 ante un público nacional.
              </p>

              <div
                style={{
                  backgroundColor: "rgba(100, 74, 64, 0.06)",
                  borderLeft: "4px solid var(--accent-magenta)",
                  padding: "16px 24px",
                  borderRadius: "0 8px 8px 0",
                  fontStyle: "italic",
                  margin: "10px 0",
                }}
              >
                &ldquo;El Festival de la Canción de la UAEMéx marcó un hito en mi carrera universitaria, ganando el primer lugar de forma consecutiva durante las ediciones 2011, 2012 y 2013.&rdquo;
              </div>

              <p>
                Como co-productor y guitarrista de Mars Rising, participando activamente en el Festival Internacional Quimera en Metepec (ediciones 2017, 2018 y 2020). Asimismo, abrieron el evento TEDx con un concierto especial en el Teatro de los Jaguares de la UAEMéx y formó parte del Sofapalooza 2024 de TV Azteca. 
              </p>
              
              <p>
                En 2024, participó como invitado especial en las sesiones acústicas (formato Tiny Desk) de Azteca Digital para &quot;La Academia 20 Años&quot;, colaborando e interpretando junto a los participantes del concurso a nivel internacional.
              </p>


              <p>
                Desde 2022 lidera y produce Vendetta, el ensamble de directo más cotizado de pop-rock internacional del Valle de Toluca. Con colaboraciones oficiales con marcas de renombre como Harley-Davidson y Unticket, se presenta con frecuencia en el World Trade Center de la Ciudad de México, el Teatro Quimera, McCarthy&apos;s Irish Pub y Bistro Mecha.
              </p>
            </div>

            {/* Ficha Técnica Highlights Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "16px",
                marginTop: "36px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(100, 74, 64, 0.15)",
              }}
            >
              {[
                { title: "Inicio", val: "1999" },
                { title: "Origen", val: "Toluca, MX" },
                { title: "Directos", val: "20+ años" },
                { title: "Proyecto", val: "Vendetta & Solo" },
              ].map((badge, idx) => (
                <div key={idx} style={{ backgroundColor: "rgba(100,74,64,0.05)", padding: "12px", borderRadius: "8px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.7rem", textTransform: "uppercase", fontWeight: 800, opacity: 0.6, letterSpacing: "0.05em" }}>
                    {badge.title}
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--accent-magenta)", marginTop: "4px" }}>
                    {badge.val}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Media Queries Styles for Profile Grid */}
      <style jsx global>{`
        @keyframes waveAnim {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }

        @media (max-width: 991px) {
          .spotify-profile-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .spotify-profile-header {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
