import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Clock, Shield, AlertTriangle, BarChart3, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift hero-bg-image"
            style={{
              backgroundImage: "url(/Image_fx (25).jpg)",
              filter: "brightness(0.3)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/35 to-black/55" />

          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-slow"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-primary/70 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-4xl mx-auto hero-text-panel">
            <Image
              src="/79ratio-logo.webp"
              alt="79 Ratio Logo"
              width={200}
              height={67}
              className="mx-auto mb-8"
              priority
            />
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">24/7/365 Monitoring</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Proactive Network <span className="text-primary">Monitoring</span>
            </h1>
            <p className="text-xl text-white leading-relaxed text-pretty max-w-3xl mx-auto">
              Stay ahead of technology issues with our comprehensive monitoring solutions that detect and resolve problems
              before they impact your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Comprehensive Monitoring Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our monitoring solutions provide complete visibility into your technology infrastructure with real-time alerts and
              proactive maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Real-Time Monitoring",
                description:
                  "Continuous monitoring of your network, servers, and applications with instant alerts when issues arise.",
              },
              {
                icon: AlertTriangle,
                title: "Proactive Alerts",
                description:
                  "Get notified before problems become critical with intelligent threshold monitoring and predictive analytics.",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description:
                  "Detailed reporting and analytics to optimize performance and plan for future capacity needs.",
              },
              {
                icon: Shield,
                title: "Security Monitoring",
                description:
                  "Advanced threat detection and security monitoring to protect against cyber attacks and data breaches.",
              },
              {
                icon: CheckCircle,
                title: "Automated Response",
                description:
                  "Automated remediation for common issues to minimize downtime and reduce manual intervention.",
              },
              {
                icon: Monitor,
                title: "Dashboard Access",
                description: "Comprehensive dashboard with real-time status updates and historical performance data.",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Why Choose Our Monitoring?</h2>
              <div className="space-y-6">
                {[
                  "Reduce downtime by up to 95% with proactive monitoring",
                  "24/7/365 monitoring by certified technology professionals",
                  "Custom alerts tailored to your business needs",
                  "Comprehensive reporting and analytics",
                  "Integration with existing technology infrastructure",
                  "Scalable solutions that grow with your business",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Contact Us Today</h3>
              <p className="text-muted-foreground mb-6">
                Ready to protect your business with proactive monitoring? Contact us for a free consultation and custom
                quote.
              </p>
              <Button asChild size="lg" className="w-full">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
