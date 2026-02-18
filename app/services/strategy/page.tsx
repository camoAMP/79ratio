import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Compass, Layers, Shield, Target, BarChart3, Workflow } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const focusAreas = [
  {
    icon: Compass,
    title: "Technology Roadmaps",
    description: "Prioritized 12- to 24-month plans that align infrastructure, apps, and security with business goals.",
  },
  {
    icon: Target,
    title: "Budget & Forecasting",
    description: "Actionable budgeting tied to lifecycle, licensing, and upcoming initiatives with true cost visibility.",
  },
  {
    icon: Layers,
    title: "Architecture Modernization",
    description: "Cloud, data, and connectivity blueprints that support scale, resilience, and zero-trust requirements.",
  },
  {
    icon: Shield,
    title: "Governance & Risk",
    description: "Policy frameworks, KPIs, and compliance controls that satisfy boards, auditors, and cyber insurers.",
  },
]

const engagementPhases = [
  {
    title: "Discovery & Assessment",
    description: "Workshops, stakeholder interviews, and tooling telemetry to baseline your current-state maturity.",
    deliverables: ["Maturity scorecards", "Gap analysis", "Executive summary"],
  },
  {
    title: "Design & Prioritization",
    description: "Co-build initiatives, dependencies, and success metrics with your leadership team.",
    deliverables: ["Roadmap & timeline", "Investment model", "Risk register"],
  },
  {
    title: "Execution & Governance",
    description: "PMO-aligned cadence with health dashboards, decision logs, and quarterly business reviews.",
    deliverables: ["Program dashboards", "Runbooks", "Board-ready reporting"],
  },
]

const outcomes = [
  "Consolidated view of every technology initiative, owner, and dependency",
  "CapEx and OpEx plans that smooth spending while funding innovation",
  "Security roadmap mapped to NIST, CIS, or custom frameworks",
  "Change management and communications plan for every phase",
]

export default function StrategyServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4">Technology Strategy & Planning</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Translate Business Goals into a <span className="text-primary">Living Technology Plan</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Our vCIOs, architects, and project leaders embed with your stakeholders to build actionable roadmaps,
                  funding models, and governance that keep transformation on track.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/schedule-call">Plan a Strategy Workshop</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.2M</div>
                  <div className="text-sm text-muted-foreground">Average Spend Optimized</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">38</div>
                  <div className="text-sm text-muted-foreground">Roadmaps Delivered</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/it-infrastructure-management-plan.jpg"
                  alt="Consultants collaborating on a technology roadmap"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Where We Focus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Strategic guidance that balances modernization, security, and user experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area) => {
              const Icon = area.icon
              return (
                <Card key={area.title} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{area.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{area.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Structured Engagement</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Proven phases keep leaders aligned and projects moving forward.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {engagementPhases.map((phase, index) => (
              <Card key={phase.title} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-card-foreground">
                      {index + 1}. {phase.title}
                    </CardTitle>
                    <Workflow className="w-6 h-6 text-primary" />
                  </div>
                  <CardDescription className="text-muted-foreground mt-3">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start space-x-2 text-muted-foreground">
                        <BarChart3 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Results You Can Measure</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Every engagement wraps with prioritized initiatives, ownership, and KPIs so your team knows exactly how to
              execute.
            </p>
            <ul className="space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border rounded-3xl p-8 space-y-6 bg-card">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-card-foreground">Executive Communication Kit</h3>
              <p className="text-muted-foreground">
                Board-ready slides, investment summaries, and decision logs keep leadership aligned and eliminate
                surprises.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-card-foreground">Program Dashboard</h3>
              <p className="text-muted-foreground">
                Health metrics, risk signals, and milestone status flow directly from our PMO tools into your executive
                scorecards.
              </p>
            </div>
            <Button asChild size="lg" className="w-full text-lg">
              <Link href="/contact">Request a Sample Roadmap</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
