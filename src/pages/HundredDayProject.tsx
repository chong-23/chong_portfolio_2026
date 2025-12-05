import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import spaceImg from "@/assets/100space.jpg";
import ethnicGroupsImg from "@/assets/chinese-ethnic-groups.png";
import humanCellsImg from "@/assets/human-cells.png";

const HundredDayProject = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Space Image covering Navigation */}
      <div 
        className="relative h-[400px] lg:h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(${spaceImg})` }}
      >
        <Navigation variant="light" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 bg-white inline-block px-4 py-2">
                100day projects
              </h1>
              <div className="block">
                <span className="text-lg md:text-xl text-black bg-white px-3 py-1 inline-block">
                  Illustrations · Culture&Science
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning by Making Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
            Learning by making
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground">
            I'm deeply passionate about exploring diverse subjects beyond my expertise—science, culture, 
            and more. They fuel my curiosity and serve as the foundation of my inspiration library. 
            However, I've learned that true understanding comes from active engagement. So, I've begun 
            this journey of learning through art, a medium that allows me to delve deeper and truly grasp 
            these fascinating subjects.
          </p>
        </div>
      </section>

      {/* Chinese Ethnic Groups Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <img 
                src={ethnicGroupsImg} 
                alt="Chinese Ethnic Groups Illustrations" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Chinese Ethnic Groups
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                In 2018, returning to China after 9 years abroad, I realized how little I knew about 
                my homeland. Traveling across various cities, I was captivated by millennia of craftsmanship.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                This inspired a project to showcase traditional costumes from the 56 ethnic groups of China, 
                aiming to delve into the diverse beauty of their craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Human Cells Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <img 
                src={humanCellsImg} 
                alt="Human Cells Illustrations" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Human Cells
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Fascinated by the human body and its workings, I embarked on a project to understand 100 types 
                of cells. However, the complexity exceeded my expectations. Some cells transition into others, 
                adding layers of intricacy.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                While I couldn't complete it due to my limited expertise, this challenge was a profound learning 
                experience, enriching my understanding of our body and its intricate vocabulary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Space Probes Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <img 
                src={spaceImg} 
                alt="Space Probes Illustrations" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Space Probes
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Being an astronaut is one of my many dreams, though it feels unattainable. The audacious 
                exploration of space has always fascinated me. I took my first step towards this passion 
                by choosing space probes as my initial project.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Collaborating with Guokr, a major science education platform in China, we transformed it 
                into a Space Exploration notebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="project" />
    </div>
  );
};

export default HundredDayProject;
