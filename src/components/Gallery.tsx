"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = [
    {
      src: "/images/gallery_friends.jpg",
      alt: "",
      caption: "",
      aspectRatio: "4/3",
    },
    {
      src: "/images/gallery_couch.jpg",
      alt: "",
      caption: "",
      aspectRatio: "1/1",
    },
    {
      src: "/images/gallery_tedx.jpg",
      alt: "",
      caption: "",
      aspectRatio: "4/3",
    },
    {
      src: "/images/gallery_live_pointing.jpg",
      alt: "",
      caption: "",
      aspectRatio: "2/3",
    },
    {
      src: "/images/gallery_teleton_2008.jpg",
      alt: "",
      caption: "",
      aspectRatio: "4/3",
    },
    {
      src: "/images/gallery_studio_sitting.jpg",
      alt: "",
      caption: "",
      aspectRatio: "2/3",
    },
    {
      src: "/images/gallery_live_stratocaster.jpg",
      alt: "",
      caption: "",
      aspectRatio: "1/1",
    },
    {
      src: "/images/bio_portrait_official.jpg",
      alt: "",
      caption: "",
      aspectRatio: "3/4",
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeria" className="section-padding alternate-section">
      {/* Background neon glows */}
      <div className="glowing-bg glow-red" style={{ top: "10%", right: "5%", opacity: 0.05 }} />
      <div className="glowing-bg glow-magenta" style={{ bottom: "10%", left: "5%", opacity: 0.05 }} />

      <div className="container">
        {/* Header */}
        <div className="section-header scroll-fade-in js-scroll-element">
          <span className="section-subtitle">Visuales</span>
          <h2 className="section-title">Galería de fotos</h2>
        </div>

        {/* Gallery Masonry Grid (Polaroid Scrapbook Wall) */}
        <div className="gallery-masonry">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="gallery-masonry-item scroll-scale-in js-scroll-element"
              style={{
                aspectRatio: img.aspectRatio,
                backgroundColor: "#FFFFFF",
                padding: "12px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 6px 20px rgba(100, 74, 64, 0.05)",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "var(--transition-smooth)",
              }}
              onClick={() => setSelectedIdx(idx)}
            >
              <div style={{ position: "relative", width: "100%", flexGrow: 1, height: "100%", overflow: "hidden", backgroundColor: "var(--accent)" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{
                    objectFit: "cover",
                    transition: "var(--transition-smooth)",
                  }}
                  className="gallery-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(15px)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setSelectedIdx(null)}
        >
          {/* Top Close Bar */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              width: "100%",
              padding: "0 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            <span>
              {selectedIdx + 1} / {images.length}
            </span>
            <button
              onClick={() => setSelectedIdx(null)}
              style={{ background: "none", border: "none", color: "#FFF", cursor: "pointer" }}
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "40px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              color: "#FFF",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "var(--transition-smooth)",
            }}
            className="arrow-btn"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>

          {/* Image Container */}
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "1000px",
              height: "70vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIdx].src}
              alt={images[selectedIdx].alt}
              fill
              sizes="1000px"
              style={{ objectFit: "contain" }}
            />
          </div>



          {/* Right Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "40px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              color: "#FFF",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "var(--transition-smooth)",
            }}
            className="arrow-btn"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      )}

      <style jsx global>{`
        .gallery-masonry-item {
          transition: var(--transition-smooth);
        }
        .gallery-masonry-item:hover {
          transform: scale(1.02) translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(100, 74, 64, 0.12) !important;
          z-index: 10 !important;
        }
        .gallery-masonry-item:hover .gallery-img {
          transform: scale(1.03);
        }
        .arrow-btn:hover {
          background-color: var(--accent-magenta) !important;
          border-color: var(--accent-magenta) !important;
          box-shadow: 0 0 15px var(--accent-magenta-glow);
        }
        
        @media (max-width: 576px) {
          .arrow-btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
