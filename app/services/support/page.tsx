import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock8, HeadphonesIcon, Laptop2, MessageSquare, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const supportChannels = [
  {
    icon: HeadphonesIcon,
    title: "24/7 Help Desk",
    description: "Certified engineers answer the phone in under 60 seconds with no overseas hand-offs.",
  },
  {
    icon: MessageSquare,
    title: "Modern Ticketing",
    description: "Chat, email, and portal requests feed the same SLA-backed workflow with full transparency.",
  },
  {
    icon: Laptop2,
    title: "Remote & On-Site Support",
    description: "Secure remote tooling resolves most issues instantly and technicians roll when hands-on is required.",
  },
  {
    icon: Users,
    title: "VIP & Department Pods",
    description: "Dedicated pods learn your business apps and support executives, finance, or clinicians with priority queues.",
  },
]

const metrics = [
  { label: "First Response", value: "52 sec" },
  { label: "Same-Day Resolution", value: "92%" },
  { label: "Customer Satisfaction", value: "4.9/5" },
]

const packages = [
  {
    title: "Essentials Desk",
    description: "Foundation support for growing teams that need predictable coverage.",
    highlights: ["Business-hours phone, chat, email", "Device patching & health checks", "Monthly ticket analytics"],
  },
  {
    title: "Managed Experience",
    description: "24/7 coverage plus user onboarding, licensing, and vendor escalation.",
    highlights: [
      "Round-the-clock availability",
      "Application & SaaS admin",
      "Quarterly experience reviews",
    ],
    badge: "Most Popular",
  },
  {
    title: "Embedded Team",
    description: "Co-managed pod aligned to departments with roadmap collaboration.",
    highlights: [
      "Dedicated lead engineer",
      "Shadow technology discovery",
      "Executive white-glove deskside",
    ],
  },
]

const enablement = [
  "Employee onboarding/offboarding workflows completed in under 4 hours",
  "Lifecycle management for laptops, peripherals, and collaboration tools",
  "Security-first support with MFA resets, phishing remediation, and policy coaching",
  "Knowledge base articles and micro-trainings tailored to your tech stack",
]

export default function SupportServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4">Help Desk & User Support</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  People-First Support with <span className="text-primary">Engineer-Level Talent</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Give your team instant access to experts who know your business applications, document every fix, and
                  measure satisfaction on every ticket.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/schedule-call">Book a Help Desk Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {metrics.map((metric) => (
                  <div key={metric.label} className="text-center border border-border rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/it-helpdesk-services-24-7.jpg"
                  alt="Technology help desk team supporting end users"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Multi-Channel Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Users choose the channel they prefer and still receive consistent, SLA-backed care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {supportChannels.map((channel) => {
              const Icon = channel.icon
              return (
                <Card key={channel.title} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{channel.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{channel.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Employee Enablement</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              We go beyond troubleshooting to remove friction from every stage of the employee technology journey.
            </p>
            <ul className="space-y-4">
              {enablement.map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            {packages.map((pkg) => (
              <Card key={pkg.title} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl text-card-foreground">{pkg.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                    </div>
                    {pkg.badge && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary border border-primary px-3 py-1 rounded-full">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start space-x-2 text-muted-foreground">
                        <Clock8 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Let&apos;s Delight Your Users</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Pair our help desk with your internal technology team or let us own the entire user experience—we adapt to your
            operating model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">Meet the Support Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/schedule-call">See Response Metrics</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
