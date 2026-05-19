import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Code2, Share2, Palette, MonitorSmartphone, Search, ShieldCheck, Check, ArrowRight,
  AlertTriangle, TrendingDown, Layers, Compass, BarChart3, Rocket,
  Target, Sparkles, LineChart, Smartphone, Quote,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrainBoxWorld — Professional Digital Marketing & SEO Services" },
      { name: "description", content: "Professional Digital Marketing & SEO Services. We help businesses achieve first-page Google rankings, boost organic traffic, and grow conversions." },
      { property: "og:title", content: "BrainBoxWorld — Professional Digital Marketing & SEO Services" },
      { property: "og:description", content: "High quality SEO and web development services for Shopify, WordPress, Bigcommerce, Wix, Joomla & Magento." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "We provide the best custom website development solutions for you. Our web design services are loved by startup's, businesses and organizations." },
  { icon: Share2, title: "Social Media Marketing", desc: "Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. We will Grow brand awareness, engagement & traffic." },
  { icon: Palette, title: "Web Designing", desc: "We help you craft a responsive website design that will be compatible on all devices through our effective mobile and web development services." },
  { icon: MonitorSmartphone, title: "Search Engine Marketing", desc: "Search Engine Marketing is the process of gaining website traffic and visibility in search engines through the efforts of Pay-Per-Click advertising." },
  { icon: Search, title: "Search Engine Optimization", desc: "We offer Search Engine Optimization services to clients. We will improve Google, Yahoo, Bing etc first page ranking results & boost website traffic." },
  { icon: ShieldCheck, title: "Reputation Management", desc: "Create a positive image about your brand or product & protect your brand on the internet. We offer results online reputation management services." },
];

