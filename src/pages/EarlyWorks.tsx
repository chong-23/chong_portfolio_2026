import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import lazadaScreensImg from "@/assets/lazada_screens.png";
import lazadaOnboardingImg from "@/assets/lazada_onboarding.png";
import commonsenseImg from "@/assets/commonsense.png";

const EarlyWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background covering Navigation */}
      <div
        className="relative h-[300px] lg:h-[350px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, white 100%), linear-gradient(128deg, rgba(64, 112, 245, 0.3) 0%, rgba(227, 214, 255, 0.3) 100%)",
        }}
      >
        <Navigation />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="w-full">
              {/* Title Section */}
              <div className="text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Snippet of Early Works</h1>
                <p className="text-xl">
                  Varied projects in education, e-commerce, logistics, localization, and cultural audience customization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 1: Seller Center Homescreen */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column - Content */}
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-4 font-medium">🇨🇳 2020 · Ecommerce · Web</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Seller Center Homescreen</h2>
                <p className="text-lg leading-relaxed text-foreground mb-8">
                  This project is to redesign the home screen of the seller platform for Lazada, one of the largest
                  e-commerce platforms in SEA.
                </p>

                {/* Goal */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-2">Goal</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    Provide{" "}
                    <span className="font-medium" style={{ color: "#4070F4" }}>
                      customized experience
                    </span>{" "}
                    for focused seller segments:{" "}
                    <span className="font-medium" style={{ color: "#4070F4" }}>
                      New, small and medium size of sellers.
                    </span>
                  </p>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Challenges</h3>
                  <ul className="space-y-3 text-lg leading-relaxed text-foreground">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        Given diverse user preferences from interviews, how can we effectively map out and present
                        information tailored to different user segments?
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        Considering numerous existing platform features, how can we centralize home screen navigation
                        for these diverse user segments?
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Solutions</h3>
                  <ul className="space-y-3 text-lg leading-relaxed text-foreground">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>A dynamic section based on the users' needs as the focus of the screen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Less links for new sellers and more feature entries for advanced sellers</span>
                    </li>
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Results of CSAT measurement</h3>
                  <div className="flex gap-12">
                    <div>
                      <div className="text-4xl font-bold mb-1" style={{ color: "#4070F4" }}>
                        55%
                      </div>
                      <p className="text-sm text-muted-foreground">All countries</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-1" style={{ color: "#4070F4" }}>
                        57%
                      </div>
                      <p className="text-sm text-muted-foreground">SEA</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-1" style={{ color: "#4070F4" }}>
                        28%
                      </div>
                      <p className="text-sm text-muted-foreground">China</p>
                    </div>
                  </div>
                </div>

                {/* Takeaways */}
                <div>
                  <h3 className="text-lg font-bold mb-2">Takeaways</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    We observed big difference of CSAT from SEA and China users. This leads our consideration in
                    localization on the market level.
                  </p>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="flex-1">
                <img
                  src={lazadaScreensImg}
                  alt="Seller Center Homescreen designs showing different user segment views"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Project 2: Seller Onboarding */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column - Content */}
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-4 font-medium">🇨🇳 2020 · Ecommerce · Web</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Seller Onboarding</h2>
                <p className="text-lg leading-relaxed text-foreground mb-8">
                  The platform used to focus on serving Chinese sellers, but for the new business strategy, product
                  would be more tailored for SEA business. The onboarding experience is the first step.
                </p>

                {/* Goal */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-2">Goal</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    SEA sellers are able to easily register their business on the platform.
                  </p>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Challenges</h3>
                  <ul className="space-y-3 text-lg leading-relaxed text-foreground">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>How to not overwhelm users from my required tasks to be filled up?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>How to categorize the tasks for different business setup stages?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        How can we localize the experience for each market due to different business requirements?
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Solutions</h3>
                  <ul className="space-y-3 text-lg leading-relaxed text-foreground">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Break the one-page long signup form to bite sizes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Detailed localization guidance for key fields.</span>
                    </li>
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Task success rate increased by</h3>
                  <div className="text-5xl font-bold" style={{ color: "#4070F4" }}>
                    20%
                  </div>
                </div>

                {/* Takeaways */}
                <div>
                  <h3 className="text-lg font-bold mb-2">Takeaways</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    We observed big difference of CSAT from SEA and China users. This leads our consideration in
                    localization on the market level.
                  </p>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="flex-1">
                <img
                  src={lazadaOnboardingImg}
                  alt="Seller Onboarding flow showing registration and setup screens"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Project 3: Digital Citizenship */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left Column - Content */}
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-4 font-medium">🇺🇸 2018 · Education · Web</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Citizenship</h2>
                <p className="text-lg leading-relaxed text-foreground mb-8">
                  Digital well-being for children has been a very critical topic. This project aims to develop one of
                  the very first platforms hosting extensive digital citizenship curricula for teachers to effectively
                  teach in classrooms.
                </p>

                {/* Goal */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-2">Goal</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    Enable teachers to effortlessly discover and utilize various curricula and classroom materials like
                    reading, videos, and games.
                  </p>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Challenges</h3>
                  <ul className="space-y-3 text-lg leading-relaxed text-foreground">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>
                        How to make text-heavy teaching materials easier to read for both students and teachers?
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>How to categorize materials into different teaching stages?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>How to make the overall presentation fun?</span>
                    </li>
                  </ul>
                </div>

                {/* Solutions */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Solutions</h3>
                  <ul className="space-y-3 text-lg leading-relaxed text-foreground">
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Key contents are highlighted in long content for quick scanning.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Organize categories into sections following traditional teaching Guidelines.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3">•</span>
                      <span>Utilize Hand-drawn Style for Callouts, Icons, and Titles.</span>
                    </li>
                  </ul>
                </div>

                {/* Coverage */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Coverage</h3>
                  <div className="flex gap-12">
                    <div>
                      <div className="text-4xl font-bold mb-1" style={{ color: "#249A10" }}>
                        1M+
                      </div>
                      <p className="text-sm text-muted-foreground">Teachers worldwide</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-1" style={{ color: "#249A10" }}>
                        Over 70%
                      </div>
                      <p className="text-sm text-muted-foreground">US schools</p>
                    </div>
                  </div>
                </div>

                {/* Takeaways */}
                <div>
                  <h3 className="text-lg font-bold mb-2">Takeaways</h3>
                  <p className="text-lg leading-relaxed text-foreground">
                    The digital solution innovates from traditional methods, simplifying navigation and resource sharing
                    for improved efficiency.
                  </p>
                </div>
              </div>

              {/* Right Column - Images */}
              <div className="flex-1">
                <img
                  src={commonsenseImg}
                  alt="Digital Citizenship curriculum platform showing lesson pages and materials"
                  className="w-full h-auto rounded-lg"
                />
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
