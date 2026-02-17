import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { talkWithUsContent } from "@/lib/brief-content"

const entry = talkWithUsContent[0]
const sections = talkWithUsContent.slice(1)

const optionCards = [
  {
    id: "conversation-options",
    title: "Talk Through Your Situation",
    description: "A low-pressure call to understand what is going on and where you need clarity.",
    cta: "Start a Conversation",
  },
  {
    id: "request-assessment",
    title: "Request an Assessment",
    description: "A structured review of your environment, risk exposure, and system alignment.",
    cta: "Request Assessment",
  },
  {
    id: "quick-question",
    title: "Ask a Quick Question",
    description: "A simple way to start if you are not sure which path fits best yet.",
    cta: "Ask a Question",
  },
]

export default function TalkWithUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src="/contact.png" alt="" fill priority sizes="100vw" quality={58} className="object-cover" />
          <div className="absolute inset-0 hero-edge-fade pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/78 via-black/58 to-black/78" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-black/45 px-6 py-8 backdrop-blur-md lg:px-10 lg:py-10 space-y-6">
            <Badge className="mx-auto w-fit bg-primary/20 text-primary border-primary/30">Talk With Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary text-balance">{entry.heading}</h1>
            <p className="text-xl text-white/95 leading-relaxed text-pretty">{entry.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections
            .filter((section) => !["contact-options", "close"].includes(section.id))
            .map((section) => (
              <Card key={section.id} className="border-border bg-card">
                <CardHeader className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-primary">{section.title}</p>
                  {section.heading ? <CardTitle className="text-3xl text-card-foreground text-balance">{section.heading}</CardTitle> : null}
                  {section.intro ? <CardDescription className="text-muted-foreground text-lg">{section.intro}</CardDescription> : null}
                </CardHeader>
                <CardContent className="space-y-5">
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  ))}

                  {section.steps?.length ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {section.steps.map((step) => (
                        <div key={step.title} className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-2">
                          <h3 className="font-semibold text-card-foreground text-base">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets?.length ? (
                    <ul className="space-y-2">
                      {section.bullets.map((item) => (
                        <li key={item} className="text-muted-foreground flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.note ? <p className="text-sm text-muted-foreground italic">{section.note}</p> : null}
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Choose how you want to start</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              No pressure and no hard sell. Start in the format that fits your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {optionCards.map((option) => (
              <Card key={option.id} id={option.id} className="border-border bg-card scroll-mt-24">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground text-balance">{option.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="#contact-form">{option.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Card className="border-border bg-card" id="contact-form">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Start the conversation</CardTitle>
              <CardDescription className="text-muted-foreground">
                Share a little context and we will respond with the most useful next step.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Organization</Label>
                  <Input id="company" placeholder="Organization name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="path">Conversation path</Label>
                  <select
                    id="path"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a starting point
                    </option>
                    <option value="talk">Talk through your situation</option>
                    <option value="assessment">Request an assessment</option>
                    <option value="question">Ask a quick question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">What are you noticing?</Label>
                  <Textarea id="message" className="min-h-[120px]" placeholder="Tell us what feels unclear, slow, risky, or harder than it should be." />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-card-foreground">630-394-2700</p>
                    <p className="text-sm">Monday-Friday, 8:00 AM-5:00 PM CST</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-card-foreground">info@79ratio.com</p>
                    <p className="text-sm">We typically respond within two business hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-card-foreground">79 Ratio Headquarters</p>
                    <p className="text-sm">25 S Grove Ave Ste 501, Elgin, Illinois 60120</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Final note</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {talkWithUsContent
                  .filter((section) => section.id === "close")
                  .flatMap((section) => section.body ?? [])
                  .map((line) => (
                    <p key={line} className="text-muted-foreground text-pretty leading-relaxed">
                      {line}
                    </p>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
