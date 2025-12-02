import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import adminCoverImg from "@/assets/hs_admin-2.png";
import oldVersionImg from "@/assets/admin_old_version.png";
import problemAreasImg from "@/assets/problem_areas.png";
import needsMappingImg from "@/assets/needs-mapping.png";
import priorityImg from "@/assets/priority.png";
import proDashboardImg from "@/assets/pro_dashboard-3.png";
import proEmployeeEmptyImg from "@/assets/pro_employee_csv_success-3.png";
import createImg from "@/assets/create-3.png";
import effortDiagramImg from "@/assets/effort_diagram.png";
import effortWireframeImg from "@/assets/effort_wireframe.png";
import wireframeCreate1Img from "@/assets/wireframe_create1.png";
import wireframeCreate2Img from "@/assets/wireframe_create2.png";

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
                  subscriptions for employees. This outdated platform with many usability issues hinders HR usage,
                  relying heavily on internal account managers. The goal is to enhance UX, enabling clients to
                  independently use current and future services.
                </p>
              </div>
              <div className="flex-1">
                <img src={oldVersionImg} alt="Old version of the admin platform" className="w-full h-auto rounded-lg" />
                <p className="text-sm text-muted-foreground mt-2 text-center">Before-design version</p>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">User needs and priority</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  There are{" "}
                  <span className="font-bold" style={{ color: "#FE2B84" }}>
                    43 requests
                  </span>{" "}
                  gathered from{" "}
                  <span className="font-bold" style={{ color: "#FE2B84" }}>
                    12 markets
                  </span>
                  , ranging from new features to usability enhancements. In order to understand the key user needs, we
                  hosted stakeholder interviews to reveal high priority for employee management, allowance setup, and
                  reporting functions.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={needsMappingImg}
                  alt="Needs mapping across all stakeholders"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">Needs mapping across all stakeholders</p>
              </div>
            </div>
          </section>

          {/* User Journey Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Where to start with piles of issues</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  To start with phase 1 and to look over future vision, we prioritized 3 directions:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scalability</h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      The overall layout is a limitation for future extension
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Branding</h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      The overall style does not follow the new branding
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Usability</h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      90% percent of components are unusable; basic operation features (filter, search, bulk action) are
                      missing; and there is no detailed error handlings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={priorityImg}
                  alt="Priority pyramid showing Foundation, Proficiency, and Engagement levels"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
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
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">User centered goals</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                Existing clients
              </span>{" "}
              can manage 3 major functions: employee management, allowance setup and report by themselves.
            </p>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto">
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                New clients
              </span>{" "}
              can manage these 3 functions after introduction and onboarding with account managers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Solution Overview Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12">Solution overview</h2>

            {/* Scalability & Branding */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-20">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Scalability & Branding</p>
                <h3 className="text-2xl font-bold mb-4">Extendable layout</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  The horizontal navigation is changed to vertical for future expansion and multilingual supports.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={proDashboardImg}
                  alt="Extendable layout dashboard"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Usability for general operations */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-20">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Usability for general operations</p>
                <h3 className="text-2xl font-bold mb-4">Bulk actions & Error validation</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Bulk Actions for Efficiency & Early Error Validation to Prevent Redundancy.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={proEmployeeEmptyImg}
                  alt="Bulk actions and error validation"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Usability for key features */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Usability for key features</p>
                <h3 className="text-2xl font-bold mb-4">User-centered information architecture</h3>
                <p className="text-lg leading-relaxed text-foreground">
                  Information architecture is improved for each key feature. Cognitive load is reduced via sectioned
                  tasks.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src={createImg}
                  alt="User-centered information architecture"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
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
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Detailed design process for Allowance Management</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
              Taking the most important feature as the case study,{" "}
              <span className="font-bold" style={{ color: "#FE2B84" }}>
                the primary goal
              </span>{" "}
              for HRs is to efficiently set up the allowance for employees.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Problem Areas Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Problem areas</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  To improve the efficiency, there are 4 problems areas:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Info Hierarchy</h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      Random field placement pushes key information down.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Layout</h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      The layout is incompatible for various languages and screen sizes, disrupting the reading flow due
                      to space between titles and forms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Components</h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      All components are outdated with usability problems.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Copies</h3>
                    <p className="text-lg leading-relaxed text-foreground">
                      All copies are very confusing, even for internal business teams.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={problemAreasImg}
                  alt="Problem areas in the old platform"
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-muted-foreground mt-2 text-center">Before-design version</p>
              </div>
            </div>
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
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Challenge 1</h2>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
              In the current design, users start with effort-intensive action items that are not contextually relevant.
            </p>
            <p className="text-lg leading-relaxed text-foreground max-w-[700px] mx-auto mb-4">
              Without change on backend, how to make users feel effortless to finish the task?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Reorganize Structure Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Reorganize the big structure</h2>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  The structure is mapped based on attention-effort chart: prioritize top items for user attention,
                  pushing down those requiring more effort to complete.
                </p>
                <img
                  src={effortDiagramImg}
                  alt="Effort-attention diagram showing reorganized structure"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1">
                <img
                  src={effortWireframeImg}
                  alt="Wireframe showing the reorganized interface"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Group High-Attention Items Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4">Group high-attention and low-effort items</h2>
            <p className="text-lg leading-relaxed text-foreground mb-12">
              When group days, time, frequency and amount in more details, there are 2 majors ideas under intense
              discussion.
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Idea 1 */}
              <div>
                <h3 className="text-xl font-bold mb-2">Idea 1 - Group time elements together</h3>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  One approach is to have frequency and amount together. And all time related items are grouped below.
                </p>
                <img
                  src={wireframeCreate1Img}
                  alt="Wireframe showing grouped time elements"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Idea 2 */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Idea 2 - Think the concept as "Budget"</h3>
                  <span
                    className="text-sm font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#E5E5E5", color: "#666" }}
                  >
                    The chosen one
                  </span>
                </div>
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Based on the interview, account managers highlighted a strong correlation between the amount,
                  frequency, and duration during setup.
                </p>
                <img
                  src={wireframeCreate2Img}
                  alt="Wireframe showing budget concept grouping"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
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
