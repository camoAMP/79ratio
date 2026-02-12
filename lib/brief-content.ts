export type ChallengeSlug =
  | "clarity"
  | "security-compliance-risk"
  | "it-bottleneck"
  | "growth-outpaced-systems"
  | "outgrown-it-provider"

export interface CtaItem {
  label: string
  href: string
  description?: string
}

export interface StepItem {
  title: string
  description: string
}

export interface SectionBlock {
  id: string
  title: string
  heading?: string
  intro?: string
  body?: string[]
  bullets?: string[]
  steps?: StepItem[]
  ctas?: CtaItem[]
  note?: string
  timeline?: string
}

export interface ChallengeContent {
  slug: ChallengeSlug
  title: string
  entryHeadline: string
  entrySubheadline: string
  looksLikeIntro: string
  looksLikeSignals: string[]
  causeHeadline: string
  causeBody: string[]
  whyMattersIntro: string
  whyMattersBullets: string[]
  perspectiveHeadline: string
  perspectiveBody: string[]
  whatChangesIntro: string
  whatChangesBullets: string[]
  shouldYouActIntro: string
  shouldYouActBullets: string[]
  nextStepsIntro: string
  nextSteps: CtaItem[]
  close: string
}

export interface NavItem {
  label: string
  href: string
  description?: string
}

export interface NavDropdown {
  label: string
  href?: string
  items: NavItem[]
}

export const homeContent = {
  hero: {
    headline: "Technology should not feel fragile.",
    subheadline:
      "Most organizations do not struggle because of bad tools. They struggle because their technology was never designed to hold up over time.",
    body:
      "We help businesses build and manage technology environments that are stable, secure, and quietly effective, so IT stops demanding attention and starts doing its job.",
    primaryCta: { label: "See how we think about this", href: "/our-approach" },
    secondaryCta: { label: "Talk through what is going on", href: "/talk-with-us" },
  },
  signalsIntro:
    "You may not be dealing with a crisis, but if any of this resonates, your environment is probably under more strain than it should be.",
  signals: [
    {
      slug: "clarity" as const,
      title: "We Do Not Have Clarity Into Our Technology",
      summary: "Leadership lacks a clear, current picture of the environment.",
      details:
        "Technology discussions feel abstract, planning depends on key people, and confidence depends on trust instead of visibility.",
      ctaLabel: "Explore this challenge",
      ctaHref: "/challenges?challenge=clarity",
    },
    {
      slug: "security-compliance-risk" as const,
      title: "Security and Compliance Risk",
      summary: "Security feels like checklists instead of a cohesive system.",
      details:
        "Tools exist, but confidence does not. Risk discussions rely on hope, and compliance feels episodic instead of steady.",
      ctaLabel: "See the risk pattern",
      ctaHref: "/challenges?challenge=security-compliance-risk",
    },
    {
      slug: "it-bottleneck" as const,
      title: "IT Is Slowing the Business Down",
      summary: "Simple changes take too long and momentum feels constrained.",
      details:
        "Systems technically function, but friction is everywhere. Teams workaround tools and improvements feel expensive.",
      ctaLabel: "Review this bottleneck",
      ctaHref: "/challenges?challenge=it-bottleneck",
    },
    {
      slug: "growth-outpaced-systems" as const,
      title: "Growth Has Outpaced Systems",
      summary: "Growth is succeeding, but the foundation is strained.",
      details:
        "Processes that once worked now feel brittle. Complexity climbs, and scaling requires disproportionate effort.",
      ctaLabel: "Assess growth strain",
      ctaHref: "/challenges?challenge=growth-outpaced-systems",
    },
    {
      slug: "outgrown-it-provider" as const,
      title: "We Have Outgrown Our IT Provider",
      summary: "Support is responsive, but the model no longer fits.",
      details:
        "Conversations stay tactical, planning is fragmented, and leadership needs guidance that evolves with the business.",
      ctaLabel: "Evaluate fit",
      ctaHref: "/challenges?challenge=outgrown-it-provider",
    },
  ],
  signalCtaCard: {
    title: "Need a fast read on where this fits?",
    summary: "Talk through your situation and we will help you identify the right challenge lens.",
    details:
      "No pressure, no generic pitch. Just a calm conversation to understand what is actually happening in your environment.",
    ctaLabel: "Talk with us",
    ctaHref: "/talk-with-us",
  },
  reframe: {
    headline: "The problem usually is not IT. It is the absence of a long-term system.",
    body: [
      "Technology environments evolve one decision at a time. Under pressure and limited context, complexity compounds and hidden fragility accumulates.",
      "Technology should be engineered like anything critical: intentionally, with structure, and with a plan for how it ages.",
    ],
  },
  principles: [
    {
      title: "Technology Is a Living System",
      description:
        "Every environment changes over time. If it is not actively guided, entropy takes over.",
    },
    {
      title: "Security Is About Resilience, Not Fear",
      description:
        "Real security reduces risk quietly and continuously without relying on constant panic.",
    },
    {
      title: "Stability Is the Goal",
      description:
        "The best environments are dependable, predictable, and boring in the best way.",
    },
    {
      title: "Clarity Changes Behavior",
      description:
        "When systems are well designed, decisions simplify and teams stop working around tools.",
    },
  ],
  workingWithUs: [
    {
      title: "We slow down before we speed up",
      description:
        "Before recommending anything, we focus on how your environment behaves, not just how it is documented.",
    },
    {
      title: "We bring structure to complexity",
      description:
        "You gain visibility into what exists, what matters, and where risk or inefficiency is accumulating.",
    },
    {
      title: "We design for durability",
      description:
        "Solutions are selected with their full lifecycle in mind, not only for immediate relief.",
    },
    {
      title: "We stay involved",
      description:
        "Technology does not stand still. Our role is ongoing stewardship and vigilance.",
    },
  ],
  outcomes: [
    "Fewer recurring issues and less emergency work",
    "Reduced operational and security risk over time",
    "Clearer, calmer technology decision-making",
    "Systems that support growth instead of resisting it",
  ],
  fit: {
    headline: "We are selective by design.",
    goodFit: [
      "See technology as critical to operations and risk",
      "Want long-term stability, not short-term fixes",
      "Value clarity, planning, and accountability",
      "Are willing to address root causes",
    ],
    notFit: [
      "Are primarily price-driven",
      "Want IT handled with minimal thought or oversight",
      "Prefer reactive support over intentional design",
    ],
  },
  nextSteps: {
    headline: "If you are thinking about technology differently, here are a few ways to continue.",
    ctas: [
      { label: "Talk through your situation", href: "/talk-with-us" },
      { label: "Request an assessment", href: "/talk-with-us#request-assessment" },
      { label: "Learn more about our approach", href: "/our-approach" },
    ],
  },
  quietClose:
    "You do not need more tools. You need an environment that can carry the weight of your business.",
}

