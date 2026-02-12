import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChallengeSlug, challengeBackgroundImages, challengesContent, challengesOrder } from "@/lib/brief-content"

export function generateStaticParams() {
  return challengesOrder.map((slug) => ({ slug }))
}

function isChallengeSlug(slug: string): slug is ChallengeSlug {
  return challengesOrder.includes(slug as ChallengeSlug)
}

export default async function ChallengeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }
}) {
  const { slug } = await Promise.resolve(params)

  if (!isChallengeSlug(slug)) {
    notFound()
  }

  const challenge = challengesContent[slug]
  const heroImage = challengeBackgroundImages[slug]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 lg:py-28 overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={58}
            className="object-cover"
            style={{ filter: "brightness(1.08)" }}
          />
          <div className="absolute inset-0 hero-edge-fade pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/56 to-black/75" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border-primary/30">Challenge</Badge>
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/35 bg-black/45 px-6 py-6 backdrop-blur-md shadow-[0_14px_38px_rgba(0,0,0,0.45)] lg:px-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary text-balance">{challenge.title}</h1>
            <p className="mt-4 text-2xl text-white leading-relaxed text-pretty">{challenge.entryHeadline}</p>
            <p className="mt-4 text-lg text-white/90 max-w-4xl mx-auto leading-relaxed text-pretty">{challenge.entrySubheadline}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">What this looks like</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{challenge.looksLikeIntro}</p>
              <ul className="space-y-2">
                {challenge.looksLikeSignals.map((signal) => (
                  <li key={signal} className="text-muted-foreground flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">{challenge.causeHeadline}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {challenge.causeBody.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed text-pretty">
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-border bg-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Why this matters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{challenge.whyMattersIntro}</p>
                <ul className="space-y-2">
                  {challenge.whyMattersBullets.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">{challenge.perspectiveHeadline}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {challenge.perspectiveBody.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground leading-relaxed text-pretty">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-border bg-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">What changes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{challenge.whatChangesIntro}</p>
                <ul className="space-y-2">
                  {challenge.whatChangesBullets.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border bg-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Should you act?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{challenge.shouldYouActIntro}</p>
                <ul className="space-y-2">
                  {challenge.shouldYouActBullets.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Next steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{challenge.nextStepsIntro}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {challenge.nextSteps.map((nextStep) => (
                  <div key={nextStep.label} className="rounded-xl border border-primary/30 bg-primary/5 p-4 space-y-3">
                    <h3 className="font-semibold text-card-foreground text-sm leading-snug">{nextStep.label}</h3>
                    {nextStep.description ? <p className="text-sm text-muted-foreground">{nextStep.description}</p> : null}
                    <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                      <Link href={nextStep.href}>Continue</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-8 text-center">
              <p className="text-xl text-card-foreground leading-relaxed text-pretty">{challenge.close}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
