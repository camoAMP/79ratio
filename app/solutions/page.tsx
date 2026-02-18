import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Cloud, Monitor, Database, Lock, Zap } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/digital-bg.png"
            alt="Digital Solutions Background"
            fill
            className="object-cover animate-slow-drift"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Shield className="w-8 h-8 text-primary/30" />
          </div>
          <div className="absolute top-40 right-20 animate-float-slow">
            <Cloud className="w-6 h-6 text-primary/20" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
            <Monitor className="w-10 h-10 text-primary/25" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Image
              src="/79ratio-logo.webp"
              alt="79 Ratio Logo"
              width={200}
              height={67}
              className="mx-auto mb-8"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Comprehensive Technology Solutions</h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            From cybersecurity to cloud management, we provide end-to-end technology solutions that drive your business
            forward with confidence and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/compliance-bg.png" alt="Solutions Background" fill className="object-cover animate-slow-drift" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Solution Portfolio</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Tailored technology solutions designed to meet the unique challenges of your industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Cybersecurity Solutions",
                description: "Advanced threat protection, monitoring, and incident response to keep your data secure.",
                link: "/services/cybersecurity",
              },
              {
                icon: Cloud,
                title: "Cloud Management",
                description: "Seamless cloud migration, optimization, and ongoing management for maximum efficiency.",
                link: "/solutions/cloud",
              },
              {
                icon: Monitor,
                title: "24/7 Monitoring",
                description:
                  "Proactive system monitoring and maintenance to prevent issues before they impact your business.",
                link: "/services/monitoring",
              },
              {
                icon: Database,
                title: "Data Management",
                description: "Comprehensive backup, recovery, and data governance solutions for business continuity.",
                link: "/solutions/data",
              },
              {
                icon: Lock,
                title: "Compliance Solutions",
                description: "Industry-specific compliance management for healthcare, legal, and financial sectors.",
                link: "/solutions/compliance",
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                description: "Strategic technology planning and implementation to modernize your operations.",
                link: "/solutions/digital",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <solution.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-white mb-4">{solution.description}</p>
                  <Link href={solution.link}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
