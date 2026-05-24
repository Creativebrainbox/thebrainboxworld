import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { TrendingUp, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — BrainBoxWorld" },
      { name: "description", content: "Real brands, real strategies, real results. See how BrainBoxWorld delivers measurable growth." },
      { property: "og:title", content: "Case Studies — BrainBoxWorld" },
      { property: "og:description", content: "Featured client case studies and measurable outcomes." },
    ],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    name: "Retrospec",
    cat: "Outdoor & Lifestyle",
    metric: "+168% Conversion Rate",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&h=600&fit=crop",
    url: "https://retrospec.com/",
    summary: "Premium outdoor brand. Conversion-optimized product pages, subscription integration, and a trust-driven brand experience.",
    tags: ["Shopify", "Conversion", "SEO"],
  },
  {
    name: "Darn Tough",
    cat: "Fashion & Apparel",
    metric: "+124% Revenue Growth",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&h=600&fit=crop",
    url: "https://darntough.com/",
    summary: "Apparel brand with curated collections and a seamless shopping experience designed to convert at every step.",
    tags: ["eCommerce", "UX", "Growth"],
  },
  {
    name: "Weightlifting House",
    cat: "Sports Equipment",
    metric: "+89% Online Revenue",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=600&fit=crop",
    url: "https://ukstore.weightliftinghouse.com/",
    summary: "Global sports brand with vibrant product showcases, rewards program, and high-converting product discovery.",
    tags: ["Shopify", "CRO", "Performance"],
  },
  {
    name: "The Landmark Project",
    cat: "Adventure Gear",
    metric: "+156% Average Order Value",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900&h=600&fit=crop",
    url: "https://thelandmarkproject.com/",
    summary: "Premium adventure brand with immersive design, story-led navigation, and a gifting experience built for high-value customers.",
    tags: ["Brand", "eCommerce", "AOV"],
  },
];

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero title="Case Studies" subtitle="Handpicked projects showcasing our approach to growth systems — real brands, real strategies, real results." />
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          {cases.map((c, i) => (
            <article key={c.name} className={`grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <img src={c.img} alt={`${c.name} case study showcase`} className="w-full h-72 md:h-full object-cover" loading="lazy" />
              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-blue-600 font-semibold">{c.cat}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">{c.name}</h2>
                <div className="flex items-center gap-2 mt-3 text-green-600 font-bold">
                  <TrendingUp className="w-5 h-5" /> {c.metric}
                </div>
                <p className="text-slate-600 leading-relaxed mt-4">{c.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 inline-flex items-center gap-2">
                    View Live <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link to="/contact" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-100">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
