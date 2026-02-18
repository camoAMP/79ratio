import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, HandHeart, Coins, Users, Target, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const nonprofitChallenges = [
  {
    icon: HandHeart,
    title: "Limited Budgets",
    description: "Maximize impact while stretching every technology dollar and qualifying for grants.",
  },
  {
    icon: Users,
    title: "Hybrid Workforce",
    description: "Support staff, volunteers, and board members who collaborate from anywhere.",
  },
  {
    icon: Coins,
    title: "Donor Data Security",
    description: "Protect constituent information while navigating HIPAA, FERPA, or GDPR obligations.",
  },
  {
    icon: Target,
    title: "Outcome Reporting",
    description: "Collect metrics that prove program results to funders without burdening the team.",
  },
]

const solutions = [
  "Grant-friendly procurement and vendor negotiations",
  "Microsoft 365 & Google Workspace optimization with nonprofit licensing",
  "Secure donor management and CRM integrations",
  "Volunteer onboarding/offboarding automation",
  "Data governance and retention policies",
  "Managed cloud backups for sensitive program data",
  "24/7 help desk tailored to staff and volunteers",
]

const impactStats = [
  { value: "1.2M", label: "Technology Grants Administered" },
  { value: "68", label: "Nonprofits Supported" },
  { value: "35%", label: "Average Cost Savings" },
]

const successStory = {
  organization: "Community Hope Foundation",
  mission: "Deliver healthcare and nutrition services across three counties.",
  challenge: "Legacy systems blocked collaboration between clinics and mobile teams while posing security risks.",
  solution:
    "Migrated to Microsoft 365 E3, deployed secure file sharing, implemented conditional access, and trained staff on phishing defense.",
  results: [
    "Secured 250k of new funding tied to technology modernization",
    "Volunteer onboarding time dropped from 10 days to 48 hours",
    "Zero security incidents during the last audit cycle",
  ],
}

export default function NonprofitsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="mb-4">Nonprofit Expertise</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Mission-Driven technology for <span className="text-primary">Nonprofits</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Stretch your funding, protect donor trust, and empower staff and volunteers with technology that simply
                  works. We combine enterprise-grade security with empathy for nonprofit realities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/schedule-call">Discuss Your Mission</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/industries">View All Industries</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="text-center border border-border rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src="/professional-it-team-collaborating-in-modern-offic.jpg"
                  alt="Nonprofit team collaborating using modern technology"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Technology Challenges We Solve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We meet you where you are with pragmatic solutions that respect your mission and resources.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {nonprofitChallenges.map((challenge) => {
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Solutions Built for Impact</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              From board governance to field operations, our managed services help nonprofits stay secure, responsive,
              and funder-ready.
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
              src="/technology-consulting-partners.png"
              alt="Consultants reviewing nonprofit technology roadmap"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Success Story</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              See how we helped a regional nonprofit modernize systems without disrupting frontline programs.
            </p>
          </div>
          <Card className="border-border bg-card">
            <CardHeader className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">{successStory.organization}</CardTitle>
              <CardDescription className="text-muted-foreground">{successStory.mission}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Challenge</h3>
                <p className="text-muted-foreground">{successStory.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Our Solution</h3>
                <p className="text-muted-foreground">{successStory.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">Impact</h3>
                <ul className="space-y-2">
                  {successStory.results.map((result) => (
                    <li key={result} className="flex items-start space-x-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
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
