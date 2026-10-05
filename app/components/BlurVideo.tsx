"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";

interface BlurVideoProps {
    src: string;
    posterLogo: string;
    pauseLabel: string;
    playLabel: string;
}

/**
 * Muted demo video that plays only while it is on screen, so the 20 MB file is not
 * decoding in the background. A visible pause control satisfies WCAG 2.2.2 for
 * auto-playing motion; reduced-motion users get a paused video they can start themselves.
 */
export default function BlurVideo({ src, posterLogo, pauseLabel, playLabel }: BlurVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const userPausedRef = useRef<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !userPausedRef.current && !prefersReducedMotion) {
                    video.play().catch((error: unknown) => {
                        // Autoplay can be blocked by the browser; the play button remains as a fallback.
                        console.warn("Blur demo autoplay blocked:", error);
                    });
                } else {
                    video.pause();
                }
            },
            { threshold: 0.4 },
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    const togglePlayback = (): void => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            userPausedRef.current = false;
            video.play().catch((error: unknown) => console.error("Blur demo playback failed:", error));
        } else {
            userPausedRef.current = true;
            video.pause();
        }
    };

    return (
        <div className="relative aspect-video bg-surface-2">
            {/* Shown until the first video frame paints over it. */}
            <Image
                src={posterLogo}
                alt=""
                aria-hidden
                width={80}
                height={80}
                className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-70"
            />
            <video
                ref={videoRef}
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="absolute inset-0 size-full object-cover"
            />
            <button
                type="button"
                onClick={togglePlayback}
                aria-label={isPlaying ? pauseLabel : playLabel}
                className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full border border-line-strong bg-bg/70 text-fg backdrop-blur transition-colors hover:bg-white/20"
            >
                {isPlaying ? <LuPause className="size-4" aria-hidden /> : <LuPlay className="size-4" aria-hidden />}
            </button>
        </div>
    );
}
