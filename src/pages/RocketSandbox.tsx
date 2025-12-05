import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PlaceholderImage = ({ className = "", aspectRatio = "aspect-video" }: { className?: string; aspectRatio?: string }) => (
  <div className={`bg-muted rounded-lg ${aspectRatio} ${className}`} />
);

const RocketSandbox = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-[hsl(200,30%,75%)] pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Rocket Sandbox
              </h1>
              <p className="text-lg text-muted-foreground">
                K-12 Education Game • Connected Devices
              </p>
            </div>
            <div className="flex-1">
              <PlaceholderImage aspectRatio="aspect-square" className="max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Background</h2>
          <p className="text-base leading-relaxed text-foreground mb-6">
            Rocket Sandbox allows children to experiment with building rockets and launching them into space. 
            By designing and testing their creations, students learn fundamental principles of physics, 
            engineering, and problem-solving in an engaging, hands-on environment.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Challenge</h2>
          <p className="text-base leading-relaxed text-foreground mb-8">
            The main challenge was to design an intuitive interface that allows young children to 
            build and customize rockets without overwhelming them with complex controls.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-4 rounded-lg">
              <PlaceholderImage aspectRatio="aspect-video" className="mb-4" />
              <p className="text-sm text-muted-foreground">
                How can we make rocket building accessible for young learners?
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <PlaceholderImage aspectRatio="aspect-video" className="mb-4" />
              <p className="text-sm text-muted-foreground">
                How can we connect physical devices with digital experiences?
              </p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <PlaceholderImage aspectRatio="aspect-video" className="mb-4" />
              <p className="text-sm text-muted-foreground">
                How can we make the learning process fun and rewarding?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interaction Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-base text-foreground mb-8">
            The solution is creating a simple, intuitive interface that kids can use
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4">
            <div className="flex flex-col items-center">
              <PlaceholderImage aspectRatio="aspect-square" className="w-24 h-24 mb-2" />
              <p className="text-sm text-muted-foreground">Tap to change the graphic</p>
            </div>
            <div className="text-2xl text-muted-foreground">→</div>
            <div className="flex flex-col items-center">
              <PlaceholderImage aspectRatio="aspect-square" className="w-24 h-24 mb-2" />
            </div>
            <div className="text-2xl text-muted-foreground">+</div>
            <div className="flex flex-col items-center">
              <PlaceholderImage aspectRatio="aspect-square" className="w-24 h-24 mb-2" />
              <p className="text-sm text-muted-foreground">Connect multiple ones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Solution</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            How would young kids know what they can?
          </h3>
          <p className="text-base leading-relaxed text-foreground mb-6">
            We designed an intuitive drag-and-drop interface with visual feedback that guides children 
            through the rocket building process. Each component snaps together naturally, and 
            animations help reinforce correct connections.
          </p>
        </div>
      </section>

      {/* Library & Editor Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            The solution: A library & An editor
          </h3>
          <p className="text-base text-muted-foreground mb-8">
            Design system helps children to tap and find the parts that they want to build a rocket.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            The grid to build works with line drawing tool for children new world with a library of parts for children
          </p>
          
          <PlaceholderImage aspectRatio="aspect-video" className="max-w-2xl mx-auto" />
        </div>
      </section>

      {/* Scene to Run Section */}
      <section className="py-12 md:py-16 bg-[hsl(200,30%,85%)]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">The scene to run</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlaceholderImage aspectRatio="aspect-video" />
            <div className="flex flex-col justify-center">
              <p className="text-base leading-relaxed text-foreground">
                Design allows children to customize their rocket parts with various colors and patterns. 
                The challenge is to have full control over every part and see how they interact together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-8">How to play</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div>
              <PlaceholderImage aspectRatio="aspect-square" className="mb-2" />
              <p className="text-xs text-muted-foreground">
                Design: A flat surface that wraps rocket with rubber band
              </p>
            </div>
            <div>
              <PlaceholderImage aspectRatio="aspect-square" className="mb-2" />
              <p className="text-xs text-muted-foreground">
                Load: A flat square surface from a small piece
              </p>
            </div>
            <div>
              <PlaceholderImage aspectRatio="aspect-square" className="mb-2" />
              <p className="text-xs text-muted-foreground">
                Play: A connecting connector between the game controller
              </p>
            </div>
            <div>
              <PlaceholderImage aspectRatio="aspect-square" className="mb-2" />
              <p className="text-xs text-muted-foreground">
                Test: Users can watch and control rocket
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Research</h2>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Would the concept work?
          </h3>
          <p className="text-base leading-relaxed text-foreground mb-6">
            We conducted user testing sessions with children aged 6-12 and observed their interactions 
            with the prototype. The results showed high engagement and intuitive understanding of 
            the building mechanics.
          </p>
          
          <ul className="list-disc list-inside text-base text-foreground space-y-2">
            <li>Children quickly understood the drag-and-drop mechanics</li>
            <li>Visual feedback improved task completion rates</li>
            <li>Physical device integration increased engagement</li>
          </ul>
        </div>
      </section>

      {/* Impact Quote Section */}
      <section className="py-16 md:py-24 bg-[hsl(200,30%,75%)]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            The motion of creating, of the experience is essential
          </h3>
          <p className="text-base text-foreground">
            For the first time, we combined new standards to guide kids to not just observe but experience real tasks.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Add elements with interactions
              </h3>
              <p className="text-base text-muted-foreground">
                Users can interact with elements in the scene and add effects.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Make the existing moment "stronger"
              </h3>
              <p className="text-base text-muted-foreground">
                Make crafts that we can remember forever with the understanding of its interaction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Inspire fun and creativity
              </h3>
              <p className="text-base text-muted-foreground">
                The art that things work together well gives users a more deep understanding of the physical world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm text-muted-foreground mb-4">One Minute Video</p>
          <h3 className="text-xl font-bold text-foreground mb-8">
            Do you want to build a rocket?
          </h3>
          <PlaceholderImage aspectRatio="aspect-video" className="max-w-2xl mx-auto" />
        </div>
      </section>

      {/* Credits Section */}
      <section className="py-12 md:py-16 bg-[hsl(220,20%,20%)] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <PlaceholderImage aspectRatio="aspect-[3/1]" className="w-32 mx-auto mb-4 bg-muted/30" />
          <p className="text-sm text-white/70 mb-8">
            This project has been funded and selected by New York Hall of Science
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm">
            <div>
              <h4 className="font-semibold mb-2">Team member</h4>
              <p className="text-white/70">
                User Experience Designer, Project Manager, Developer, Research Assistant
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Supervisor</h4>
              <p className="text-white/70">
                Director of Product Design Studio
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Client</h4>
              <p className="text-white/70">
                New York Hall of Science, Exhibition and Experience Design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home screen
          </Link>
        </div>
      </section>

      <Footer variant="project" />
    </div>
  );
};

export default RocketSandbox;