const featured = [
  { name: "retrospec.com", cat: "E-commerce", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop", url: "https://retrospec.com/" },
  { name: "darntough.com", cat: "Apparel", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop", url: "https://darntough.com/" },
  { name: "trnda.com", cat: "Fashion", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop", url: "https://trnda.com/" },
  { name: "weightliftinghouse.com", cat: "Sports Equipment", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop", url: "https://ukstore.weightliftinghouse.com/" },
  { name: "goondiwindicotton.com.au", cat: "Cotton Products", img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop", url: "https://goondiwindicotton.com.au/" },
  { name: "shopbenetek.com", cat: "Retail", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop", url: "https://shopbenetek.com/" },
  { name: "thelandmarkproject.com", cat: "Adventure Gear", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop", url: "https://thelandmarkproject.com/" },
];

const offers = [
  { title: "Search Engine Optimization", desc: "We offer Search Engine Optimization services to clients. We will improve Google, Yahoo, Bing etc first page ranking results & boost website traffic.", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop" },
  { title: "Search Engine Marketing", desc: "Search Engine Marketing is the process of gaining website traffic and visibility in search engines through the efforts of Pay-Per-Click advertising.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop" },
  { title: "Social Media Marketing", desc: "Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers. We will Grow brand awareness, engagement & traffic.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop" },
  { title: "Web Designing", desc: "We help you craft a responsive website design that will be compatible on all devices through our effective mobile and web development services.", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop" },
  { title: "Reputation Management", desc: "Create a positive image about your brand or product & protect your brand on the internet. We offer results online reputation management services.", img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&h=300&fit=crop" },
  { title: "Web Development", desc: "We provide the best custom website development solutions for you. Our web design services are loved by startup's, businesses and organizations.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop" },
];

const problems = [
  { icon: TrendingDown, title: "Traffic Has Plateaued", desc: "You've hit a ceiling and can't figure out what's broken in your growth engine." },
  { icon: AlertTriangle, title: "Conversions Are Declining", desc: "Visitors are landing on your site but they aren't converting — the funnel is leaking." },
  { icon: Layers, title: "Fragmented Tech Stack", desc: "Apps, tools, and integrations are duct-taped together with no cohesive system." },
  { icon: Compass, title: "No Strategic Clarity", desc: "You're making tactical moves without a roadmap, clear priorities, or reliable data." },
  { icon: BarChart3, title: "Poor Tracking & Visibility", desc: "You can't attribute revenue or measure performance with your current setup." },
  { icon: Rocket, title: "Scaling Before Foundation", desc: "You're pouring into ads while the site itself underperforms and leaks margin." },
];

const approach = [
  "Diagnostic-led methodology",
  "Conversion-focused execution",
  "Scalable growth infrastructure",
  "Data-driven decision making",
];

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "180%", label: "Avg. Traffic Lift" },
  { value: "$25M+", label: "Revenue Influenced" },
  { value: "98%", label: "Client Satisfaction" },
];

const expertise = [
  { icon: Target, title: "SEO Strategy", desc: "Technical SEO and on-page architecture that turn search visibility into qualified traffic and revenue." },
  { icon: Sparkles, title: "Brand Experience Design", desc: "Visual identity and UX that communicate value and build emotional connection with your audience." },
  { icon: LineChart, title: "Growth Systems", desc: "Data-driven frameworks that identify bottlenecks and create compounding growth across channels." },
  { icon: Search, title: "Content & Organic Growth", desc: "Content architecture and editorial strategies that drive qualified traffic without ad dependency." },
  { icon: Code2, title: "Custom Development", desc: "Shopify, WordPress, Webflow and custom builds engineered for performance and scale." },
  { icon: Smartphone, title: "Mobile Optimization", desc: "Mobile-first design and performance work that captures the 70%+ of traffic shopping on phones." },
];

const testimonials = [
  { quote: "BrainBoxWorld didn't just optimize our site — they rebuilt our entire growth engine. Organic traffic doubled within 90 days.", author: "Founder, Retrospec" },
  { quote: "The strategic clarity they brought was unlike any agency we've worked with. Every decision was backed by data.", author: "CEO, Darn Tough" },
  { quote: "They understood our positioning instantly. The new experience converts like nothing we had before.", author: "Marketing Lead, Trnda" },
  { quote: "Our revenue tripled after they rebuilt our SEO and product discovery system. The ROI has been extraordinary.", author: "Co-Founder, Benetek" },
];

const insights = [
  { tag: "Conversion Optimization", read: "8 min read", title: "Why Your Site Isn't Converting (And the 7 Structural Fixes That Will)", date: "March 2026", slug: "site-not-converting-7-structural-fixes" },
  { tag: "SEO & AI", read: "10 min read", title: "The AI-Powered SEO Framework for eCommerce Brands in 2026", date: "March 2026", slug: "ai-powered-seo-framework-2026" },
  { tag: "Technical Strategy", read: "7 min read", title: "Shopify 2.0 vs Custom Build: Which Architecture Scales Better?", date: "February 2026", slug: "shopify-2-vs-custom-build" },
];


function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-wide">{children}</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
    </div>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Professional Digital Marketing & SEO Services
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-2xl">
            We provide high quality Digital Marketing Services to grow your business online.
            Highly experienced in SEO marketing for Shopify, WordPress, Bigcommerce, Wix, Joomla & Magento.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            {["Boost Website Traffic", "First Page Google Rankings", "Increase Conversions", "Grow Organic Results"].map((t) => (
              <span key={t} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> {t}</span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://wa.me/13312782900" className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold">
              Get Started
            </a>
            <Link to="/portfolio" className="px-6 py-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 font-semibold">
              Check Portfolios
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>OUR SERVICES</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-8 text-center hover:shadow-lg transition hover-lift">
                <div className="w-14 h-14 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-slate-800">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-semibold tracking-widest text-xs">THE PROBLEM</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 max-w-3xl mx-auto">
              Most growth problems are structural — not traffic problems
            </h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">
              Growing brands hit walls not because they lack visitors, but because their site infrastructure can't support scale. Sound familiar?
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover-lift">
                <p.icon className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-semibold tracking-widest text-xs">OUR APPROACH</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-slate-800">
              We think before we build. Then we build to scale.
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              Every engagement starts with diagnosis — not design. We map your growth architecture, identify structural friction, and build systems where strategy, design, technology and data reinforce each other.
            </p>
            <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic text-slate-700">
              "Most agencies build websites. We build growth systems. The difference is sustainable scale."
            </blockquote>
          </div>
          <ul className="space-y-4">
            {approach.map((a) => (
              <li key={a} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="font-semibold text-slate-800">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Work */}

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>FEATURED WORK</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((f) => (
              <a key={f.name} href={f.url} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition hover-lift">
                <div className="h-48 overflow-hidden">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-slate-800">{f.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{f.cat}</div>
                  <div className="text-sm text-blue-600 font-semibold mt-3 flex items-center gap-1">
                    Visit Website <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>WHY CHOOSE US?</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-3">Certified Top SEO Experts</h3>
              <p className="text-slate-600 leading-relaxed">
                With a team of experts having more than 8 Years of experience, we evaluate ourselves as the best SEO Company.
                We offer professional Web development & comprehensive SEO services and help our clients to get increased
                organic search score significantly so as to compete for the top rankings in SERPs – even when it comes to
                highly competitive keywords.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-3">Quality Solutions with 100% Satisfaction</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We have experienced and humble SEO Experts that provides all the aspects of Digital Marketing & offer Google first Page ranking results.
              </p>
              <ul className="space-y-2 text-slate-700">
                {[
                  "Content Marketing and Content Management",
                  "Search Engine Optimization for Google, Yahoo, Bing, etc.",
                  "Google Ads (Google AdWords), Pay Per Click Advertising",
                  "Social Media Marketing & Optimization",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>ABOUT US</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop",
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=280&fit=crop",
                "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=280&fit=crop",
                "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=280&fit=crop",
              ].map((src, i) => (
                <img key={i} src={src} alt="About BrainBoxWorld" className="rounded-lg w-full h-40 object-cover" loading="lazy" />
              ))}
            </div>
            <div>
              <p className="text-slate-600 leading-relaxed mb-4">
                BrainBoxWorld is a leading digital marketing agency with over 8 years of experience in delivering exceptional
                SEO and web development services. We specialize in helping businesses achieve first-page Google rankings,
                increase organic traffic, and maximize online conversions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                We pride ourselves on delivering measurable results and maintaining long-term partnerships with our clients.
                From startup ventures to established enterprises, we provide customized digital marketing solutions that drive
                real business growth.
              </p>
              <Link to="/portfolio" className="inline-block px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>WHAT WE OFFER</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((o) => (
              <div key={o.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover-lift">
                <img src={o.img} alt={o.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{o.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{o.desc}</p>
                  <a href="https://wa.me/13312782900" className="text-blue-600 font-semibold text-sm hover:underline">READ MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold">{s.value}</div>
              <div className="text-sm uppercase tracking-wider text-blue-100 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>AREAS OF EXPERTISE</SectionTitle>
          <p className="text-center text-slate-600 -mt-8 mb-12 max-w-2xl mx-auto">
            Deep specialization across every discipline that drives online growth — from strategy to execution.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition hover-lift">
                <e.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-lg text-slate-800 mb-2">{e.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>WHAT OUR CLIENTS SAY</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white rounded-xl border border-slate-200 p-6">
                <Quote className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-slate-700 italic leading-relaxed">"{t.quote}"</p>
                <div className="mt-4 text-sm font-semibold text-slate-800">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle>LATEST INSIGHTS</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((i) => (
              <Link key={i.slug} to="/blog" className="block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition hover-lift">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="text-blue-600 font-semibold">{i.tag}</span>
                  <span>•</span>
                  <span>{i.read}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-3 leading-snug">{i.title}</h3>
                <div className="text-xs text-slate-500">{i.date}</div>
                <div className="mt-4 text-sm text-blue-600 font-semibold flex items-center gap-1">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="inline-block px-6 py-3 rounded-md bg-slate-800 text-white font-semibold hover:bg-slate-900">
              Read All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-slate-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-slate-300 mb-8">Contact us today for a free consultation and let's discuss how we can help you achieve your digital marketing goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/13312782900" className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 font-semibold">Get Started</a>
            <Link to="/contact" className="px-6 py-3 rounded-full bg-white text-slate-800 hover:bg-slate-100 font-semibold">Contact Us</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
