import { PROJECTS } from "@/lib/projects";
import ProjectDetail from "@/components/project-detail";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

const project = PROJECTS.find((p) => p.id === "smartdraft");

export const metadata: Metadata = {
  title: "SmartDraft | Sohail Khan",
  description: "AI-driven platform for generating technical content using OpenAI APIs",
};

export default function SmartDraftPage() {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Project not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ProjectDetail project={project} />
        </div>
      </main>
    </div>
  );
}