export const challengesOrder: ChallengeSlug[] = [
  "clarity",
  "security-compliance-risk",
  "it-bottleneck",
  "growth-outpaced-systems",
  "outgrown-it-provider",
]

export const challengeBackgroundImages: Record<ChallengeSlug, string> = {
  clarity: "/challanges.jpg",
  "security-compliance-risk": "/challenges2.jpg",
  "it-bottleneck": "/challenges3.jpg",
  "growth-outpaced-systems": "/challenges4.jpg",
  "outgrown-it-provider": "/challenges5.jpg",
}

export function getChallengeHref(slug: ChallengeSlug) {
  return `/challenges?challenge=${slug}`
}

export const challengesContent: Record<ChallengeSlug, ChallengeContent> = {
  clarity: {
    slug: "clarity",
    title: "We Do Not Have Clarity Into Our Technology",
    entryHeadline: "Lack of clarity is often the first real warning sign.",
    entrySubheadline:
      "Not because technology is failing, but because no system exists to make it understandable at a leadership level.",
    looksLikeIntro:
      "When there is no clear picture of the technology environment, it rarely feels chaotic. It feels uncertain.",
    looksLikeSignals: [
      "Leaders rely on summaries instead of visibility",
      "Technology decisions feel harder than they should",
      "It is unclear where risk truly lives",
      "Planning depends heavily on a few key people",
      "Confidence exists, but it is based more on trust than understanding",
    ],
    causeHeadline: "Most organizations were never given a way to see technology as a system.",
    causeBody: [
      "Technology environments often grow faster than the frameworks used to understand them. Tools are added, responsibilities shift, and documentation ages, but no unifying model emerges.",
      "Leadership ends up seeing fragments: a security report here, a ticket summary there, an outdated diagram elsewhere.",
      "Without a lifecycle view, clarity fades even when the environment is actively managed.",
    ],
    whyMattersIntro: "When clarity is missing, decisions slow down and risk becomes abstract.",
    whyMattersBullets: [
      "Strategic planning lacks solid grounding",
      "Technology discussions feel opaque or overly technical",
      "Risk is hard to quantify or prioritize",
      "Confidence depends on individuals instead of systems",
    ],
    perspectiveHeadline: "Clarity is not a report. It is an outcome of intentional design.",
    perspectiveBody: [
      "At 79 Ratio, we build environments that are understandable at the leadership level, not only operable at the technical level.",
      "When systems, documentation, and decision-making are structured well, visibility becomes natural instead of forced.",
    ],
    whatChangesIntro: "When clarity is built into the environment:",
    whatChangesBullets: [
      "Decisions feel grounded instead of speculative",
      "Risk becomes visible and discussable",
      "Planning improves across technology, finance, and operations",
      "Confidence comes from understanding, not hope",
    ],
    shouldYouActIntro: "This challenge usually deserves attention if:",
    shouldYouActBullets: [
      "Leadership lacks a clear, current picture of the environment",
      "Technology discussions feel abstract or too technical",
      "Planning depends heavily on specific individuals",
      "Risk is discussed but not clearly visualized",
    ],
    nextStepsIntro: "If this resonates, here are a few ways to continue:",
    nextSteps: [
      {
        label: "Talk through what feels unclear",
        href: "/talk-with-us",
        description: "A calm conversation to determine where visibility gaps exist.",
      },
      {
        label: "Request a clarity assessment",
        href: "/talk-with-us#request-assessment",
        description: "A structured look at how understandable your environment really is.",
      },
      {
        label: "Learn our lifecycle approach",
        href: "/our-approach#lifecycle-management",
        description: "Explore how long-term visibility is designed, not improvised.",
      },
    ],
    close:
      "Clarity is not about knowing every detail. It is about knowing the right things at the right level with confidence.",
  },
  "security-compliance-risk": {
    slug: "security-compliance-risk",
    title: "Security and Compliance Risk",
    entryHeadline: "When security feels uncertain, risk is already present.",
    entrySubheadline:
      "Not because something has gone wrong, but because security has not been designed as a system.",
    looksLikeIntro:
      "Security and compliance risk rarely appears as one event. It usually appears as persistent unease.",
    looksLikeSignals: [
      "Security tools are in place, but confidence in posture is low",
      "Compliance feels reactive and documentation-heavy",
      "Alerts exist, but it is unclear which ones matter",
      "Decisions are made to check boxes instead of reducing real risk",
      "Leadership hopes nothing happens but does not feel prepared",
    ],
    causeHeadline: "Security problems are usually caused by fragmentation, not attackers alone.",
    causeBody: [
      "Most organizations accumulate controls one requirement, vendor, or incident at a time.",
      "Over time that creates overlap, unclear ownership, inconsistent policy, and blind spots between systems.",
      "Without a unified model, security becomes noisy, expensive, and fragile even with good tools.",
    ],
    whyMattersIntro: "Security and compliance risk does not just threaten data. It changes behavior.",
    whyMattersBullets: [
      "Leaders hesitate because they do not trust the environment",
      "Teams avoid change out of fear of unintended consequences",
      "Compliance becomes a recurring fire drill",
      "Risk becomes constant background pressure",
    ],
    perspectiveHeadline: "Security is not a product. It is a discipline.",
    perspectiveBody: [
      "We treat security and compliance as integrated parts of the technology lifecycle, not bolt-on tools.",
      "The goal is resilience, visibility, and informed decision-making so organizations can operate with confidence.",
    ],
    whatChangesIntro: "When security is approached as a system:",
    whatChangesBullets: [
      "Risk becomes visible and measurable",
      "Compliance stops feeling episodic",
      "Fewer alerts matter more",
      "Leadership confidence increases in regulated environments",
    ],
    shouldYouActIntro: "This usually deserves attention if:",
    shouldYouActBullets: [
      "Security tools exist but do not feel cohesive",
      "Compliance requirements feel stressful or disruptive",
      "Risk discussions rely on hope instead of clarity",
      "Leadership needs confidence, not constant reassurance",
    ],
    nextStepsIntro: "If this sounds familiar, here are a few ways to continue:",
    nextSteps: [
      {
        label: "Talk through your risk concerns",
        href: "/talk-with-us",
        description: "A calm conversation to determine whether meaningful exposure exists.",
      },
      {
        label: "Request a structured security assessment",
        href: "/talk-with-us#request-assessment",
        description: "A clear look at posture, gaps, and priorities.",
      },
      {
        label: "Learn how we integrate security",
        href: "/our-approach#security-as-business-function",
        description: "Understand how security is built into lifecycle management.",
      },
    ],
    close:
      "Security should not dominate attention, but it should never be unknown. Intentional risk management makes confidence the default.",
  },
  "it-bottleneck": {
    slug: "it-bottleneck",
    title: "IT Is Slowing the Business Down",
    entryHeadline: "When IT slows the business down, something fundamental is misaligned.",
    entrySubheadline:
      "Not because people are not working hard, but because systems were never designed to support how the business operates today.",
    looksLikeIntro: "When IT becomes a bottleneck, it usually looks like friction, not failure.",
    looksLikeSignals: [
      "Simple requests take longer than they should",
      "Teams build workarounds instead of relying on systems",
      "Technology decisions require more meetings than progress",
      "Changes feel risky, even when necessary",
      "IT stays busy while business momentum remains constrained",
    ],
    causeHeadline: "IT slows businesses down when systems evolve without intention.",
    causeBody: [
      "As organizations grow, technology often expands reactively: new tools for immediate problems, layered integrations under pressure, and process patches to keep moving.",
      "Over time, environments function but resist change. Dependencies multiply, knowledge silos form, and small improvements require disproportionate effort.",
      "The result is drag, not outright failure.",
    ],
    whyMattersIntro: "When IT slows the business down, the impact goes beyond technology.",
    whyMattersBullets: [
      "Opportunities take longer to act on",
      "Teams hesitate to improve processes",
      "Innovation becomes expensive and exhausting",
      "Technology starts quietly shaping what the business believes is possible",
    ],
    perspectiveHeadline: "Technology should accelerate the business, not constrain it.",
    perspectiveBody: [
      "We treat IT as an operational system, not a support function. Technology should align with how work gets done and how decisions are made.",
      "With structure and lifecycle thinking, change becomes easier and IT shifts from gatekeeper to enabler.",
    ],
    whatChangesIntro: "When IT is aligned with the business:",
    whatChangesBullets: [
      "Decisions move faster with less friction",
      "Teams trust systems instead of working around them",
      "Improvements require less effort and risk",
      "Leadership regains flexibility and confidence",
    ],
    shouldYouActIntro: "This challenge usually deserves attention if:",
    shouldYouActBullets: [
      "Requests and changes feel slower than they should",
      "Teams rely on manual workarounds",
      "IT effort does not translate into business momentum",
      "You want technology to enable strategy, not limit it",
    ],
    nextStepsIntro: "If this resonates, here are a few ways to continue:",
    nextSteps: [
      {
        label: "Talk through what is slowing things down",
        href: "/talk-with-us",
        description: "Identify where friction is actually coming from.",
      },
      {
        label: "Request an operational assessment",
        href: "/talk-with-us#request-assessment",
        description: "A structured look at how systems, processes, and tools interact.",
      },
      {
        label: "Learn how we align IT and operations",
        href: "/our-approach#working-with-us",
        description: "See how lifecycle thinking restores momentum.",
      },
    ],
    close:
      "Technology should make progress easier, not require extra effort just to move forward. When systems align, momentum becomes natural.",
  },
  "growth-outpaced-systems": {
    slug: "growth-outpaced-systems",
    title: "Growth Has Outpaced Systems",
    entryHeadline: "When growth outpaces systems, pressure shows up everywhere.",
    entrySubheadline:
      "Not because growth is a problem, but because the systems supporting it were never designed to scale.",
    looksLikeIntro:
      "When systems lag behind growth, symptoms start subtle and become increasingly familiar.",
    looksLikeSignals: [
      "Processes that worked before now feel strained",
      "Teams rely on manual steps and exceptions",
      "Technology feels maxed out even if nothing is broken",
      "Changes require coordination across too many people",
      "Growth creates stress instead of momentum",
    ],
    causeHeadline: "Growth exposes the limits of systems built for a smaller organization.",
    causeBody: [
      "Most systems are designed for today, not for where the business will be in two or three years.",
      "As headcount, data, and complexity rise, earlier design decisions hit their limits.",
      "What once felt flexible becomes rigid. Knowledge bottlenecks emerge. Scaling effort spikes.",
    ],
    whyMattersIntro: "When systems cannot keep up with growth, the cost is not just technical.",
    whyMattersBullets: [
      "Teams spend more time coordinating than executing",
      "Leadership attention shifts to operational friction",
      "Risk increases as workarounds multiply",
      "Scaling becomes exhausting instead of energizing",
    ],
    perspectiveHeadline: "Growth does not fail. Systems fail to adapt.",
    perspectiveBody: [
      "We design environments with future states in mind, anticipating how systems behave as complexity increases.",
      "Lifecycle management ensures infrastructure, security, and process evolve with the business.",
    ],
    whatChangesIntro: "When systems are designed to scale:",
    whatChangesBullets: [
      "Growth feels supported instead of stressful",
      "Processes stay clear as complexity increases",
      "Technology adapts without constant reinvention",
      "Leadership can focus on direction, not friction",
    ],
    shouldYouActIntro: "This challenge usually deserves attention if:",
    shouldYouActBullets: [
      "Growth accelerated in recent years",
      "Systems feel increasingly strained or brittle",
      "Teams rely on exceptions to keep moving",
      "You want growth to feel durable, not delicate",
    ],
    nextStepsIntro: "If this sounds familiar, here are a few ways to continue:",
    nextSteps: [
      {
        label: "Talk through growth pressure",
        href: "/talk-with-us",
        description: "Identify where system strain is building.",
      },
      {
        label: "Request a scalability assessment",
        href: "/talk-with-us#request-assessment",
        description: "A structured look at how systems will behave as complexity increases.",
      },
      {
        label: "Learn how we design for growth",
        href: "/our-approach#lifecycle-management",
        description: "See how lifecycle design keeps progress sustainable.",
      },
    ],
    close:
      "Growth should create opportunity, not expose hidden limits. When systems scale intentionally, progress stays sustainable.",
  },
  "outgrown-it-provider": {
    slug: "outgrown-it-provider",
    title: "We Have Outgrown Our IT Provider",
    entryHeadline: "Outgrowing your IT provider does not mean they failed.",
    entrySubheadline:
      "It usually means the business changed and the support model did not.",
    looksLikeIntro:
      "Outgrowing an IT provider rarely appears as one breaking point. It appears as misalignment.",
    looksLikeSignals: [
      "Support is responsive but mostly reactive",
      "Conversations focus on tickets, not direction",
      "Issues get fixed but decisions are not guided",
      "Advice feels tactical, not strategic",
      "The relationship feels stuck at a stage you already passed",
    ],
    causeHeadline: "Most IT providers are built for stability, not evolution.",
    causeBody: [
      "Many relationships begin with reliability and responsiveness, and that model can work well for years.",
      "As complexity, risk, and regulatory pressure rise, gaps appear around planning and lifecycle management.",
      "This is usually a scaling mismatch, not a lack of effort or care.",
    ],
    whyMattersIntro: "When provider fit slips, the impact is subtle but real.",
    whyMattersBullets: [
      "Leadership makes technology decisions without enough context",
      "Long-term risk accumulates without visibility",
      "Planning fragments across vendors and tools",
      "Confidence erodes even when support quality is acceptable",
    ],
    perspectiveHeadline: "IT support should grow up when the business does.",
    perspectiveBody: [
      "We act as technology stewards, not just service providers, aligning systems with where the organization is headed.",
      "The goal is not replacing a provider by default. It is replacing a model that no longer fits.",
    ],
    whatChangesIntro: "When the technology partnership is aligned:",
    whatChangesBullets: [
      "Conversations shift from tickets to strategy",
      "Risk and lifecycle decisions become intentional",
      "Planning becomes proactive instead of reactive",
      "Leadership confidence grows as systems mature",
    ],
    shouldYouActIntro: "This challenge usually deserves attention if:",
    shouldYouActBullets: [
      "Your business grew in size, risk, or complexity",
      "IT conversations feel operational rather than strategic",
      "Planning happens outside the IT relationship",
      "You need a partner model that can scale with you",
    ],
    nextStepsIntro: "If this resonates, here are a few ways to continue:",
    nextSteps: [
      {
        label: "Talk through whether the model still fits",
        href: "/talk-with-us",
        description: "Assess alignment without assigning blame.",
      },
      {
        label: "Request a lifecycle review",
        href: "/talk-with-us#request-assessment",
        description: "A structured look at whether your approach supports where you are headed.",
      },
      {
        label: "Learn how we partner with growing organizations",
        href: "/our-approach#working-with-us",
        description: "See how stewardship scales with business complexity.",
      },
    ],
    close:
      "Outgrowing an IT provider is often a sign of progress. When the partnership evolves, technology can mature with the business.",
  },
}

