export type BlogSection = { heading?: string; paras: string[] };

export type BlogPost = {
  slug: string;
  tag: string;
  read: string;
  title: string;
  excerpt: string;
  date: string;
  img: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-site-isnt-converting",
    tag: "Conversion Optimization",
    read: "8 min read",
    title: "Why Your Site Isn't Converting (And the 7 Structural Fixes That Will)",
    excerpt:
      "Most websites bleed revenue through invisible friction points. Here are the 7 foundational fixes that consistently lift conversion rates by 40–200%.",
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",
    intro:
      "Traffic is only half the equation. If visitors land on your site and leave without acting, every marketing dollar you spend leaks out the bottom. The good news: most conversion problems are structural, not creative — and structural problems have repeatable fixes.",
    sections: [
      {
        heading: "1. Lead with a single, specific promise",
        paras: [
          "Your hero section has roughly three seconds to answer one question: \"Am I in the right place?\" Vague taglines like \"We build experiences\" force visitors to work for clarity, and most won't.",
          "Replace abstraction with a concrete outcome. State who you help, what you deliver, and the result they can expect. Specificity reads as competence.",
        ],
      },
      {
        heading: "2. Remove competing calls-to-action",
        paras: [
          "When every section shouts a different action — subscribe, book, download, call — visitors freeze. Decision fatigue kills momentum.",
          "Pick one primary action per page and make it visually dominant. Secondary actions can exist, but they should never compete for the same attention.",
        ],
      },
      {
        heading: "3. Reduce form friction",
        paras: [
          "Every extra field measurably lowers completion. Ask only for what you need to take the next step, and defer the rest to later in the relationship.",
          "Inline validation, autofill support, and a clear single-column layout all compound into higher completion rates.",
        ],
      },
      {
        heading: "4. Make trust visible above the fold",
        paras: [
          "Buyers look for proof before they commit. Logos, results, reviews, and guarantees should appear early — not buried at the bottom of the page.",
          "Concrete numbers outperform adjectives. \"+168% conversion in 90 days\" beats \"amazing results\" every time.",
        ],
      },
      {
        heading: "5. Fix mobile first, not last",
        paras: [
          "The majority of your visitors are on a phone. If tap targets are cramped, text is small, or the checkout breaks on mobile, you are losing most of your audience before they ever see your offer.",
          "Design and test for the smallest screen first, then scale up.",
        ],
      },
      {
        heading: "6. Speed is a conversion feature",
        paras: [
          "Each additional second of load time drops conversions. Compress images, lazy-load below-the-fold media, and trim render-blocking scripts.",
          "Performance is invisible when it works and devastating when it doesn't.",
        ],
      },
      {
        heading: "7. Close the loop with clear next steps",
        paras: [
          "After someone acts, tell them exactly what happens next. Ambiguity after conversion creates anxiety and refunds.",
          "A confident, specific confirmation experience turns a one-time buyer into a repeat customer.",
        ],
      },
    ],
  },
  {
    slug: "ai-powered-seo-framework-ecommerce-2026",
    tag: "SEO & AI",
    read: "10 min read",
    title: "The AI-Powered SEO Framework for eCommerce Brands in 2026",
    excerpt:
      "How forward-thinking brands use AI to build content systems that dominate search — without sacrificing quality or brand voice.",
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=700&fit=crop",
    intro:
      "AI didn't kill SEO — it raised the bar. The brands winning search in 2026 use AI to scale research and structure while keeping a human hand on strategy and voice. Here is the framework we deploy for eCommerce clients.",
    sections: [
      {
        heading: "Start with intent clusters, not keywords",
        paras: [
          "Single keywords are a relic. Modern search rewards topical authority, so we group queries into intent clusters that map to a buyer's journey from discovery to decision.",
          "AI accelerates clustering by analyzing thousands of queries in minutes, but a strategist still decides which clusters are worth owning.",
        ],
      },
      {
        heading: "Use AI for the first draft, never the final one",
        paras: [
          "AI is exceptional at structure, outlines, and breadth. It is mediocre at nuance, originality, and brand voice. Use it to remove the blank page, then layer in real expertise.",
          "Every published page should contain something AI alone could not produce — a result, a perspective, a proprietary insight.",
        ],
      },
      {
        heading: "Build for entities and structured data",
        paras: [
          "Search engines understand the web as relationships between entities. Clean schema markup, consistent product data, and internal linking tell engines exactly what your store is about.",
          "This is where most eCommerce sites leave the easiest wins on the table.",
        ],
      },
      {
        heading: "Measure revenue, not rankings",
        paras: [
          "Rankings are a vanity metric until they produce revenue. We tie every content investment to assisted conversions so the strategy stays accountable.",
          "When SEO is measured like a growth channel, it gets funded like one.",
        ],
      },
    ],
  },
  {
    slug: "shopify-vs-custom-build",
    tag: "Technical Strategy",
    read: "7 min read",
    title: "Shopify 2.0 vs Custom Build: Which Architecture Scales Better?",
    excerpt:
      "A deep technical comparison — and when each approach makes strategic sense for growing brands.",
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=700&fit=crop",
    intro:
      "The platform decision shapes your costs, speed, and ceiling for years. There is no universally correct answer — only the right answer for your stage, team, and ambitions.",
    sections: [
      {
        heading: "When Shopify 2.0 wins",
        paras: [
          "For most brands under a certain complexity, Shopify 2.0 is the pragmatic choice. It handles payments, security, hosting, and compliance so you can focus on product and marketing.",
          "The theme architecture is now flexible enough to deliver distinctive storefronts without fighting the platform.",
        ],
      },
      {
        heading: "When a custom build wins",
        paras: [
          "Custom architecture earns its cost when you have unusual catalog logic, deep integrations, or experience requirements that a templated platform fights against.",
          "It buys total control — at the price of owning maintenance, security, and infrastructure forever.",
        ],
      },
      {
        heading: "The hybrid middle ground",
        paras: [
          "Headless commerce lets you keep Shopify's commerce engine while building a custom front end. It is powerful, but it adds engineering overhead that only pays off at scale.",
          "Choose it when performance and bespoke experience genuinely move revenue, not because it sounds modern.",
        ],
      },
      {
        heading: "How to decide",
        paras: [
          "Map your real requirements against your team's capacity to maintain them. The best architecture is the one you can operate confidently a year from now.",
        ],
      },
    ],
  },
  {
    slug: "build-a-growth-system-that-compounds",
    tag: "Growth Strategy",
    read: "9 min read",
    title: "How to Build a Growth System That Compounds (Not Just a Pretty Website)",
    excerpt:
      "The difference between a website and a growth system is the difference between linear and exponential results.",
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop",
    intro:
      "A website is a brochure. A growth system is a machine that gets better the more you feed it. The brands that win treat their site as the hub of a compounding loop, not a static asset.",
    sections: [
      {
        heading: "Acquisition, conversion, retention as one loop",
        paras: [
          "Most teams optimize these in isolation. A growth system connects them so insights from one stage improve the others continuously.",
          "When retention data informs acquisition targeting, every cycle becomes more efficient than the last.",
        ],
      },
      {
        heading: "Instrument everything",
        paras: [
          "You cannot compound what you cannot measure. Clean analytics, event tracking, and attribution are the foundation of every durable growth engine.",
          "Data turns guessing into a flywheel of validated decisions.",
        ],
      },
      {
        heading: "Systematize what works",
        paras: [
          "When you find a winning play, document it and turn it into a repeatable process. Tribal knowledge does not compound; systems do.",
        ],
      },
    ],
  },
  {
    slug: "mobile-first-design-ecommerce-2026",
    tag: "Mobile & UX",
    read: "12 min read",
    title: "Mobile-First Design for eCommerce: The Complete 2026 Playbook",
    excerpt:
      "70%+ of your traffic is mobile. This playbook covers everything from thumb-zone design to checkout optimization.",
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=700&fit=crop",
    intro:
      "If your store is designed on a desktop and merely \"checked\" on mobile, you are designing for the minority of your customers. This playbook flips the priority.",
    sections: [
      {
        heading: "Design within the thumb zone",
        paras: [
          "Primary actions belong where thumbs naturally rest. Buttons stranded at the top of the screen create friction on every interaction.",
          "Map your most important actions to the easiest-to-reach areas of the screen.",
        ],
      },
      {
        heading: "Streamline the mobile checkout",
        paras: [
          "Mobile checkout is where revenue leaks fastest. Offer express payment options, minimize typing, and keep the entire flow in a single, focused column.",
          "Every removed step is recovered revenue.",
        ],
      },
      {
        heading: "Optimize images for the smallest screen",
        paras: [
          "Heavy images punish mobile users on slower connections. Serve responsive, compressed assets and lazy-load anything below the fold.",
        ],
      },
      {
        heading: "Test on real devices",
        paras: [
          "Emulators miss real-world friction. Test on actual phones, on real networks, to find the problems your customers actually experience.",
        ],
      },
    ],
  },
  {
    slug: "online-reputation-management-playbook",
    tag: "Reputation",
    read: "6 min read",
    title: "Online Reputation Management: A Modern Brand Defense Playbook",
    excerpt:
      "Reviews, search snippets and brand sentiment all compound. Here's how to keep them moving in your favor.",
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=700&fit=crop",
    intro:
      "Your reputation is the first thing buyers research and the last thing you can fake. Managing it proactively is far cheaper than repairing it after damage is done.",
    sections: [
      {
        heading: "Own your branded search results",
        paras: [
          "When someone searches your name, the first page of results is your real homepage. Make sure you control the narrative with owned properties and positive coverage.",
        ],
      },
      {
        heading: "Make collecting reviews systematic",
        paras: [
          "Happy customers rarely review unprompted. Build a gentle, automated request into your post-purchase flow to keep a steady stream of authentic feedback.",
        ],
      },
      {
        heading: "Respond to criticism with composure",
        paras: [
          "A thoughtful response to a negative review often impresses future buyers more than a wall of perfect ratings.",
          "Composure signals confidence. Defensiveness signals risk.",
        ],
      },
      {
        heading: "Monitor sentiment continuously",
        paras: [
          "Set up alerts for your brand so you hear about problems early — while they are still small enough to solve quietly.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
