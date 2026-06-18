"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Música", href: "#musica" },
    { name: "Videos", href: "#videos" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ];


  return (
    <nav
      className={`nav-header ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Brand Logo */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={scrolled ? "/images/logo_dark.png" : "/images/logo_light.png"}
            alt="Pepe Bau Logo"
            style={{
              height: "36px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </a>

        {/* Desktop Links */}
        <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                transition: "var(--transition-smooth)",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Contact */}
        <div className="nav-cta">
          <a
            href="#contacto"
            className="btn btn-primary"
            style={{
              padding: "10px 20px",
              fontSize: "0.8rem",
            }}
          >
            Booking
          </a>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "6px",
            padding: "4px",
            zIndex: 60,
          }}
        >
          <span
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: (scrolled || isOpen) ? "var(--foreground)" : "#FFFFFF",
              transition: "var(--transition-smooth)",
              transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
            }}
          ></span>
          <span
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: (scrolled || isOpen) ? "var(--foreground)" : "#FFFFFF",
              transition: "var(--transition-smooth)",
              opacity: isOpen ? 0 : 1,
            }}
          ></span>
          <span
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: (scrolled || isOpen) ? "var(--foreground)" : "#FFFFFF",
              transition: "var(--transition-smooth)",
              transform: isOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
            }}
          ></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className="mobile-drawer"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "var(--bg-offset-solid)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(45, 63, 52, 0.08)",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "24px",
          transition: "var(--transition-smooth)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="mobile-nav-link"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--foreground)",
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={() => setIsOpen(false)}
          className="btn btn-primary"
          style={{ marginTop: "16px" }}
        >
          Contrataciones
        </a>
      </div>

      {/* Navbar Custom Inline Styles for hovers and layout */}
      <style jsx global>{`
        .nav-link:hover {
          color: var(--accent-magenta) !important;
          text-shadow: 0 0 8px rgba(45, 63, 52, 0.2);
        }
        .mobile-nav-link {
          transition: var(--transition-smooth);
        }
        .mobile-nav-link:hover {
          color: var(--accent-red) !important;
        }
        @media (max-width: 991px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .nav-cta {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
