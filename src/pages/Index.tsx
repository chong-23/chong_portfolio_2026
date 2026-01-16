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
      subtitle: "Food Delivery - iOS & Android",
      imageUrl: allowanceCoverImg,
      link: "/allowance-awareness",
      gradientStyle: {
        background: "linear-gradient(to bottom right, rgba(255, 178, 158, 0.3) 0%, rgba(255, 237, 201, 0.3) 100%)",
      },
      reverse: false,
    },
    {
      title: "Corporate Admin Revamp",
      subtitle: "Food Delivery - Web",
      imageUrl: adminCoverImg,
      link: "/corporate-admin-revamp",
      gradientStyle: {
        background: "linear-gradient(to bottom right, rgba(127, 130, 166, 0.3) 0%, rgba(242, 242, 242, 0.3) 100%)",
      },
      reverse: true,
    },
    {
      title: "Snippet of Early Works",
      subtitle: "Education&E-commerce - Web",
      imageUrl: pastWorkCoverImg,
      link: "/early-works",
      linkText: "See details",
      gradientStyle: {
        background: "linear-gradient(to bottom right, rgba(64, 112, 245, 0.3) 0%, rgba(227, 214, 255, 0.3) 100%)",
      },
      reverse: false,
    },
  ];

  const creativeWorks = [
    {
      title: "#100dayproject",
      subtitle: "Science & Culture",
      imageUrl: dayProjectImg,
      link: "/100day-project",
      tag: { label: "Illustration", color: "#E87A00" },
    },
    {
      title: "Rocket Sandbox",
      subtitle: "Connected Devices",
      imageUrl: rocketSandboxImg,
      link: "/rocket-sandbox",
      tag: { label: "Game", color: "#4070F4" },
    },
    {
      title: "Powerfall",
      subtitle: "Voice-control",
      imageUrl: powerfallImg,
      link: "/powerfall",
      tag: { label: "Game", color: "#4070F4" },
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
                imageUrl={project.imageUrl}
                link={project.link}
                linkText={project.linkText}
                gradientStyle={project.gradientStyle}
                reverse={project.reverse}
              />
            ))}
          </section>

          {/* Creative Work Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Creation for inspiration & fun</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
              {creativeWorks.map((work, index) => (
                <CreativeWorkCard key={index} title={work.title} subtitle={work.subtitle} imageUrl={work.imageUrl} link={work.link} tag={work.tag} />
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
