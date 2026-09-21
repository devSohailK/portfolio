import { PROJECTS } from "@/lib/projects";
import ProjectDetail from "@/components/project-detail";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

const project = PROJECTS.find((p) => p.id === "clickprint");

export const metadata: Metadata = {
  title: "ClickPrint | Sohail Khan",
  description: "Cross-platform printing management application built with React Native and Node.js",
};

export default function ClickPrintPage() {
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Project not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
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
