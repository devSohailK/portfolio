import { PROJECTS } from "@/lib/projects";
import ProjectDetail from "@/components/project-detail";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

const project = PROJECTS.find((p) => p.id === "smartdoc");

export const metadata: Metadata = {
  title: "SmartDoc-SaaS | Sohail Khan",
  description: "AI-powered document analysis tool built with Next.js, Node.js, and Gemini API",
};

export default function SmartDocPage() {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Project not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ProjectDetail project={project} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