export const challengesIntro = {
  headline: "Challenges We Solve",
  subheadline:
    "Most organizations are not blocked by one broken tool. They are carrying system-level strain that built up over time.",
  body:
    "These challenge pages help you identify what pattern you are dealing with, why it happens, and what changes when it is addressed at the system level.",
}

export const ourApproachContent: SectionBlock[] = [
  {
    id: "entry",
    title: "Entry",
    heading: "Our approach is designed for stability, not speed.",
    intro:
      "Technology works best when it is treated as a system: intentionally designed, continuously managed, and allowed to evolve without chaos.",
  },
  {
    id: "why-most-approaches-fall-short",
    title: "Why Most Approaches Fall Short",
    body: [
      "Most technology problems do not come from one bad decision. They come from isolated decisions made over time.",
      "Individually, each choice may be reasonable. Collectively, they create environments that are hard to understand, risky to change, and expensive to maintain.",
      "Our approach brings structure to what already exists instead of forcing unnecessary replacement.",
    ],
  },
  {
    id: "how-we-think",
    title: "How We Think About Technology",
    heading: "Technology is a living system.",
    body: [
      "People change, businesses grow, threats evolve, and tools age. Without an intentional model, entropy takes over.",
      "We look for structure over symptoms, interactions over isolated components, and behavior under future pressure.",
    ],
    bullets: [
      "Look for structure, not symptoms",
      "Focus on interactions, not just components",
      "Design for future pressure, not just present comfort",
    ],
  },
  {
    id: "lifecycle-management",
    title: "Lifecycle Management",
    heading: "Lifecycle management is the foundation.",
    intro: "We manage technology across its full lifecycle, not as disconnected projects.",
    bullets: [
      "Design: intentional choices for current and future needs",
      "Implementation: systems that integrate cleanly and predictably",
      "Operation: stability, visibility, and security in daily practice",
      "Evolution: adaptation as business context changes",
      "Retirement: removing what no longer serves the organization",
    ],
  },
  {
    id: "security-as-business-function",
    title: "Security as a Business Function",
    heading: "Security works best when it is quiet.",
    body: [
      "We do not treat security as a separate layer or an endless alarm stream. It is integrated into the lifecycle of the environment itself.",
      "The goal is resilience, clarity, and confidence, not performative activity.",
    ],
    bullets: [
      "Reduce risk through design, not only detection",
      "Align controls with real business exposure",
      "Make compliance sustainable, not episodic",
      "Keep risk visible at the leadership level",
    ],
  },
  {
    id: "working-with-us",
    title: "What Working With Us Looks Like",
    heading: "What to expect when you engage with us.",
    steps: [
      {
        title: "We start with understanding",
        description:
          "Before recommending anything, we learn how your environment actually behaves, not just how it is described.",
      },
      {
        title: "We bring structure and visibility",
        description:
          "We clarify what exists, how systems interact, where risk accumulates, and what truly matters.",
      },
      {
        title: "We design for durability",
        description:
          "Recommendations are built for long-term stability, not short-term convenience.",
      },
      {
        title: "We stay involved",
        description:
          "Stewardship continues after implementation so systems stay aligned as the business evolves.",
      },
    ],
  },
  {
    id: "what-this-enables",
    title: "What This Enables",
    bullets: [
      "Decisions become simpler and more grounded",
      "Risk is understood instead of feared",
      "Change feels controlled, not disruptive",
      "Growth becomes sustainable",
      "Technology fades into the background",
    ],
  },
  {
    id: "who-this-approach-is-for",
    title: "Who This Approach Is For",
    bullets: [
      "Technology is critical to operations and risk",
      "Long-term stability is valued over quick fixes",
      "Leadership wants clarity",
      "Root causes should be addressed, not just symptoms",
    ],
    note:
      "This is not designed for organizations seeking the lowest-cost provider, purely reactive support, or short-term fixes without planning.",
  },
  {
    id: "next-steps",
    title: "Next Steps",
    ctas: [
      {
        label: "Talk through your situation",
        href: "/talk-with-us",
        description: "A calm conversation to understand what is really happening.",
      },
      {
        label: "Request a lifecycle assessment",
        href: "/talk-with-us#request-assessment",
        description: "A structured look at stability, risk, and alignment.",
      },
      {
        label: "Explore challenges we solve",
        href: "/challenges",
        description: "Connect this approach to real-world patterns.",
      },
    ],
  },
  {
    id: "close",
    title: "Close",
    body: [
      "Technology does not need to be exciting. It needs to be dependable.",
      "When systems are designed to endure, everything else gets easier.",
    ],
  },
]

