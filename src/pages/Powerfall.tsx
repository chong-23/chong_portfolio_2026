import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import powerfallHeaderImage from "@/assets/powerfall-header-image.png";
import powerfallHeaderBg from "@/assets/powerfall-header-bg.png";
import powerfallChallenge1 from "@/assets/powerfall-challenge-1.png";
import powerfallChallenge2 from "@/assets/powerfall-challenge-2.png";
import powerfallChallenge3 from "@/assets/powerfall-challenge-3.png";
import powerfallShoutDiagram from "@/assets/powerfall-shout-diagram.png";
import powerfallSafetyInstruction from "@/assets/powerfall-safety-instruction.png";
import powerfallStory1 from "@/assets/powerfall-story-1.png";
import powerfallStory2 from "@/assets/powerfall-story-2.png";
import powerfallStory3 from "@/assets/powerfall-story-3.png";
import powerfallStory4 from "@/assets/powerfall-story-4.png";
import powerfallCharacters from "@/assets/powerfall-characters.png";
import powerfallAnimationFeedback from "@/assets/powerfall-animation-feedback.png";
import powerfallVideoBg from "@/assets/powerfall-video-bg.png";
import chiPlayLogo from "@/assets/chi-play-logo.png";
import cloudImg from "@/assets/cloud.png";
import cubeConnectImg from "@/assets/cube_connect.png";
import cubeTouchImg from "@/assets/cube_touch.png";
import rocketPrototype1 from "@/assets/rocket-prototype-1.jpg";
import thrustsImage from "@/assets/thrusts.png";
import fueltanksImage from "@/assets/fueltanks.png";
import atmosphereImage from "@/assets/atmosphere.png";
import rocketPlay1 from "@/assets/rocket-play-1.png";
import rocketPlay2 from "@/assets/rocket-play-2.png";
import rocketPlay3 from "@/assets/rocket-play-3.png";
import rocketPlay4 from "@/assets/rocket-play-4.png";
import rocketPlay5 from "@/assets/rocket-play-5.png";
import rocketPrototype2 from "@/assets/rocket-prototype-2.png";
import smokelandConcept from "@/assets/smokeland_concept.png";
import smokelaunchConcept from "@/assets/smokelaunchconcept.png";
import rocketExhibit from "@/assets/rocket-exhibit.jpg";
import rocketExhibitVisitors from "@/assets/rocket-exhibit-visitors.png";
import rocketVideoBg from "@/assets/rocket-video-bg.png";
import nysciLogo from "@/assets/nysci-logo-white.png";

const PlaceholderImage = ({
  className = "",
  aspectRatio = "aspect-video",
}: {
  className?: string;
  aspectRatio?: string;
}) => <div className={`bg-muted rounded-lg ${aspectRatio} ${className}`} />;

