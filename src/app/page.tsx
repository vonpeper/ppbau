import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Videos from "@/components/Videos";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import ScrollAnimations from "@/components/ScrollAnimations";
import ConcertVisualizer from "@/components/ConcertVisualizer";
import Marquee from "@/components/Marquee";


export default function Home() {
  return (
    <>
      {/* Client-side fallback script for scroll entrance animations in older/non-supporting browsers */}
      <ScrollAnimations />

      {/* Live concert atmosphere background visualizer (moving spotlights & stage particles) */}
      <ConcertVisualizer />
      
      {/* Sticky translucent header navigation */}
      <Navbar />

      <main style={{ overflowX: "hidden" }}>
        {/* Intro cinematic fullscreen hero */}
        <Hero />

        {/* Angled horizontal marquee for pop rocker style */}
        <Marquee text="PEPE BAU • PROYECTO SOLISTA • POP ROCK • ORIGINAL MUSIC • " rotation="-1deg" />

        {/* Biography and timeline trajectory */}
        <About />

        {/* Music releases grid and preview player */}
        <Music />

        {/* Second marquee separating sections */}
        <Marquee text="ESTAR CONTIGO • NUEVO SENCILLO • LANZAMIENTO OFICIAL 2026 • PRE-SALVAR AHORA • " rotation="1deg" speed="30s" />

        {/* Live performance videos */}
        <Videos />

        {/* Graphic grid portfolio with lightbox preview */}
        <Gallery />

        {/* Management direct booking contact and social footer */}
        <Contact />

      </main>
    </>
  );
}

