"use client";

import { useEffect } from "react";

/**
 * Page-wide visual effects wired with two document-level listeners instead of
 * per-component hooks, so sections stay plain markup:
 * - `[data-reveal]` elements fade up once they enter the viewport.
 * - `.spotlight` elements get --mx/--my so their ::before glow follows the pointer.
 */
export default function Effects(): null {
    useEffect(() => {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            },
            { rootMargin: "0px 0px -10% 0px" },
        );
        const observeReveals = (root: ParentNode): void => {
            root.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((node) => revealObserver.observe(node));
        };
        observeReveals(document);

        // Lists keyed by translated text remount when the language changes (including the
        // stored-language switch right after hydration); new nodes must be observed too,
        // otherwise they stay at opacity 0 forever.
        const mutationObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const added of mutation.addedNodes) {
                    if (!(added instanceof Element)) continue;
                    if (added.matches("[data-reveal]:not(.is-visible)")) revealObserver.observe(added);
                    observeReveals(added);
                }
            }
        });
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        const handlePointerMove = (event: PointerEvent): void => {
            const card = (event.target as Element | null)?.closest?.<HTMLElement>(".spotlight");
            if (!card) return;
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        };
        document.addEventListener("pointermove", handlePointerMove, { passive: true });

        return () => {
            revealObserver.disconnect();
            mutationObserver.disconnect();
            document.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return null;
}
