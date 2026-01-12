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
              Challenged with a mere 3-week timeline, we began with a blank canvas, quickly establishing a
              brainstorming direction to craft an unforgettable 5-minute experience from scratch.
            </p>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <img src={powerfallChallenge1} alt="Simple interaction" className="h-24 w-auto mb-6" />
                <h3 className="text-xl font-bold" style={{ color: "#4070F4" }}>Simple interaction</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={powerfallChallenge2} alt="Collaborative gameplay" className="h-24 w-auto mb-6" />
                <h3 className="text-xl font-bold" style={{ color: "#4070F4" }}>Collaborative gameplay</h3>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={powerfallChallenge3} alt="Funny story" className="h-24 w-auto mb-6" />
                <h3 className="text-xl font-bold" style={{ color: "#4070F4" }}>Funny story</h3>
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
              After an intense 5-hour research and brainstorming over 3 days, exploring
              various tech options like AR, VR, Kinects, and Leap Motion, we arrived at
              the simplest idea: allowing players to <span className="font-bold" style={{ color: "#4070F4" }}>SHOUT</span>.
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
                To create tension between players, we designed an
                intense scenario where two players shout in opposite
                directions to control their navigation through
                hazardous obstacles.
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

      {/* Solution Highlight Section */}
      <section className="mb-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="text-center mb-6">
            {/* Kids + Maker Culture Puzzle Pieces */}
            <div className="flex flex-col justify-center items-center gap-0 mb-6">
              {/* Kids Puzzle Piece */}
              <div className="relative w-[78px] h-[70px]" style={{ marginLeft: "-4px" }}>
                <svg width="78" height="70" viewBox="0 0 103 93" fill="none" className="absolute inset-0">
                  <path
                    d="M103 93C103 41.9137 61.5863 0.5 10.5 0.5V29.625H0.5V63.375H10.5V93H42V83.25H71.75V93H103Z"
                    fill="#7C8A99"
                  />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "13px",
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
                  Kids
                </span>
              </div>
              {/* Maker Culture Puzzle Piece */}
              <div className="relative w-[70px] h-[78px]" style={{ marginLeft: "4px", marginTop: "-8px" }}>
                <svg width="70" height="78" viewBox="0 0 93 103" fill="none" className="absolute inset-0">
                  <path
                    d="M0.5 103C51.5863 103 93 61.5863 93 10.5H63.875V0.5H30.125V10.5H0.5V42H10.25V71.75H0.5V103Z"
                    fill="#E86C3A"
                  />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    bottom: "22px",
                    right: "15px",
                    width: "42px",
                    height: "36px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "11px",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  <span>Maker</span>
                  <span>Culture</span>
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">The solution of creating a digital maker experience for kids</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
              In our search for interactive tools, we discovered Sifteo Cubes—a digital Lego block alternative. These
              small cubes display graphics on their interface, presenting an engaging interactive solution.
            </p>
            {/* Cube images */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col justify-center items-center">
                <img src={cubeTouchImg} alt="Cube touch interaction" className="max-w-[300px] h-auto" />
                <p className="mt-4 text-muted-foreground">Tap to change the graphic</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={cubeConnectImg} alt="Cube connect interaction" className="max-w-[400px] h-auto" />
                <p className="mt-4 text-muted-foreground">Connect multiple ones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Interaction Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-20">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Prototype 1</p>
                <h3 className="text-2xl font-bold mb-4">How would young kids interact with these new toys?</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  We created a simple Monster Stacking game to observe children interacting with the Sifteo Cubes. Our
                  playtest at the Children's Museum in Pittsburgh revealed that young kids quickly grasped how to play
                  with these cubes.{" "}
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={rocketPrototype1}
                  alt="Children playing with Sifteo Cubes at museum"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Solution 2 - Easy & Fun Science */}
      <section className="mb-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="text-center mb-6">
            {/* Parents + Kids + Science Puzzle Pieces */}
            <div className="flex flex-col justify-center items-center gap-0 mb-6">
              {/* Parents and Kids row */}
              <div className="flex items-end gap-0">
                {/* Parents Puzzle Piece */}
                <div className="relative w-[70px] h-[78px]">
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
                {/* Kids Puzzle Piece */}
                <div className="relative w-[78px] h-[70px]" style={{ marginLeft: "-8px", marginBottom: "8px" }}>
                  <svg width="78" height="70" viewBox="0 0 103 93" fill="none" className="absolute inset-0">
                    <path
                      d="M103 93C103 41.9137 61.5863 0.5 10.5 0.5V29.625H0.5V63.375H10.5V93H42V83.25H71.75V93H103Z"
                      fill="#7C8A99"
                    />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "13px",
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
                    Kids
                  </span>
                </div>
              </div>
              {/* Science Puzzle Piece - below Parents */}
              <div className="relative w-[78px] h-[70px]" style={{ marginTop: "-8px", marginRight: "66px" }}>
                <svg width="78" height="70" viewBox="0 0 103 93" fill="none" className="absolute inset-0">
                  <path
                    d="M0 0C0 51.0863 41.4137 92.5 92.5 92.5V63.375H102.5V29.625H92.5V0H61V9.75H31.25V0H0Z"
                    fill="#8BA983"
                  />
                </svg>
                <span
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
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
            </div>
            <h2 className="text-2xl font-bold mb-4">The solution of the easy & fun science</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
              After searching different topics, we found rocket science can be fun and creative. The goal is to build a
              rocket with the cubes to reach the outer space with a balance of weight, fuel and thrust.
            </p>
          </div>
        </div>
      </section>

      {/* New Section - Duplicated Layout */}
      <section className="mb-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Easy physics for parents to teach</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Balancing the weight of fuel and trust power can be easy for parents to teach, yet also challenge to
                actually achieve the balance. This challenge can maintain the fun of this experience.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <img src={thrustsImage} alt="Thrust power options" className="rounded-lg shadow-md" />
                <p className="text-xl font-bold mt-4">Thrust power</p>
              </div>
              <span className="text-2xl font-medium text-muted-foreground">vs</span>
              <div className="flex flex-col items-center">
                <img src={fueltanksImage} alt="Fuel weight options" className="rounded-lg shadow-md" />
                <p className="text-xl font-bold mt-4">Fuel weight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="flex-1 flex items-center justify-center">
              <img
                src={atmosphereImage}
                alt="Atmosphere layers showing outer space, thermosphere, troposphere and ground"
                className="rounded-lg shadow-md max-h-[500px]"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Embed science into game goal</h3>
              <p className="text-lg leading-relaxed text-foreground">
                To visualize the progress, each level of the atmosphere is also presented as some science content for
                parents and kids learn together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* How to Play Section */}
          <section className="mb-20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">How to play</h3>
              <div className="flex items-center gap-4">
                <button
                  className="w-12 h-12 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
                  onClick={() => {
                    const container = document.getElementById("how-to-play-carousel");
                    if (container) {
                      container.scrollBy({ left: -800, behavior: "smooth" });
                    }
                  }}
                >
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="w-12 h-12 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
                  onClick={() => {
                    const container = document.getElementById("how-to-play-carousel");
                    if (container) {
                      container.scrollBy({ left: 800, behavior: "smooth" });
                    }
                  }}
                >
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="overflow-x-auto pb-4 scrollbar-hide mx-[calc(50%-50vw)]"
              id="how-to-play-carousel"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex gap-6 min-w-max items-start">
                {/* Responsive spacer — matches container padding */}
                <div className="shrink-0 w-6 md:w-12 lg:w-20 xl:w-[calc((100vw-80rem)/2+5rem)]" aria-hidden></div>

                {/* Card 1 */}
                <div className="w-[250px] flex flex-col flex-shrink-0">
                  <div className="mb-4 h-[250px]">
                    <img
                      src={rocketPlay1}
                      alt="Player selecting rocket parts from cubes"
                      className="h-full w-auto object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-base leading-relaxed text-foreground">
                    The player has 9 cubes that present three parts of rockets: payload, fuel tank and thrust. They are
                    also able to choose different types for each part.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="w-[250px] flex flex-col flex-shrink-0">
                  <div className="mb-4 h-[250px]">
                    <img
                      src={rocketPlay2}
                      alt="Hands putting rocket cubes together"
                      className="h-full w-auto object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-base leading-relaxed text-foreground">
                    After the player choose the rocket parts, they can put cubes together.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="w-[250px] flex flex-col flex-shrink-0">
                  <div className="mb-4 h-[250px]">
                    <img
                      src={rocketPlay3}
                      alt="Hand pressing the launch button"
                      className="h-full w-auto object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-base leading-relaxed text-foreground">
                    If they are happy with the rocket, they can press a launch button.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col flex-shrink-0 w-[462px]">
                  <div className="mb-4 h-[250px]">
                    <img
                      src={rocketPlay4}
                      alt="Rocket launching on the big screen with atmosphere layers"
                      className="h-full w-auto object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-base leading-relaxed text-foreground">
                    The rocket would be reflected on the big screen and start to take off. The player can observe how
                    far the rocket can reach, and how weight, fuel and thrust relate to each other.
                  </p>
                </div>

                {/* Card 5 */}
                <div className="w-[250px] flex flex-col flex-shrink-0">
                  <div className="mb-4 h-[250px]">
                    <img
                      src={rocketPlay5}
                      alt="Rocket reaching the moon in space"
                      className="h-full w-auto object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-base leading-relaxed text-foreground">The goal is to reach the moon.</p>
                </div>

                {/* End spacer */}
                <div className="shrink-0 w-6 md:w-12 lg:w-20 xl:w-[calc((100vw-80rem)/2+5rem)]" aria-hidden></div>
              </div>
            </div>
          </section>

          {/* New Prototype Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Prototype 2</p>
                <h3 className="text-2xl font-bold mb-4">Would it be fun and easy to play?</h3>
                <p className="text-lg leading-relaxed text-foreground mb-4">
                  To verify this idea, we made another prototype. Both children and parents could understand the game
                  and had fun.
                </p>
                <p className="text-lg leading-relaxed text-foreground mb-2">During this playtest, we also found:</p>
                <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed text-foreground">
                  <li>
                    The instruction that we gave them restricted their creativity: they always constructed the same
                    rocket;
                  </li>
                  <li>Kids could easily destroy the launch button.</li>
                </ul>
              </div>
              <div className="flex-1">
                <img src={rocketPrototype2} alt="Prototype 2 playtest setup" className="rounded-lg shadow-md w-[70%]" />
              </div>
            </div>
          </section>
        </div>

        {/* Solution - Fun Experience Section */}
        <section className="mb-20 w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
            <div className="text-center mb-6">
              {/* All Four Puzzle Pieces - Parents, Kids, Science, Maker Culture */}
              <div className="flex flex-col justify-center items-center gap-0 mb-6">
                {/* Parents and Kids row */}
                <div className="flex items-end gap-0">
                  {/* Parents Puzzle Piece */}
                  <div className="relative w-[70px] h-[78px]">
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
                  {/* Kids Puzzle Piece */}
                  <div className="relative w-[78px] h-[70px]" style={{ marginLeft: "-8px", marginBottom: "8px" }}>
                    <svg width="78" height="70" viewBox="0 0 103 93" fill="none" className="absolute inset-0">
                      <path
                        d="M103 93C103 41.9137 61.5863 0.5 10.5 0.5V29.625H0.5V63.375H10.5V93H42V83.25H71.75V93H103Z"
                        fill="#7C8A99"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "13px",
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
                      Kids
                    </span>
                  </div>
                </div>
                {/* Science and Maker Culture row */}
                <div className="flex items-start gap-0" style={{ marginTop: "-8px" }}>
                  {/* Science Puzzle Piece */}
                  <div className="relative w-[78px] h-[70px]" style={{ marginRight: "-8px" }}>
                    <svg width="78" height="70" viewBox="0 0 103 93" fill="none" className="absolute inset-0">
                      <path
                        d="M0 0C0 51.0863 41.4137 92.5 92.5 92.5V63.375H102.5V29.625H92.5V0H61V9.75H31.25V0H0Z"
                        fill="#8BA983"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "16px",
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
                  {/* Maker Culture Puzzle Piece */}
                  <div className="relative w-[70px] h-[78px]" style={{ marginTop: "-8px" }}>
                    <svg width="70" height="78" viewBox="0 0 93 103" fill="none" className="absolute inset-0">
                      <path
                        d="M0 103C51.0863 103 92.5 61.5863 92.5 10.5H63.375V0.5H29.625V10.5H0V42H9.75V71.75H0V103Z"
                        fill="#E87A5D"
                      />
                    </svg>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        right: "8px",
                        width: "54px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: 500,
                        textAlign: "center",
                        lineHeight: "1.2",
                      }}
                    >
                      Maker Culture
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">The solution of creating a fun experience to connect all</h2>
              <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
                For the final touch, we polished every detail to make it fun and intuitive for both parents and kids.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Features Section */}
          <section className="mb-20">
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Add elements with interactions</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    Users can interact with elements in the scene and add effects, creating a dynamic and engaging
                    experience.
                  </p>
                </div>
                <div className="flex-1 flex flex-row gap-2">
                  <img
                    src={smokelandConcept}
                    alt="Smoke landing concept"
                    className="w-1/2 h-64 object-cover rounded-lg shadow-md"
                  />
                  <img
                    src={smokelaunchConcept}
                    alt="Smoke launch concept"
                    className="w-1/2 h-64 object-cover rounded-lg shadow-md"
                  />
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
                  <img
                    src={rocketExhibit}
                    alt="Rocket exhibit installation"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
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
                  <img
                    src={rocketExhibitVisitors}
                    alt="Visitors enjoying rocket exhibit"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Video Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-md scale-110"
          style={{ backgroundImage: `url(${rocketVideoBg})` }}
        />
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-sm text-white/70 mb-2">One Minute Video</p>
          <h3 className="text-2xl font-bold mb-8 text-white">Do you want to build a rocket?</h3>
          <div className="aspect-video max-w-4xl mx-auto shadow-md rounded-lg overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/92982542"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Do you want to build a rocket?"
            />
          </div>
        </div>
      </section>

      {/* Exhibition Section - Dark */}
      <section className="py-12 bg-[hsl(220,20%,20%)] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <img src={nysciLogo} alt="NYSCI Logo" className="w-48 h-auto mx-auto mb-6 object-contain" />
          <p className="text-lg text-white/70">
            The project was installed and exhibited in New York Hall of Science
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
                Interaction designer: Chong Hu  Yeqing Deng<br />
                Producer/Sound Designer: David Shiyang Liu<br />
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