import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Phone, Video, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ScheduleCallPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg-image"
            style={{
              backgroundImage: "url('/home-bg.png')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/70" />

          {/* Floating Elements Animation */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/60 rounded-full animate-float-slow"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/80 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-float-slow"
              style={{ animationDelay: "3s" }}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-4xl mx-auto hero-text-panel">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Schedule Your Consultation</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Let&apos;s Talk Through What&apos;s Not Working
            </h1>
            <p className="text-xl text-white leading-relaxed text-pretty max-w-3xl mx-auto">
              In one focused conversation, we can turn noise into clarity and map out practical next steps for your
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Scheduling Options */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Choose Your Preferred Meeting Type</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the consultation format that works best for you and your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone Consultation */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Phone Consultation</CardTitle>
                <CardDescription>Quick 30-minute call to discuss your immediate operational pain points</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>30 minutes</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Technology clarity overview</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Service recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Pricing discussion</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <a href="tel:6303942700">Call 630-394-2700</a>
                </Button>
              </CardContent>
            </Card>

            {/* Video Consultation */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-primary/50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Video Consultation</CardTitle>
                <CardDescription>Comprehensive 60-minute video meeting with screen sharing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>60 minutes</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Detailed technology environment review</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Custom solution presentation</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Implementation roadmap</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact">Schedule Video Call</Link>
                </Button>
              </CardContent>
            </Card>

            {/* On-Site Visit */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>On-Site Visit</CardTitle>
                <CardDescription>Complete on-site assessment and consultation at your location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>2-3 hours</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Physical infrastructure audit</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Network performance testing</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Detailed proposal delivery</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact">Request Site Visit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready To Feel More In Control?</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us directly to schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <a href="tel:6303942700" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>630-394-2700</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Send Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
