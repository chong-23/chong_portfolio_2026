import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import allowanceCover from "@/assets/allowance_cover.jpg";

const AllowanceAwareness = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background covering Navigation */}
      <div className="relative h-[550px]" style={{ background: 'var(--gradient-allowance-hero)' }}>
        <Navigation />
        <main className="h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-20">
            {/* Title Section */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                Allowance Awareness
              </h1>
              <p className="text-xl text-muted-foreground">
                SWIPE food delivery - iOS & Android
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Overview Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  SWIPE is a food delivery app designed to help users track their spending and make informed decisions about their food orders. The Allowance Awareness feature helps users stay within budget while enjoying their favorite meals.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  This project focused on creating an intuitive interface that seamlessly integrates budget tracking with the food ordering experience, making financial awareness effortless for users.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Role</h3>
                  <p className="text-muted-foreground">UX/UI Designer, Product Designer</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Duration</h3>
                  <p className="text-muted-foreground">6 months</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Platform</h3>
                  <p className="text-muted-foreground">iOS & Android</p>
                </div>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            <div className="bg-muted/50 rounded-2xl p-8">
              <p className="text-lg leading-relaxed">
                How might we help users become more aware of their food delivery spending while maintaining a seamless ordering experience? The challenge was to integrate budget tracking features without disrupting the core user journey of discovering and ordering food.
              </p>
            </div>
          </section>

          {/* Design Process Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Design Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Research</h3>
                <p className="text-muted-foreground">User interviews and market analysis to understand spending behaviors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ideation</h3>
                <p className="text-muted-foreground">Brainstorming solutions for seamless budget integration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Testing</h3>
                <p className="text-muted-foreground">Prototyping and user testing to validate solutions</p>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Budget Tracking</h3>
                  <p className="text-muted-foreground">Real-time spending visualization with intuitive progress bars and alerts</p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Smart Recommendations</h3>
                  <p className="text-muted-foreground">AI-powered suggestions based on budget and preferences</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Spending Analytics</h3>
                  <p className="text-muted-foreground">Detailed insights into spending patterns and trends</p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Goal Setting</h3>
                  <p className="text-muted-foreground">Customizable budget goals with progress tracking</p>
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
                <p className="text-muted-foreground">Users are more likely to stick to budgets when they receive gentle, non-intrusive reminders rather than strict limitations.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Design Integration</h3>
                <p className="text-muted-foreground">Financial features work best when seamlessly integrated into existing user flows rather than as separate modules.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Visual Feedback</h3>
                <p className="text-muted-foreground">Progressive visual indicators help users understand their spending without creating anxiety or frustration.</p>
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