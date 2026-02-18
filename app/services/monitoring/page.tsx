import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, CheckCircle, AlertTriangle, Clock, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  {
    icon: Monitor,
    title: "Real-Time Network Monitoring",
    description:
      "Continuous monitoring of your network infrastructure, servers, and applications with instant visibility into performance metrics.",
  },
  {
    icon: AlertTriangle,
    title: "Proactive Threat Detection",
    description:
      "Advanced threat detection systems that identify and respond to security incidents before they impact your business.",
  },
  {
    icon: Clock,
    title: "24/7/365 Coverage",
    description: "Round-the-clock monitoring ensures your systems are protected and performing optimally at all times.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description:
      "Continuous analysis and optimization of system performance to ensure maximum efficiency and productivity.",
  },
]

const benefits = [
  "Issues prevented before impact through automated triggers",
  "Reduced downtime costs and business disruption",
  "Improved system performance and reliability",
  "Proactive issue resolution before problems occur",
  "Detailed reporting and analytics",
  "Peace of mind with expert oversight",
]

const industries = [
  { name: "Law Firms", description: "Ensure client data security and system reliability" },
  { name: "Healthcare", description: "Maintain HIPAA compliance and patient data protection" },
  { name: "Manufacturing", description: "Keep production systems running smoothly" },
  { name: "Nonprofits", description: "Maximize uptime within budget constraints" },
]

export default function MonitoringPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4">24/7/365 Monitoring</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Proactive Technology Monitoring That <span className="text-primary">Never Sleeps</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Our advanced monitoring systems watch over your technology infrastructure 24/7, detecting and resolving issues
                  before they impact your business operations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 transition-none">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent transition-none">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Issues prevented before impact (avg / month)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5 min</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/network-monitoring-dashboard-with-real-time-metri.jpg"
                  alt="Network monitoring dashboard showing real-time metrics"
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

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Comprehensive Monitoring Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our monitoring solution provides complete visibility and control over your technology infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{feature.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Why Choose Our Monitoring Service?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Our proactive approach to technology monitoring delivers measurable business benefits and peace of mind.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/it-professional-monitoring-network-security-dashbo.jpg"
                alt="Technology professional monitoring network security dashboard"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Tailored for Your Industry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our monitoring solutions are customized to meet the specific needs and compliance requirements of your
              industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">{industry.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{industry.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Schedule Your Monitoring Quote</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Every environment has unique coverage, compliance, and response requirements. Book time with our monitoring architects to map your needs and receive a tailored proposal.
            </p>
            <Card className="max-w-md mx-auto border-border bg-card">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl text-card-foreground">Coverage Planning Session</CardTitle>
                <CardDescription className="text-muted-foreground">
                  30-minute working session to align scope, SLAs, and rollout timeline.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Document critical systems and escalation paths
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Review compliance, reporting, and response targets
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Receive a customized pricing breakdown and next steps
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/schedule-call">Schedule for Pricing</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-black/80 text-pretty">
              Don't wait for problems to occur. Start proactive monitoring today and ensure your business stays
              operational.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">Schedule Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