export const whoWeAreForContent: SectionBlock[] = [
  {
    id: "entry",
    title: "Entry",
    heading: "We are not the right partner for every organization.",
    intro:
      "That is intentional. Our work is most effective when expectations, mindset, and goals align from the start.",
  },
  {
    id: "why-fit-matters",
    title: "Why Fit Matters",
    body: [
      "Technology partnerships fail less from competence and more from misalignment around planning, risk, ownership, and long-term thinking.",
      "This page helps you quickly determine whether our approach is likely to fit your organization.",
    ],
  },
  {
    id: "who-we-are-for",
    title: "Who We Are For",
    heading: "79 Ratio works best with organizations that:",
    bullets: [
      "See technology as critical to operations, risk, and continuity",
      "Value stability, clarity, and long-term thinking",
      "Want fewer surprises, not just faster fixes",
      "Prefer intentional systems over reactive patchwork",
      "Address root causes instead of managing symptoms",
      "Want technology to support leadership, not distract it",
    ],
  },
  {
    id: "what-these-organizations-care-about",
    title: "What These Organizations Typically Care About",
    bullets: [
      "Reducing operational and security risk",
      "Making technology decisions with confidence",
      "Supporting growth without increasing fragility",
      "Creating environments understandable at the leadership level",
      "Ensuring technology evolves without constant disruption",
    ],
  },
  {
    id: "not-a-fit",
    title: "Who We Are Probably Not a Fit For",
    heading: "We may not be the right fit if:",
    bullets: [
      "Cost is the primary decision factor",
      "You want purely reactive IT support",
      "Technology planning feels optional",
      "You want quick fixes without long-term consideration",
      "You prefer minimal visibility into your environment",
    ],
    note: "This is not a value judgment. It is an alignment decision.",
  },
  {
    id: "growth-and-transitions",
    title: "A Note on Growth and Transitions",
    bullets: [
      "Growth increased complexity",
      "Risk exposure evolved",
      "Regulatory pressure increased",
      "Leadership expectations around technology shifted",
      "Existing support models no longer feel sufficient",
    ],
    note: "If you are in one of these transitions, that is often a strong signal, not a problem.",
  },
  {
    id: "how-we-engage",
    title: "How We Typically Engage",
    bullets: [
      "We work as long-term technology stewards",
      "Planning and lifecycle management are ongoing",
      "Security and risk are treated as business concerns",
      "Decisions are made with context and clarity",
      "Technology gradually fades into the background",
    ],
    note: "The goal is not dependence. The goal is confidence.",
  },
  {
    id: "if-you-are-unsure",
    title: "If You Are Unsure",
    body: [
      "Many clients start with a simple conversation to determine alignment before making any commitment.",
    ],
  },
  {
    id: "next-steps",
    title: "Next Steps",
    ctas: [
      {
        label: "Talk through your situation",
        href: "/talk-with-us",
        description: "Explore fit and context in a calm conversation.",
      },
      {
        label: "Explore the challenges we solve",
        href: "/challenges",
        description: "See how this approach applies in real situations.",
      },
      {
        label: "Request a structured assessment",
        href: "/talk-with-us#request-assessment",
        description: "Look more deeply at stability, risk, and alignment.",
      },
    ],
  },
  {
    id: "close",
    title: "Close",
    body: [
      "The right technology partner does not only solve problems. They fit how your organization thinks and operates.",
      "When alignment exists, everything works better.",
    ],
  },
]

