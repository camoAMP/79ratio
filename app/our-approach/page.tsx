import Image from "next/image"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ourApproachContent } from "@/lib/brief-content"

const entry = ourApproachContent[0]
const bodySections = ourApproachContent.slice(1)

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/generated-image%20(1).png"
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
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border-primary/30">Our Approach</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary text-balance">{entry.heading}</h1>
          <p className="text-xl text-white/95 leading-relaxed text-pretty">{entry.intro}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {bodySections.map((section) => (
            <Card key={section.id} id={section.id} className="border-border bg-card scroll-mt-24">
              <CardHeader className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-primary">{section.title}</p>
                {section.heading ? <CardTitle className="text-3xl text-card-foreground text-balance">{section.heading}</CardTitle> : null}
                {section.intro ? <p className="text-muted-foreground text-lg leading-relaxed">{section.intro}</p> : null}
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
                        <h3 className="font-semibold text-card-foreground text-base leading-snug">{step.title}</h3>
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

                {section.ctas?.length ? (
                  <div className="grid md:grid-cols-3 gap-4">
                    {section.ctas.map((cta) => (
                      <div key={cta.label} className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
                        <h3 className="font-semibold text-card-foreground text-sm leading-snug">{cta.label}</h3>
                        {cta.description ? <p className="text-sm text-muted-foreground">{cta.description}</p> : null}
                        <Button asChild size="sm" className="w-full">
                          <Link href={cta.href}>Continue</Link>
                        </Button>
                      </div>
                    ))}
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
