import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Effects from "./components/Effects";

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Freelance AI engineer — fine-tuned NLP, LLM assistants and the event-driven backends around them. From prototype to production.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://neuro.io.vn"),
  title: "Pham Van Sy — Freelance AI Engineer",
  description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Freelance AI Engineer",
    "AI Engineer",
    "NLP",
    "PhoBERT",
    "LLM",
    "FastAPI",
    "Spring Boot",
    "Kafka",
    "Backend Developer",
    "Pham Van Sy",
    "Phạm Văn Sỹ",
  ],
  authors: [{ name: "Pham Van Sy", url: "https://github.com/NeuroDev204" }],
  openGraph: {
    title: "Pham Van Sy — Freelance AI Engineer",
    description,
    type: "website",
    locale: "en_US",
    images: [{ url: "/profile.webp", width: 693, height: 923, alt: "Pham Van Sy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Van Sy — Freelance AI Engineer",
    description,
    images: ["/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Runs before first paint so reveal animations never flash visible-then-hidden content.
// Automated browsers (crawlers, test runners) skip it and always get fully visible content.
const enableRevealScript = 'if (!navigator.webdriver) document.documentElement.classList.add("js")';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The inline script mutates <html class> before hydration, which React would otherwise flag.
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: enableRevealScript }} />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
        <Effects />
      </body>
    </html>
  );
}
