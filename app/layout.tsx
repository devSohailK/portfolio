import type { Metadata } from "next";
import { Outfit, PT_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import ParticleBackground from "@/components/particle-background";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ptMono = PT_Mono({
  weight: "400",
  variable: "--font-pt-mono",
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
      className={`${outfit.variable} ${ptMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-slate-100 relative">
        <ThemeProvider>
          <ParticleBackground />
          <div className="relative z-10 flex flex-col flex-1">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
