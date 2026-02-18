export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  author: string
  date: string
  category: string
  readTime: string
  featured: boolean
  contentHtml: string
}

export type BlogCategory = {
  label: string
  slug: string
  description: string
}

export const blogCategories: BlogCategory[] = [
  {
    label: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "This is about keeping your business safe online. We cover simple steps to prevent hacks, scams, and data theft.",
  },
  {
    label: "Healthcare technology",
    slug: "healthcare-technology",
    description:
      "This is about helping healthcare teams protect patient data and run smoothly. We explain compliance in plain English, without jargon.",
  },
  {
    label: "Cloud Computing",
    slug: "cloud-computing",
    description:
      "This is about moving your tools and files to the cloud so your team can work from anywhere. We show what to move, when to move, and how to avoid downtime.",
  },
  {
    label: "Manufacturing technology",
    slug: "manufacturing-technology",
    description:
      "This is about keeping production running with fewer surprises. We share ways to reduce outages, connect systems, and fix issues before they stop work.",
  },
  {
    label: "Nonprofit technology",
    slug: "nonprofit-technology",
    description:
      "This is about helping nonprofit teams do more with limited budgets. We focus on practical tools that save time, reduce stress, and support your mission.",
  },
  {
    label: "Data Protection",
    slug: "data-protection",
    description:
      "This is about making sure your important data is never one mistake away from being lost. We explain backups, recovery, and what to do when something breaks.",
  },
]

