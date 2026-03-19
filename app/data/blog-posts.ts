export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  category: string;
  publishedDate: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "introducing-cloud-nexus-2-0",
    title: "Introducing Cloud Nexus 2.0",
    excerpt: "We're excited to announce the release of Cloud Nexus 2.0, featuring improved performance, new integrations, and enhanced security.",
    content: `We're thrilled to announce the launch of Cloud Nexus 2.0, the biggest update to our platform since we started. This release represents months of work from our engineering team and incorporates feedback from thousands of developers.

## What's New

Cloud Nexus 2.0 brings significant improvements across the board. Performance is up to 3x faster for most operations, we've added support for 15 new cloud providers, and security has been strengthened with advanced encryption and compliance features.

### Performance Improvements

Our new architecture reduces deployment time by up to 70%. We've completely rewritten our core engine to handle larger workloads more efficiently.

### New Integrations

We've partnered with leading cloud providers to bring you seamless integrations with AWS, Google Cloud, Azure, and more. Deploy your infrastructure anywhere with just a few clicks.

### Enhanced Security

Security is our top priority. Version 2.0 includes end-to-end encryption, SOC 2 Type II compliance, and advanced access controls to keep your data safe.

## Getting Started

Upgrading to Cloud Nexus 2.0 is easy. Existing users will be automatically migrated over the next few weeks. New users can sign up today and start deploying immediately.

We're excited to see what you build with Cloud Nexus 2.0!`,
    author: {
      name: "Sarah Chen",
      role: "Co-founder & CEO",
      image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwd29tYW58ZW58MXx8fHwxNzczNzMxMzcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    category: "Product",
    publishedDate: "2026-03-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1685120982762-39d91ed820e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "how-we-built-our-infrastructure",
    title: "How we built our infrastructure to handle 10M+ requests per day",
    excerpt: "A deep dive into the architecture and engineering decisions that power Cloud Nexus at scale.",
    content: `Building infrastructure that can handle millions of requests daily requires careful planning and the right technology choices. Here's how we did it.

## The Challenge

When we started Cloud Nexus, we knew we needed to build for scale from day one. Our goal was to create a platform that could handle enterprise workloads while maintaining sub-100ms response times.

### Architecture Overview

Our system is built on a microservices architecture running on Kubernetes. Each service is independently scalable and can be deployed without affecting others.

### Database Strategy

We use PostgreSQL for transactional data and Redis for caching. This combination gives us the reliability of a traditional database with the performance of in-memory caching.

### Auto-scaling

Our infrastructure automatically scales based on demand. During peak hours, we can spin up additional containers in seconds to handle increased load.

## Key Learnings

Building at scale taught us many lessons. Here are the most important ones:

1. **Monitor everything** - You can't improve what you don't measure
2. **Design for failure** - Systems will fail, plan for it
3. **Keep it simple** - Complex systems are harder to debug and maintain

## What's Next

We're continuing to improve our infrastructure. Upcoming enhancements include multi-region deployments and even faster response times.`,
    author: {
      name: "Alex Kumar",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    category: "Engineering",
    publishedDate: "2026-03-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677512949567-0c2ccd70f489?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "securing-cloud-infrastructure",
    title: "Best practices for securing your cloud infrastructure",
    excerpt: "Learn how to implement security best practices and protect your cloud deployments from common threats.",
    content: `Security should be a top priority when managing cloud infrastructure. Here are the best practices we follow at Cloud Nexus.

## Foundation of Security

Security starts with the basics. Use strong passwords, enable two-factor authentication, and regularly update your dependencies.

### Access Control

Implement the principle of least privilege. Users should only have access to the resources they need to do their job.

### Encryption

Encrypt data at rest and in transit. Use TLS for all network communication and encrypt sensitive data in your databases.

### Monitoring

Set up comprehensive logging and monitoring. Detect and respond to security incidents quickly.

## Advanced Security

Beyond the basics, there are additional steps you can take to further secure your infrastructure.

### Network Segmentation

Isolate different parts of your infrastructure using VPCs and security groups. This limits the blast radius if one component is compromised.

### Regular Audits

Conduct security audits regularly. Use automated tools to scan for vulnerabilities and fix them promptly.

### Incident Response

Have an incident response plan in place. Know what to do when a security event occurs.

## Compliance

Stay compliant with industry standards like SOC 2, ISO 27001, and GDPR. Compliance frameworks provide a good baseline for security practices.`,
    author: {
      name: "Maria Rodriguez",
      role: "Security Lead",
      image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    category: "Security",
    publishedDate: "2026-03-08",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1693344047149-2eefd915ddfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "migrating-to-cloud-nexus",
    title: "Migrating from legacy tools to Cloud Nexus",
    excerpt: "A step-by-step guide to migrating your infrastructure from traditional tools to Cloud Nexus.",
    content: `Migrating infrastructure can seem daunting, but with the right approach, it can be smooth and risk-free. Here's our recommended migration strategy.

## Planning Your Migration

Start by auditing your current infrastructure. Document all resources, dependencies, and configurations.

### Assessment Phase

Identify which workloads should be migrated first. Start with non-critical systems to gain confidence.

### Testing

Set up a staging environment and test your migration thoroughly before touching production.

## The Migration Process

Our migration tool makes it easy to import existing infrastructure. Here's how it works:

### Step 1: Connect Your Accounts

Link your existing cloud provider accounts to Cloud Nexus. This allows us to discover your current infrastructure.

### Step 2: Import Resources

Use our import tool to bring your resources into Cloud Nexus. We'll create infrastructure-as-code definitions for everything.

### Step 3: Validate

Review the imported configurations and make any necessary adjustments.

### Step 4: Cut Over

When you're ready, switch over to managing your infrastructure through Cloud Nexus.

## Post-Migration

After migration, take advantage of Cloud Nexus features like automated scaling, cost optimization, and advanced monitoring.

## Support

Our team is here to help. Reach out if you need assistance with your migration.`,
    author: {
      name: "James Wilson",
      role: "Solutions Architect",
      image: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    category: "Guides",
    publishedDate: "2026-03-05",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1754738381797-6066f4759065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "infrastructure-as-code-benefits",
    title: "Why infrastructure as code is the future",
    excerpt: "Discover the benefits of managing your infrastructure as code and how it improves reliability and collaboration.",
    content: `Infrastructure as Code (IaC) has transformed how we manage cloud resources. Here's why it's become the industry standard.

## What is Infrastructure as Code?

IaC is the practice of managing infrastructure using code instead of manual processes. You define your infrastructure in configuration files that can be versioned, reviewed, and automated.

### Key Benefits

**Version Control** - Track changes to your infrastructure over time, just like you do with application code.

**Reproducibility** - Deploy identical environments for development, staging, and production.

**Automation** - Eliminate manual errors and reduce deployment time.

**Documentation** - Your infrastructure code serves as living documentation.

## Getting Started

Start small. Pick one service or environment and convert it to code. As you gain confidence, expand to other areas.

### Best Practices

1. Store your IaC in version control
2. Use modules to avoid repetition
3. Implement CI/CD for infrastructure changes
4. Write tests for your infrastructure code

## Common Pitfalls

Avoid these mistakes when adopting IaC:

- **Over-engineering** - Keep it simple, especially at first
- **Ignoring state** - Understand how state management works
- **No testing** - Test your infrastructure changes before production

## The Future

IaC continues to evolve. New tools and practices emerge regularly, making infrastructure management easier and more powerful.`,
    author: {
      name: "David Park",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    category: "Engineering",
    publishedDate: "2026-03-01",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1735192395659-3e0b4164b0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "customer-story-acme-corp",
    title: "How Acme Corp reduced deployment time by 80%",
    excerpt: "A case study on how Acme Corporation transformed their infrastructure with Cloud Nexus.",
    content: `Acme Corporation faced challenges with slow deployments and infrastructure complexity. Here's how Cloud Nexus helped them transform their operations.

## The Challenge

Acme's legacy infrastructure required manual intervention for every deployment. This slowed down releases and increased the risk of errors.

### Before Cloud Nexus

- Deployments took 4-6 hours
- Multiple teams involved in each release
- Frequent configuration errors
- Limited visibility into infrastructure

## The Solution

Acme adopted Cloud Nexus to automate their infrastructure management and streamline deployments.

### Implementation

The migration took 3 months and was done in phases:

1. **Phase 1** - Migrate development environments
2. **Phase 2** - Move staging infrastructure
3. **Phase 3** - Transition production workloads

### Results

After completing the migration, Acme saw dramatic improvements:

- **80% faster deployments** - From 4-6 hours to under 1 hour
- **90% fewer errors** - Automation eliminated manual mistakes
- **Better visibility** - Real-time monitoring and alerts
- **Cost savings** - Reduced infrastructure costs by 35%

## Key Takeaways

Acme's success came from:

1. Executive buy-in and clear goals
2. Gradual migration approach
3. Training team members on new tools
4. Continuous improvement mindset

## What's Next

Acme continues to optimize their infrastructure and is now exploring multi-region deployments for improved resilience.`,
    author: {
      name: "Emily Thompson",
      role: "Customer Success",
      image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    category: "Customer Stories",
    publishedDate: "2026-02-28",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1676099748858-6d4c18fa7c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "announcing-new-integrations",
    title: "Announcing 15 new cloud provider integrations",
    excerpt: "We're expanding our platform to support more cloud providers, giving you more flexibility and choice.",
    content: `We're excited to announce support for 15 new cloud providers, making Cloud Nexus the most versatile infrastructure management platform available.

## New Providers

Our new integrations include:

- DigitalOcean
- Linode
- Vultr
- Oracle Cloud
- IBM Cloud
- And 10 more!

### Why More Providers?

We believe in giving you choice. Different providers have different strengths, and you should be able to use the best tool for each job.

## How It Works

Managing multiple cloud providers is now seamless with Cloud Nexus. Use the same interface and workflow regardless of which provider you're using.

### Unified Interface

Write your infrastructure code once and deploy it across multiple providers. Our abstraction layer handles the provider-specific details.

### Cost Optimization

Compare costs across providers and automatically choose the most cost-effective option for each workload.

### Multi-Cloud Strategies

Easily implement multi-cloud architectures for improved resilience and avoiding vendor lock-in.

## Getting Started

All new integrations are available today. Check out our documentation to learn how to get started with your preferred cloud provider.

## What's Coming

We're not stopping here. More integrations are in the pipeline, and we're continuously improving existing ones based on your feedback.`,
    author: {
      name: "Michael Chang",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1762753674498-73ec49feafc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    category: "Product",
    publishedDate: "2026-02-25",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1739387896856-3ba1de53e360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  {
    id: "year-in-review-2025",
    title: "Cloud Nexus 2025: Year in review",
    excerpt: "Reflecting on an incredible year of growth, new features, and amazing customers.",
    content: `As we close out 2025, we want to take a moment to reflect on what's been an incredible year for Cloud Nexus and our community.

## By The Numbers

2025 was a year of significant growth:

- **500,000+** developers using Cloud Nexus
- **10 million+** daily API requests
- **99.99%** uptime
- **50+** new features shipped
- **15** new cloud provider integrations

## Major Releases

We shipped some major updates this year:

### Q1: Performance Improvements

We kicked off the year with a focus on performance, reducing API latency by 60%.

### Q2: Security Enhancements

Achieved SOC 2 Type II compliance and added advanced security features.

### Q3: New Integrations

Launched support for 15 new cloud providers, dramatically expanding our platform.

### Q4: Cloud Nexus 2.0

Ended the year with our biggest release ever - Cloud Nexus 2.0.

## Community Highlights

Our community grew tremendously in 2025:

- Launched Cloud Nexus Community Forum
- Hosted 12 virtual meetups
- Published 50+ blog posts and tutorials
- Grew our Discord to 10,000+ members

## Thank You

None of this would be possible without our amazing customers and community. Thank you for your support, feedback, and trust in Cloud Nexus.

## Looking Ahead to 2026

We have exciting plans for 2026, including new features, more integrations, and continued focus on performance and reliability.

Stay tuned for more updates!`,
    author: {
      name: "Sarah Chen",
      role: "Co-founder & CEO",
      image: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    },
    category: "Company",
    publishedDate: "2026-02-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1704121610930-d35d8ebe0b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
];

export const categories = ["All", "Product", "Engineering", "Security", "Guides", "Customer Stories", "Company"];
