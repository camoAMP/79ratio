import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Lock, Eye, Users, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const securityLayers = [
  {
    icon: Shield,
    title: "Zero Trust Access",
    description:
      "Verify every user, device, and session—no implicit trust—before granting access to apps or data.",
  },
  {
    icon: Lock,
    title: "Endpoint Security",
    description:
      "Comprehensive protection for all devices connected to your network, including computers, mobile devices, and servers.",
  },
  {
    icon: Eye,
    title: "Threat Detection",
    description: "AI-powered detection that isolates suspicious activity before it becomes business-impacting.",
  },
  {
    icon: Users,
    title: "Security Training",
    description:
      "Regular security awareness training for your team to prevent human error and social engineering attacks.",
  },
]

const complianceStandards = [
  { name: "HIPAA", description: "Healthcare data protection compliance" },
  { name: "SOX", description: "Financial reporting security requirements" },
  { name: "PCI DSS", description: "Payment card industry data security" },
  { name: "GDPR", description: "General data protection regulation compliance" },
]

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image"
            style={{ backgroundImage: "url(/Image_fx (30).jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-black/55" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 hero-text-panel">
              <div className="space-y-4">
                <Badge className="mb-4 text-white">Cybersecurity Solutions</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Zero Trust <span className="text-primary">Security Protection</span>
                </h1>
                <p className="text-xl text-white leading-relaxed text-pretty">
                  Assume threat, verify every access, and stop attacks before impact with identity-driven controls,
                  compliant operations, and educated teams.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 transition-none">
                  <Link href="/contact">Security Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent transition-none">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Every request</div>
                  <div className="text-sm text-white">Verified before access</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Less than 1 minute</div>
                  <div className="text-sm text-white">Response Time</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/cybersecurity-dashboard-showing-threat-detection.jpg"
                  alt="Cybersecurity dashboard showing threat detection and network protection"
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

      {/* Security Layers */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Zero Trust Security Layers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A zero trust stack that combines access control, endpoint defense, threat detection, and training to
              prevent breaches before they begin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => {
              const IconComponent = layer.icon
              return (
                <Card key={index} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{layer.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{layer.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Compliance & Regulatory Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Stay compliant with industry regulations and protect sensitive data with our specialized compliance
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <Card key={index} className="text-center border-border bg-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{standard.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{standard.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Protecting Against Modern Threats
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Cyber threats are constantly evolving. Our security solutions adapt to protect against the latest attack
                vectors.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Ransomware Protection</h3>
                    <p className="text-muted-foreground text-sm">
                      Advanced detection and prevention of ransomware attacks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Phishing Defense</h3>
                    <p className="text-muted-foreground text-sm">
                      Email security and user training to prevent phishing attacks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Data Breach Prevention</h3>
                    <p className="text-muted-foreground text-sm">Comprehensive data protection and access controls</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/security-analyst-monitoring-cyber-threats.jpg"
                alt="Security analyst monitoring cyber threats and network protection systems"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Plan Your Security Investment</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Get a tailored security roadmap and pricing breakdown by meeting with our cybersecurity strategists.
            </p>
            <Card className="max-w-md mx-auto border-border bg-card">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl text-card-foreground">Security Strategy Session</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Align risks, priorities, and required controls before we present investment options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Assess current defenses, compliance mandates, and cyber insurance needs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Prioritize protections by business impact and risk tolerance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    Receive a customized proposal with phased pricing options
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
              Don't Wait for a Security Breach
            </h2>
            <p className="text-xl text-black/80 text-pretty">
              Protect your business today with our comprehensive cybersecurity solutions. Schedule a free security
              assessment.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">Free Security Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
