import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Shield, Cloud, HardDrive, Headphones, Settings, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Monitor,
    title: "24/7/365 Monitoring",
    slug: "monitoring",
    description:
      "Proactive network monitoring and threat detection to prevent issues before they impact your business operations.",
    features: [
      "Real-time network monitoring",
      "Automated threat detection",
      "Performance optimization",
      "Instant alert notifications",
    ],
    benefits: [
      "Issues prevented before impact",
      "Reduced downtime costs",
      "Improved system performance",
      "Peace of mind",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    slug: "cybersecurity",
    description:
      "Zero trust security that verifies every access request, protects endpoints, and keeps compliance always-on.",
    features: [
      "Zero trust security",
      "Endpoint protection",
      "Security awareness training",
      "Compliance audits",
    ],
    benefits: [
      "Protection from cyber threats",
      "Regulatory compliance",
      "Reduced security risks",
      "Employee education",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    slug: "cloud",
    description:
      "Expert cloud migration, optimization, and management services for Microsoft 365, AWS, and Azure platforms.",
    features: ["Cloud migration planning", "Cost optimization", "Performance monitoring", "Backup & disaster recovery"],
    benefits: ["Reduced technology costs", "Improved scalability", "Enhanced collaboration", "Business continuity"],
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    slug: "backup",
    description: "Reliable data protection with automated backups and rapid disaster recovery solutions.",
    features: ["Automated daily backups", "Rapid data recovery", "Disaster recovery planning", "Compliance reporting"],
    benefits: ["Data protection", "Business continuity", "Regulatory compliance", "Reduced recovery time"],
  },
  {
    icon: Headphones,
    title: "Help Desk Support",
    slug: "support",
    description: "Responsive technical support with local expertise and personalized service for your team.",
    features: ["Local technical support", "Remote assistance", "Ticket management system", "Priority support levels"],
    benefits: ["Quick issue resolution", "Improved productivity", "Reduced technology frustration", "Expert guidance"],
  },
  {
    icon: Settings,
    title: "Technology Strategy & Planning",
    slug: "strategy",
    description: "Strategic technology planning and implementation to align technology with your business objectives.",
    features: ["Technology assessments", "Strategic roadmaps", "Budget planning", "Vendor management"],
    benefits: [
      "Aligned technology strategy",
      "Optimized technology spend",
      "Future-ready infrastructure",
      "Competitive advantage",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image"
          style={{ backgroundImage: "url(/services-bg.png)" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float-slow opacity-40" />
          <div
            className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-50"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float-slow opacity-30"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 right-10 w-2 h-2 bg-primary rounded-full animate-float opacity-40"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-4xl mx-auto hero-text-panel">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Comprehensive <span className="text-primary">Technology Services</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed text-pretty">
              From proactive monitoring to strategic planning, we provide the complete technology infrastructure your business
              needs to thrive in today's digital landscape.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium text-card-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">
              Ready to Transform Your Technology Infrastructure?
            </h2>
            <p className="text-xl text-black/80 text-pretty">
              Let's discuss your specific needs and create a customized technology solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 transition-none">
                <Link href="/contact">Get Free Assessment</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-black text-white bg-transparent transition-none"
              >
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
