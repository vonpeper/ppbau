"use client";

export default function Contact() {
  return (
    <section id="contacto" className="section-padding alternate-section" style={{ borderTop: "1px solid rgba(45, 63, 52, 0.08)", paddingBottom: "80px" }}>
      {/* Background glow */}
      <div className="glowing-bg glow-magenta" style={{ bottom: "5%", right: "5%", opacity: 0.08 }} />
      <div className="glowing-bg glow-red" style={{ bottom: "10%", left: "5%", opacity: 0.05 }} />

      <div className="container">
        {/* Header */}
        <div className="section-header scroll-fade-in js-scroll-element">
          <span className="section-subtitle">Contacto</span>
          <h2 className="section-title">Booking & Management</h2>
        </div>

        <div
          className="contact-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "stretch",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Left Column: Direct Management Info */}
          <div
            className="glass-panel scroll-fade-in js-scroll-element"
            style={{
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.85rem",
                  color: "var(--accent-magenta)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Contrataciones Directas
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  color: "var(--foreground)",
                  marginTop: "8px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                }}
              >
                Lleva a Pepe Bau <br />
                a tu <span className="gradient-text-magenta-red">escenario</span>
              </h3>
              <p style={{ marginTop: "16px", fontSize: "0.95rem" }}>
                Disponible para festivales nacionales e internacionales, foros culturales, sesiones acústicas especiales y coproducciones de música en vivo.
              </p>
            </div>

            {/* Direct Channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid rgba(107, 86, 71, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-red)",
                  }}
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.618-4.934c-.198-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--foreground-muted)", letterSpacing: "0.05em" }}>
                    Teléfono / WhatsApp Directo
                  </span>
                  <a href="https://wa.me/52722241745" target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "1.1rem", color: "var(--foreground)", fontWeight: 600, marginTop: "2px" }}>
                    +52 722 241 745
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Press & Promo Details */}
          <div
            className="glass-panel scroll-scale-in js-scroll-element"
            style={{
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "36px",
              border: "1px solid rgba(107, 86, 71, 0.25)",
              boxShadow: "0 15px 35px rgba(107, 86, 71, 0.05)",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.85rem",
                  color: "var(--accent-red)",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Prensa & Tech Specs
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  color: "var(--foreground)",
                  marginTop: "8px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                }}
              >
                Rider Técnico <br />& Media Kit
              </h3>
              <p style={{ marginTop: "16px", fontSize: "0.95rem" }}>
                Accede al dossier de prensa oficial que contiene semblanza completa, fotos de prensa autorizadas en alta definición y especificaciones del Rider de Audio y Luces para shows en vivo.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <a href="/docs/mediakit.pdf" download="Pepe_Bau_Media_Kit_2026.pdf" className="btn btn-primary" style={{ width: "100%" }}>
                Descargar Kit Técnico (PDF)
              </a>
            </div>

          </div>
        </div>

        {/* Footer info branding */}
        <div
          style={{
            marginTop: "100px",
            paddingTop: "60px",
            borderTop: "2.5px dashed rgba(100, 74, 64, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          {/* Giant Fun Bouncing Social Row */}
          <div style={{ width: "100%", overflow: "hidden", position: "relative", padding: "10px 0" }}>
            <div 
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                flexWrap: "wrap"
              }}
            >
              {[
                { name: "Instagram", href: "https://www.instagram.com/pp.bau", emoji: "📸", handle: "@pp.bau" },
                { name: "Facebook", href: "https://www.facebook.com/pp.bauoficial/", emoji: "💙", handle: "/pp.bauoficial" },
                { name: "TikTok", href: "https://www.tiktok.com/@vonpeper", emoji: "🎵", handle: "@vonpeper" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fun-social-sticker"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    border: "3px solid #FFFFFF",
                    boxShadow: "0 6px 15px rgba(100, 74, 64, 0.08)",
                    backgroundColor: "#FFFFFF",
                    color: "var(--foreground)",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{social.emoji}</span>
                  <span>{social.name} <span style={{ opacity: 0.5, fontSize: "0.75rem", textTransform: "none", fontWeight: 500 }}>{social.handle}</span></span>
                </a>
              ))}
            </div>
          </div>

          {/* Sub-Text & Powered By star sticker */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
              gap: "24px",
              color: "var(--foreground-muted)",
              fontSize: "0.85rem"
            }}
          >
            <div>
              © 2026 Pepe Bau. Todos los derechos reservados. Toluca, México.
            </div>

            {/* Back to top arrow button */}
            <a 
              href="#inicio" 
              className="back-to-top-pick"
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "var(--primary)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                boxShadow: "0 4px 12px rgba(100, 74, 64, 0.15)",
                transition: "all 0.3s ease",
                textDecoration: "none"
              }}
              aria-label="Volver al inicio"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
              </svg>
            </a>

            {/* Powered by prosuite.mx */}
            <div>
              <a
                href="https://prosuite.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="prosuite-badge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 16px",
                  backgroundColor: "var(--secondary)",
                  color: "var(--secondary-foreground)",
                  border: "2px dashed var(--secondary-foreground)",
                  borderRadius: "12px",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-heading)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  transform: "rotate(-2deg)",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                }}
              >
                ⚡ Powered by prosuite.mx
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .social-btn:hover {
          color: var(--foreground) !important;
          border-color: var(--accent-magenta) !important;
          box-shadow: 0 4px 10px var(--accent-magenta-glow);
          transform: translateY(-2px);
        }
        .fun-social-sticker:hover {
          transform: scale(1.1) rotate(-3deg);
          box-shadow: 0 12px 25px rgba(100, 74, 64, 0.15) !important;
        }
        .fun-social-sticker:nth-of-type(1):hover {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%) !important;
          color: #FFFFFF !important;
          border-color: #FFFFFF !important;
        }
        .fun-social-sticker:nth-of-type(2):hover {
          background-color: #1877F2 !important;
          color: #FFFFFF !important;
          border-color: #FFFFFF !important;
        }
        .fun-social-sticker:nth-of-type(3):hover {
          background-color: #000000 !important;
          color: #FFFFFF !important;
          border-color: #FFFFFF !important;
        }
        .prosuite-badge:hover {
          transform: rotate(2deg) scale(1.1) !important;
          background-color: var(--secondary-foreground) !important;
          color: var(--secondary) !important;
          border-color: var(--secondary) !important;
          box-shadow: 0 8px 20px rgba(88, 45, 29, 0.15) !important;
        }
        .back-to-top-pick:hover {
          transform: translateY(-5px);
          background-color: var(--accent-magenta) !important;
          box-shadow: 0 8px 20px rgba(88, 45, 29, 0.3) !important;
        }
        .whatsapp-float-bubble:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.5) !important;
          background-color: #20ba5a !important;
        }
        .whatsapp-float-bubble:hover .whatsapp-tooltip {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        @media (max-width: 768px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>

      {/* Floating WhatsApp Bubble */}
      <a
        href="https://wa.me/52722241745"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-bubble"
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
          zIndex: 9999,
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
        aria-label="Contactar por WhatsApp"
      >
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.618-4.934c-.198-.099-1.17-.578-1.353-.646-.182-.068-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>

        {/* Tooltip showing on hover */}
        <span
          className="whatsapp-tooltip"
          style={{
            position: "absolute",
            right: "80px",
            backgroundColor: "#FFFFFF",
            color: "var(--foreground)",
            padding: "8px 16px",
            borderRadius: "10px",
            fontSize: "0.8rem",
            fontWeight: 700,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            border: "1.5px solid rgba(37, 211, 102, 0.2)",
            opacity: 0,
            pointerEvents: "none",
            transform: "translateX(10px)",
            transition: "all 0.3s ease"
          }}
        >
          ¡Escríbeme por WhatsApp!
        </span>
      </a>
    </section>
  );
}

