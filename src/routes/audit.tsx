import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Check, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free SEO & Growth Audit — BrainBoxWorld" },
      { name: "description", content: "Book a free Growth Foundations Audit — a strategic diagnostic that gives you clarity and confidence to scale." },
      { property: "og:title", content: "Free SEO & Growth Audit — BrainBoxWorld" },
      { property: "og:description", content: "Diagnostic-led audit for brands ready to scale without structural friction." },
    ],
  }),
  component: AuditPage,
});

const includes = [
  "Technical SEO crawl & site health report",
  "Conversion funnel & friction analysis",
  "Page speed and Core Web Vitals review",
  "Keyword opportunity & content gap assessment",
  "Competitor visibility & backlink snapshot",
  "Prioritized 90-day action roadmap",
];

function AuditPage() {
  const [form, setForm] = useState({ name: "", email: "", website: "", goals: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Audit request received! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", website: "", goals: "" });
  };
  return (
    <SiteLayout>
      <PageHero title="Free Growth Foundations Audit" subtitle="A focused diagnostic for brands that want to scale without structural friction, conversion leaks, or blind data." />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What's included</h2>
            <ul className="space-y-3">
              {includes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-white border border-slate-200 rounded-xl">
              <p className="text-sm text-slate-600">Prefer to talk first?</p>
              <a href="https://wa.me/13312782900" className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Request your audit</h2>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 border border-slate-300 rounded-md" />
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email address" className="w-full px-4 py-3 border border-slate-300 rounded-md" />
            <input required type="url" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="Your website URL" className="w-full px-4 py-3 border border-slate-300 rounded-md" />
            <textarea value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} rows={4} placeholder="What are your growth goals?" className="w-full px-4 py-3 border border-slate-300 rounded-md" />
            <button type="submit" className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Book My Free Audit
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
