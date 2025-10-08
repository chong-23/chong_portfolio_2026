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
import allowanceRDP2 from "@/assets/allowanceRDP2.gif";
import allowanceDetails from "@/assets/allowanceDetails.gif";
import aaChaLayers from "@/assets/AA_cha_layers.png";
import aaRDP1 from "@/assets/AA_RDP_1.png";
import aaRDP2 from "@/assets/AA_RDP_2.png";
import aaRDP3 from "@/assets/AA_RDP_3.png";
import aaRDP4 from "@/assets/AA_RDP_4.png";
import aaRDP5 from "@/assets/AA_RDP_5.png";
import menuInitial from "@/assets/menu_initial.gif";
import menuScroll from "@/assets/menu_scroll.gif";
import cardWire from "@/assets/card_wire.png";
import card2_1 from "@/assets/card2_1.png";
import card2_2 from "@/assets/card2_2.png";
import card2_3 from "@/assets/card2_3.png";

const AllowanceAwareness = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background covering Navigation */}
      <div className="relative h-[400px] lg:h-[550px]" style={{ background: "var(--gradient-allowance-hero)" }}>
        <Navigation />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Title Section */}
              <div className="text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Allowance Awareness</h1>
                <p className="text-xl">B2B2C food delivery - iOS & Android</p>
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
                This project focused on optimizing allowance usage in workplace food services, boosting revenue by{" "}
                <span className="font-bold" style={{ color: "#FE2B84" }}>
                  enhancing allowance utilization rate from a current 8%
                </span>
                .
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
              Based on feedback from 5 markets, users struggle to access allowance info crucial for informed decisions
              during the journey.
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
      <section
        className="mb-20 w-full"
        style={{ background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)" }}
      >
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
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                Enhancing allowance accessibility and awareness
              </span>{" "}
              throughout the journey will drive better user decisions, ultimately improving allowance utilization.
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
              After brainstorming with the development team, identified two major directions. Option 1 is unfeasible
              within a 3-month timeframe and lacks long-term scalability.
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
                Implemented push notifications for pre-app reminders, directing users to the home screen for quick
                allowance balance checks.
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
              const container = document.getElementById("carousel-container");
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
              const container = document.getElementById("carousel-container");
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

      {/* Full-Width Horizontal Scrolling Carousel */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div
            className="overflow-x-auto pb-4 scrollbar-hide mx-[calc(50%-50vw)]"
            id="carousel-container"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 min-w-max">
              <div
                className="
                flex gap-6 min-w-max items-stretch"
              >
                {/* Responsive spacer — matches container padding */}
                <div className="shrink-0 w-6 md:w-12 lg:w-20 xl:w-[calc((100vw-80rem)/2+5rem)] " aria-hidden></div>
                {/* first image */}
                <img
                  src={homescreenGif}
                  alt="Push notification flow showing allowance reminder on home screen"
                  className="h-[500px] w-auto rounded-3xl object-contain shrink-0 shadow-lg"
                />
              </div>

              {/* Card 1 - Left-Right Layout */}
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold mb-3">Understand the business priority</h3>
                  <p className="mb-4">
                    Allowance holds the highest business priority, being a crucial and widely subscribed service by
                    client companies.
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold mb-3">Understand users expectation</h3>
                  <p className="mb-4">
                    Unmoderated user testing revealed that most users expect allowance information in the menu, while
                    about 1/3 expect a card on the home screen.
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
                <div className="flex-1 pr-8">
                  <h6 className="text-muted-foreground font-semibold mb-3">Solution</h6>
                  <h3 className="text-xl font-semibold mb-3">Enable quick skim</h3>
                  <p className="mb-4">
                    When users land on the home screen, they can quickly scan allowance information and focus on
                    restaurant and food browsing.
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
                <div className="flex-1 pr-8">
                  <h6 className="text-muted-foreground font-semibold mb-3">Challenge</h6>
                  <p className="font-semibold text-xl mb-4">
                    There are 9 criteria for an allowance rule. Which information can help the user make a decision?
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Frequency
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Amount
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Days
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Time
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Employees
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Locations
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Service types
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm ">
                      Delivery method
                    </div>
                    <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                      Expense
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6 - Left-Right Layout */}
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
                <div className="flex-1 pr-8">
                  <h3 className="text-xl font-semibold mb-3">"Price" as Primary Decision Factor</h3>
                  <p className="mb-4">
                    Research indicates "Price" is critical during restaurant browsing; this translates to allowance as
                    amount and availability.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Based on the research from homescreen and restaurant listing, "Price" is important information
                    during dicovery："dish price, delivery fee, promotions and deals"
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
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
              <div
                className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col items-center justify-center flex-shrink-0 mr-6 md:mr-12 lg:mr-20"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                }}
              >
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

      {/* Improvement 2 */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <section>
            <div>
              {/* Tag */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Improvement 2
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">Allowance indicator on menu</h2>

              {/* Subtitle */}
              <p className="text-lg leading-relaxed text-foreground max-w-[700px]">
                Integrated real-time allowance balance visibility during menu browsing and order placement, enhancing
                informed decision-making.
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
              const container = document.getElementById("carousel-container-2");
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
              const container = document.getElementById("carousel-container-2");
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

      {/* Full-Width Horizontal Scrolling Carousel */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div
            className="overflow-x-auto pb-4 scrollbar-hide mx-[calc(50%-50vw)]"
            id="carousel-container-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 min-w-max">
              <div className="flex gap-6 min-w-max items-stretch">
                {/* Responsive spacer — matches container padding */}
                <div className="shrink-0 w-6 md:w-12 lg:w-20 xl:w-[calc((100vw-80rem)/2+5rem)]" aria-hidden></div>

                {/* First image - Allowance indicator on menu */}
                <img
                  src={allowanceRDP2}
                  alt="Allowance indicator on menu interface showing restaurant delivery app with menu options"
                  className="h-[500px] w-auto rounded-3xl object-contain shrink-0 shadow-lg"
                />

                {/* Card 1 - Design Challenge */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Challenge</h6>
                    <p className="font-semibold text-xl mb-4">
                      With many layers of content, how can the indicator be made visible?
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <img
                      src={aaChaLayers}
                      alt="Original design on menu showing layers of content including fixed module, exclusive discounts, menu area, and min order discount"
                      className="h-full w-auto max-h-[400px] object-contain"
                    />
                  </div>
                </div>

                {/* Card 2 - Design Evaluation */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Idea 1</h6>
                    <h3 className="text-xl font-semibold mb-3">The “best solution”, but not for all</h3>
                    {/* Evaluation List */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Positive evaluation point"
                            role="img"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Good visibility</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Positive evaluation point"
                            role="img"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Full information can be well presented</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Warning or concern point"
                            role="img"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Removing campaign banner can affect conversion rate</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={aaRDP1}
                      alt="Wireframe showing allowance design with highlighted allowance indicator"
                      className="h-full w-auto max-h-[400px] object-contain"
                    />
                  </div>
                </div>

                {/* Card 3 - Design Evaluation */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Idea 2</h6>
                    <h3 className="text-xl font-semibold mb-3">Compromising does not work</h3>
                    {/* Evaluation List */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Positive evaluation point"
                            role="img"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Good visibility</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Warning or concern point"
                            role="img"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Not overlapped with any existing feature</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Warning or concern point"
                            role="img"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Looks like a main action</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={aaRDP2}
                      alt="Wireframe showing allowance design with shopping bag indicator"
                      className="h-full w-auto max-h-[400px] object-contain"
                    />
                  </div>
                </div>

                {/* Card 4 - Design Evaluation */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Idea 3 - Aligned with dependencies</h6>
                    <h3 className="text-xl font-semibold mb-3">Focus on information priority</h3>
                    {/* Evaluation List */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Positive evaluation point"
                            role="img"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Information is fully presented</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Positive evaluation point"
                            role="img"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">Only overlap with secondary information</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-label="Warning or concern point"
                            role="img"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">The visibility may not be the most ideal</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={aaRDP3}
                      alt="Wireframe showing allowance design with bottom allowance indicator"
                      className="h-full w-auto max-h-[400px] object-contain"
                    />
                  </div>
                </div>

                {/* Card 5 - Two Images Side by Side */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Challenge</h6>
                    <p className="font-semibold text-xl mb-4">How can we balance the visibility of all information?</p>
                  </div>

                  <div className="flex-1 flex flex-row gap-4 items-center justify-center">
                    <img
                      src={aaRDP4}
                      alt="Restaurant menu showing allowance indicator on bottom navigation"
                      className="h-full w-auto max-h-[380px] object-contain rounded-lg"
                    />
                    <img
                      src={aaRDP5}
                      alt="Restaurant menu showing expanded allowance indicator on bottom navigation"
                      className="h-full w-auto max-h-[380px] object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Card 6 - Test Results */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold mb-6">Unmoderated Usability Test</h3>
                    <p className="mb-4">
                      Stakeholders prefer bold indicator color, which may disrupt balance. Therefore, we tested the less
                      intense option. Users can locate the allowance indicator in mockups.
                    </p>
                  </div>

                  <div className="mb-8">
                    <p className="text-base leading-relaxed">
                      <strong>Q:</strong> Imagine that you have added an item to your cart that costs $9. From the
                      information provided on this screen, how much more can you spend within your given allowance?
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Results Header */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-center flex-1">
                        <p className="font-semibold text-green-700 dark:text-green-400">Correct Answer</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="font-semibold text-red-700 dark:text-red-400">Incorrect Answer</p>
                      </div>
                    </div>

                    {/* Results Bar Chart */}
                    <div className="flex h-20 rounded-lg overflow-hidden shadow-md">
                      <div
                        className="bg-green-600 dark:bg-green-700 flex items-center justify-center text-white font-semibold text-lg"
                        style={{ width: "65%" }}
                      >
                        65% / n = 13
                      </div>
                      <div
                        className="bg-red-600 dark:bg-red-700 flex items-center justify-center text-white font-semibold text-lg"
                        style={{ width: "35%" }}
                      >
                        35% / n = 7
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 7 - Visual Hierarchy */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Solution</h6>
                    <h3 className="text-xl font-semibold mb-3">Animation with interactions for attention</h3>
                    <p className="mb-4">
                      Opting for animations with interactions to capture attention instead of using strong colors.
                    </p>
                  </div>

                  <div className="flex-1 flex flex-row gap-4 items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={menuInitial}
                        alt="Menu initial state showing allowance indicator"
                        className="h-full w-auto max-h-[380px] object-contain rounded-3xl"
                      />
                      <p className="text-sm text-muted-foreground">Initial show-up</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={menuScroll}
                        alt="Menu scrolled state with allowance indicator visible"
                        className="h-full w-auto max-h-[380px] object-contain rounded-3xl"
                      />
                      <p className="text-sm text-muted-foreground">Show up when scroll up</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improvement 3 */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <section>
            <div>
              {/* Tag */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Improvement 3
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-4">Allowance details screen</h2>

              {/* Subtitle */}
              <p className="text-lg leading-relaxed text-foreground max-w-[700px]">
                Comprehensive allowance management interface providing users with detailed spending insights and control
                over their budget allocation.
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
              const container = document.getElementById("carousel-container-3");
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
              const container = document.getElementById("carousel-container-3");
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

      {/* Full-Width Horizontal Scrolling Carousel */}
      <section className="mb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div
            className="overflow-x-auto pb-4 scrollbar-hide mx-[calc(50%-50vw)]"
            id="carousel-container-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 min-w-max">
              <div className="flex gap-6 min-w-max items-stretch">
                {/* ✅ Responsive spacer — matches container padding */}
                <div className="shrink-0 w-6 md:w-12 lg:w-20 xl:w-[calc((100vw-80rem)/2+5rem)]" aria-hidden></div>

                {/* First image - Allowance details screen */}
                <img
                  src={allowanceDetails}
                  alt="Allowance details screen showing menu interface with allowances, profile, and other options"
                  className="h-[500px] w-auto rounded-3xl object-contain shrink-0 shadow-lg"
                />

                {/* Card 1 - Information Architecture */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Challenge</h6>
                    <p className="font-semibold text-xl mb-4">
                      How to show all criteria of allowance, but not to overwhelm users?
                    </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Frequency
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Amount
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Days
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Time
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Employees
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Locations
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Service types
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm ">
                        Delivery method
                      </div>
                      <div className="bg-white rounded-full px-4 py-2 text-center text-sm font-medium shadow-sm">
                        Expense
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Information Hierarchy */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex flex-col justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Establish Clear Information Hierarchy</h3>
                    <p className="text-base leading-relaxed">
                      Research identifies key allowance indicator elements on the home screen—amount, availability, and
                      available time—structured into a 2-level hierarchy.
                    </p>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={cardWire}
                      alt="Information hierarchy diagram showing 1st level with action leading information and 2nd level with identification and detailed criteria"
                      className="h-full w-auto max-h-[320px] object-contain"
                    />
                  </div>
                </div>

                {/* Card 3 - 3 Key Structural Directions */}
                <div
                  className="rounded-xl p-8 w-[780px] h-[500px] flex flex-col flex-shrink-0 overflow-y-auto"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <h3 className="text-2xl font-semibold mb-6">3 Key Structural Directions</h3>

                  <div className="flex gap-5 flex-1">
                    {/* Card 1 - Minimal */}
                    <div className="flex-1 flex flex-col">
                      <img
                        src={card2_1}
                        alt="Minimal card design showing collapsible information"
                        className="w-full h-auto object-contain shadow-md rounded-lg mb-3"
                      />
                      <div className="space-y-2">
                        <div className="bg-yellow-50 rounded-lg p-2.5 text-xs">
                          <span className="text-base mr-1.5">🤔</span>
                          <span className="font-medium">Should some information be folded?</span>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-2.5 text-xs">
                          <span className="text-base mr-1.5">💡</span>
                          <span className="font-medium">
                            98% of users have less than 3 allowances. It’s more straightforward to present
                            everything.{" "}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 - Medium */}
                    <div className="flex-1 flex flex-col">
                      <img
                        src={card2_2}
                        alt="Medium card design with expanded criteria"
                        className="w-full h-auto object-contain shadow-md rounded-lg mb-3"
                      />
                      <div className="space-y-2">
                        <div className="bg-yellow-50 rounded-lg p-2.5 text-xs">
                          <span className="text-base mr-1.5">🤔</span>
                          <span className="font-medium">
                            Should the status be softened and less intrusive on the top?
                          </span>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-2.5 text-xs">
                          <span className="text-base mr-1.5">💡</span>
                          <span className="font-medium">3 layers of information stacked weakens visual hierarchy.</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 - Full */}
                    <div className="flex-1 flex flex-col">
                      <img
                        src={card2_3}
                        alt="Full card design with status header"
                        className="w-full h-auto object-contain shadow-md rounded-lg mb-3"
                      />
                      <div className="space-y-2">
                        <div className="bg-yellow-50 rounded-lg p-2.5 text-xs">
                          <span className="text-base mr-1.5">🤔</span>
                          <span className="font-medium">
                            Can user differentiate between available and total allowance?
                          </span>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-2.5 text-xs">
                          <span className="text-base mr-1.5">💡</span>
                          <span className="font-medium">We can figure out through the test.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Usability Test Results */}
                <div
                  className="rounded-xl px-10 py-12 w-[780px] h-[500px] flex flex-col justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold mb-6">Unmoderated usability test</h3>
                    <p className="mb-2">
                      The result highlights confusion: 50%+ users misinterpret remaining as total allowance.
                    </p>
                  </div>

                  <div className="mb-2">
                    <p className="text-base leading-relaxed">
                      <strong>Q:</strong> From the information presented on this screen, what is the total allowance you
                      get today? (Imagine that today is Friday and it is 10:00 am)
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Results Header */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-center flex-1">
                        <p className="font-semibold text-green-700 dark:text-green-400">Correct Answer</p>
                        <p className="text-sm text-muted-foreground">($10)</p>
                      </div>
                      <div className="text-center flex-1">
                        <p className="font-semibold text-red-700 dark:text-red-400">Incorrect Answer</p>
                        <p className="text-sm text-muted-foreground">(other responses)</p>
                      </div>
                    </div>

                    {/* Results Bar Chart */}
                    <div className="space-y-3">
                      <div className="flex h-16 rounded-lg overflow-hidden shadow-md">
                        <div
                          className="bg-green-600 dark:bg-green-700 flex items-center justify-center text-white font-semibold text-base"
                          style={{ width: "45%" }}
                        >
                          45% / n = 9
                        </div>
                        <div
                          className="bg-red-600 dark:bg-red-700 flex items-center justify-center text-white font-semibold text-base"
                          style={{ width: "55%" }}
                        >
                          55% / n = 11
                        </div>
                      </div>

                      {/* Second row - split of incorrect answers */}
                      <div className="flex justify-end">
                        <div className="flex h-12 rounded-lg overflow-hidden shadow-md" style={{ width: "55%" }}>
                          <div
                            className="bg-red-700 dark:bg-red-800 flex items-center justify-center text-white font-semibold text-sm"
                            style={{ width: "73%" }}
                          >
                            73% / n = 8
                          </div>
                          <div
                            className="bg-red-400 dark:bg-red-500 flex items-center justify-center text-white font-semibold text-sm"
                            style={{ width: "27%" }}
                          >
                            27% / n = 3
                          </div>
                        </div>
                      </div>

                      {/* Note pointing to 73% section */}
                      <div className="flex justify-end">
                        <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 text-xs" style={{ width: "55%" }}>
                          <p className="text-red-800 dark:text-red-200">
                            <strong>Incorrect answer: $2</strong> as not immediately distinguish "Total" & "Available".
                            7 out 8 answered the 2nd related question correctly
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5 - Progressive Disclosure */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h3 className="text-xl font-semibold mb-3">Progressive Disclosure</h3>
                    <p className="mb-4">
                      Layered information presentation allowing users to drill down into specific allowance details as
                      needed.
                    </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-full bg-muted/50 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground">Progressive Disclosure Placeholder</span>
                    </div>
                  </div>
                </div>

                {/* Card 6 - Final Details Screen with right padding */}
                <div
                  className="rounded-xl p-6 w-[780px] h-[500px] flex items-center flex-shrink-0 mr-6 md:mr-12 lg:mr-20"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 215, 233, 0.3) 0%, rgba(241, 241, 241, 0.3) 100%)",
                  }}
                >
                  <div className="flex-1 pr-8">
                    <h6 className="text-muted-foreground font-semibold mb-3">Final</h6>
                    <h3 className="text-xl font-semibold mb-3">Details Screen</h3>
                    <p className="mb-4">
                      Complete allowance details interface providing comprehensive budget management and spending
                      insights.
                    </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-full bg-muted/50 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground">Final Details Screen Placeholder</span>
                    </div>
                  </div>
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
                  <p className="text-muted-foreground max-w-[700px]">
                    Real-time spending visualization with intuitive progress bars and alerts
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Smart Recommendations</h3>
                  <p className="text-muted-foreground max-w-[700px]">
                    AI-powered suggestions based on budget and preferences
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Spending Analytics</h3>
                  <p className="text-muted-foreground max-w-[700px]">
                    Detailed insights into spending patterns and trends
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">Goal Setting</h3>
                  <p className="text-muted-foreground max-w-[700px]">
                    Customizable budget goals with progress tracking
                  </p>
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
                <p className="text-muted-foreground max-w-[700px]">
                  Users are more likely to stick to budgets when they receive gentle, non-intrusive reminders rather
                  than strict limitations.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Design Integration</h3>
                <p className="text-muted-foreground max-w-[700px]">
                  Financial features work best when seamlessly integrated into existing user flows rather than as
                  separate modules.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Visual Feedback</h3>
                <p className="text-muted-foreground max-w-[700px]">
                  Progressive visual indicators help users understand their spending without creating anxiety or
                  frustration.
                </p>
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