export const talkWithUsContent: SectionBlock[] = [
  {
    id: "entry",
    title: "Entry",
    heading: "A conversation is often the right first step.",
    intro:
      "Not a sales pitch. Not a commitment. Just a chance to talk through what is going on and see whether alignment exists.",
  },
  {
    id: "what-it-is-and-is-not",
    title: "What This Conversation Is and Is Not",
    body: [
      "Reaching out does not mean you decided to change providers or start a project.",
      "It usually means you are noticing patterns, asking questions, or wanting clarity before action.",
    ],
    bullets: [
      "Calm and exploratory",
      "Focused on understanding, not selling",
      "Grounded in your context, not generic advice",
    ],
    note:
      "This is not a scripted sales call, pressure-driven consultation, or a commitment to move forward.",
  },
  {
    id: "what-we-discuss",
    title: "What We Usually Talk About",
    bullets: [
      "What prompted you to look more closely at technology",
      "Where things feel uncertain, fragile, or heavier than they should",
      "How IT, security, and risk decisions are currently made",
      "What leadership cares most about right now",
      "Whether clarity, structure, or lifecycle thinking would help",
    ],
    note: "No preparation required. Just your perspective.",
  },
  {
    id: "how-it-goes",
    title: "How This Usually Goes",
    steps: [
      {
        title: "Step 1 - We listen",
        description: "You share what has been happening and what prompted the conversation.",
      },
      {
        title: "Step 2 - We ask questions",
        description: "We ask to understand how the environment actually behaves.",
      },
      {
        title: "Step 3 - We reflect back",
        description: "We summarize what we are hearing. This often creates immediate clarity.",
      },
      {
        title: "Step 4 - We discuss fit honestly",
        description: "Sometimes continuing makes sense, and sometimes another path does.",
      },
    ],
  },
  {
    id: "who-this-helps",
    title: "Who This Conversation Helps Most",
    bullets: [
      "Something feels off but is hard to pinpoint",
      "Technology discussions feel heavier than they should",
      "Risk, growth, or complexity increased",
      "Existing support no longer feels sufficient",
      "You want clarity before deciding",
    ],
  },
  {
    id: "continuing-options",
    title: "Options for Continuing",
    bullets: [
      "A structured assessment",
      "A focused look at clarity, risk, or lifecycle alignment",
      "Additional conversations with key stakeholders",
    ],
    note: "Nothing moves forward without agreement and intention.",
  },
  {
    id: "contact-options",
    title: "How To Reach Us",
    ctas: [
      {
        label: "Talk through your situation",
        href: "/talk-with-us#conversation-options",
        description: "A low-pressure conversation focused on understanding and alignment.",
      },
      {
        label: "Request an assessment",
        href: "/talk-with-us#request-assessment",
        description: "For organizations ready for a structured look at the environment.",
      },
      {
        label: "Ask a quick question",
        href: "/talk-with-us#quick-question",
        description: "A simple way to start when you are not sure where to begin.",
      },
    ],
  },
  {
    id: "final-note",
    title: "A Final Note",
    body: [
      "You do not need to be in crisis to reach out.",
      "You do not need to know the solution before starting the conversation.",
      "Sometimes the most valuable outcome is simply clarity.",
    ],
  },
  {
    id: "close",
    title: "Close",
    body: [
      "Good technology conversations feel steady, not urgent.",
      "If you are ready to talk, we are here.",
    ],
  },
]

