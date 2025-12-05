import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import spaceImg from "@/assets/100space.jpg";
import ethnicGroupsImg from "@/assets/chinese-ethnic-groups.png";

const HundredDayProject = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Space Image covering Navigation */}
      <div 
        className="relative h-[400px] lg:h-[550px] bg-cover bg-center"
        style={{ backgroundImage: `url(${spaceImg})` }}
      >
        <Navigation />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-[#3D3D3D]/80 inline-block px-4 py-2">
                100day projects
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl text-white bg-[#3D3D3D]/80 px-3 py-1">
                  Culture&Science
                </span>
                <span className="text-white">·</span>
                <span className="text-lg md:text-xl text-white bg-[#3D3D3D]/80 px-3 py-1">
                  Illustrations
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
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm deeply passionate about exploring diverse subjects beyond my expertise—science, culture, 
            and more. They fuel my curiosity and serve as the foundation of my inspiration library. 
            However, I've learned that true understanding comes from active engagement. So, I've begun 
            this journey of learning through art, a medium that allows me to delve deeper and truly grasp 
            these fascinating subjects.
          </p>
        </div>
      </section>

      {/* Chinese Ethnic Groups Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-muted/30">
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
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                In 2018, returning to China after 9 years abroad, I realized how little I knew about 
                my homeland. Traveling across various cities, I was captivated by millennia of craftsmanship.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                This inspired a project to showcase traditional costumes from the 56 ethnic groups of China, 
                aiming to delve into the diverse beauty of their craftsmanship.
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
