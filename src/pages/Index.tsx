import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import CreativeWorkCard from "@/components/CreativeWorkCard";
import Footer from "@/components/Footer";
import SolarSystemAnimation from "@/components/SolarSystemAnimation";
import dayProjectImg from "@/assets/100day-project.jpg";
import rocketSandboxImg from "@/assets/rocket-sandbox.jpg";
import powerfallImg from "@/assets/powerfall.jpg";
import adminCoverImg from "@/assets/hs_admin.png";
import allowanceCoverImg from "@/assets/allowance_hs-2.png";
import pastWorkCoverImg from "@/assets/hs_past.png";

const Index = () => {
  const projects = [
    {
      title: "Allowance Awareness",
      subtitle: "B2B2C - iOS & Android",
      description: "Enhance Employee Awareness of Allowance for Informed Food Ordering Decisions.",
      imageUrl: allowanceCoverImg,
      link: "/allowance-awareness",
      blobColor: "bg-pink-200/40",
      reverse: false,
    },
    {
      title: "Allowance Awareness",
      subtitle: "B2B2C - iOS & Android",
      description: "Enhance Employee Awareness of Allowance for Informed Food Ordering Decisions.",
      imageUrl: adminCoverImg,
      link: "/corporate-admin-revamp",
      blobColor: "bg-purple-200/40",
      reverse: true,
    },
    {
      title: "Allowance Awareness",
      subtitle: "B2B2C - iOS & Android",
      description: "Enhance Employee Awareness of Allowance for Informed Food Ordering Decisions.",
      imageUrl: pastWorkCoverImg,
      blobColor: "bg-blue-200/40",
      reverse: false,
    },
  ];

  const creativeWorks = [
    {
      title: "#100dayproject",
      subtitle: "Illustration - Science & Culture",
      imageUrl: dayProjectImg,
    },
    {
      title: "Rocket Sandbox",
      subtitle: "Education Game - Connected Devices",
      imageUrl: rocketSandboxImg,
    },
    {
      title: "Powerfall",
      subtitle: "Voice-controlled Game - Connected Devices",
      imageUrl: powerfallImg,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <SolarSystemAnimation />
      <Navigation />
      <HeroSection />
      
      <main className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Projects Section */}
          <section id="design" className="mb-20 space-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
                blobColor={project.blobColor}
                reverse={project.reverse}
              />
            ))}
          </section>

          {/* Creative Work Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
              Creation for inspiration & fun
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
              {creativeWorks.map((work, index) => (
                <CreativeWorkCard
                  key={index}
                  title={work.title}
                  subtitle={work.subtitle}
                  imageUrl={work.imageUrl}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
