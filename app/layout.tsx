import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nimantha Thennakoon | Software Engineer Portfolio",
    template: "%s | Nimantha Thennakoon",
  },
  description:
    "Portfolio of Nimantha Thennakoon, a Software Engineering undergraduate specializing in React, Next.js, Spring Boot, and modern web applications.",

  keywords: [
    "Nimantha Thennakoon",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Spring Boot Developer",
    "Sri Lanka Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Nimantha Thennakoon" }],

  creator: "Nimantha Thennakoon",

  metadataBase: new URL("https://nimantha.vercel.app"),

  openGraph: {
    title: "Nimantha Thennakoon | Software Engineer Portfolio",
    description:
      "Explore the portfolio of Nimantha Thennakoon showcasing web development projects built with Next.js, React, Tailwind CSS, and Spring Boot.",
    url: "https://nimantha.vercel.app",
    siteName: "Nimantha Portfolio",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Nimantha Thennakoon Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nimantha Thennakoon | Software Engineer Portfolio",
    description:
      "Portfolio showcasing projects built with Next.js, React, Tailwind CSS, and Spring Boot.",
    images: ["/me.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}