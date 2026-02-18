import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, CheckCircle, Shield, Monitor, Users, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const healthcareChallenges = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description:
      "Ensuring all technology systems meet strict HIPAA requirements for patient data protection and privacy.",
  },
  {
    icon: FileText,
    title: "EHR Integration",
    description:
      "Seamless integration and optimization of Electronic Health Record systems for efficient patient care.",
  },
  {
    icon: Monitor,
    title: "Telehealth Support",
    description: "Reliable technology infrastructure to support telemedicine and remote patient monitoring.",
  },
  {
    icon: Users,
    title: "Staff Training",
    description: "Comprehensive training on healthcare technology systems and security best practices.",
  },
]

const hipaaRequirements = [
  "Administrative safeguards implementation",
  "Physical safeguards for equipment and facilities",
  "Technical safeguards for electronic PHI",
  "Risk assessment and management",
  "Workforce training and access controls",
  "Incident response and breach notification",
  "Business associate agreements",
  "Regular compliance audits and monitoring",
]

const caseStudy = {
  practice: "Riverside Medical Group",
  size: "15 physicians, 45 staff members",
  challenge:
    "Needed HIPAA-compliant infrastructure upgrade and EHR optimization while maintaining patient care quality.",
  solution:
    "Implemented comprehensive HIPAA-compliant network, optimized EHR systems, and established 24/7 monitoring with healthcare-specific security protocols.",
  results: [
    "100% HIPAA compliance achieved and maintained",
    "40% improvement in EHR system performance",
    "Successful telehealth implementation during pandemic",
    "Zero patient data security incidents",
  ],
}

export default function HealthcarePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image"
            style={{ backgroundImage: 'url("/healthcare.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/65 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/5 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-1/2 h-1/2 rounded-full bg-black/40 blur-[160px]" />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 hero-text-panel">
              <div className="space-y-4">
                <Badge className="mb-4 text-white border-white/40 bg-white/10">Healthcare Technology Expertise</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  HIPAA-Compliant technology for <span className="text-primary">Healthcare</span>
                </h1>
                <p className="text-xl text-white leading-relaxed text-pretty">
                  Specialized technology solutions designed for healthcare providers. We ensure HIPAA compliance,
                  optimize EHR systems, and support telehealth initiatives while protecting patient data.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 text-white bg-white/10 border border-white/40 hover:bg-white/20">
                  <Link href="/contact">Schedule Healthcare Technology Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black">
                  <Link href="/industries">View All Industries</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-white">HIPAA Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">30+</div>
                  <div className="text-sm text-white">Healthcare Clients</div>
                </div>
              </div>
            </div>

            <div />
          </div>
        </div>
      </section>

      {/* Healthcare Challenges */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Healthcare Technology Challenges
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Healthcare organizations face unique technology challenges that require specialized expertise and
              compliance knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthcareChallenges.map((challenge, index) => {
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

      {/* HIPAA Compliance */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Comprehensive HIPAA Compliance
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Our healthcare technology solutions ensure full HIPAA compliance while optimizing your technology infrastructure
                for better patient care and operational efficiency.
              </p>
              <ul className="space-y-3">
                {hipaaRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <Image
                src="/hipaa-compliant-healthcare-it-infrastructure.jpg"
                alt="HIPAA-compliant healthcare technology infrastructure and security systems"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Healthcare Success Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              See how we helped a medical group achieve HIPAA compliance while improving their technology
              infrastructure.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-border bg-card">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">{caseStudy.practice}</CardTitle>
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

      {/* Telehealth Support */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Telehealth Technology Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Enable remote patient care with secure, HIPAA-compliant telehealth solutions that improve access and
              patient satisfaction.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Video Conferencing</CardTitle>
                  <CardDescription className="text-muted-foreground">Secure patient consultations</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">Remote Monitoring</CardTitle>
                  <CardDescription className="text-muted-foreground">Patient health tracking</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg text-card-foreground">EHR Integration</CardTitle>
                  <CardDescription className="text-muted-foreground">Seamless record management</CardDescription>
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
              Ready to Enhance Your Healthcare technology?
            </h2>
            <p className="text-xl text-black/80 text-pretty">
              Let's discuss how our healthcare expertise can help your practice achieve HIPAA compliance while improving
              patient care through technology.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">Schedule Healthcare Technology Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
