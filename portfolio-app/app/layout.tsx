import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Background3D from "@/components/Background3D";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Abrar Bin Rofique | AI Engineer & Full Stack Developer",
  description: "Portfolio of Abrar Bin Rofique - AI Engineer, Backend Developer, and Full Stack Developer specializing in Python, Django, and AI agents.",
  icons: {
    icon: "/Media(1).jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-primary-dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Background3D />
          <ThemeToggle />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
