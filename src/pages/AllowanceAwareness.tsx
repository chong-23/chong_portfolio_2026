import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import allowanceCover from "@/assets/allowance_cover.jpg";
import allowanceHs from "@/assets/allowance_hs.png";
import allowanceCurrentIssue from "@/assets/allowance-current-issue.png";
import allowanceUserJourney from "@/assets/allowance-user-journey.png";
import allowanceIdeation from "@/assets/allowance-ideation.jpg";
import allowanceJourneySolution from "@/assets/allowance-journey-solution.png";
import homescreenGif from "@/assets/homescreen.gif";
import allowanceChallenge1 from "@/assets/allowance-challenge-1.png";
import allowancePieChart from "@/assets/allowance-pie-chart.png";
import allowanceUserExpectation from "@/assets/allowance-user-expectation.png";
import allowanceHomescreenSolution from "@/assets/allowance-homescreen-solution.png";
import allowancePriceFactors from "@/assets/allowance-price-factors.png";
import allowanceTimeFactors from "@/assets/allowance-time-factors.png";
import allowanceWireframes from "@/assets/allowance-wireframes.png";
import allowanceHsSimple from "@/assets/allowance-hs-simple.png";
import allowanceHsDetailed from "@/assets/allowance-hs-detailed.png";
import allowanceHsFinal from "@/assets/allowance-hs-final.png";
import allowanceBottomSheet from "@/assets/allowance-bottom-sheet.jpg";

