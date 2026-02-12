import Image from "next/image"
import Link from "next/link"
import { ChevronDown, CheckCircle2 } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChallengeSlug,
  challengeBackgroundImages,
  challengesContent,
  challengesIntro,
  challengesOrder,
} from "@/lib/brief-content"

type SearchParamsValue = string | string[] | undefined

type ChallengesPageProps = {
  searchParams?: Promise<Record<string, SearchParamsValue>> | Record<string, SearchParamsValue>
}

function getSearchParam(value: SearchParamsValue): string | undefined {
  if (Array.isArray(value)) {
    return value[0]
  }

  return value
}

function isChallengeSlug(value: string | undefined): value is ChallengeSlug {
  return value !== undefined && challengesOrder.includes(value as ChallengeSlug)
}

export default async function ChallengesPage({ searchParams }: ChallengesPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams ?? {})
  const cardTextShadow = "0 6px 24px rgba(0,0,0,0.88)"
  const challengeFromQuery = getSearchParam(resolvedSearchParams.challenge)
  const queryChallengeSlug = isChallengeSlug(challengeFromQuery) ? challengeFromQuery : null
  const expandedSlug = queryChallengeSlug
  const heroImage = queryChallengeSlug ? challengeBackgroundImages[queryChallengeSlug] : "/challanges.jpg"

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden bg-black py-20 lg:py-32">
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
          <div className="pointer-events-none absolute inset-0 hero-edge-fade" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/72 via-black/56 to-black/72" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mx-auto w-fit border-primary/30 bg-primary/20 text-primary">Challenges We Solve</Badge>
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/35 bg-black/45 px-6 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.45)] backdrop-blur-md lg:px-8">
            <h1 className="text-4xl font-bold leading-tight text-primary text-balance lg:text-6xl">{challengesIntro.headline}</h1>
            <p className="mx-auto mt-4 max-w-4xl text-xl leading-relaxed text-pretty text-white">{challengesIntro.subheadline}</p>
            <p className="mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-pretty text-white/90">{challengesIntro.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {challengesOrder.map((slug) => {
            const challenge = challengesContent[slug]
            const isExpanded = expandedSlug === slug
            const toggleHref = isExpanded ? `/challenges#${slug}` : `/challenges?challenge=${slug}#${slug}`

            return (
              <Card
                key={slug}
                id={slug}
                className="relative isolate overflow-hidden scroll-mt-24 rounded-2xl border-primary/55 bg-black/70 shadow-[0_20px_56px_rgba(0,0,0,0.62)] backdrop-blur-sm"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className={`absolute inset-0 ${
                      isExpanded
                        ? "bg-gradient-to-b from-black/84 via-black/70 to-black/88"
                        : "bg-gradient-to-b from-black/88 via-black/82 to-black/90"
                    }`}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(78%_66%_at_22%_0%,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.06)_44%,rgba(212,175,55,0)_100%)]" />
                </div>

                <CardHeader className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl text-card-foreground text-balance" style={{ textShadow: cardTextShadow }}>
                        {challenge.title}
                      </CardTitle>
                      {!isExpanded ? (
                        <CardDescription className="text-[var(--foreground)]/92 text-base" style={{ textShadow: cardTextShadow }}>
                          {challenge.entrySubheadline}
                        </CardDescription>
                      ) : null}
                    </div>
                    <Button asChild variant="outline" className="border-primary/45 bg-black/55">
                      <Link href={toggleHref} prefetch={false} aria-expanded={isExpanded} aria-controls={`challenge-content-${slug}`}>
                        {isExpanded ? "Collapse" : "Expand"}
                        <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>

                {isExpanded ? (
                  <CardContent id={`challenge-content-${slug}`} className="relative z-10 space-y-8">
                    <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-primary/45">
                      <div className="absolute inset-0">
                        <Image
                          src={challengeBackgroundImages[slug]}
                          alt=""
                          fill
                          priority
                          sizes="(min-width: 1024px) 960px, 100vw"
                          quality={58}
                          className="object-cover"
                          style={{ filter: "brightness(1.16)", objectPosition: "center 40%" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/62 via-black/48 to-black/64" />
                      </div>
                      <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-center md:p-8 lg:p-10">
                        <div className="max-w-4xl rounded-2xl border border-primary/35 bg-black/50 px-6 py-6 shadow-[0_14px_38px_rgba(0,0,0,0.5)] backdrop-blur-md lg:px-8">
                          <h2 className="text-2xl font-bold text-primary text-balance md:text-3xl lg:text-4xl" style={{ textShadow: cardTextShadow }}>
                            {challenge.title}
                          </h2>
                          <p className="mt-4 max-w-4xl text-base leading-relaxed text-pretty text-white/95 md:text-lg" style={{ textShadow: cardTextShadow }}>
                            {challenge.entrySubheadline}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-card-foreground" style={{ textShadow: cardTextShadow }}>
                          What this looks like
                        </h3>
                        <p className="text-[var(--foreground)]/92 leading-relaxed" style={{ textShadow: cardTextShadow }}>
                          {challenge.looksLikeIntro}
                        </p>
                        <ul className="space-y-2">
                          {challenge.looksLikeSignals.map((signal) => (
                            <li key={signal} className="flex items-start gap-2 text-[var(--foreground)]/92" style={{ textShadow: cardTextShadow }}>
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                              <span>{signal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-card-foreground" style={{ textShadow: cardTextShadow }}>
                          Real cause
                        </h3>
                        <p className="font-medium text-card-foreground" style={{ textShadow: cardTextShadow }}>
                          {challenge.causeHeadline}
                        </p>
                        <div className="space-y-2">
                          {challenge.causeBody.map((paragraph) => (
                            <p key={paragraph} className="text-[var(--foreground)]/92 leading-relaxed" style={{ textShadow: cardTextShadow }}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 rounded-xl border border-primary/35 bg-black/50 p-5">
                      <p className="text-xs uppercase tracking-wider text-primary">Solution provided by 79 Ratio</p>
                      <h3 className="text-xl font-semibold text-card-foreground text-balance" style={{ textShadow: cardTextShadow }}>
                        {challenge.perspectiveHeadline}
                      </h3>
                      {challenge.perspectiveBody.map((paragraph) => (
                        <p key={paragraph} className="text-[var(--foreground)]/92 leading-relaxed" style={{ textShadow: cardTextShadow }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-card-foreground" style={{ textShadow: cardTextShadow }}>
                          What changes
                        </h3>
                        <p className="text-[var(--foreground)]/92" style={{ textShadow: cardTextShadow }}>
                          {challenge.whatChangesIntro}
                        </p>
                        <ul className="space-y-2">
                          {challenge.whatChangesBullets.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[var(--foreground)]/92" style={{ textShadow: cardTextShadow }}>
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-card-foreground" style={{ textShadow: cardTextShadow }}>
                          Should you act?
                        </h3>
                        <p className="text-[var(--foreground)]/92" style={{ textShadow: cardTextShadow }}>
                          {challenge.shouldYouActIntro}
                        </p>
                        <ul className="space-y-2">
                          {challenge.shouldYouActBullets.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-[var(--foreground)]/92" style={{ textShadow: cardTextShadow }}>
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-card-foreground" style={{ textShadow: cardTextShadow }}>
                        Next steps
                      </h3>
                      <p className="text-[var(--foreground)]/92" style={{ textShadow: cardTextShadow }}>
                        {challenge.nextStepsIntro}
                      </p>
                      <div className="grid gap-4 md:grid-cols-3">
                        {challenge.nextSteps.map((nextStep) => (
                          <div key={nextStep.label} className="space-y-3 rounded-xl border border-primary/35 bg-black/55 p-4">
                            <h4 className="text-sm font-semibold leading-snug text-card-foreground" style={{ textShadow: cardTextShadow }}>
                              {nextStep.label}
                            </h4>
                            {nextStep.description ? (
                              <p className="text-sm text-[var(--foreground)]/92" style={{ textShadow: cardTextShadow }}>
                                {nextStep.description}
                              </p>
                            ) : null}
                            <Button asChild size="sm" variant="outline" className="w-full bg-transparent">
                              <Link href={nextStep.href} prefetch={false}>
                                Continue
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                ) : null}
              </Card>
            )
          })}

          <div className="mt-10 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-foreground text-balance">Not sure which challenge is closest to your situation?</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
              Start with a calm conversation and we will help you identify where the real pattern is.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <Link href="/talk-with-us" prefetch={false}>
                Talk through your situation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
