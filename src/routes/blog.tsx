import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog — BrainBoxWorld" },
      { name: "description", content: "Strategic insights, tactical guides, and growth frameworks from the BrainBoxWorld team." },
      { property: "og:title", content: "BrainBoxWorld Blog" },
      { property: "og:description", content: "SEO, conversion, and growth insights for ambitious brands." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    tag: "Conversion Optimization", read: "8 min read",
    title: "Why Your Site Isn't Converting (And the 7 Structural Fixes That Will)",
    excerpt: "Most websites bleed revenue through invisible friction points. Here are the 7 foundational fixes that consistently lift conversion rates by 40–200%.",
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    tag: "SEO & AI", read: "10 min read",
    title: "The AI-Powered SEO Framework for eCommerce Brands in 2026",
    excerpt: "How forward-thinking brands use AI to build content systems that dominate search — without sacrificing quality or brand voice.",
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  },
  {
    tag: "Technical Strategy", read: "7 min read",
    title: "Shopify 2.0 vs Custom Build: Which Architecture Scales Better?",
    excerpt: "A deep technical comparison — and when each approach makes strategic sense for growing brands.",
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
  },
  {
    tag: "Growth Strategy", read: "9 min read",
    title: "How to Build a Growth System That Compounds (Not Just a Pretty Website)",
    excerpt: "The difference between a website and a growth system is the difference between linear and exponential results.",
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  },
  {
    tag: "Mobile & UX", read: "12 min read",
    title: "Mobile-First Design for eCommerce: The Complete 2026 Playbook",
    excerpt: "70%+ of your traffic is mobile. This playbook covers everything from thumb-zone design to checkout optimization.",
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
  },
  {
    tag: "Reputation", read: "6 min read",
    title: "Online Reputation Management: A Modern Brand Defense Playbook",
    excerpt: "Reviews, search snippets and brand sentiment all compound. Here's how to keep them moving in your favor.",
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
  },
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero title="Insights & Blog" subtitle="Strategic insights, tactical guides, and growth frameworks from the BrainBoxWorld team." />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition flex flex-col">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="text-blue-600 font-semibold">{p.tag}</span>
                  <span>•</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="font-bold text-slate-800 leading-snug mb-3">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{p.date}</span>
                  <Link to="/contact" className="text-blue-600 font-semibold inline-flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
