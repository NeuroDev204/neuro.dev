"use client";

import { useEffect, useRef, useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";

export interface VideoSource {
    src: string;
    type: string;
}

interface BlurVideoProps {
    /** Ordered by preference; the browser plays the first one it can decode. */
    sources: VideoSource[];
    poster: string;
    pauseLabel: string;
    playLabel: string;
}

/**
 * Muted demo video that plays only while it is on screen, so the file is not
 * decoding in the background. A visible pause control satisfies WCAG 2.2.2 for
 * auto-playing motion; reduced-motion users get a paused video they can start themselves.
 *
 * WebM (VP9) is listed before MP4 (H.264) because some browsers — e.g. Microsoft Edge on
 * Linux — ship without an H.264 decoder. If no source is playable, the poster stays visible
 * and the play control is hidden instead of offering a button that does nothing.
 */
export default function BlurVideo({ sources, poster, pauseLabel, playLabel }: BlurVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const userPausedRef = useRef<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isUnplayable, setIsUnplayable] = useState<boolean>(false);

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

    const handleLastSourceError = (): void => {
        console.error("Blur demo: no playable video source in this browser", sources);
        setIsUnplayable(true);
    };

    return (
        <div className="relative aspect-video bg-surface-2">
            <video
                ref={videoRef}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="absolute inset-0 size-full object-cover"
            >
                {sources.map((source, index) => (
                    <source
                        key={source.src}
                        src={source.src}
                        type={source.type}
                        // Only the last source's error means every option failed.
                        onError={index === sources.length - 1 ? handleLastSourceError : undefined}
                    />
                ))}
            </video>
            {!isUnplayable && (
                <button
                    type="button"
                    onClick={togglePlayback}
                    aria-label={isPlaying ? pauseLabel : playLabel}
                    className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full border border-line-strong bg-bg/70 text-fg backdrop-blur transition-colors hover:bg-white/20"
                >
                    {isPlaying ? <LuPause className="size-4" aria-hidden /> : <LuPlay className="size-4" aria-hidden />}
                </button>
            )}
        </div>
    );
}
