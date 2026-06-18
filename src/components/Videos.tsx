"use client";

import { useState } from "react";

interface VideoItem {
  id: string;
  postId: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  badge: string;
  coverEmoji: string;
  likes: string;
  comments: string;
  caption: string;
  bgGradient: string;
}

export default function Videos() {
  const videosList: VideoItem[] = [
    {
      id: "quimera-2025",
      postId: "DQBRNR5jcwu",
      title: "Quimera 2025 con Susana Díaz",
      subtitle: "Soprano & Pop Rock",
      description: "Colaboración acústica especial con la soprano Susana Díaz, fusionando la lírica clásica con la energía del pop rock en el escenario principal.",
      url: "https://www.instagram.com/p/DQBRNR5jcwu/",
      badge: "Festival Quimera",
      coverEmoji: "🏛️",
      likes: "1,420",
      comments: "86",
      caption: "Un honor compartir el escenario Quimera con la gran soprano Susana Díaz. Cruzando fronteras musicales... 🏛️🎸 #PepeBau #Soprano #Quimera",
      bgGradient: "linear-gradient(135deg, #582d1d 0%, #644a40 100%)"
    },
    {
      id: "mecha-vendetta",
      postId: "DNGX5tcxq9r",
      title: "Bistró Mecha Session",
      subtitle: "Vendetta Live",
      description: "La potencia de Vendetta en vivo desde Bistró Mecha, capturando la esencia pop rock contemporánea que domina la noche de Toluca.",
      url: "https://www.instagram.com/p/DNGX5tcxq9r/",
      badge: "Live Session",
      coverEmoji: "🎸",
      likes: "948",
      comments: "52",
      caption: "Viernes de rock en Bistró Mecha con el ensamble Vendetta. ¡Gracias por la energía total! 🎸🔥 #VendettaLive #PopRock #TolucaNoches",
      bgGradient: "linear-gradient(135deg, #1f2d24 0%, #4b5d4e 100%)"
    },
    {
      id: "fatima-voice",
      postId: "CtpAlJFve_L",
      title: "La Voz con Fátima Elizondo",
      subtitle: "Colaboración Especial",
      description: "Sesión acústica grabada junto a Fátima Elizondo, ganadora de La Voz México del equipo de Yuridia, uniendo voces en una interpretación memorable.",
      url: "https://www.instagram.com/p/CtpAlJFve_L/",
      badge: "Colaboración",
      coverEmoji: "🎙️",
      likes: "2,104",
      comments: "144",
      caption: "Compartiendo sesión con la gran Fátima Elizondo (ganadora de La Voz México team Yuridia). Qué voz y qué vibra... 🎙️✨ #LaVozMx #TeamYuridia #SesionAcustica",
      bgGradient: "linear-gradient(135deg, #644a40 0%, #ffdfb5 100%)"
    },
    {
      id: "nelson-academia",
      postId: "Chm26psgC9_",
      title: "La Academia con Nelson Carreras",
      subtitle: "Sesión Acústica",
      description: "Colaboración íntima e internacional grabada con el destacado finalista Nelson Carreras en las sesiones Tiny Desk oficiales para Azteca Digital.",
      url: "https://www.instagram.com/p/Chm26psgC9_/",
      badge: "Academia 20 Años",
      coverEmoji: "✨",
      likes: "3,580",
      comments: "298",
      caption: "Sesión acústica internacional con mi hermano Nelson Carreras desde La Academia 20 Años. Increíble talento... ✨🎙️ #LaAcademia #AztecaDigital #TinyDesk",
      bgGradient: "linear-gradient(135deg, #42382e 0%, #5c483c 100%)"
    },
    {
      id: "zunio-academia",
      postId: "CghceXsp13H",
      title: "La Academia con Zunio",
      subtitle: "Sesión Acústica",
      description: "Interpretación a guitarra y voz junto al finalista Zunio, entregando una versión acústica cargada de emotividad para Azteca Digital.",
      url: "https://www.instagram.com/p/CghceXsp13H/",
      badge: "Academia 20 Años",
      coverEmoji: "🎹",
      likes: "2,840",
      comments: "194",
      caption: "Sesión acústica junto a Zunio en Azteca Digital. Gran balada y voz de primer nivel. ¡Un gustazo colaborar en este proyecto! 🎹🎸 #LaAcademia20 #Acustico #Musica",
      bgGradient: "linear-gradient(135deg, #5c483c 0%, #ffdfb5 100%)"
    }
  ];

  const [activeVideo, setActiveVideo] = useState<VideoItem>(videosList[0]);
  const [expandedId, setExpandedId] = useState<string>(videosList[0].id);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const toggleAccordion = (video: VideoItem) => {
    if (expandedId === video.id) {
      // Keep at least one expanded to show details
      return;
    }
    setExpandedId(video.id);
    setActiveVideo(video);
  };

  return (
    <section id="videos" className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div className="glowing-bg glow-magenta" style={{ top: "20%", left: "5%", opacity: 0.04 }} />
      <div className="glowing-bg glow-red" style={{ bottom: "20%", right: "5%", opacity: 0.04 }} />

      <div className="container">
        {/* Header */}
        <div className="section-header scroll-fade-in js-scroll-element">
          <span className="section-subtitle">Sesiones</span>
          <h2 className="section-title">Videos en Vivo</h2>
        </div>

        {/* Two Column Layout: Phone Mockup & Accordion */}
        <div className="videos-redesign-layout">
          
          {/* Left Column: Simulated Instagram Phone Mockup */}
          <div className="phone-mockup-container scroll-fade-in js-scroll-element">
            <div className="smartphone-case">
              {/* Camera Notch / Dynamic Island */}
              <div className="phone-notch" />
              
              {/* Inner Screen Container */}
              <div className="phone-screen" style={{ background: activeVideo.bgGradient }}>
                
                {/* Simulated status bar */}
                <div className="phone-status-bar">
                  <span className="status-time">12:00</span>
                  <div className="status-icons">
                    <svg width="10" height="10" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: "4px" }}>
                      <path d="M2 11.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 6h10v4H2V6z"/>
                      <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10z"/>
                    </svg>
                  </div>
                </div>

                {/* Reels Header */}
                <div className="reels-header">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span className="reels-title">Reels</span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                  </svg>
                </div>

                {/* Center Content: Video Thumbnail Visualizer */}
                <div className="phone-video-body">
                  <div className="phone-visual-glow" />
                  <span className="phone-emoji-thumbnail">{activeVideo.coverEmoji}</span>
                  
                  {/* Floating Play Button */}
                  <button
                    onClick={() => setSelectedVideo(activeVideo)}
                    className="phone-play-btn"
                    aria-label="Reproducir video"
                  >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16" style={{ transform: "translateX(2px)" }}>
                      <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg>
                  </button>
                </div>

                {/* Right Side Action Bar overlay */}
                <div className="reels-side-actions">
                  <div className="action-button">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a12.02 12.02 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <span>{activeVideo.likes}</span>
                  </div>
                  <div className="action-button">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                    </svg>
                    <span>{activeVideo.comments}</span>
                  </div>
                  <div className="action-button">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </div>
                  <div className="action-button">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm10-1a1 1 0 0 1 1 1v12.217l-4.37-2.385a.5.5 0 0 0-.46 0L3 14.217V2a1 1 0 0 1 1-1h8z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Overlay User Details */}
                <div className="reels-bottom-details">
                  <div className="reels-user-row">
                    <div className="avatar-circle">
                      <img src="/images/bio_portrait_official.jpg" alt="Pepe Bau" />
                    </div>
                    <span className="user-username">pp.bau</span>
                    <span className="verified-badge-mini">✓</span>
                    <button className="btn-follow-reels">Seguir</button>
                  </div>
                  
                  <p className="reels-caption">{activeVideo.caption}</p>
                  
                  <div className="reels-music-row">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: "6px" }}>
                      <path d="M11.536 14.01A8.473 8.473 0 0 0 14.02 12c.532-.619.957-1.355 1.258-2.188a1 1 0 0 0-.256-1.086L12.99 6.7a1 1 0 0 0-1.414 0L9.414 8.864 5.922 5.372 8.414 2.88a1 1 0 0 0 0-1.414L6.4-.948a1 1 0 0 0-1.086-.256A8.473 8.473 0 0 0 3 1.354 8.473 8.473 0 0 0 .948 3.84a1 1 0 0 0 .256 1.086L3.3 6.95a1 1 0 0 0 1.414 0l2.162-2.162 3.492 3.492-2.492 2.492a1 1 0 0 0 0 1.414l2.014 2.014a1 1 0 0 0 1.086.256c.92-.3 1.848-.948 2.76-1.536z"/>
                    </svg>
                    <div className="music-scroller">
                      <span>pp.bau • Audio original</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="accordion-column scroll-scale-in js-scroll-element">
            <div className="accordion-container">
              {videosList.map((video, idx) => {
                const isExpanded = expandedId === video.id;
                
                return (
                  <div 
                    key={video.id} 
                    className={`accordion-item ${isExpanded ? "active" : ""}`}
                  >
                    {/* Collapsible Header */}
                    <button 
                      onClick={() => toggleAccordion(video)}
                      className="accordion-header"
                      aria-expanded={isExpanded}
                    >
                      <div className="accordion-header-left">
                        <span className="accordion-index">0{idx + 1}</span>
                        <div className="accordion-title-block">
                          <span className="accordion-title">{video.title}</span>
                          <span className="accordion-subtitle">{video.subtitle}</span>
                        </div>
                      </div>
                      
                      <div className="accordion-header-right">
                        <span className="accordion-badge">{video.badge}</span>
                        <span className="accordion-chevron">
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16" style={{ transform: isExpanded ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}>
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg>
                        </span>
                      </div>
                    </button>

                    {/* Collapsible Content */}
                    <div 
                      className="accordion-content-wrapper"
                      style={{ 
                        maxHeight: isExpanded ? "250px" : "0",
                        opacity: isExpanded ? 1 : 0
                      }}
                    >
                      <div className="accordion-content">
                        <p>{video.description}</p>
                        
                        <div className="accordion-action-row">
                          <button
                            onClick={() => setSelectedVideo(video)}
                            className="btn btn-primary btn-accordion-play"
                            style={{ padding: "8px 18px", fontSize: "0.75rem" }}
                          >
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: "6px" }}>
                              <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                            </svg>
                            Reproducir video en el sitio
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* POPUP MODAL VIDEO PLAYER */}
      {selectedVideo && (
        <div 
          className="video-modal-overlay" 
          onClick={() => setSelectedVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="video-modal-close"
              onClick={() => setSelectedVideo(null)}
              aria-label="Cerrar reproductor"
            >
              &times;
            </button>

            {/* Iframe Loading Instagram Embed */}
            <div className="video-iframe-wrapper">
              <iframe
                src={`https://www.instagram.com/p/${selectedVideo.postId}/embed/`}
                className="video-iframe"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .videos-redesign-layout {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 60px;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Smartphone Case Mockup */
        .phone-mockup-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .smartphone-case {
          position: relative;
          width: 320px;
          height: 580px;
          border-radius: 40px;
          background: #151515;
          border: 12px solid #202020;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25), 
                      inset 0 0 10px rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .phone-notch {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 20px;
          background: #202020;
          border-radius: 12px;
          z-index: 100;
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          color: #FFFFFF;
        }

        /* Status Bar */
        .phone-status-bar {
          display: flex;
          justify-content: space-between;
          padding: 8px 24px;
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.8);
          z-index: 90;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .status-icons {
          display: flex;
          align-items: center;
        }

        /* Reels Header overlay */
        .reels-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 36px 20px 10px 20px;
          z-index: 90;
          color: #FFFFFF;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
          position: absolute;
          top: 0;
          width: 100%;
        }

        .reels-title {
          font-family: var(--font-heading);
          font-weight: 850;
          font-size: 1rem;
          letter-spacing: 0.02em;
        }

        /* Center Video Area */
        .phone-video-body {
          position: relative;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
        }

        .phone-visual-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 60%);
        }

        .phone-emoji-thumbnail {
          font-size: 6rem;
          z-index: 2;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
          animation: emojiFloat 4s ease-in-out infinite;
        }

        @keyframes emojiFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .phone-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .phone-play-btn:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background-color: #FFFFFF;
          color: var(--accent-magenta);
          box-shadow: 0 15px 35px rgba(255,255,255,0.2);
        }

        /* Right Actions Overlay */
        .reels-side-actions {
          position: absolute;
          bottom: 110px;
          right: 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 80;
          align-items: center;
        }

        .action-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }

        .action-button span {
          font-size: 0.6rem;
          font-weight: 700;
          margin-top: 2px;
          color: #FFFFFF;
          text-shadow: 0 1px 3px rgba(0,0,0,0.6);
        }

        .action-button svg {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
          transition: transform 0.2s ease;
        }

        .action-button:hover svg {
          transform: scale(1.15);
        }

        /* Bottom User & Caption details */
        .reels-bottom-details {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 24px 70px 24px 16px;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
          z-index: 70;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reels-user-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .avatar-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          overflow: hidden;
          border: 1.5px solid #FFFFFF;
        }

        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-username {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          color: #FFFFFF;
        }

        .verified-badge-mini {
          width: 12px;
          height: 12px;
          background-color: #0095f6;
          color: #FFFFFF;
          border-radius: 50%;
          font-size: 0.55rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-follow-reels {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 4px;
          padding: 2px 8px;
          color: #FFFFFF;
          font-size: 0.6rem;
          font-weight: 700;
          cursor: pointer;
        }

        .reels-caption {
          font-size: 0.75rem;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .reels-music-row {
          display: flex;
          align-items: center;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.9);
          overflow: hidden;
          white-space: nowrap;
        }

        .music-scroller {
          overflow: hidden;
          position: relative;
          width: 140px;
        }

        .music-scroller span {
          display: inline-block;
          padding-left: 10%;
          animation: musicScroll 8s linear infinite;
        }

        @keyframes musicScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }

        /* Right Column: Accordion */
        .accordion-column {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .accordion-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .accordion-item {
          background: rgba(255, 255, 255, 0.75);
          border: 1.5px solid rgba(100, 74, 64, 0.12);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-item.active {
          background: #FFFFFF;
          border-color: var(--accent-magenta);
          box-shadow: 0 12px 30px rgba(88, 45, 29, 0.08);
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .accordion-header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .accordion-index {
          font-family: var(--font-heading);
          font-weight: 850;
          font-size: 1.25rem;
          color: var(--accent-red);
          opacity: 0.6;
        }

        .accordion-item.active .accordion-index {
          opacity: 1;
        }

        .accordion-title-block {
          display: flex;
          flex-direction: column;
        }

        .accordion-title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--foreground);
          transition: color 0.3s ease;
        }

        .accordion-item.active .accordion-title {
          color: var(--accent-magenta);
        }

        .accordion-subtitle {
          font-size: 0.8rem;
          color: var(--foreground-muted);
          font-weight: 500;
        }

        .accordion-header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .accordion-badge {
          background-color: rgba(100, 74, 64, 0.06);
          border: 1px solid rgba(100, 74, 64, 0.18);
          color: var(--accent-red);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 50px;
        }

        .accordion-item.active .accordion-badge {
          background-color: rgba(88, 45, 29, 0.1);
          border-color: var(--accent-magenta);
          color: var(--accent-magenta);
        }

        .accordion-chevron {
          color: var(--foreground-muted);
        }

        .accordion-item.active .accordion-chevron {
          color: var(--accent-magenta);
        }

        /* Collapsible content area */
        .accordion-content-wrapper {
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .accordion-content {
          padding: 0 24px 24px 64px;
        }

        .accordion-content p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--foreground-muted);
          margin-bottom: 16px;
        }

        .accordion-action-row {
          display: flex;
        }

        /* MODAL OVERLAY STYLES */
        .video-modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000 !important;
          padding: 20px;
          animation: videoFadeIn 0.3s ease;
        }

        .video-modal-content {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 600px;
          max-height: 85vh;
          background: #111111;
          border-radius: var(--border-radius);
          border: 1px solid rgba(100, 74, 64, 0.2);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          animation: videoModalPop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .video-modal-close {
          position: absolute;
          top: 15px;
          right: 20px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          font-size: 1.8rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10002;
          line-height: 1;
          transition: all 0.25s ease;
        }

        .video-modal-close:hover {
          background-color: var(--accent-magenta);
          border-color: var(--accent-magenta);
          transform: scale(1.1);
        }

        .video-iframe-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
        }

        .video-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @keyframes videoFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes videoModalPop {
          from { opacity: 0; transform: scale(0.95) translateY(15px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Responsive */
        @media (max-width: 991px) {
          .videos-redesign-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .phone-mockup-container {
            order: 1;
          }
          .accordion-column {
            order: 2;
          }
        }

        @media (max-width: 576px) {
          .smartphone-case {
            width: 290px;
            height: 520px;
            border-width: 8px;
          }
          .phone-notch {
            width: 80px;
            height: 16px;
          }
          .phone-emoji-thumbnail {
            font-size: 5rem;
          }
          .reels-bottom-details {
            padding: 16px 50px 16px 12px;
          }
          .accordion-header {
            padding: 16px 18px;
          }
          .accordion-header-left {
            gap: 12px;
          }
          .accordion-title {
            font-size: 0.95rem;
          }
          .accordion-badge {
            display: none;
          }
          .accordion-content {
            padding: 0 18px 18px 42px;
          }
          .video-modal-content {
            height: 520px;
          }
        }
      `}</style>
    </section>
  );
}
