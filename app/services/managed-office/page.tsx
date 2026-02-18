import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  Briefcase,
  Building,
  CheckCircle2,
  Cloud,
  Factory,
  Headphones,
  Monitor,
  Printer,
  RefreshCw,
  Wifi,
} from "lucide-react"

const includedServices = [
  {
    icon: Activity,
    title: "24/7 Monitoring & Troubleshooting",
    description: "Live oversight across every device and application so issues are resolved before they escalate.",
  },
  {
    icon: RefreshCw,
    title: "Automated Updates & Licensing",
    description: "Patch cycles, renewals, and license assignments handled without interrupting your workday.",
  },
  {
    icon: Printer,
    title: "Printer, Scanner & Telecom Oversight",
    description: "Install, optimize, and maintain print fleets, phones, and conferencing hardware.",
  },
  {
    icon: Wifi,
    title: "Network Performance Management",
    description: "Wireless and wired networks tuned for speed, resiliency, and secure guest access.",
  },
  {
    icon: Cloud,
    title: "Collaboration Integration",
    description: "Microsoft 365, Google Workspace, VoIP, and smart office platforms supported end-to-end.",
  },
  {
    icon: Headphones,
    title: "Responsive Remote & On-Site Support",
    description: "Friendly experts keep workflows smooth with fast remote fixes and on-site dispatch when needed.",
  },
]

const differentiators = [
  {
    stat: "65%",
    label: "Downtime reduction",
    detail: "Proactive care prevents the majority of office support tickets from ever forming.",
  },
  {
    stat: "30%",
    label: "Longer device lifespan",
    detail: "Lifecycle management keeps hardware optimized and refreshed on the right cadence.",
  },
  {
    stat: "500+",
    label: "Managed workspaces",
    detail: "Law firms, nonprofits, manufacturers, and agencies rely on 79 Ratio daily.",
  },
]

const industries = [
  {
    icon: Briefcase,
    title: "Law Firms",
    description: "Secure document workflows, litigation support rooms, and client-ready conference spaces.",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    description: "Plant-floor Wi-Fi, rugged device care, and operations and technology collaboration tools that never slow production.",
  },
  {
    icon: Building,
    title: "Multi-Site Offices",
    description: "Standardized stack, remote visibility, and centralized support for satellite locations.",
  },
  {
    icon: Headphones,
    title: "Service Organizations",
    description: "VoIP, CRM, and call-center tech kept synced so teams collaborate without friction.",
  },
]

export default function ManagedOfficePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-black text-foreground">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image" style={{ backgroundImage: "url(/Image_fx-26.jpg)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/4 h-72 w-72 bg-primary blur-[140px]" />
          <div className="absolute top-16 right-0 h-80 w-80 bg-accent blur-[140px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="bg-primary/15 text-primary border border-primary/40">
            Managed Office
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance text-primary">
            Seamless Management for a Smart, Connected Office
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Let your business run at peak efficiency with round-the-clock oversight, optimization, and support for every device,
            system, and workspace—79 Ratio keeps your office streamlined and worry-free.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Request Your Office Assessment</Link>
          </Button>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary w-fit">What the Product Is</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">End-to-End Office Technology Care</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              79 Ratio Managed Office offers end-to-end management of all your office technology—computers, printers, networks,
              cloud collaboration tools, conferencing, and connected smart devices. We monitor, maintain, troubleshoot, and
              optimize your entire digital workspace, ensuring everything is always secure, up-to-date, and operating at its best.
            </p>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              <p className="text-muted-foreground">
                Unified governance, performance metrics, and lifecycle planning mean there is never a question about who owns what.
              </p>
            </div>
          </div>
          <Card className="border-primary/20 bg-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">What’s Included</CardTitle>
              <CardDescription className="text-muted-foreground">Every workspace, device, and user stays supported.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Unified device inventory & lifecycle tracking",
                "Secure configuration baselines across fleets",
                "Best-practice collaboration templates",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary">Included Services</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Coverage Built for Modern Offices</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Monitoring, maintenance, and support across the tools your teams rely on every hour of the day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {includedServices.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="border-border bg-card h-full">
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

      {/* Why Choose */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary w-fit">Why 79 Ratio</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Why Organizations Choose 79 Ratio Managed Office</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Managing office technology shouldn’t distract you from what you do best—79 Ratio reduces downtime, boosts productivity,
              and cuts operational headaches. Our proactive management prevents issues before they occur, increases device lifespan,
              and ensures your team always has the tools they need, fully supported.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Monitor className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">Holistic visibility across endpoints, collaboration suites, and smart office systems.</p>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">Predictive analytics surface trends so scaling decisions happen before capacity limits hit.</p>
              </div>
              <div className="flex items-start gap-3">
                <Headphones className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">Responsive support staffed by engineers who understand your industry’s nuances.</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {differentiators.map((item) => (
              <Card key={item.label} className="bg-card border-border text-center">
                <CardContent className="py-8 px-4 space-y-3">
                  <p className="text-3xl font-bold text-primary">{item.stat}</p>
                  <p className="text-sm font-medium text-card-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary">Trusted by High-Performing Offices</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Industry-Specific Playbooks</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              From law firms to manufacturers, organizations trust our hands-on approach and industry-specific know-how to empower efficient,
              secure, and scalable workplaces without unnecessary tech stress.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">Let us handle the technology.</h2>
          <p className="text-lg text-black/80 text-pretty">
            Let us handle the technology—so you can focus on business growth, collaboration, and service.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Request Your Office Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
