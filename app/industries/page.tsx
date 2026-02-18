import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scale, Heart, HandHeart, Factory, ArrowRight } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    icon: Scale,
    title: "Law Firms",
    slug: "law-firms",
    description:
      "Specialized technology solutions for legal practices with focus on security, compliance, and client confidentiality.",
    challenges: [
      "Client data confidentiality requirements",
      "Regulatory compliance (Bar Association rules)",
      "Document security and version control",
      "Remote access for court appearances",
    ],
    solutions: [
      "Secure document management systems",
      "Encrypted communication platforms",
      "Compliance monitoring and reporting",
      "24/7 security monitoring",
    ],
    testimonial: {
      quote:
        "79 Ratio understands the unique security needs of our law firm. Their proactive approach keeps our client data secure and our systems running smoothly.",
      author: "Sarah Johnson, Managing Partner",
      firm: "Johnson & Associates Law Firm",
    },
    image: "/professional-female-director-in-business-attire.jpg",
  },
  {
    icon: Heart,
    title: "Healthcare",
    slug: "healthcare",
    description: "HIPAA-compliant technology solutions designed for medical practices and healthcare organizations.",
    challenges: [
      "HIPAA compliance requirements",
      "Patient data security and privacy",
      "EHR system integration and support",
      "Telehealth technology needs",
    ],
    solutions: [
      "HIPAA-compliant infrastructure",
      "Secure patient data management",
      "EHR system optimization",
      "Telehealth platform support",
    ],
    testimonial: {
      quote:
        "Our practice relies on 79 Ratio for HIPAA compliance and secure patient data management. They've been instrumental in our digital transformation.",
      author: "Dr. Michael Chen",
      firm: "Riverside Medical Group",
    },
    image: "/professional-female-cybersecurity-specialist.jpg",
  },
  {
    icon: HandHeart,
    title: "Nonprofits",
    slug: "nonprofits",
    description: "Cost-effective technology solutions that maximize your technology budget while supporting your mission.",
    challenges: [
      "Limited technology budgets and resources",
      "Donor data security and privacy",
      "Volunteer coordination systems",
      "Grant reporting and compliance",
    ],
    solutions: [
      "Budget-optimized technology solutions",
      "Secure donor management systems",
      "Cloud-based collaboration tools",
      "Compliance reporting assistance",
    ],
    testimonial: {
      quote:
        "79 Ratio helps us do more with less. Their cost-effective solutions allow us to focus our resources on our mission while keeping our technology secure.",
      author: "Lisa Martinez, Executive Director",
      firm: "Community Hope Foundation",
    },
    image: "/professional-female-help-desk-manager.jpg",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    slug: "manufacturing",
    description:
      "Robust technology infrastructure supporting production systems, inventory management, and operational efficiency.",
    challenges: [
      "Production system reliability",
      "Inventory and supply chain management",
      "Quality control and compliance",
      "Operational technology (OT) security",
    ],
    solutions: [
      "Industrial network security",
      "Production system monitoring",
      "Inventory management integration",
      "Quality control system support",
    ],
    testimonial: {
      quote:
        "79 Ratio keeps our production systems running 24/7. Their understanding of manufacturing technology needs has been crucial to our operational success.",
      author: "David Thompson, Technology Director",
      firm: "Precision Manufacturing Inc.",
    },
    image: "/professional-male-network-engineer.jpg",
  },
]

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift hero-bg-image"
          style={{ backgroundImage: "url(/business-it-solutions-overview.jpg)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/70" />

        {/* Floating Elements Animation */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-primary/60 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent/80 rounded-full animate-float-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-primary/40 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-4xl mx-auto hero-text-panel">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Industry-Specific <span className="text-primary">Technology Expertise</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed text-pretty">
              We understand the unique technology challenges and compliance requirements of your industry. Our
              specialized solutions are tailored to help your business thrive while meeting regulatory standards.
            </p>
            <p className="text-base text-white/90 max-w-4xl mx-auto leading-relaxed text-pretty">
              Law firms, healthcare providers, nonprofits, manufacturing teams, financial services, professional
              services, construction, logistics, retail, education, and many more.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">Discuss Your Industry Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Specialized Solutions for Every Industry
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our deep industry knowledge allows us to deliver solutions that address your specific challenges and
              opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                  <CardHeader className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={industry.image}
                  alt={`${industry.title} industry representation`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/0" />
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                      <div>
                        <CardTitle className="text-2xl text-card-foreground">{industry.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">{industry.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">Key Challenges:</h4>
                        <ul className="space-y-2">
                          {industry.challenges.slice(0, 3).map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-card-foreground mb-3">Our Solutions:</h4>
                        <ul className="space-y-2">
                          {industry.solutions.slice(0, 3).map((solution, solutionIndex) => (
                            <li key={solutionIndex} className="text-sm text-muted-foreground flex items-start">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <blockquote className="text-sm text-muted-foreground italic mb-2">
                        "{industry.testimonial.quote}"
                      </blockquote>
                      <div className="text-xs text-card-foreground font-medium">
                        {industry.testimonial.author}, {industry.testimonial.firm}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={`/industries/${industry.slug}`} className="inline-flex items-center gap-2">
                        Learn More About {industry.title}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <p className="mt-10 text-center text-lg text-muted-foreground">and many more.</p>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Why Industry Expertise Matters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Generic technology solutions often fall short when it comes to meeting the specific needs of different
                  industries. Each sector has unique compliance requirements, security challenges, and operational
                  demands that require specialized knowledge and experience.
                </p>
                <p>
                  Our team has deep expertise in the industries we serve, allowing us to anticipate challenges,
                  recommend best practices, and implement solutions that truly fit your business model and regulatory
                  environment.
                </p>
                <p>
                  When you partner with 79 Ratio, you're not just getting a technology provider – you're getting a team that
                  understands your industry and is committed to helping you succeed within its unique landscape.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/diverse-industries-collage-showing-law-healthcare.jpg"
                alt="Diverse industries including law, healthcare, nonprofits, and manufacturing"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance text-black">
              Ready to Experience Industry-Focused technology?
            </h2>
            <p className="text-xl text-black/80 text-pretty">
              Let's discuss how our industry expertise can help solve your specific technology challenges and drive your
              business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">Schedule Industry Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
