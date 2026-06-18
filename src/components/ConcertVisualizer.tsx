"use client";

import { useEffect, useRef } from "react";

export default function ConcertVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle class for stage dust catching light
    class DustParticle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      alpha: number;
      fadeSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedY = -(Math.random() * 0.4 + 0.1); // Float upwards
        this.speedX = Math.random() * 0.4 - 0.2;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // Re-wrap vertical boundaries
        if (this.y < 0) {
          this.y = height;
          this.x = Math.random() * width;
        }
        if (this.x < 0 || this.x > width) {
          this.x = Math.random() * width;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Golden/Military green stage dust color
        c.fillStyle = Math.random() > 0.5 ? "#8FAF82" : "#F5F5F5";
        if (!isMobile) {
          c.shadowBlur = 10;
          c.shadowColor = "#8FAF82";
        }
        c.fill();
        c.restore();
      }
    }

    // Spotlights (stage beams)
    class Spotlight {
      originX: number;
      originY: number;
      angle: number;
      swingSpeed: number;
      range: number;
      baseAngle: number;
      color: string;
      width: number;

      constructor(x: number, y: number, baseAngle: number, color: string) {
        this.originX = x;
        this.originY = y;
        this.baseAngle = baseAngle;
        this.angle = baseAngle;
        this.swingSpeed = Math.random() * 0.005 + 0.003;
        this.range = Math.random() * 0.15 + 0.1; // Limit swinging range
        this.color = color;
        this.width = Math.random() * 40 + 60;
      }

      update(time: number) {
        // Simple harmonic swinging
        this.angle = this.baseAngle + Math.sin(time * this.swingSpeed) * this.range;
      }

      draw(c: CanvasRenderingContext2D, canvasHeight: number) {
        c.save();
        // Spotlight beam path
        const length = canvasHeight * 1.5;
        const targetX = this.originX + Math.cos(this.angle) * length;
        const targetY = this.originY + Math.sin(this.angle) * length;

        // Radial/Linear gradient to fade the beam
        const grad = c.createLinearGradient(
          this.originX,
          this.originY,
          (this.originX + targetX) / 2,
          (this.originY + targetY) / 2
        );
        grad.addColorStop(0, this.color);
        grad.addColorStop(0.3, this.color.replace("0.18", "0.08"));
        grad.addColorStop(1, "rgba(0,0,0,0)");

        c.beginPath();
        c.moveTo(this.originX, this.originY);
        // Draw trapezoid beam shape
        const perpAngle1 = this.angle + Math.PI / 2;
        const perpAngle2 = this.angle - Math.PI / 2;
        
        c.lineTo(
          targetX + Math.cos(perpAngle1) * this.width * 2,
          targetY + Math.sin(perpAngle1) * this.width * 2
        );
        c.lineTo(
          targetX + Math.cos(perpAngle2) * this.width * 2,
          targetY + Math.sin(perpAngle2) * this.width * 2
        );
        c.closePath();

        c.fillStyle = grad;
        c.fill();
        c.restore();
      }
    }

    // Initialize particles (fewer on mobile for performance)
    const particleCount = isMobile ? 12 : 30;
    const particles: DustParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new DustParticle());
    }

    // Spotlights emanating from bottom corners (stage style) and top corners (gantry style)
    const spotlights = [
      new Spotlight(0, height, -Math.PI / 4, "rgba(75, 93, 78, 0.18)"), // Bottom-Left Military Green
      new Spotlight(width, height, -3 * Math.PI / 4, "rgba(92, 72, 60, 0.18)"), // Bottom-Right Mocha Brown
    ];
    if (!isMobile) {
      spotlights.push(new Spotlight(width / 2, 0, Math.PI / 2, "rgba(75, 93, 78, 0.12)")); // Mid-Top Military Green
    }

    let time = 0;

    // Loop
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      // Draw spotlights
      spotlights.forEach((spot) => {
        // Re-align coordinates in case width/height changed
        if (spot.originX > 0 && spot.originX !== width / 2) {
          spot.originX = width;
        }
        if (spot.originX === width / 2) {
          spot.originX = width / 2;
        }
        spot.originY = spot.originY > 0 ? height : 0;
        
        spot.update(time);
        spot.draw(ctx, height);
      });

      // Draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.7, // Subtle blend
      }}
    />
  );
}
