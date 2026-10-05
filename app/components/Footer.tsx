"use client";

import { LuArrowUp, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { useLanguage } from "../i18n";

const iconLinkClass = "grid size-9 place-items-center rounded-lg transition-colors hover:bg-white/5 hover:text-fg";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-line">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p>© {new Date().getFullYear()} Pham Van Sy</p>
                <div className="flex items-center gap-1">
                    <a href="https://github.com/NeuroDev204" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLinkClass}>
                        <LuGithub className="size-4" aria-hidden />
                    </a>
                    <a href="https://www.linkedin.com/in/syvan2004/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLinkClass}>
                        <LuLinkedin className="size-4" aria-hidden />
                    </a>
                    <a href="mailto:phamvansy204@gmail.com" aria-label="Email" className={iconLinkClass}>
                        <LuMail className="size-4" aria-hidden />
                    </a>
                    <a href="#top" className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-lg px-3 transition-colors hover:bg-white/5 hover:text-fg">
                        {t.footer.backToTop}
                        <LuArrowUp className="size-4" aria-hidden />
                    </a>
                </div>
            </div>
        </footer>
    );
}
