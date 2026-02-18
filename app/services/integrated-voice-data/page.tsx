import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Activity,
  Building,
  CheckCircle2,
  Factory,
  Headphones,
  Layers,
  MessageSquare,
  PhoneCall,
  PhoneForwarded,
  Share2,
  Smartphone,
  Video,
} from "lucide-react"

const features = [
  {
    icon: PhoneCall,
    title: "Cloud-Based Voice & Video",
    description: "Enterprise VoIP, HD conferencing, and persistent meeting rooms without on-prem hardware.",
  },
  {
    icon: MessageSquare,
    title: "Secure Messaging & Files",
    description: "Encrypted chat, file sharing, and unified contacts so every conversation stays searchable.",
  },
  {
    icon: Smartphone,
    title: "Hybrid Team Integration",
    description: "Mobile, desktop, and remote access keep in-office and field teams on the same thread.",
  },
  {
    icon: PhoneForwarded,
    title: "Advanced Call Management",
    description: "Auto-attendants, voicemail-to-email, call recording, and analytics tuned to your workflows.",
  },
  {
    icon: Share2,
    title: "Optimized Data Routing",
    description: "QoS policies and bandwidth shaping guarantee crystal-clear voice and fast collaboration.",
  },
  {
    icon: Headphones,
    title: "Reliable 24/7 Support",
    description: "Voice specialists monitor quality metrics and resolve issues before users notice.",
  },
]

const differentiators = [
  {
    stat: "Workflows that enhance productivity",
    label: "Unified tools minimize app-switching, helping teams work more efficiently every day.",
    detail: "",
  },
  {
    stat: "Consistent, reliable calling",
    label: "Redundant networks and proactive monitoring keep communication steady and clear.",
    detail: "",
  },
  {
    stat: "Support you can depend on",
    label:
      "Our voice and data specialists are available around the clock to assist legal, healthcare, nonprofit, and manufacturing teams.",
    detail: "",
  },
]

const industries = [
  {
    icon: Building,
    title: "Law Offices",
    description: "Client-ready call recording, compliance archiving, and secure document collaboration.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Field Teams",
    description: "Rugged devices, paging, and floor-to-HQ updates that never lose clarity.",
  },
  {
    icon: Layers,
    title: "Healthcare & Clinics",
    description: "HIPAA-conscious messaging, triage hotlines, and resilient telehealth rooms.",
  },
  {
    icon: MessageSquare,
    title: "Nonprofits & Associations",
    description: "Budget-aware unified comms with grant-ready reporting and easy onboarding.",
  },
]

export default function IntegratedVoiceDataPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-black text-foreground">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image" style={{ backgroundImage: "url(/solu.jpg)" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 left-1/3 h-72 w-72 bg-primary blur-[140px]" />
          <div className="absolute top-16 right-0 h-80 w-80 bg-accent blur-[160px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge variant="secondary" className="bg-primary/15 text-primary border border-primary/40">
            Integrated Voice & Data
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance text-primary">
            Unified Communication Systems for Smart Collaboration
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Empower your team with seamless voice and data integration—crystal-clear calls, secure messaging, and instant
            connectivity across every device, all managed by 79 Ratio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-lg px-8 transition-none">
              <Link href="/contact">Book My Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white/40 text-white bg-transparent hover:bg-white hover:text-black focus-visible:text-black active:text-black transition-none"
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
            <Badge className="bg-primary/10 text-primary w-fit">What the Product Is</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Unified Voice, Video, and Data on One Platform
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              79 Ratio’s Integrated Voice & Data service delivers unified communication systems tailored to your workplace.
              We combine cloud-powered calling, video conferencing, secure instant messaging, and data sharing on one platform.
              From VoIP desk phones and mobile apps to virtual meetings and collaborative document editing, we connect your
              people no matter where they work.
            </p>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              <p className="text-muted-foreground">
                Centralized policies and analytics provide the clarity technology needs to scale communications without chaos.
              </p>
            </div>
          </div>
          <Card className="border-primary/20 bg-card shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Included Capabilities</CardTitle>
              <CardDescription className="text-muted-foreground">
                The complete toolkit for modern collaboration.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "VoIP desk phones, softphones, and mobile endpoints",
                "Video-first conference rooms with white-glove support",
                "Secure document co-editing and shared workspaces",
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

      {/* Features */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary">Included Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Everything Your Team Needs to Stay Connected
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Cloud voice, collaboration, and data routing managed by specialists for uninterrupted communication.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border bg-card h-full">
                  <CardHeader className="flex flex-row gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Why Organizations Choose 79 Ratio Voice & Data
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Disconnected communications slow down business—79 Ratio’s unified platform streamlines workflows and boosts
              team productivity by up to 35%. Our expertise ensures calls and messages are always secure, clear, and easy
              to manage, whether serving law offices, clinics, nonprofits, or manufacturing floors.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Network analytics optimize bandwidth automatically, eliminating jitter and dropped calls.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Video meeting rooms and virtual events are deployed with white-glove support and training.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Headphones className="w-5 h-5 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Voice engineers deliver proactive quality checks plus rapid response when users need help.
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {differentiators.map((item) => (
              <Card key={item.label} className="bg-card border-border text-center">
                <CardContent className="py-8 px-4 space-y-3">
                  <p className="text-base font-semibold text-primary">{item.stat}</p>
                  <p className="text-sm text-card-foreground">{item.label}</p>
                  {item.detail && <p className="text-xs text-muted-foreground">{item.detail}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary">Trusted Across Industries</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Solutions That Adapt Anywhere</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Say goodbye to missed messages and system headaches with solutions that adapt to any environment and scale
              with your growth.
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
          <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">Connect Your Team Without Limits</h2>
          <p className="text-lg text-black/80 text-pretty">
            Connect your team—request a unified communications demo and experience collaboration without limits.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/contact">Book My Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
