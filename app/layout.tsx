import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sohail Khan | Full-Stack Software Engineer",
  description:
    "Portfolio of Sohail Khan, a Full-Stack Software Engineer building modern web, mobile, and AI-powered applications.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "Software Engineer"],
  authors: [{ name: "Sohail Khan" }],
  openGraph: {
    title: "Sohail Khan | Full-Stack Software Engineer",
    description:
      "Portfolio of Sohail Khan, a Full-Stack Software Engineer building modern web, mobile, and AI-powered applications.",
    type: "website",
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
