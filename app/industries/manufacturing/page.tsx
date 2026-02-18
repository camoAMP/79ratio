import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Factory, Cpu, ShieldCheck, Gauge } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const manufacturingChallenges = [
  {
    icon: Factory,
    title: "Operational Technology (OT) Security",
    description: "Protect PLCs, SCADA, and production networks without interrupting output.",
  },
  {
    icon: Cpu,
    title: "Legacy & Modern Systems",
    description: "Integrate MES/ERP platforms, sensors, and cloud analytics for real-time decisions.",
  },
  {
    icon: Gauge,
    title: "Downtime Risk",
    description: "Predict and prevent outages across plants, warehouses, and remote sites.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Pressure",
    description: "Meet ISO, ITAR, CMMC, and customer requirements with auditable controls.",
  },
]

const solutions = [
  "Network segmentation between technology and OT environments",
  "24/7 monitoring of production sites with predictive alerting",
  "Secure remote access for integrators and plant engineers",
  "High-availability Wi-Fi and edge computing for shop floors",
  "Lifecycle management for HMIs, rugged devices, and sensors",
  "Disaster recovery for ERP, MES, and quality systems",
  "Compliance reporting mapped to customer scorecards",
]

const stats = [
  { value: "12", label: "Plants Under Management" },
  { value: "27%", label: "Downtime Reduction", subtext: "YoY after modernization" },
  { value: "100%", label: "CMMC Readiness" },
]

const caseStudy = {
  organization: "Precision Manufacturing Inc.",
  challenge: "Aging network core and single points of failure were halting production weekly.",
  solution:
    "Designed redundant plant network, implemented zero-trust remote access, and deployed centralized monitoring tied to MES alerts.",
  impact: [
    "Cut unplanned downtime by 41%",
    "Gained real-time visibility across three plants",
    "Passed Tier 1 supplier audit with zero findings",
  ],
}

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4">Manufacturing Expertise</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Keep Production Moving with <span className="text-primary">Resilient technology & OT</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  We partner with plant leadership to modernize networks, secure industrial control systems, and deliver
                  the uptime your operators expect.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">Schedule Plant Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/industries">View All Industries</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center border border-border rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                    {stat.subtext && <p className="text-[11px] text-muted-foreground mt-1">{stat.subtext}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/managed-it-services-near-me.jpg"
                  alt="Manufacturing engineers monitoring connected factory systems"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Challenges We Mitigate</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We understand the realities of plant environments—from forklifts and dust to compliance audits and shifting
              customer demands.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {manufacturingChallenges.map((challenge) => {
              const Icon = challenge.icon
              return (
                <Card key={challenge.title} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{challenge.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{challenge.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Industrial-Grade Solutions</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              From the core network to the edge device, we engineer reliability and visibility into every layer of your
              operation.
            </p>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/cloud_infustructure.jpg"
              alt="Engineers reviewing manufacturing network topology"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Plant Modernization in Action</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Real results from a multi-site manufacturer that partnered with 79 Ratio.
            </p>
          </div>
          <Card className="border-border bg-card">
            <CardHeader className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">{caseStudy.organization}</CardTitle>
              <CardDescription className="text-muted-foreground">Discrete manufacturing • 700+ employees</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">{caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Solution</h3>
                <p className="text-muted-foreground">{caseStudy.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Impact</h3>
                <ul className="space-y-2">
                  {caseStudy.impact.map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