const AllowanceAwareness = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background covering Navigation */}
      <div className="relative h-[400px] lg:h-[550px]" style={{ background: 'var(--gradient-allowance-hero)' }}>
        <Navigation />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Title Section */}
              <div className="text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                  Allowance Awareness
                </h1>
                <p className="text-xl">
                  B2B2C food delivery - iOS & Android
                </p>
              </div>
              
              {/* Image Section - Desktop Only */}
              <div className="hidden lg:block flex-shrink-0 ml-12 relative top-[100px]">
                <img 
                  src={allowanceHs} 
                  alt="Allowance Awareness mobile app interface"
                  className="w-64 h-auto rounded-2xl"
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
            <div>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg leading-relaxed text-foreground mb-6 max-w-[700px]">
                This project focused on optimizing allowance usage in workplace food services, boosting revenue by <span className="font-bold" style={{ color: '#FE2B84' }}>enhancing allowance utilization rate from a current 8%</span>.
              </p>
            </div>
          </section>

          {/* What was it like before Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">What was it like before</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              Users lack visibility into their allowance balance until reaching the cart stage.
            </p>
            <div className="flex justify-center">
              <img 
                src={allowanceCurrentIssue} 
                alt="User journey showing lack of allowance visibility until cart stage"
                className="w-full max-w-7xl h-auto rounded-xl"
              />
            </div>
          </section>

          {/* User Journey & Painpoints Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">User Journey & Painpoints</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              Based on feedback from 5 markets, users struggle to access allowance info crucial for informed decisions during the journey.
            </p>
            <div className="flex justify-center">
              <img 
                src={allowanceUserJourney} 
                alt="User journey and painpoints diagram showing feedback from 5 markets"
                className="w-full max-w-7xl h-auto rounded-xl"
              />
            </div>
          </section>

        </div>
      </div>

      {/* JTBD, Hypothesis, and HMW Section with Full-Width Gradient Background */}
      <section className="mb-20 w-full" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          {/* JTBD */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">JTBD</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              Accessing allowance info easily during the ordering journey for informed decision-making.
            </p>
          </div>

          {/* Hypothesis */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Hypothesis</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              <span className="font-bold" style={{ color: '#FE2B84' }}>Enhancing allowance accessibility and awareness</span> throughout the journey will drive better user decisions, ultimately improving allowance utilization.
            </p>
          </div>

          {/* HMW */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">HMW</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              Effectively convey balance and allowance criteria for users to optimize their ordering decisions?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Opportunities Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">Opportunities</h2>
          <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              After brainstorming with the development team, identified two major directions. Option 1 is unfeasible within a 3-month timeframe and lacks long-term scalability.
          </p>  

      {/* Two Solutions Evaluation */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-border rounded-xl p-6 relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-xl">✗</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Option 1</h3>
                  <p className="text-muted-foreground">Showing allowance on the navigation across the whole journey</p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>• Unfeasible within 3-month timeframe</p>
                    <p>• Lacks long-term scalability</p>
                  </div>
                </div>
                <div className="border border-border rounded-xl p-6 relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-600">Option 2</h3>
                  <p className="text-muted-foreground">Showing allowance on key decision-making screens</p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    <p>• Feasible implementation</p>
                    <p>• Scalable approach</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={allowanceIdeation} 
                alt="Mobile app wireframes showing allowance integration across homescreen, discovery, restaurant detail, cart checkout, and post ordering screens"
                className="w-full max-w-7xl h-auto rounded-xl"
              />
            </div>
          </section>

          {/* Userflow Solution */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Userflow Solution</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              Solution primarily targets the initial journey phase, with maximum impact on decision-making.
            </p>
            <div className="flex justify-center">
              <img 
                src={allowanceJourneySolution} 
                alt="User journey solution showing improvements across discovering, ordering, checkout, and order tracking phases"
                className="w-full max-w-7xl h-auto rounded-xl"
              />
            </div>
          </section>

          {/* Solution Gallery Section */}
          <section>
            {/* Improvement 1 */}
            <div>
              {/* Tag */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Improvement 1
              </div>
              
              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">Reminder & Indicator on home screen</h2>
              
              {/* Subtitle */}
              <p className="text-lg leading-relaxed text-foreground max-w-[700px]">
                Implemented push notifications for pre-app reminders, directing users to the home screen for quick allowance balance checks.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Navigation Arrows - Above Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-end items-center gap-4 mb-6">
          <button 
            className="w-12 h-12 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
            onClick={() => {
              const container = document.getElementById('carousel-container');
              if (container) {
                container.scrollBy({ left: -800, behavior: 'smooth' });
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
              const container = document.getElementById('carousel-container');
              if (container) {
                container.scrollBy({ left: 800, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-Width Horizontal Scrolling Carousel */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="overflow-x-auto pb-4 scrollbar-hide -mx-6 md:-mx-12 lg:-mx-20" id="carousel-container" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex gap-6 min-w-max items-stretch">
              
              
              {/* First item aligned with title */}
               <div className="pl-6 md:pl-12 lg:pl-20 -ml-6 md:-ml-12 lg:-ml-20 flex-shrink-0">
                  <img
                    src={homescreenGif}
                    alt="Push notification flow…"
                    className="h-[500px] w-auto rounded-3xl object-contain"
                  />
              </div>
              
              {/* Card 1 - Left-Right Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <div className="flex-1 pr-8">
                  <h6 className="text-muted-foreground font-semibold mb-3">Challenge</h6>
                  <p className="font-semibold text-xl mb-4">
                    Every domain wants a spot on home screen. How to prioritize allowance section?
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src={allowanceChallenge1} 
                    alt="Mobile app homescreen showing fixed module and customizable module layout"
                    className="h-full w-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>
              
              {/* Card 2 - Left-Right Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold mb-3">Understand the business priority</h3>
                  <p className="mb-4">
                    Allowance holds the highest business priority, being a crucial and widely subscribed service by client companies.
                  </p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <img 
                    src={allowancePieChart} 
                    alt="Business priority pie chart showing Allowance at 58.45%, Other at 27.54%, Voucher at 13.34%, and pandapro at 0.67%"
                    className="h-full w-auto max-h-[400px] object-contain"
                  />
                  <p className="text-xs text-muted-foreground mt-2">GMV of corporate services Feb. 2022</p>
                </div>
              </div>

              {/* Card 3 - Left-Right Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold mb-3">Understand users expectation</h3>
                  <p className="mb-4">
                    Unmoderated user testing revealed that most users expect allowance information in the menu, while about 1/3 expect a card on the home screen.
                  </p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <img 
                    src={allowanceUserExpectation} 
                    alt="Mobile app interface showing unmoderated user testing with green dots indicating user interaction points"
                    className="h-full w-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>

               {/* Card 4 - Left-Right Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <div className="flex-1 pr-8">
                  <h6 className="text-muted-foreground font-semibold mb-3">Solution</h6>
                  <h3 className="text-xl font-semibold mb-3">Enable quick skim</h3>
                  <p className="mb-4">
                    When users land on the home screen, they can quickly scan allowance information and focus on restaurant and food browsing.
                  </p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <img 
                    src={allowanceHomescreenSolution} 
                    alt="Mobile app homescreen showing quickly skim and primary focus areas for allowance information"
                    className="h-full w-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>

              {/* Card 5 - Left-Right Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <div className="flex-1 pr-8">
                  <h6 className="text-muted-foreground font-semibold mb-3">Challenge</h6>
                  <p className="font-semibold text-xl mb-4">
                    There are 9 criteria for an allowance rule. Which information can help the user make a decision?
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                    {['Frequency', 'Amount', 'Days', 'Time', 'Select employees', 'Locations', 'Service types', 'Delivery method', 'Expense'].map((criteria, index) => (
                      <div key={index} className="bg-primary/10 text-primary text-center py-3 px-3 rounded-lg text-sm font-medium flex items-center justify-center min-h-[50px]">
                        {criteria}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 6 - Left-Right Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold mb-3">"Price" as Primary Decision Factor</h3>
                  <p className="mb-4">
                     Research indicates "Price" is critical during restaurant browsing; this translates to allowance as amount and availability.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">*Based on the research from homescreen and restaurant listing, "Price" is important information during dicovery："dish price, delivery fee, promotions and deals"
                  </p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <img 
                    src={allowancePriceFactors} 
                    alt="Price factors diagram showing various elements like price level, delivery fee, promotions and deals"
                    className="h-full w-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>

               {/* Card 7 - Left-Right Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold mb-3">Time as the key element</h3>
                  <p className="mb-4">
                     Materials from HR highlight time as a crucial factor when communicating allowances to employees.
                  </p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <img 
                    src={allowanceTimeFactors} 
                    alt="Time-based allowance communication showing one-time and recurring allowance examples"
                    className="h-full w-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>

              {/* Card 8 - Center Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <h3 className="text-xl font-semibold mb-6 text-center">Information Architecture</h3>
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src={allowanceWireframes} 
                    alt="Mobile app wireframes showing different information levels: minimum info, key info, support info, and all info"
                    className="h-full w-auto max-h-[350px] object-contain"
                  />
                </div>
              </div>

              {/* Card 9 - Center Layout */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <h3 className="text-xl font-semibold mb-6 text-center">Design Decision</h3>
                <div className="flex-1 flex items-center justify-center gap-8">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col justify-start pt-16 max-w-[120px]">
                      <span className="text-xs text-green-600 font-medium mb-2">✓ Selected</span>
                      <p className="text-xs text-muted-foreground">Simple banner, less distraction</p>
                    </div>
                    <img 
                      src={allowanceHsSimple} 
                      alt="Simple allowance design with clean layout and minimal distraction"
                      className="h-96 w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-start gap-4">
                    <img 
                      src={allowanceHsDetailed} 
                      alt="Detailed allowance design with fragmented visual elements"
                      className="h-96 w-auto object-contain"
                    />
                    <div className="flex flex-col justify-start pt-16 max-w-[120px]">
                      <span className="text-xs text-muted-foreground font-medium mb-2">Alternative</span>
                      <p className="text-xs text-muted-foreground">Detailed card, more fragmented</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 10 - Center Layout with right padding */}
              <div className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col items-center justify-center flex-shrink-0 mr-6 md:mr-12 lg:mr-20" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)' }}>
                <h3 className="text-xl font-semibold mb-6 text-center">Final Implementation</h3>
                <div className="flex-1 flex items-center justify-center gap-8">
                  <img 
                    src={allowanceHsFinal} 
                    alt="Final homescreen implementation with allowance banner"
                    className="h-96 w-auto object-contain"
                  />
                  <img 
                    src={allowanceBottomSheet} 
                    alt="Allowance bottom sheet with detailed information and action buttons"
                    className="h-96 w-auto object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Key Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Budget Tracking</h3>
                  <p className="text-muted-foreground max-w-[700px]">Real-time spending visualization with intuitive progress bars and alerts</p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Smart Recommendations</h3>
                  <p className="text-muted-foreground max-w-[700px]">AI-powered suggestions based on budget and preferences</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Spending Analytics</h3>
                  <p className="text-muted-foreground max-w-[700px]">Detailed insights into spending patterns and trends</p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Goal Setting</h3>
                  <p className="text-muted-foreground max-w-[700px]">Customizable budget goals with progress tracking</p>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center bg-primary/5 rounded-2xl p-8">
                <div className="text-5xl font-bold text-primary mb-2">+62.5%</div>
                <p className="text-lg text-muted-foreground">Increase in budget awareness</p>
              </div>
              <div className="text-center bg-primary/5 rounded-2xl p-8">
                <div className="text-5xl font-bold text-primary mb-2">+1200</div>
                <p className="text-lg text-muted-foreground">Daily active users gained</p>
              </div>
            </div>
          </section>

          {/* Learnings Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">User Behavior Insights</h3>
                <p className="text-muted-foreground max-w-[700px]">Users are more likely to stick to budgets when they receive gentle, non-intrusive reminders rather than strict limitations.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Design Integration</h3>
                <p className="text-muted-foreground max-w-[700px]">Financial features work best when seamlessly integrated into existing user flows rather than as separate modules.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Visual Feedback</h3>
                <p className="text-muted-foreground max-w-[700px]">Progressive visual indicators help users understand their spending without creating anxiety or frustration.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AllowanceAwareness;