"use client";

import { useState, useEffect, useCallback } from "react";
import {
    FiZoomIn,
    FiZoomOut,
    FiExternalLink,
    FiDownload,
    FiX,
} from "react-icons/fi";
import { useLanguage } from "../i18n";

export interface ArchitectureModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ArchitectureModal({
    isOpen,
    onClose,
}: ArchitectureModalProps) {
    const [isZoomed, setIsZoomed] = useState(false);
    const { language, t } = useLanguage();

    const modalT = t.architectureModal || t.projects?.architectureModal;

    const handleClose = useCallback(() => {
        setIsZoomed(false);
        onClose();
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleClose]);

    if (!isOpen) return null;

    const isVi = language === "vi";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md transition-all duration-200"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
            role="presentation"
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="architecture-modal-title"
                aria-describedby="architecture-modal-description"
                className="relative w-full max-w-6xl max-h-[94vh] flex flex-col bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-start justify-between p-4 sm:p-5 border-b border-[var(--border-subtle)] gap-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className="pill-tag text-xs font-mono">
                                {modalT.badge}
                            </span>
                            <span className="pill-tag text-xs font-mono">
                                Microservices
                            </span>
                            <span className="pill-tag text-xs font-mono">
                                RabbitMQ
                            </span>
                            <span className="pill-tag text-xs font-mono">
                                ClickHouse
                            </span>
                            <span className="pill-tag text-xs font-mono">
                                Ollama Qwen3
                            </span>
                        </div>
                        <h3
                            id="architecture-modal-title"
                            className="text-lg sm:text-xl font-bold text-[var(--text-primary)] truncate"
                        >
                            {modalT.title}
                        </h3>
                        <p
                            id="architecture-modal-description"
                            className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 line-clamp-2"
                        >
                            {modalT.subtitle}
                        </p>
                    </div>

                    {/* Header Controls */}
                    <div className="flex items-center gap-2 shrink-0">
                        {/* Zoom Toggle */}
                        <button
                            type="button"
                            onClick={() => setIsZoomed((prev) => !prev)}
                            aria-label={isZoomed ? modalT.resetZoom : modalT.zoomIn}
                            title={isZoomed ? modalT.resetZoom : modalT.zoomIn}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[var(--text-muted)] cursor-pointer"
                        >
                            {isZoomed ? (
                                <>
                                    <FiZoomOut className="text-sm" />
                                    <span className="hidden md:inline">{modalT.resetZoom}</span>
                                </>
                            ) : (
                                <>
                                    <FiZoomIn className="text-sm" />
                                    <span className="hidden md:inline">{modalT.zoomIn}</span>
                                </>
                            )}
                        </button>

                        {/* Open in New Tab */}
                        <a
                            href="/architecture/HUTECH-AIDT_Social-Heartbeat_Architecture.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={modalT.openNewTab}
                            title={modalT.openNewTab}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[var(--text-muted)] cursor-pointer"
                        >
                            <FiExternalLink className="text-sm" />
                            <span className="hidden md:inline">{modalT.openNewTab}</span>
                        </a>

                        {/* Download */}
                        <a
                            href="/architecture/HUTECH-AIDT_Social-Heartbeat_Architecture.png"
                            download="HUTECH-AIDT_Social-Heartbeat_Architecture.png"
                            aria-label={modalT.download}
                            title={modalT.download}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[var(--text-muted)] cursor-pointer"
                        >
                            <FiDownload className="text-sm" />
                            <span className="hidden md:inline">{modalT.download}</span>
                        </a>

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={handleClose}
                            aria-label={modalT.close}
                            title={modalT.close}
                            className="p-2 rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors focus:outline-hidden focus:ring-2 focus:ring-[var(--text-muted)] cursor-pointer"
                        >
                            <FiX className="text-base" />
                        </button>
                    </div>
                </div>

                {/* Modal Body / Image Viewer */}
                <div
                    className={`relative flex-1 overflow-auto bg-[var(--bg-primary)]/40 p-4 sm:p-6 transition-all ${
                        isZoomed
                            ? "cursor-zoom-out"
                            : "flex items-center justify-center cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed((prev) => !prev)}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/architecture/HUTECH-AIDT_Social-Heartbeat_Architecture.png"
                        alt={modalT.title}
                        className={`rounded-xl border border-[var(--border-subtle)] shadow-md select-none transition-all duration-200 ${
                            isZoomed
                                ? "min-w-[1400px] w-auto max-w-none h-auto"
                                : "max-w-full max-h-[64vh] w-auto h-auto object-contain hover:scale-[1.005]"
                        }`}
                        draggable={false}
                    />
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 sm:p-4 border-t border-[var(--border-subtle)] gap-2 bg-[var(--bg-card)]">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {isVi
                            ? "Sơ đồ kiến trúc HUTECH-AIDT Social Heartbeat: Microservices hướng sự kiện (RabbitMQ), suy luận AI hai tầng (PhoBERT + Ollama Qwen3), Transactional Outbox và kho phân tích OLAP ClickHouse (<15ms latency)."
                            : "HUTECH-AIDT Social Heartbeat Architecture: Event-driven microservices (RabbitMQ), two-stage AI inference (PhoBERT + Ollama Qwen3), Transactional Outbox, and ClickHouse OLAP (<15ms latency)."}
                    </p>
                    <span className="text-[11px] text-[var(--text-secondary)] shrink-0 font-mono">
                        1871 × 1020 px (PNG)
                    </span>
                </div>
            </div>
        </div>
    );
}
