"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, Translations } from "./translations";

interface LanguageContextType {
    language: Language;
    t: Translations;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
    if (typeof window === "undefined") {
        return "en";
    }
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "vi" || savedLanguage === "en" ? savedLanguage : "en";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    useEffect(() => {
        localStorage.setItem("portfolio-language", language);
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
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