export const blogPosts: BlogPost[] = [
  {
    title: "5 Essential Cybersecurity Practices for Law Firms in 2024",
    slug: "cybersecurity-practices-law-firms-2024",
    excerpt:
      "Learn the critical security measures every law firm needs to implement to protect client data and maintain Bar Association compliance.",
    author: "Michael Rodriguez",
    date: "March 15, 2024",
    category: "Cybersecurity",
    readTime: "8 min read",
    featured: true,
    contentHtml: `
      <p>In today's digital landscape, law firms face unprecedented cybersecurity challenges. With sensitive client data and confidential legal documents at stake, implementing robust security measures isn't just recommended—it's essential for maintaining client trust and regulatory compliance.</p>
      <h2>1. Implement Multi-Factor Authentication (MFA)</h2>
      <p>Multi-factor authentication adds an extra layer of security beyond passwords. For law firms handling sensitive client information, MFA should be mandatory for all systems containing confidential data.</p>
      <h3>Key Benefits:</h3>
      <ul>
        <li>Reduces risk of unauthorized access by 99.9%</li>
        <li>Meets Bar Association technology competence requirements</li>
        <li>Protects against password-based attacks</li>
      </ul>
      <h2>2. Regular Security Training for Staff</h2>
      <p>Human error remains the leading cause of security breaches. Regular training ensures your team can identify and respond to potential threats effectively.</p>
      <h2>3. Encrypted Communication Channels</h2>
      <p>All client communications should use encrypted channels to maintain attorney-client privilege and protect sensitive information from interception.</p>
      <h2>4. Comprehensive Backup and Recovery Plans</h2>
      <p>Ransomware attacks specifically target law firms. Having secure, tested backups ensures business continuity and protects against data loss.</p>
      <h2>5. Regular Security Assessments</h2>
      <p>Quarterly security assessments help identify vulnerabilities before they can be exploited by malicious actors.</p>
      <h2>Conclusion</h2>
      <p>Implementing these cybersecurity practices isn't just about protecting data—it's about maintaining the trust that forms the foundation of the attorney-client relationship.</p>
    `,
  },
  {
    title: "HIPAA Compliance: A Complete Guide for Healthcare Providers",
    slug: "hipaa-compliance-guide-healthcare-providers",
    excerpt:
      "Everything healthcare organizations need to know about HIPAA compliance, from technical safeguards to staff training.",
    author: "Sarah Chen",
    date: "March 10, 2024",
    category: "Healthcare technology",
    readTime: "12 min read",
    featured: true,
    contentHtml: `
      <p>HIPAA compliance is non-negotiable for healthcare providers handling protected health information. Beyond avoiding penalties, a strong compliance program builds patient trust and ensures safer care delivery.</p>
      <h2>Administrative Safeguards</h2>
      <p>Define clear policies for workforce training, vendor management, and incident response. Regular risk assessments help surface process gaps before auditors do.</p>
      <h2>Technical Safeguards</h2>
      <p>Encryption at rest and in transit, role-based access controls, and detailed audit logs form the backbone of HIPAA-aligned infrastructure.</p>
      <h2>Physical Safeguards</h2>
      <p>Secure facilities, managed device inventories, and visitor access controls prevent unauthorized entry to systems that store PHI.</p>
      <p>Document everything—auditors care as much about proof as they do about process.</p>
    `,
  },
  {
    title: "Cloud Migration Strategies for Small Businesses",
    slug: "cloud-migration-strategies-small-businesses",
    excerpt:
      "A step-by-step approach to migrating your business to the cloud while minimizing downtime and maximizing benefits.",
    author: "James Wilson",
    date: "March 5, 2024",
    category: "Cloud Computing",
    readTime: "10 min read",
    featured: false,
    contentHtml: `
      <p>Cloud migrations fail when they copy on-prem habits rather than rethink them. A phased plan protects day-to-day operations while unlocking scalability.</p>
      <h2>Assess Applications</h2>
      <p>Catalog workloads, performance requirements, and compliance constraints. Decide which applications are ready for lift-and-shift and which need refactoring.</p>
      <h2>Plan Cutover Windows</h2>
      <p>Create rollback checkpoints and treat the migration like any other change-management effort with clear owners.</p>
      <h2>Optimize After Landing</h2>
      <p>Right-size instances, enable autoscaling, and apply cloud-native security controls once workloads are stable.</p>
    `,
  },
  {
    title: "The True Cost of Technology Downtime for Manufacturing Companies",
    slug: "cost-it-downtime-manufacturing-companies",
    excerpt:
      "Understanding the financial impact of system failures and how proactive monitoring can prevent costly disruptions.",
    author: "David Thompson",
    date: "February 28, 2024",
    category: "Manufacturing technology",
    readTime: "6 min read",
    featured: false,
    contentHtml: `
      <p>Downtime on the factory floor has a multiplier effect—lost production, idle labor, and missed delivery windows compound quickly.</p>
      <h2>Quantify the Impact</h2>
      <p>Track mean time to repair (MTTR), mean time between failures (MTBF), and hourly revenue impact for each line.</p>
      <h2>Predictive Monitoring</h2>
      <p>Sensor data combined with AI-based monitoring spots anomalies before they halt production.</p>
      <h2>Playbooks</h2>
      <p>Document escalation paths that include both technology and operations, ensuring issues are quarantined before spreading.</p>
    `,
  },
  {
    title: "Nonprofit Technology: Maximizing Impact with Limited Budgets",
    slug: "nonprofit-technology-maximizing-impact-limited-budgets",
    excerpt:
      "Cost-effective technology solutions that help nonprofits achieve their mission while staying within budget constraints.",
    author: "Lisa Martinez",
    date: "February 22, 2024",
    category: "Nonprofit technology",
    readTime: "9 min read",
    featured: false,
    contentHtml: `
      <p>Nonprofits can modernize without overspending by leaning on grants, donated licenses, and shared services.</p>
      <h2>Prioritize Impact</h2>
      <p>Score technology requests by mission alignment and staff reach to ensure every dollar advances outcomes.</p>
      <h2>Leverage Cloud Donations</h2>
      <p>Programs from Microsoft, Google, and AWS reduce licensing costs dramatically when configured correctly.</p>
      <h2>Outsource the Mundane</h2>
      <p>Managed services free in-house teams to focus on fundraising tech, volunteer engagement, and analytics.</p>
    `,
  },
  {
    title: "Backup and Disaster Recovery: Your Business Continuity Lifeline",
    slug: "backup-disaster-recovery-business-continuity",
    excerpt:
      "Why every business needs a comprehensive backup and disaster recovery plan, and how to implement one effectively.",
    author: "Amanda Foster",
    date: "February 15, 2024",
    category: "Data Protection",
    readTime: "7 min read",
    featured: false,
    contentHtml: `
      <p>Modern backup strategies assume failure. The question isn't if data loss will happen, but how quickly you can recover without paying a ransom.</p>
      <h2>Follow the 3-2-1 Rule</h2>
      <p>Maintain three copies of data on two media types with one copy off-site and immutable.</p>
      <h2>Test Restores Quarterly</h2>
      <p>A backup you cannot restore is a false sense of security. Automate restore drills and document results.</p>
      <h2>Integrate with Incident Response</h2>
      <p>Tie backup alerts into your SOC workflows so ransomware attempts trigger both security and recovery actions.</p>
    `,
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((category) => category.slug === slug)
}

export function getCategorySlug(categoryLabel: string) {
  const category = blogCategories.find((item) => item.label === categoryLabel)
  if (category) {
    return category.slug
  }
  return categoryLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export function getPostsByCategorySlug(slug: string) {
  const category = getCategoryBySlug(slug)
  if (!category) {
    return []
  }
  return blogPosts.filter((post) => post.category === category.label)
}

export function getAllBlogCategorySlugs() {
  return blogCategories.map((category) => category.slug)
}
