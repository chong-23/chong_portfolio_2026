import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import adminCoverImg from "@/assets/hs_admin-2.png";
import oldVersionImg from "@/assets/admin_old_version.png";
import needsMappingImg from "@/assets/needs-mapping.png";

const CorporateAdminRevamp = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient Background covering Navigation */}
      <div
        className="relative h-[400px] lg:h-[550px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, white 100%), linear-gradient(128deg, rgba(181, 184, 209, 0.3) 0%, rgba(242, 242, 242, 0.3) 100%)",
        }}
      >
        <Navigation />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
            <div className="flex items-center justify-between w-full">
              {/* Title Section */}
              <div className="text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Corporate Admin Revamp</h1>
                <p className="text-xl">B2B2C food delivery- Web Platform</p>
              </div>

              {/* Image Section - Desktop Only */}
              <div className="hidden lg:block flex-shrink-0 ml-12 relative top-[40px]">
                <img
                  src={adminCoverImg}
                  alt="Corporate Admin Revamp interface"
                  className="w-[550px] h-auto rounded-2xl"
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
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Background</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  The platform is a management tool for HRs to oversee food services, including allowance and membership
                  subscriptions for employees. This outdated platform with many usability issues hinders HR usage, relying
                  heavily on internal account managers. The goal is to enhance UX, enabling clients to independently use
                  current and future services.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={oldVersionImg}
                  alt="Old version of the admin platform"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">Before-design version</p>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">User needs and priority</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              There are 43 requests gathered from 12 markets, ranging from new features to usability enhancements. In
              order to understand the key user needs, we hosted stakeholder interviews to reveal high priority for
              employee management, allowance setup, and reporting functions.
            </p>
            <img
              src={needsMappingImg}
              alt="Needs mapping across all stakeholders"
              className="w-full h-auto rounded-lg mb-2"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">Needs mapping across all stakeholders</p>
          </section>

          {/* User Journey Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">User Journey & Pain Points</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              Through research with corporate admins, we identified key friction points in their daily workflows.
            </p>
          </section>
        </div>
      </div>

      {/* JTBD, Hypothesis, and HMW Section with Full-Width Gradient Background */}
      <section
        className="mb-20 w-full"
        style={{ background: "linear-gradient(128deg, rgba(181, 184, 209, 0.3) 0%, rgba(242, 242, 242, 0.3) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          {/* JTBD */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">JTBD</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              Efficiently manage corporate food benefits while gaining insights into team usage and spending patterns.
            </p>
          </div>

          {/* Hypothesis */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Hypothesis</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                Streamlining admin workflows and providing clear analytics
              </span>{" "}
              will improve operational efficiency and help admins make better decisions.
            </p>
          </div>

          {/* HMW */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">HMW</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              Simplify complex admin tasks while providing the insights needed to optimize corporate food benefits?
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
              After analyzing user feedback and business requirements, we identified key areas for improvement.
            </p>
          </section>

          {/* Solution Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Solution</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              We redesigned the admin platform with a focus on intuitive navigation and actionable insights.
            </p>
          </section>

          {/* Design Process Section */}
          <section className="mb-20">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Key Feature 1
            </div>
            <h2 className="text-3xl font-bold mb-4">Dashboard Redesign</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              Created a centralized dashboard providing at-a-glance insights into team spending and usage patterns.
            </p>
          </section>

          <section className="mb-20">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Key Feature 2
            </div>
            <h2 className="text-3xl font-bold mb-4">Simplified User Management</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              Streamlined the process of adding, removing, and managing employee accounts and allowances.
            </p>
          </section>

          <section className="mb-20">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Key Feature 3
            </div>
            <h2 className="text-3xl font-bold mb-4">Advanced Analytics</h2>
            <p className="text-lg leading-relaxed text-foreground mb-8 max-w-[700px]">
              Provided detailed reports and visualizations to help admins understand spending patterns and optimize
              budgets.
            </p>
          </section>
        </div>
      </div>

      {/* Results Section with Full-Width Gradient Background */}
      <section
        className="mb-20 w-full"
        style={{ background: "linear-gradient(128deg, rgba(181, 184, 209, 0.3) 0%, rgba(242, 242, 242, 0.3) 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-3xl font-bold mb-8">
            After the launch of the revamped platform, key metrics improved significantly...
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Admin Efficiency</p>
              <div className="text-6xl font-bold mb-2" style={{ color: "#FE2B84" }}>
                +45%
              </div>
              <p className="text-base text-foreground">Reduction in time spent on admin tasks</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">User Satisfaction</p>
              <div className="text-6xl font-bold mb-2" style={{ color: "#FE2B84" }}>
                +80%
              </div>
              <p className="text-base text-foreground">Increase in admin satisfaction scores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Simplicity wins</h3>
                <p className="text-muted-foreground max-w-[700px]">
                  Corporate admins value straightforward workflows over feature-rich but complex interfaces.
                  Prioritizing core tasks led to higher adoption.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Data-driven decisions</h3>
                <p className="text-muted-foreground max-w-[700px]">
                  Providing clear analytics empowered admins to make informed decisions about budget allocation and
                  policy changes.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">Continuous iteration</h3>
                <p className="text-muted-foreground max-w-[700px]">
                  Regular feedback sessions with admins helped us identify and address pain points quickly, leading to a
                  more refined product.
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

export default CorporateAdminRevamp;
