import { PROJECTS } from "@/lib/projects";
import ProjectDetail from "@/components/project-detail";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

const project = PROJECTS.find((p) => p.id === "api-hit-monitoring");

export const metadata: Metadata = {
  title: "API Hit Monitoring Platform | Sohail Khan",
  description: "Built a scalable API monitoring platform to track API health, performance, and availability.",
};

export default function ApiHitMonitoringPage() {
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
