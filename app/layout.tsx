import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://neuro.io.vn"),
  title: "Neuro.Dev | Pham Van Sy",
  description:
    "Java Backend Developer — Spring Boot, Microservices, MySQL, MongoDB, Neo4j, Redis, Kafka. Open to internship and full-time opportunities.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  keywords: [
    "Java Developer",
    "Backend Developer",
    "Spring Boot",
    "Microservices",
    "MySQL",
    "MongoDB",
    "Phạm Văn Sỹ",
    "Pham Van Sy",
    "Neuro.Dev",
    "HUTECH",
    "Software Engineer",
  ],
  authors: [{ name: "Pham Van Sy", url: "https://github.com/NeuroDev204" }],
  openGraph: {
    title: "Pham Van Sy (Neuro.Dev) | Java Backend Developer",
    description:
      "Java Backend Developer — Spring Boot, Microservices, MySQL, MongoDB, Neo4j, Redis, Kafka. Open to internship and full-time opportunities.",
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/profile.webp",
        width: 800,
        height: 1000,
        alt: "Pham Van Sy — Neuro.Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Van Sy (Neuro.Dev) | Java Backend Developer",
    description:
      "Java Backend Developer — Spring Boot, Microservices, MySQL, MongoDB, Neo4j, Redis, Kafka.",
    images: ["/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