export const first90DaysContent: SectionBlock[] = [
  {
    id: "entry",
    title: "Entry",
    heading: "The first 90 days are about clarity, not disruption.",
    intro:
      "Before meaningful improvement happens, the environment needs to be understood, not rushed.",
  },
  {
    id: "why-it-matters",
    title: "Why the First 90 Days Matter",
    body: [
      "Many technology relationships struggle early because expectations are unclear.",
      "Both sides feel pressure to do something quickly. We intentionally take a different path.",
      "The first 90 days establish understanding, structure, and trust so later changes are intentional.",
    ],
  },
  {
    id: "phase-1",
    title: "Phase 1: Orientation and Understanding",
    timeline: "Weeks 1-4",
    intro: "Focus: seeing the environment as it actually exists today.",
    bullets: [
      "How systems are currently structured",
      "How technology supports or constrains operations",
      "Where risk, fragility, or inefficiency may be accumulating",
      "How decisions have historically been made",
      "What matters most to leadership",
    ],
    note: "What clients notice: fewer assumptions, better questions, and clearer visibility.",
  },
  {
    id: "phase-2",
    title: "Phase 2: Structure and Visibility",
    timeline: "Weeks 5-8",
    intro: "Focus: bringing clarity to complexity.",
    bullets: [
      "Clarify system relationships and dependencies",
      "Establish baseline documentation and visibility",
      "Identify priority risks and constraints",
      "Align security and operations with business reality",
    ],
    note: "What clients notice: fewer unknowns, grounded conversations, and lower anxiety.",
  },
  {
    id: "phase-3",
    title: "Phase 3: Direction and Prioritization",
    timeline: "Weeks 9-12",
    intro: "Focus: deciding what actually matters and what does not.",
    bullets: [
      "Identify what should be addressed first",
      "Separate urgent from important",
      "Set a realistic, sustainable direction",
      "Align technology priorities with business goals",
    ],
    note: "What clients notice: easier decisions, fewer competing priorities, and higher confidence.",
  },
  {
    id: "what-we-do-not-do",
    title: "What We Do Not Do in the First 90 Days",
    bullets: [
      "Rush into large changes without context",
      "Replace systems unnecessarily",
      "Overwhelm teams with recommendations",
      "Introduce complexity for the sake of activity",
      "Promise outcomes without understanding constraints",
    ],
  },
  {
    id: "what-this-sets-up",
    title: "What This Sets Up Long-Term",
    bullets: [
      "A clearer understanding of the technology environment",
      "Better visibility into risk and dependencies",
      "A shared language for technology decisions",
      "A sense of direction instead of constant reaction",
      "A foundation for sustainable improvement",
    ],
  },
  {
    id: "who-this-works-for",
    title: "Who This Approach Works Best For",
    bullets: [
      "Organizations that want clarity before change",
      "Teams that prefer thoughtful progress over rapid disruption",
      "Leadership groups that value understanding",
      "Organizations willing to invest in long-term stability",
    ],
    note:
      "This model is not designed for organizations seeking immediate overhaul without planning.",
  },
  {
    id: "next-steps",
    title: "Next Steps",
    ctas: [
      {
        label: "Talk through what you are hoping to change",
        href: "/talk-with-us",
        description: "A calm conversation to set expectations and fit.",
      },
      {
        label: "Request an initial assessment",
        href: "/talk-with-us#request-assessment",
        description: "A structured starting point for visibility and understanding.",
      },
      {
        label: "Explore our broader approach",
        href: "/our-approach",
        description: "See how the first 90 days fit long-term stewardship.",
      },
    ],
  },
  {
    id: "close",
    title: "Close",
    body: [
      "The first 90 days should feel grounding, not chaotic.",
      "When understanding comes first, everything that follows gets easier.",
    ],
  },
]

