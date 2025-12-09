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
  title: "Neuro",
  description:
    "4th-year Software Engineering student at HUTECH. Experienced Java Backend Developer with expertise in Spring Boot, Microservices, MySQL, and MongoDB. 3 months Java Backend Intern and 3 months Software Engineer Intern.",
  keywords: [
    "Java Developer",
    "Backend Developer",
    "Spring Boot",
    "Microservices",
    "MySQL",
    "MongoDB",
    "Phạm Văn Sỹ",
    "Neuro.Dev",
    "HUTECH",
    "Software Engineer",
  ],
  authors: [{ name: "Phạm Văn Sỹ", url: "https://github.com/NeuroDev204" }],
  openGraph: {
    title: "Phạm Văn Sỹ (Neuro.Dev) | Java Backend Developer",
    description:
      "4th-year Software Engineering student at HUTECH. Experienced Java Backend Developer with expertise in Spring Boot, Microservices, MySQL, and MongoDB.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phạm Văn Sỹ (Neuro.Dev) | Java Backend Developer",
    description:
      "Experienced Java Backend Developer with expertise in Spring Boot, Microservices, MySQL, and MongoDB.",
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

