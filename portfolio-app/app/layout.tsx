import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abrar Bin Rofique | AI Engineer & Full Stack Developer",
  description: "Portfolio of Abrar Bin Rofique - AI Engineer, Backend Developer, and Full Stack Developer specializing in Python, Django, and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground selection:bg-neon-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
