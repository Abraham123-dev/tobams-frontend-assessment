import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tobams-frontend-assessment.vercel.app"),
  title: "Training and Development | Tobams Group",
  description:
    "Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.",
  keywords: [
    "Tobams Group",
    "Training and Development",
    "Corporate Trainings",
    "Capacity Development",
    "Learning Management System",
    "Management Development Program",
    "Transformation Hub With Jite Newton",
    "Training The Consultant",
  ],
  authors: [{ name: "Tobams Group" }],
  openGraph: {
    title: "Training and Development | Tobams Group",
    description:
      "Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward.",
    url: "https://tobams-frontend-assessment.vercel.app",
    siteName: "Tobams Group",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Tobams Group Training and Development",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <body className="min-h-screen bg-[#F9F9F9] text-[#151515] antialiased selection:bg-[#571244]/20 selection:text-[#571244]">
        {children}
      </body>
    </html>
  );
}
