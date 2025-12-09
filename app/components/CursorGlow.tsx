"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Smooth interpolation
            positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.1;
            positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.1;

            if (glowRef.current) {
                glowRef.current.style.left = `${positionRef.current.x}px`;
                glowRef.current.style.top = `${positionRef.current.y}px`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={glowRef} className="cursor-glow hidden md:block"></div>;
}
