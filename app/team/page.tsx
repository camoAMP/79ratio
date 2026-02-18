import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { teamMembers, teamStats } from "@/lib/team-data"

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Meet the <span className="text-primary">79 Ratio Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Our experienced professionals bring decades of combined expertise in technology strategy, cybersecurity, cloud
              solutions, and technical support. Get to know the people dedicated to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-2">{stat.title}</h3>
                    <p className="text-primary-foreground/80 text-sm">{stat.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We&apos;re finalizing our leadership profiles. Check back soon to meet the people behind 79 Ratio.
            </p>
          </div>

          <Card className="border-dashed border-2 border-primary/40 bg-card">
            <CardHeader className="text-center space-y-3">
              <CardTitle className="text-2xl text-card-foreground">Team profiles are coming soon</CardTitle>
              <CardDescription className="text-muted-foreground">
                In the meantime, reach out and we&apos;ll connect you with the right leaders for your project.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Talk with leadership</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Join Our Growing Team</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              We're always looking for talented professionals who share our passion for technology and commitment to
              client success. Explore opportunities to grow your career with 79 Ratio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/careers">View Open Positions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
