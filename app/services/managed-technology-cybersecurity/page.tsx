import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  AlertTriangle,
  Briefcase,
  Building,
  CheckCircle2,
  Factory,
  Headphones,
  HeartPulse,
  Map,
  RefreshCw,
  Shield,
  ShieldCheck,
  Network,
} from "lucide-react"

const includedServices = [
  {
    icon: Activity,
    title: "Proactive Technology Monitoring",
    description: "Continuous visibility across infrastructure, applications, and endpoints to catch anomalies instantly.",
  },
  {
    icon: RefreshCw,
    title: "Automated Updates & Health Checks",
    description: "Patch orchestration, firmware updates, and system hygiene handled for you—without downtime.",
  },
  {
    icon: Shield,
    title: "24/7 Security Operations",
    description: "Always-on SOC coverage with advanced detection logic, threat hunting, and layered response.",
  },
  {
    icon: AlertTriangle,
    title: "Cyberattack Prevention & Compliance",
    description: "Vulnerability management, penetration testing, and governance controls mapped to your frameworks.",
  },
  {
    icon: Headphones,
    title: "Expert Remote Support",
    description: "Senior engineers resolve issues in minutes with secure remote tooling and empathetic service.",
  },
  {
    icon: Map,
    title: "Strategic Advisory",
    description: "Quarterly business reviews, roadmap planning, and enablement for digital transformation projects.",
  },
]

const trustPoints = [
  {
    icon: Network,
    text: "Integrated coverage across networks, endpoints, cloud workloads, and user access.",
  },
  {
    icon: ShieldCheck,
    text: "Unified service model combining security operations, compliance reporting, and executive insight under one SLA.",
  },
  {
    icon: CheckCircle2,
    text: "Tailored strategies designed for law firms, healthcare providers, nonprofits, and manufacturing businesses.",
  },
]

const provenResults = [
  {
    title: "Threats stopped before impact",
    description: "Predictive tooling and automated playbooks prevent recurring incidents.",
  },
  {
    title: "500+ organizations protected",
    description: "Legal, healthcare, nonprofit, and industrial teams rely on 79 Ratio’s managed defense every day.",
  },
  {
    title: "Under 15-minute response time",
    description: "Prioritized incident handling and local cybersecurity experts keep your people working without interruption.",
  },
]

const industriesServed = [
  {
    icon: Briefcase,
    title: "Law Firms",
    description: "Data loss prevention, document retention, and e-discovery safeguards tailored to legal workflows.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Providers",
    description: "HIPAA-aligned monitoring, EMR uptime protection, and medical IoT segmentation.",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    description: "operations and technology convergence security, plant-floor visibility, and supply chain resilience.",
  },
  {
    icon: Building,
    title: "Nonprofits & Associations",
    description: "Budget-conscious managed services with grant compliance reporting baked in.",
  },
]

export default function ManagedTechnologyCybersecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 lg:py-32 text-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image"
          style={{ backgroundImage: "url(/generated-image-2.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/75" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary blur-[120px]" />
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="bg-primary/15 text-primary border border-primary/40">
            Managed Technology & Cybersecurity
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance text-primary">
            Comprehensive Managed Technology & Cybersecurity Services
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Protect, streamline, and empower your business with always-on management and advanced digital defense—from
            strategic support to real-time threat protection, 79 Ratio has your back.
          </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-lg px-8 transition-none">
                <Link href="/contact">Start Now with a Free Security Assessment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white/40 text-white hover:bg-white hover:text-black bg-transparent transition-none"
              >
                <Link href="/schedule-call">Talk to an Expert</Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">What the Product Is</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              79 Ratio’s Managed Technology & Cybersecurity solutions deliver round-the-clock oversight for your entire
              technology landscape, blending proactive maintenance, monitoring, secure remote support, and multilayered
              cyber defense. From endpoint protection and network management to rapid incident response and compliance
              alignment, we keep your systems running efficiently and securely, so you can focus on growth.
            </p>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <p className="text-muted-foreground">
                Unified visibility + orchestrated response = zero guesswork for your internal teams.
              </p>
            </div>
          </div>
          <Card className="border-primary/20 shadow-xl bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Included Capabilities</CardTitle>
              <CardDescription className="text-muted-foreground">
                Managed technology operations and security controls inside one accountable program.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["Secure remote support desk", "Network and endpoint hardening", "Compliance-ready reporting"].map(
                (item, index) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-card-foreground">{item}</p>
                      <p className="text-sm text-muted-foreground">
                        {index === 0
                          ? "Issues are resolved remotely in minutes without disrupting staff."
                          : index === 1
                            ? "Layered security policies keep every device compliant and resilient."
                            : "Audit-ready evidence packages show continuous controls testing."}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary">Included Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Everything Managed for You</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Integrated technology management, automated operations, and high-trust security coverage delivered as one program.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {includedServices.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="h-full border-border bg-card">
                  <CardHeader className="flex flex-row gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Why Businesses Trust 79 Ratio</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Unexpected outages and cyber threats can paralyze operations. 79 Ratio proactively stops issues before they
              ever reach your systems—cutting downtime, boosting productivity, and maintaining peak performance 24/7.
              With more than 500 trusted partners, our managed protection goes beyond rapid response—it anticipates
              risks, secures every layer of your environment, and keeps your organization fully compliant.
            </p>
            <div className="space-y-4">
              {trustPoints.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary mt-1" />
                    <p className="text-muted-foreground">{point.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <Card className="bg-card border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Proven Results</CardTitle>
              <CardDescription className="text-muted-foreground">
                Outcomes our clients count on every day.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {provenResults.map((result) => (
                <div key={result.title} className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-1">
                  <p className="text-lg font-semibold text-card-foreground">{result.title}</p>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary">Trusted Across Industries</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Purpose-Built Support for Regulated Teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Law firms, healthcare providers, nonprofits, and manufacturers trust us for sector-specific expertise and
              peace of mind that generic providers can’t offer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industriesServed.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.title} className="border-border bg-card">
                  <CardHeader className="flex flex-row gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{industry.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{industry.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">
            Sleep easy—let 79 Ratio handle it.
          </h2>
          <p className="text-lg text-black/90 text-pretty">
            Sleep easy—let 79 Ratio handle your technology and security, so you can lead with confidence.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Start Now with a Free Security Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
