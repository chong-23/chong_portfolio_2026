import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import pastWorkCoverImg from "@/assets/hs_past.png";

const EarlyWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background covering Navigation */}
      <div
        className="relative h-[400px] lg:h-[550px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, white 100%), linear-gradient(128deg, rgba(64, 112, 245, 0.3) 0%, rgba(227, 214, 255, 0.3) 100%)",
        }}
      >
        <Navigation />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Title Section */}
              <div className="text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Snippet of Early Works</h1>
                <p className="text-xl">Education & E-commerce - Web Platform</p>
              </div>

              {/* Image Section - Desktop Only */}
              <div className="hidden lg:block flex-shrink-0 ml-12 relative top-[40px]">
                <img
                  src={pastWorkCoverImg}
                  alt="Early Works interface"
                  className="w-[550px] h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Overview Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Background</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  A collection of early design projects spanning education and e-commerce platforms. 
                  These works showcase foundational design thinking and problem-solving approaches 
                  that shaped my design philosophy.
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Project image placeholder</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project 1 Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Project Title 1</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Description of the first early work project. Explain the context, challenges, 
                  and your role in solving the design problems.
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Project image placeholder</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project 2 Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Project Title 2</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Description of the second early work project. Explain the context, challenges, 
                  and your role in solving the design problems.
                </p>
              </div>
              <div className="flex-1">
                <div className="w-full h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Project image placeholder</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Key Learnings Section */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">1. Learning point one</h3>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">2. Learning point two</h3>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">3. Learning point three</h3>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EarlyWorks;
