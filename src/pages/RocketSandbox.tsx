import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import rocketHeaderImage from "@/assets/rocket-header-image.png";
import rocketHeaderImage2 from "@/assets/rocket-header-image-2.png";
import rocketHeaderImage3 from "@/assets/rocket-header-image-3.png";
import rocketHeaderBg from "@/assets/rocket-header-bg.png";

const PlaceholderImage = ({
  className = "",
  aspectRatio = "aspect-video",
}: {
  className?: string;
  aspectRatio?: string;
}) => <div className={`bg-muted rounded-lg ${aspectRatio} ${className}`} />;

const RocketSandbox = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Blurred Background Image */}
      <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${rocketHeaderBg})`,
          }}
        />
        {/* Gradient Overlay for fade to white */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 60%, hsl(var(--background)) 100%)",
          }}
        />

        <Navigation variant="light" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Title Section */}
              <div className="text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">Rocket Sandbox</h1>
                <p className="text-xl text-white/90">K12 Education Game · Connected Devices</p>
              </div>

              {/* Image Section - Desktop Only */}
              <div className="hidden lg:flex flex-shrink-0 ml-12 relative top-[80px]">
                <img
                  src={rocketHeaderImage3}
                  alt="Rocket Sandbox game launch scene"
                  className="w-[400px] h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Background Section */}
          <section className="mb-20">
            <div className="max-w-[700px]">
              <h2 className="text-3xl font-bold mb-4">Background</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Commissioned by the New York Hall of Science and Children's Museum of Pittsburgh, our project revolves
                around four puzzle pieces: young children (5-8 years old), their families, engaging science content, and
                embracing the maker culture. Our mission is to seamlessly integrate these elements into an enjoyable
                digital experience.
              </p>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Challenge</h2>
            <p className="text-lg leading-relaxed text-foreground mb-6 max-w-[700px]">
              The main challenge was to design an intuitive interface that allows young children to build and customize
              rockets without overwhelming them with complex controls.
            </p>

            {/* HMW Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {/* Parents Card - Quarter circle top-right, tabs on right and bottom */}
              <div
                className="rounded-xl p-6 flex gap-4 items-center"
                style={{ backgroundColor: "rgba(255, 193, 7, 0.15)" }}
              >
                <div className="flex-shrink-0 relative w-[70px] h-[78px]">
                  <svg width="70" height="78" viewBox="0 0 93 103" fill="none" className="absolute inset-0">
                    <path
                      d="M92.5 0C41.4137 0 0 41.4137 0 92.5H29.125V102.5H62.875V92.5H92.5V61H82.75V31.25H92.5V0Z"
                      fill="#FBB020"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      top: "24px",
                      left: "13px",
                      width: "42px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    Parents
                  </span>
                </div>
                <p className="text-foreground">
                  Parents and kids may think different things fun. Teaching science is also not easy.{" "}
                  <span className="font-bold">HMW find the common fun and easy teaching experience for parents?</span>
                </p>
              </div>

              {/* Kids Card - Quarter circle bottom-right, tabs on left and bottom */}
              <div
                className="rounded-xl p-6 flex gap-4 items-center"
                style={{ backgroundColor: "rgba(173, 216, 230, 0.3)" }}
              >
                <div className="flex-shrink-0 relative w-[78px] h-[70px]">
                  <svg width="78" height="70" viewBox="0 0 103 93" fill="none" className="absolute inset-0">
                    <path
                      d="M103 93C103 41.9137 61.5863 0.5 10.5 0.5V29.625H0.5V63.375H10.5V93H42V83.25H71.75V93H103Z"
                      fill="#7C8A99"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      top: "18px",
                      right: "8px",
                      width: "50px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: 500,
                    }}
                  >
                    Kids (5-8)
                  </span>
                </div>
                <p className="text-foreground">
                  Kids at these ages don't understand, don't feel connected and don't see the process of what they are
                  learning. <span className="font-bold">HMW make children aware of their learning?</span>
                </p>
              </div>

              {/* Science Card - Quarter circle top-left, tabs on right and top */}
              <div
                className="rounded-xl p-6 flex gap-4 items-center"
                style={{ backgroundColor: "rgba(139, 169, 131, 0.2)" }}
              >
                <div className="flex-shrink-0 relative w-[78px] h-[70px]">
                  <svg width="78" height="70" viewBox="0 0 103 93" fill="none" className="absolute inset-0">
                    <path
                      d="M0 0C0 51.0863 41.4137 92.5 92.5 92.5V63.375H102.5V29.625H92.5V0H61V9.75H31.25V0H0Z"
                      fill="#8BA983"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      left: "8px",
                      width: "50px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                  >
                    Science
                  </span>
                </div>
                <p className="text-foreground">
                  There are so many different science content.{" "}
                  <span className="font-bold">
                    HMW choose the one that is simple and interesting for both parents and kids?
                  </span>
                </p>
              </div>

              {/* Maker Culture Card - Quarter circle bottom-left, tabs on left and top */}
              <div
                className="rounded-xl p-6 flex gap-4 items-center"
                style={{ backgroundColor: "rgba(255, 182, 193, 0.25)" }}
              >
                <div className="flex-shrink-0 relative w-[70px] h-[78px]">
                  <svg width="70" height="78" viewBox="0 0 93 103" fill="none" className="absolute inset-0">
                    <path
                      d="M0.5 103C51.5863 103 93 61.5863 93 10.5H63.875V0.5H30.125V10.5H0.5V42H10.25V71.75H0.5V103Z"
                      fill="#E86C3A"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "18px",
                      right: "12px",
                      width: "42px",
                      height: "36px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "9px",
                      fontWeight: 500,
                      lineHeight: 1.2,
                    }}
                  >
                    <span>Maker</span>
                    <span>Culture</span>
                  </span>
                </div>
                <p className="text-foreground">
                  Most of maker culture is based on craftsmanship.{" "}
                  <span className="font-bold">HMW create a digital experience of it?</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Solution Highlight Section with Full-Width Gradient Background */}
      <section
        className="mb-20 w-full"
        style={{ background: "linear-gradient(128deg, rgba(181, 184, 209, 0.3) 0%, rgba(242, 242, 242, 0.3) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Solution approach</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
              Creating a simple, intuitive interface that kids can use to{" "}
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                tap to change graphics
              </span>{" "}
              and{" "}
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                connect multiple components
              </span>{" "}
              together seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Interaction Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Interaction design</h2>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-20">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Core interaction</p>
                <h3 className="text-2xl font-bold mb-4">Tap to customize</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Children can tap on any rocket component to change its appearance, color, or functionality. The
                  interface provides immediate visual feedback.
                </p>
              </div>
              <div className="flex-1">
                <PlaceholderImage aspectRatio="aspect-video" className="shadow-md" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Building mechanics</p>
                <h3 className="text-2xl font-bold mb-4">Connect components</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Components snap together naturally using a drag-and-drop interface. Visual guides help children
                  understand how pieces fit together.
                </p>
              </div>
              <div className="flex-1">
                <PlaceholderImage aspectRatio="aspect-video" className="shadow-md" />
              </div>
            </div>
          </section>

          {/* Library & Editor Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Library & Editor</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  The design system helps children tap and find the parts they want to build a rocket. The grid-based
                  editor works with a line drawing tool, allowing children to explore a new world with a library of
                  parts.
                </p>
              </div>
              <div className="flex-1">
                <PlaceholderImage aspectRatio="aspect-video" className="shadow-md" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Scene to Run Section with Gradient Background */}
      <section
        className="mb-20 w-full"
        style={{ background: "linear-gradient(128deg, rgba(181, 184, 209, 0.3) 0%, rgba(242, 242, 242, 0.3) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">The scene to run</h2>
              <p className="text-lg leading-relaxed text-foreground">
                The design allows children to customize their rocket parts with various colors and patterns. Children
                have full control over every part and can see how they interact together in the launch scene.
              </p>
            </div>
            <div className="flex-1">
              <PlaceholderImage aspectRatio="aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* How to Play Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">How to play</h2>
            <p className="text-lg leading-relaxed text-foreground mb-12">
              The game flow is designed to guide children through four simple steps.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  Create your rocket with the parts library
                </p>
                <PlaceholderImage aspectRatio="aspect-square" className="shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Load</h3>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  Transfer your design to the physical device
                </p>
                <PlaceholderImage aspectRatio="aspect-square" className="shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Play</h3>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  Connect the controller and launch your rocket
                </p>
                <PlaceholderImage aspectRatio="aspect-square" className="shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Test</h3>
                <p className="text-lg leading-relaxed text-foreground mb-4">Watch and control your rocket in space</p>
                <PlaceholderImage aspectRatio="aspect-square" className="shadow-md" />
              </div>
            </div>
          </section>

          {/* Research Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Research</h2>
                <h3 className="text-2xl font-bold mb-4">Would the concept work?</h3>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  We conducted user testing sessions with children aged 6-12 and observed their interactions with the
                  prototype. The results showed high engagement and intuitive understanding of the building mechanics.
                </p>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-foreground">
                    • Children quickly understood the drag-and-drop mechanics
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    • Visual feedback improved task completion rates
                  </p>
                  <p className="text-lg leading-relaxed text-foreground">
                    • Physical device integration increased engagement
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <PlaceholderImage aspectRatio="aspect-video" className="shadow-md" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Impact Quote Section with Gradient Background */}
      <section
        className="mb-20 w-full"
        style={{ background: "linear-gradient(128deg, rgba(181, 184, 209, 0.3) 0%, rgba(242, 242, 242, 0.3) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">The motion of creating, of the experience is essential</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              For the first time, we combined new standards to guide kids to not just observe but{" "}
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                experience real tasks
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Key features</h2>

            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Add elements with interactions</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    Users can interact with elements in the scene and add effects, creating a dynamic and engaging
                    experience.
                  </p>
                </div>
                <div className="flex-1">
                  <PlaceholderImage aspectRatio="aspect-video" className="shadow-md" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Make the existing moment "stronger"</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    Make crafts that we can remember forever with the understanding of its interaction.
                  </p>
                </div>
                <div className="flex-1">
                  <PlaceholderImage aspectRatio="aspect-video" className="shadow-md" />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Inspire fun and creativity</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    The art that things work together well gives users a deeper understanding of the physical world.
                  </p>
                </div>
                <div className="flex-1">
                  <PlaceholderImage aspectRatio="aspect-video" className="shadow-md" />
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="mb-20">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">One Minute Video</p>
              <h3 className="text-2xl font-bold mb-8">Do you want to build a rocket?</h3>
              <PlaceholderImage aspectRatio="aspect-video" className="max-w-4xl mx-auto shadow-md" />
            </div>
          </section>
        </div>
      </div>

      {/* Credits Section */}
      <section className="py-16 bg-[hsl(220,20%,20%)] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <PlaceholderImage aspectRatio="aspect-[3/1]" className="w-32 mx-auto mb-4 bg-white/20" />
            <p className="text-lg text-white/70">
              This project has been funded and selected by New York Hall of Science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Team member</h4>
              <p className="text-lg text-white/70">
                User Experience Designer, Project Manager, Developer, Research Assistant
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Supervisor</h4>
              <p className="text-lg text-white/70">Director of Product Design Studio</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Client</h4>
              <p className="text-lg text-white/70">New York Hall of Science, Exhibition and Experience Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="py-8 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home screen
          </Link>
        </div>
      </section>

      <Footer variant="project" />
    </div>
  );
};

export default RocketSandbox;