const Powerfall = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Blurred Background Image */}
      <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-md scale-110"
          style={{
            backgroundImage: `url(${powerfallHeaderBg})`,
          }}
        />
        {/* Gradient Overlay for fade to white */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 60%, hsl(var(--background)) 100%)",
          }}
        />

        <Navigation />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Title Section */}
              <div className="text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Powerfall</h1>
                <p className="text-xl">K12 Education Game · Voice-control</p>
              </div>

              {/* Image Section - Desktop Only */}
              <div className="hidden lg:flex flex-shrink-0 ml-12 relative top-[80px]">
                <img
                  src={powerfallHeaderImage}
                  alt="Powerfall game characters with parachute"
                  className="w-[400px] h-auto"
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
            <h2 className="text-3xl font-bold mb-4">Challenge & Goal</h2>
            <p className="text-lg leading-relaxed text-foreground mb-12 max-w-[700px]">
              Challenged with a mere 3-week timeline, we began with a blank canvas, quickly establishing a brainstorming
              direction to craft an unforgettable 5-minute experience from scratch.
            </p>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <img src={powerfallChallenge1} alt="Simple interaction" className="h-24 w-auto mb-6" />
                <h3 className="text-xl font-bold" style={{ color: "#4070F4" }}>
                  Simple interaction
                </h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={powerfallChallenge2} alt="Collaborative gameplay" className="h-24 w-auto mb-6" />
                <h3 className="text-xl font-bold" style={{ color: "#4070F4" }}>
                  Collaborative gameplay
                </h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={powerfallChallenge3} alt="Funny story" className="h-24 w-auto mb-6" />
                <h3 className="text-xl font-bold" style={{ color: "#4070F4" }}>
                  Funny story
                </h3>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Simplest Interaction Section */}
      <section className="py-16 w-full" style={{ backgroundColor: "rgba(173, 216, 230, 0.3)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">The simplest and "chaotic" interaction</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-8">
              After an intense 5-hour research and brainstorming over 3 days, exploring various tech options like AR,
              VR, Kinects, and Leap Motion, we arrived at the simplest idea: allowing players to{" "}
              <span className="font-bold" style={{ color: "#4070F4" }}>
                SHOUT
              </span>
              .
            </p>
            <img
              src={powerfallShoutDiagram}
              alt="Players shouting at screen to control the game"
              className="max-w-2xl w-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Survive from danger Section */}
      <section className="py-16 w-full bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Survive from danger with friends</h3>
              <p className="text-lg leading-relaxed text-foreground">
                To create tension between players, we designed an intense scenario where two players shout in opposite
                directions to control their navigation through hazardous obstacles.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={powerfallSafetyInstruction}
                alt="Safety instruction showing gameplay mechanics"
                className="max-w-[350px] w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Set a hilarious scene Section */}
      <section className="py-16 w-full" style={{ backgroundColor: "rgba(173, 216, 230, 0.3)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Set a hilarious scene</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              To set up the fun moments, we created this nonsense story with goofy characters and exaggerated
              animations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <img src={powerfallStory1} alt="Candy Line airplane flying" className="w-full rounded-lg mb-4" />
              <p className="text-sm text-foreground">
                2 pilots are driving an airplane, and suddenly encounter an accident.
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src={powerfallStory2}
                alt="Airplane explosion with characters escaping"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-sm text-foreground">The airport explodes, and they are tied to one parachute.</p>
            </div>
            <div className="flex flex-col">
              <img
                src={powerfallStory3}
                alt="Characters parachuting and avoiding obstacles"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-sm text-foreground">
                To survive, they need to shout to control the parachute and avoid dangers coming to them.
              </p>
            </div>
            <div className="flex flex-col">
              <img src={powerfallStory4} alt="Characters landing safely on beach" className="w-full rounded-lg mb-4" />
              <p className="text-sm text-foreground">
                The parachute can take 10 hits. If they make it, they will land safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Character Design Section */}
      <section className="py-16 w-full bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-2">Character design exploration</p>
              <h3 className="text-2xl font-bold mb-4">Make the characters funny for the story</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Because the game is for families, the overall idea is to make them simple shapes with bright colors, which are fun for adults and also easily recognizable for children.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={powerfallCharacters}
                alt="Colorful character designs - pink, blue, orange, and yellow monsters"
                className="max-w-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Animation Feedback Section */}
      <section className="py-16 w-full" style={{ backgroundColor: "rgba(173, 216, 230, 0.3)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-2">Animation for interaction feedback</p>
              <h3 className="text-2xl font-bold mb-4">Simple interaction needs vivid feedback</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Though the interaction is super simple, the feedback needs to reflect the nuance of shouting. There are 4 different status of characters for different volumes of the sound.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={powerfallAnimationFeedback}
                alt="Character animation frames showing different shouting intensities"
                className="max-w-full w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Game Demo Video Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
          style={{ backgroundImage: `url(${powerfallVideoBg})` }}
        />
        
        <div className="relative text-center z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm text-foreground/70 mb-2">Final game demo</p>
          <h3 className="text-2xl font-bold mb-8 text-foreground">Are you ready to shout?</h3>
          <div className="aspect-video max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/z--mD7JqFAg"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Powerfall Game Demo - Are you ready to shout?"
            />
          </div>
        </div>
      </section>

      {/* CHI PLAY 2014 Section */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: "#AAE0F9" }}>
        {/* Cloud decorations */}
        <img src={cloudImg} alt="" className="absolute top-2 left-8 w-24 opacity-80" />
        <img src={cloudImg} alt="" className="absolute bottom-2 right-12 w-28 opacity-70" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
          <img src={chiPlayLogo} alt="CHI PLAY 2014" className="h-16 mx-auto mb-6" />
          <p className="text-foreground max-w-2xl mx-auto">
            This game enters the Student Game Design Competition at the ACM SIGCHI Annual Symposium on Computer-Human Interaction in Play (CHI PLAY) 2014.
          </p>
        </div>
      </section>

      {/* Credits Section - Light */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Team member</h4>
              <p className="text-foreground">
                Interaction designer: Chong Hu Yeqing Deng
                <br />
                Producer/Sound Designer: David Shiyang Liu
                <br />
                Engineers: Wei Shao, Prajwal Manjunath
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Supervisors</h4>
              <p className="text-foreground">Shirley Yee, Brenda Bakker Harger</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Clients</h4>
              <p className="text-foreground">New York hall of Science, Children's Museum of Pittsburgh</p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="project" />
    </div>
  );
};

export default Powerfall;
