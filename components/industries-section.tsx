import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Scale, Heart, HandHeart, Factory } from "lucide-react"

const industries = [
  {
    icon: Scale,
    title: "Law Firms",
    description:
      "Protect client data, support case workflows, and keep attorneys moving without avoidable downtime.",
    benefits: ["Document security", "Case management systems", "Compliance support"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Secure, reliable systems that support patient care and help your team stay HIPAA-ready.",
    benefits: ["HIPAA compliance", "EHR integration", "Patient data security"],
  },
  {
    icon: HandHeart,
    title: "Nonprofits",
    description: "Stretch limited resources with dependable tools and support that stay aligned with your mission.",
    benefits: ["Budget optimization", "Donor management", "Volunteer coordination"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Keep production, inventory, and operations running on stable systems where downtime is expensive.",
    benefits: ["Production systems", "Inventory tracking", "Quality control"],
  },
]

function IndustryCard({
  icon: Icon,
  title,
  description,
  benefits,
  index,
}: {
  icon: typeof Scale
  title: string
  description: string
  benefits: string[]
  index: number
}) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  const textShadow = "0 4px 18px rgba(0,0,0,0.75)"

  return (
    <div
      className="relative h-full transition-all duration-300 hover:shadow-[0_20px_60px_rgba(212,175,55,0.45)] hover:scale-105"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative z-10 h-full rounded-3xl overflow-hidden border-2 border-primary">
        <div className="absolute inset-0">
          <div
            className="hidden md:block absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/cards.jpg)" }}
          />
          <div
            className="md:hidden absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/fibinacci.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
          <div className="absolute inset-0 bg-primary/15 mix-blend-screen opacity-50" />
        </div>

        <div className="relative p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-primary to-primary/70 p-4 rounded-full shadow-lg shadow-primary/40">
              <Icon className="w-8 h-8 text-black" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-3 text-primary" style={{ textShadow }}>
            {title}
          </h3>
          <p className="text-[var(--foreground)] text-center mb-4 text-sm leading-relaxed" style={{ textShadow }}>
            {description}
          </p>

          <div className="space-y-2 mb-4">
            {benefits.map((feature, idx) => (
              <div key={idx} className="flex items-center text-[var(--foreground)] text-sm" style={{ textShadow }}>
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <details className="group/expand mt-2">
            <summary className="cursor-pointer list-none w-full py-2 text-center bg-gradient-to-r from-primary to-primary/80 text-black font-semibold rounded-lg hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/30">
              <span className="group-open/expand:hidden">Learn More</span>
              <span className="hidden group-open/expand:inline">Show Less</span>
            </summary>
            <div className="mt-4 border-t border-primary/30 pt-4 text-center space-y-3">
              <p className="text-[var(--foreground)] text-sm leading-relaxed" style={{ textShadow }}>
                For {title.toLowerCase()}, we tailor your environment to match daily workflows, compliance needs, and
                growth goals so technology helps instead of slowing the team down.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link prefetch={false}
                  href={`/industries/${slug}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium"
                  style={{ textShadow }}
                >
                  See industry plan →
                </Link>
                <Link prefetch={false} href="/contact" className="text-primary hover:text-primary/80 text-sm font-medium" style={{ textShadow }}>
                  Start a conversation →
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export function IndustriesSection() {
  const primaryIndustries = industries.slice(0, 3)
  const secondaryIndustry = industries[3]

  return (
    <section className="relative py-20 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-primary/40 p-6 text-center text-[var(--foreground)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/cards.jpg)" }} />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary text-balance">Industry expertise without cookie-cutter advice</h2>
            <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto text-pretty" style={{ textShadow: "0 6px 20px rgba(0,0,0,0.65)" }}>
              Every industry has different pressure points. We shape the systems, security, and support around how
              your team actually works.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {primaryIndustries.map((industry, index) => (
            <IndustryCard key={industry.title} {...industry} index={index} />
          ))}
        </div>

        {secondaryIndustry && (
          <div className="flex justify-center mb-12">
            <div className="w-full md:w-2/3 lg:w-1/3">
              <IndustryCard {...secondaryIndustry} index={3} />
            </div>
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="text-lg px-8">
            <Link prefetch={false} href="/industries">Explore All Industries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