export const teamPageContent: SectionBlock[] = [
  {
    id: "entry",
    title: "Entry",
    heading: "Stewardship requires vigilance.",
    intro:
      "Technology evolves constantly. Our responsibility is to evolve with it deliberately and continuously.",
  },
  {
    id: "continuous-development",
    title: "Continuous Development",
    body: [
      "We treat our work as a craft with ongoing development and accountability.",
    ],
    bullets: [
      "Industry certifications and renewals",
      "Security and compliance training",
      "Platform specialization",
      "Emerging technology evaluation",
      "Structured internal knowledge sharing",
    ],
    note:
      "We do not rely on what we knew five years ago, or even last year. Our standards require continuous development.",
  },
  {
    id: "studying-what-is-next",
    title: "Studying What Is Next",
    body: [
      "New tools and platforms appear constantly, but not all of them matter.",
      "We evaluate what improves stability, reduces risk, and avoids unnecessary complexity.",
    ],
    bullets: [
      "What improves stability?",
      "What reduces risk?",
      "What adds unnecessary complexity?",
      "What is signal versus noise?",
    ],
    note: "Adoption follows understanding, not hype.",
  },
  {
    id: "why-this-matters",
    title: "Why This Matters to Clients",
    bullets: [
      "Security guidance stays current",
      "Risk conversations stay grounded in reality",
      "Technology decisions reflect modern standards",
      "Clients hear about meaningful shifts early",
      "Evolution feels intentional instead of reactive",
    ],
    note: "Stability does not mean standing still. It means adapting intelligently.",
  },
  {
    id: "our-standard",
    title: "Our Standard",
    bullets: ["Stay curious", "Stay disciplined", "Stay current", "Stay accountable"],
    note: "The environments we manage depend on it.",
  },
  {
    id: "close",
    title: "Close",
    body: ["Technology changes. Our commitment to understanding it does not."],
  },
]

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Challenges We Solve", href: "/challenges" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Who We Are For", href: "/who-we-are-for" },
  { label: "Insights", href: "/blog" },
  { label: "Talk With Us", href: "/talk-with-us" },
] as const

