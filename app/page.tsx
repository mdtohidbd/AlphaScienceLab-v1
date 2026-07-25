import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import PhotoGallery from "@/components/PhotoGallery";
import ResearchAreas from "@/components/ResearchAreas";
import InnovationHub from "@/components/InnovationHub";
import Stories from "@/components/Stories";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-transparent">
      <CustomCursor />
      <Navbar />
      <Hero />
      <ResearchAreas />
      <InnovationHub />
      <div id="projects">
        <ProjectsGallery />
      </div>
      <PhotoGallery />
      <Stories />
      <JoinSection />
      <Footer />
    </main>
  );
}

