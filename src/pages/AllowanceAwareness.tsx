import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import allowanceCover from "@/assets/allowance_cover.jpg";
import allowanceHs from "@/assets/allowance_hs.png";
import allowanceCurrentIssue from "@/assets/allowance-current-issue.png";
import allowanceUserJourney from "@/assets/allowance-user-journey.png";
import allowanceIdeation from "@/assets/allowance-ideation.jpg";

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
                src={allowanceUserJourney} 
                alt="User journey and painpoints diagram showing feedback from 5 markets"
                className="w-full max-w-7xl h-auto rounded-xl"
              />
            </div>
          </section>

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