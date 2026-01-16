import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import myPhoto from "@/assets/myPhoto.png";
import { ExternalLink } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="w-full px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">CHONG HU</h1>
              
              <div className="space-y-6 text-foreground/80">
                <p>
                  Chong is a product designer with nine years of experience in the tech industry across the United States, China, and Singapore. She has designed products in education, e-commerce, food delivery, and last-mile logistics, serving millions of users across diverse cultural contexts worldwide.
                </p>
                <p>
                  In addition to her professional design practice, Chong is is a PhD candidate in the School of Information Studies at McGill University and a member of the ACT Research Group, supervised by Prof. Karyn Moffatt. Chong's research interests include computational creativity, social computing, inclusive design, and human-AI interaction.
                </p>
                <p>
                  As both a researcher of creativity and a practicing designer, Chong enjoys thinking, making, and playing with traditional, digital, and AI-driven media in her spare time.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-6 flex justify-center lg:justify-end items-start">
              <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-foreground/10">
                <img 
                  src={myPhoto} 
                  alt="Chong Hu" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Professional Design */}
              <section>
                <h2 className="text-lg font-medium text-foreground/60 mb-6">Professional Design</h2>
                <div className="space-y-6">
                  <ExperienceItem 
                    location="Singapore"
                    date="03.2021 - 07.2024"
                    company="foodpanda | Delivery Hero"
                    role="Senior Product Designer · iOS & Android & Web"
                  />
                  <ExperienceItem 
                    location="Shenzhen, China"
                    date="08.2019 - 08.2020"
                    company="Lazada | Alibaba"
                    role="Senior User Experience Designer · iOS & Android & Web"
                  />
                  <ExperienceItem 
                    location="Shanghai, China"
                    date="08.2019 - 08.2020"
                    company="PricewaterhouseCoopers Information Technology"
                    role="Senior User Experience Designer · iOS & Android"
                  />
                  <ExperienceItem 
                    location="San Francisco, USA"
                    date="03.2017 - 06.2018"
                    company="Common Sense Media"
                    role="Product Designer · Responsive Web"
                  />
                  <ExperienceItem 
                    location="Redwood City, USA"
                    date="12.2015 - 03.2017"
                    company="Collective Shift"
                    role="UI/UX Designer · Responsive Web"
                  />
                </div>
              </section>
              
              {/* Education */}
              <section>
                <h2 className="text-lg font-medium text-foreground/60 mb-6">Education</h2>
                <div className="space-y-6">
                  <EducationItem 
                    location="Montreal, Canada"
                    date="2024- Current"
                    school="McGill University"
                    degree="PhD in Information Studies"
                  />
                  <EducationItem 
                    location="Pittsburgh, USA"
                    date="2013 - 2015"
                    school="Carnegie Mellon University"
                    degree="Master of Entertainment Technology"
                  />
                  <EducationItem 
                    location="Pittsburgh, USA"
                    date="2009-2013"
                    school="University of Pittsburgh"
                    degree="Bachelor of Arts in Architectural Studies"
                    additional={["Minor in Studio Arts", "Civil Engineering Certificate"]}
                  />
                </div>
              </section>
            </div>
            
            {/* Right Column */}
            <div className="space-y-12">
              {/* Teaching */}
              <section>
                <h2 className="text-lg font-medium text-foreground/60 mb-6">Teaching</h2>
                <div className="space-y-6">
                  <ExperienceItem 
                    location="Montreal, Canada"
                    date="01.2026 - Current"
                    company="Course Instructor"
                    role="INFS627 · User-Centered Design, McGill University"
                  />
                  <ExperienceItem 
                    location="Montreal, Canada"
                    date="10.2025- Current"
                    company="Course Instructor"
                    role="Digital Literacy, Contactivity"
                  />
                </div>
              </section>
              
              {/* Awards */}
              <section>
                <h2 className="text-lg font-medium text-foreground/60 mb-6">Awards</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="text-sm text-foreground/50 mb-1">05.2025</p>
                    <p className="font-medium">Doctoral Research Scholarship (CA$ 100k)</p>
                    <p className="text-foreground/70 text-sm">Fonds de recherche du Québec – Nature et Technologies (FRQNT)</p>
                  </div>
                </div>
              </section>
              
              {/* Talk */}
              <section>
                <h2 className="text-lg font-medium text-foreground/60 mb-6">Talk</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="text-sm text-foreground/50 mb-1">Aug 2023</p>
                    <p className="font-medium">Design beyond borders: navigating localization and cultural difference</p>
                    <a 
                      href="#" 
                      className="text-foreground/70 text-sm inline-flex items-center gap-1 hover:text-foreground transition-colors"
                    >
                      Lazada Design U <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>
              
              {/* Publication */}
              <section>
                <h2 className="text-lg font-medium text-foreground/60 mb-6">Publication</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="text-sm text-foreground/50 mb-1">Oct 2014</p>
                    <p className="font-medium">PowerFall: a voice-controlled collaborative game</p>
                    <a 
                      href="https://dl.acm.org/doi/10.1145/2658537.2661317" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 text-sm inline-flex items-center gap-1 hover:text-foreground transition-colors"
                    >
                      ACM CHI PLAY'14 <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

interface ExperienceItemProps {
  location: string;
  date: string;
  company: string;
  role: string;
}

const ExperienceItem = ({ location, date, company, role }: ExperienceItemProps) => (
  <div className="border-l-2 border-foreground/20 pl-4">
    <p className="text-sm text-foreground/50 mb-1">{location} | {date}</p>
    <p className="font-medium">{company}</p>
    <p className="text-foreground/70 text-sm">{role}</p>
  </div>
);

interface EducationItemProps {
  location: string;
  date: string;
  school: string;
  degree: string;
  additional?: string[];
}

const EducationItem = ({ location, date, school, degree, additional }: EducationItemProps) => (
  <div className="border-l-2 border-foreground/20 pl-4">
    <p className="text-sm text-foreground/50 mb-1">{location} | {date}</p>
    <p className="font-medium">{school}</p>
    <p className="text-foreground/70 text-sm">{degree}</p>
    {additional && additional.map((item, index) => (
      <p key={index} className="text-foreground/70 text-sm">{item}</p>
    ))}
  </div>
);

export default AboutMe;
