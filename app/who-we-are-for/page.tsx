import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { whoWeAreForContent } from "@/lib/brief-content"

const entry = whoWeAreForContent[0]
const sections = whoWeAreForContent.slice(1)

export default function WhoWeAreForPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/generated-image%20(2).png"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={58}
            className="object-cover"
            style={{ filter: "brightness(1.08)" }}
          />
          <div className="absolute inset-0 hero-edge-fade pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/76 via-black/58 to-black/76" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border-primary/30">Who We Are For</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary text-balance">{entry.heading}</h1>
          <p className="text-xl text-white/95 leading-relaxed text-pretty">{entry.intro}</p>
        </div>
      </section>

      <section className="relative py-20 bg-background overflow-hidden">
        <div className="pointer-events-none absolute inset-y-12 left-6 z-0 hidden 2xl:flex flex-col justify-between">
          <div className="relative h-56 w-40 overflow-hidden rounded-xl border border-primary/30 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
            <Image
              src="/professional-female-director-in-business-attire.jpg"
              alt=""
              fill
              sizes="160px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
          <div className="relative h-56 w-40 overflow-hidden rounded-xl border border-primary/30 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
            <Image
              src="/professional-female-cybersecurity-specialist.jpg"
              alt=""
              fill
              sizes="160px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-12 right-6 z-0 hidden 2xl:flex flex-col justify-between">
          <div className="relative h-56 w-40 overflow-hidden rounded-xl border border-primary/30 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
            <Image
              src="/professional-male-cto-in-business-attire.jpg"
              alt=""
              fill
              sizes="160px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
          <div className="relative h-56 w-40 overflow-hidden rounded-xl border border-primary/30 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
            <Image
              src="/professional-male-network-engineer.jpg"
              alt=""
              fill
              sizes="160px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section) => (
            <Card key={section.id} className="border-border bg-card">
              <CardHeader className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-primary">{section.title}</p>
                {section.heading ? <CardTitle className="text-3xl text-card-foreground text-balance">{section.heading}</CardTitle> : null}
              </CardHeader>
              <CardContent className="space-y-5">
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground leading-relaxed text-pretty">
                    {paragraph}
                  </p>
                ))}

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

                {section.ctas?.length ? (
                  <div className="grid md:grid-cols-3 gap-4">
                    {section.ctas.map((cta) => (
                      <div key={cta.label} className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
                        <h3 className="font-semibold text-card-foreground text-sm leading-snug">{cta.label}</h3>
                        {cta.description ? <p className="text-sm text-muted-foreground">{cta.description}</p> : null}
                        <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                          <Link href={cta.href}>Continue</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.id === "if-you-are-unsure" ? (
                  <div className="rounded-2xl border border-primary/35 bg-primary/5 overflow-hidden">
                    <details className="group">
                      <summary className="list-none cursor-pointer px-5 py-5 sm:px-6 sm:py-6 bg-gradient-to-r from-black/50 to-black/30">
                        <div className="flex flex-col gap-2 text-center">
                          <h3 className="text-2xl font-semibold text-card-foreground">Do We Match?</h3>
                          <p className="text-sm text-muted-foreground">
                            Many clients start with a simple conversation before making any commitment.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            We evaluate fit based on your stage, current challenge, desired support, and whether our approach matches how your team works.
                          </p>
                          <p className="text-xs uppercase tracking-[0.14em] text-primary font-medium">
                            Open 1-minute fit form
                          </p>
                        </div>
                      </summary>

                      <div className="border-t border-primary/20 p-5 sm:p-6 lg:p-7">
                        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.25fr]">
                          <div className="space-y-4">
                            <div className="relative overflow-hidden rounded-xl border border-primary/20">
                              <Image
                                src="/technology-consulting-partners.png"
                                alt="79 Ratio team in discussion"
                                width={720}
                                height={520}
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                              <div className="absolute bottom-3 right-3 z-10 rounded-md border border-primary/35 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                                <Image
                                  src="/79ratio-logo.webp"
                                  alt="79 Ratio logo"
                                  width={140}
                                  height={44}
                                  className="h-7 w-auto brand-logo-subtle-glow"
                                />
                              </div>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              Let&apos;s find out together if this feels like the right partnership for your team.
                            </p>
                          </div>

                          <form className="space-y-5">
                            <div className="space-y-2">
                              <Label htmlFor="match-industry">Step 1: What industry are you in?</Label>
                              <select
                                id="match-industry"
                                defaultValue=""
                                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                              >
                                <option value="" disabled>
                                  Select your industry
                                </option>
                                <option value="tech">Tech</option>
                                <option value="education">Education</option>
                                <option value="retail">Retail</option>
                                <option value="creative">Creative</option>
                                <option value="manufacturing">Manufacturing</option>
                                <option value="other">Other</option>
                              </select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="match-focus">Step 2: What&apos;s your current focus or challenge?</Label>
                              <Input
                                id="match-focus"
                                placeholder='e.g., "building traction," "launching a new product," "need better systems"'
                              />
                            </div>

                            <fieldset className="space-y-3">
                              <legend className="text-sm font-medium text-card-foreground">
                                Step 3: What kind of support are you looking for?
                              </legend>
                              <div className="grid gap-2 sm:grid-cols-2">
                                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <input type="checkbox" name="support" value="strategy-planning" className="h-4 w-4 accent-[var(--primary)]" />
                                  <span>Strategy &amp; Planning</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <input type="checkbox" name="support" value="web-app-development" className="h-4 w-4 accent-[var(--primary)]" />
                                  <span>Web/App Development</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <input type="checkbox" name="support" value="branding-design" className="h-4 w-4 accent-[var(--primary)]" />
                                  <span>Branding &amp; Design</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <input type="checkbox" name="support" value="community-growth" className="h-4 w-4 accent-[var(--primary)]" />
                                  <span>Community Growth</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <input type="checkbox" name="support" value="automation" className="h-4 w-4 accent-[var(--primary)]" />
                                  <span>Automation</span>
                                </label>
                                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <input type="checkbox" name="support" value="other" className="h-4 w-4 accent-[var(--primary)]" />
                                  <span>Other (please specify)</span>
                                </label>
                              </div>
                            </fieldset>

                            <div className="space-y-4">
                              <p className="text-sm font-medium text-card-foreground">
                                Step 4: How can we reach you for a quick chat?
                              </p>
                              <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                  <Label htmlFor="match-name">Name</Label>
                                  <Input id="match-name" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="match-contact">Email or WhatsApp</Label>
                                  <Input id="match-contact" placeholder="you@example.com or +1 ..." />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="match-time">Preferred time to connect (optional)</Label>
                                <Input id="match-time" placeholder="Morning, afternoon, evenings, or specific timezone" />
                              </div>
                            </div>

                            <Button type="button" className="w-full sm:w-auto">
                              Let&apos;s See If We Match
                            </Button>
                          </form>
                        </div>
                      </div>
                    </details>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
