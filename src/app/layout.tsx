import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Fabna Asiya | Full Stack Developer",
  description:
    "Portfolio of Fabna Asiya, showcasing Python Full Stack, MERN, React, Django, and web development projects.",
  keywords: [
    "Fabna Asiya",
    "Full Stack Developer",
    "Python Developer",
    "MERN Stack",
    "React",
    "Django",
    "Next.js",
  ],
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="glow-background min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}