export const challengesDropdown: NavDropdown = {
  label: "Challenges We Solve",
  href: "/challenges",
  items: challengesOrder.map((slug) => ({
    label: challengesContent[slug].title,
    href: getChallengeHref(slug),
    description: challengesContent[slug].entrySubheadline,
  })),
}

export const approachDropdown: NavDropdown = {
  label: "Our Approach",
  href: "/our-approach",
  items: [
    { label: "How We Think About Technology", href: "/our-approach#how-we-think" },
    { label: "Lifecycle Management Model", href: "/our-approach#lifecycle-management" },
    {
      label: "Security as a Business Function",
      href: "/our-approach#security-as-business-function",
    },
    { label: "What Working With Us Looks Like", href: "/our-approach#working-with-us" },
    { label: "The First 90 Days", href: "/first-90-days" },
  ],
}

export const insightsDropdown: NavDropdown = {
  label: "Insights",
  href: "/blog",
  items: [
    { label: "Articles", href: "/blog", description: "Thoughtful analysis and practical technology insights." },
    { label: "Guides", href: "/resources", description: "Structured resources you can apply with your team." },
    {
      label: "Short Perspectives",
      href: "/knowledge-base",
      description: "Focused operational observations and quick references.",
    },
  ],
}

export const footerSecondaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Challenges We Solve", href: "/challenges" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Who We Are For", href: "/who-we-are-for" },
  { label: "Insights", href: "/blog" },
  { label: "Talk With Us", href: "/talk-with-us" },
]

export const footerCompanyLinks: NavItem[] = [
  { label: "The First 90 Days", href: "/first-90-days" },
  { label: "Our Team", href: "/team" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]
