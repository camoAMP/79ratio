import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scale, CheckCircle, Shield, FileText, Users, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const legalChallenges = [
  {
    icon: Shield,
    title: "Client Confidentiality",
    description: "Maintaining attorney-client privilege and protecting sensitive legal documents and communications.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Secure storage, version control, and easy retrieval of legal documents and case files.",
  },
  {
    icon: Users,
    title: "Remote Court Access",
    description: "Reliable technology for virtual court appearances and remote client consultations.",
  },
  {
    icon: Clock,
    title: "Billable Hour Tracking",
    description: "Accurate time tracking and billing systems integrated with case management software.",
  },
]

const solutions = [
  "Encrypted document management systems",
  "Secure client communication portals",
  "Bar Association compliance monitoring",
  "Backup and disaster recovery for case files",
  "Virtual court appearance technology",
  "Time tracking and billing integration",
  "Cybersecurity training for legal staff",
  "24/7 monitoring of critical systems",
]

const caseStudy = {
  firm: "Johnson & Associates Law Firm",
  size: "25 attorneys, 40 staff members",
  challenge:
    "Needed secure document management and remote access capabilities while maintaining Bar Association compliance.",
  solution:
    "Implemented encrypted document management system with secure remote access, 24/7 monitoring, and compliance reporting.",
  results: [
    "100% Bar Association compliance maintained",
    "50% reduction in document retrieval time",
    "Seamless transition to remote work during pandemic",
    "Zero security incidents in 3 years",
  ],
}

export default function LawFirmsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image"
            style={{ backgroundImage: 'url("/law_firms.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/5 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1/2 h-1/2 rounded-full bg-black/60 blur-[140px]" />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white hero-text-panel">
              <div className="space-y-4">
                <Badge className="mb-4 text-white border-white/40 bg-white/10">Legal Industry Expertise</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
                  Technology Solutions for <span className="text-primary">Law Firms</span>
                </h1>
                <p className="text-xl text-white leading-relaxed text-pretty">
                  Specialized technology solutions designed for legal practices. We understand the unique security,
                  compliance, and confidentiality requirements of the legal profession.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">Schedule Legal Technology Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Link href="/industries">View All Industries</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-white">Bar Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-white">Law Firms Served</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Legal Challenges */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Understanding Legal Industry Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Law firms face unique technology challenges that require specialized expertise and solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {legalChallenges.map((challenge, index) => {
              const IconComponent = challenge.icon
              return (
                <Card key={index} className="border-border bg-card">
                  <CardHeader className="flex flex-row items-start space-y-0 space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
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

      {/* Our Solutions */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Comprehensive Legal Technology Solutions
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Our specialized solutions address the unique technology needs of law firms while ensuring compliance
                with Bar Association rules and maintaining client confidentiality.
              </p>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/secure-legal-document-management-system.jpg"
                alt="Secure legal document management system interface"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Client Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              See how we helped a growing law firm modernize their technology infrastructure while maintaining security and
              compliance.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-border bg-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">{caseStudy.firm}</CardTitle>
              <CardDescription className="text-muted-foreground">{caseStudy.size}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">Challenge:</h4>
                  <p className="text-muted-foreground text-sm">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-3">Solution:</h4>
                  <p className="text-muted-foreground text-sm">{caseStudy.solution}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Results:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Bar Association Compliance Guaranteed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We stay current with all Bar Association technology rules and regulations to ensure your firm remains
              compliant.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Model Rule 1.6</CardTitle>
                  <CardDescription className="text-muted-foreground">Client confidentiality protection</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Model Rule 1.1</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Technology competence requirements
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Model Rule 5.5</CardTitle>
                  <CardDescription className="text-muted-foreground">Unauthorized practice prevention</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">
              Get Started Today: Ready to Modernize Your Law Firm&apos;s technology?
            </h2>
            <p className="text-xl text-black/80 text-pretty">
              Let's discuss how our legal industry expertise can help your firm operate more efficiently while
              maintaining security and compliance.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">Schedule Legal Technology Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
