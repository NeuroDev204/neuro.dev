"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    hue: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                    hue: Math.random() > 0.5 ? 195 : 270, // Blue or Purple
                });
            }
        };

        const drawParticle = (particle: Particle) => {
            if (!ctx) return;

            const gradient = ctx.createRadialGradient(
                particle.x,
                particle.y,
                0,
                particle.x,
                particle.y,
                particle.size * 2
            );

            gradient.addColorStop(
                0,
                `hsla(${particle.hue}, 80%, 70%, ${particle.opacity})`
            );
            gradient.addColorStop(
                1,
                `hsla(${particle.hue}, 80%, 70%, 0)`
            );

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        };

        const connectParticles = () => {
            if (!ctx) return;

            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const opacity = (1 - distance / 150) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(124, 211, 255, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                // Mouse interaction
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    particle.x -= dx * force * 0.02;
                    particle.y -= dy * force * 0.02;
                }
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Subtle oscillation
                particle.opacity = 0.3 + Math.sin(Date.now() * 0.001 + particle.x) * 0.2;

                drawParticle(particle);
            });

            connectParticles();

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            resizeCanvas();
            createParticles();
        };

        resizeCanvas();
        createParticles();
        animate();

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <>
            {/* Gradient Background */}
            <div className="gradient-bg"></div>

            {/* Glow Orbs */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="glow-orb glow-orb-1"></div>
                <div className="glow-orb glow-orb-2"></div>
                <div className="glow-orb glow-orb-3"></div>
            </div>
            {/* Particle Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none"
                style={{ opacity: 0.8 }}
            />
        </>
    );
}
