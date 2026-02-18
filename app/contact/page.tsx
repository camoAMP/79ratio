import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Calendar, Headphones } from "lucide-react"

const addSpaceInBrand = (value: string) => value.replace(/79(?=ratio)/gi, "79 ")

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Talk with a real person who can help",
    contact: "630-394-2700",
    availability: "Mon-Fri 8AM-5PM EST",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your questions anytime",
    contact: "info@79ratio.com",
    availability: "24/7 - We respond within 2 hours",
  },
  {
    icon: Headphones,
    title: "Emergency Support",
    description: "24/7 support for existing clients",
    contact: "630-394-2700",
    availability: "24/7/365 for emergencies",
  },
]

const services = [
  "Technology Clarity Session",
  "24/7 Monitoring Setup",
  "Cybersecurity Evaluation",
  "Cloud Migration Planning",
  "Backup & Recovery Solutions",
  "Help Desk Support",
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift hero-bg-image"
          style={{ backgroundImage: "url('/Image_fx (29).jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/55 to-black/70" />

        {/* Floating Elements Animation */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float-slow"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-300/60 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/80 rounded-full animate-float-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-cyan-400/70 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-4xl mx-auto hero-text-panel">
            <Badge className="mb-4 bg-primary/20 text-white border-primary/30">Get In Touch</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Tell Us What Is Getting In The Way
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed text-pretty">
              Bring the problems that are draining time and energy. We will help you find a clear, practical path
              forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Multiple Ways to Connect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Choose the contact method that works best for you. We're here to help however you prefer to communicate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-5xl mx-auto">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className="w-full max-w-sm text-center border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-card-foreground">{method.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{method.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="font-semibold text-primary">
                      {method.contact.includes("@") ? (
                        <a href={`mailto:${method.contact}`} className="hover:underline">
                          {addSpaceInBrand(method.contact)}
                        </a>
                      ) : (
                        addSpaceInBrand(method.contact)
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{method.availability}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border bg-card" id="contact-form">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Send Us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="630-394-2700" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us where things feel stuck, risky, or harder than they should be..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Info */}
            <div className="space-y-8">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-semibold text-card-foreground">79 Ratio Headquarters</div>
                    <div className="text-muted-foreground">
                      25 S Grove Ave Ste 501
                      <br />
                      Elgin, Illinois 60120
                      <br />
                      United States
                      <br />
                      <br />
                      <strong>Phone: 630-394-2700</strong>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://maps.google.com/maps?q=25%20S%20Grove%20Ave%20Elgin%20Illinois&output=embed"
                      title="79 Ratio location map"
                      className="w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-card-foreground">8:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-card-foreground">Emergency Support Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-card-foreground">Emergency Support Only</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emergency Support</span>
                      <span className="font-medium text-primary">24/7/365</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Schedule a Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Book a free 30-minute conversation and we will help you name the real problems, priorities, and
                    next best steps.
                  </p>
                  <Button asChild className="w-full">
                    <a href="#contact-form">Schedule Free Consultation</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground">
                  How quickly can you respond to technology issues?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide 24/7/365 monitoring for our clients with response times under 15 minutes for critical
                  issues. For new inquiries, we respond within 2 hours during business hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground">
                  Do you work with businesses of all sizes?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we serve businesses from small practices to large organizations. Our solutions are scalable and
                  tailored to meet the specific needs and budget of each client.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg text-card-foreground">What industries do you specialize in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize in law firms, healthcare providers, nonprofits, and manufacturing companies. Our team
                  understands the unique compliance and technology requirements of these industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
