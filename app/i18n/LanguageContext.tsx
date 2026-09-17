"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from "react";
import { translations, Language, Translations } from "./translations";

interface LanguageContextType {
    language: Language;
    t: Translations;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

let listeners: Array<() => void> = [];

function emitChange() {
    for (const listener of listeners) {
        listener();
    }
}

function subscribe(callback: () => void) {
    listeners.push(callback);
    window.addEventListener("storage", callback);
    return () => {
        listeners = listeners.filter((l) => l !== callback);
        window.removeEventListener("storage", callback);
    };
}

function getSnapshot(): Language {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("portfolio-language");
    return saved === "vi" ? "vi" : "en";
}

function getServerSnapshot(): Language {
    return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        localStorage.setItem("portfolio-language", lang);
        emitChange();
    };

    const toggleLanguage = () => {
        const newLang = language === "vi" ? "en" : "vi";
        setLanguage(newLang);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
