"use client";

export default function Press() {
  const articles = [
    {
      title: "La Academia 20 Años: Sesiones acústicas con el talento de Pepe Bau en la guitarra",
      source: "Azteca Digital",
      date: "Diciembre 2024",
      type: "Entrevista & Reseña",
      excerpt: "Pepe Bau colabora como guitarrista junto a egresados de La Academia en sesiones íntimas con formato Tiny Desk...",

      link: "#",
    },
    {
      title: "Mars Rising y Pepe Bau consolidan su propuesta escénica en Quimera 2020",
      source: "Toluca Cultural",
      date: "Octubre 2020",
      type: "Nota de Prensa",
      excerpt: "El guitarrista toluqueño destaca en la dirección musical y la co-producción del espectáculo virtual de rock/pop alternativo en Metepec...",
      link: "#",
    },
    {
      title: "Pepe Bau abre una nueva faceta solista pop-rock independiente con miras a 2026",
      source: "Sonidos del Centro",
      date: "Marzo 2026",
      type: "Reseña de Lanzamiento",
      excerpt: "Con más de veinte años recorriendo los escenarios mexiquenses, el guitarrista y cantante alista un EP maduro y sincero...",
      link: "#",
    },
  ];

  return (
    <section id="prensa" className="section-padding">
      {/* Background glows */}
      <div className="glowing-bg glow-red" style={{ top: "20%", right: "10%", opacity: 0.06 }} />

      <div className="container">
        {/* Header */}
        <div className="section-header scroll-fade-in js-scroll-element">
          <span className="section-subtitle">Difusión</span>
          <h2 className="section-title">Prensa & Media</h2>
        </div>

        <div
          className="press-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Articles list */}
          <div
            className="articles-list scroll-fade-in js-scroll-element"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="article-card glass-panel"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "var(--accent-magenta)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {art.source} · {art.type}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--foreground-muted)" }}>{art.date}</span>
                </div>
                
                <h4 style={{ fontSize: "1.15rem", color: "var(--foreground)", fontWeight: 700 }}>{art.title}</h4>
                <p style={{ fontSize: "0.95rem", margin: 0 }}>{art.excerpt}</p>
                
                <a
                  href={art.link}
                  style={{
                    alignSelf: "flex-start",
                    fontSize: "0.85rem",
                    color: "var(--foreground)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "4px",
                    borderBottom: "1px solid var(--accent-magenta)",
                    paddingBottom: "2px",
                  }}
                  className="read-more-link"
                >
                  Leer artículo completo
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Media Kit download box */}
          <div className="scroll-scale-in js-scroll-element">
            <div
              className="glass-panel"
              style={{
                textAlign: "center",
                padding: "40px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(74, 92, 71, 0.1)",
                  border: "1px solid rgba(74, 92, 71, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                  color: "var(--accent-magenta)",
                }}
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
              </div>

              <h4 style={{ fontSize: "1.3rem", color: "var(--foreground)", marginBottom: "8px" }}>Media Kit Oficial</h4>
              <p style={{ fontSize: "0.9rem", marginBottom: "24px" }}>
                Descarga el dossier de prensa completo de Pepe Bau. Incluye semblanza, fotografías en alta resolución para prensa, requerimientos técnicos (Rider) y logotipos oficiales.
              </p>

              <a
                href="/docs/media_kit.pdf"
                download="Pepe_Bau_Media_Kit_2026.pdf"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Descargar Dossier (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .read-more-link {
          transition: var(--transition-smooth);
        }
        .read-more-link:hover {
          color: var(--accent-magenta) !important;
          transform: translateX(4px);
        }
        @media (max-width: 991px) {
          .press-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
