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
                An exploration of the microscopic world within us. This project illustrates the diverse 
                types of cells that make up the human body, from red blood cells to neurons.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Each illustration captures the unique structure and beauty of these building blocks of life, 
                making complex biology accessible through art.
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
