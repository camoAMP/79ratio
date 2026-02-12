import { Button } from "@/components/ui/button"
import { Monitor, Shield, Cloud, HardDrive, Headphones, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Monitor,
    title: "24/7/365 Monitoring",
    description:
      "Proactive network monitoring and threat detection to prevent issues before they impact your business operations.",
    features: ["Real-time alerts", "Performance optimization", "Threat detection"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures including firewalls, endpoint protection, and compliance management.",
    features: ["Multi-layered protection", "Compliance support", "Security training"],
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    description:
      "Expert cloud migration, optimization, and management services for Microsoft 365, AWS, and Azure platforms.",
    features: ["Cloud migration", "Cost optimization", "Performance tuning"],
  },
  {
    icon: HardDrive,
    title: "Backup & Recovery",
    description: "Reliable data protection with automated backups and rapid disaster recovery solutions.",
    features: ["Automated backups", "Quick recovery", "Business continuity"],
  },
  {
    icon: Headphones,
    title: "Help Desk Support",
    description: "Responsive technical support with local expertise and personalized service for your team.",
    features: ["Local support", "Quick response", "Expert technicians"],
  },
  {
    icon: Settings,
    title: "IT Strategy & Planning",
    description: "Strategic technology planning and implementation to align IT with your business objectives.",
    features: ["Technology roadmap", "Budget planning", "Growth strategy"],
  },
]

export function ServicesOverview() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
          style={{
            backgroundImage: "url(/cards.jpg)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />

        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/6 w-1 h-1 bg-primary rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary/70 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance">Comprehensive IT Solutions</h2>
          <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto text-pretty">
            From proactive monitoring to strategic planning, we provide the complete IT infrastructure your business
            needs to thrive in today's digital landscape.
          </p>
        </div>

        {/* Services Block Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const serviceSlug = service.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")

            return (
              <Link prefetch={false} key={index} href={`/services/${serviceSlug}`} className="group block">
                <div className="relative h-48 bg-gradient-to-br from-black/80 to-black/60 rounded-xl border border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)] overflow-hidden backdrop-blur-sm">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-[var(--primary-soft)] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[var(--foreground)]/80 text-sm line-clamp-2">{service.description}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8">
            <Link prefetch={false} href="/services" className="inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
