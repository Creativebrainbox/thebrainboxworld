import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Fragment } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { blogPosts, getPostBySlug, type BlogPost, type BlogSection } from "@/lib/blog-posts";

// Render **bold** segments inline without a markdown dependency.
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-slate-800">{part.slice(2, -2)}</strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — BrainBoxWorld` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.img },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: loaderData.img },
        ]
      : [{ title: "Article — BrainBoxWorld" }],
  }),
  component: BlogPostPage,
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-4 py-20 text-center" role="alert">
        <h1 className="text-2xl font-bold text-slate-800">Couldn't load this article</h1>
        <p className="text-slate-600 mt-2">{error.message}</p>
        <Link to="/blog" className="inline-flex items-center gap-1 text-blue-600 font-semibold mt-6">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
      </div>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Article not found</h1>
        <p className="text-slate-600 mt-2">The article you're looking for doesn't exist or may have moved.</p>
        <Link to="/blog" className="inline-flex items-center gap-1 text-blue-600 font-semibold mt-6">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>
      </div>
    </SiteLayout>
  ),
});

function BlogPostPage() {
  const post = Route.useLoaderData() as BlogPost;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article className="bg-white">
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-indigo-200 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
            <div className="flex flex-wrap items-center gap-3 text-xs text-indigo-200 mb-4">
              <span className="px-3 py-1 rounded-full glass font-semibold">{post.tag}</span>
              <span>{post.read}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-display text-white leading-tight">{post.title}</h1>
            <p className="mt-5 text-lg text-slate-300">{post.excerpt}</p>
          </div>
        </header>

        {/* Body */}
        <div className="bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 md:px-8 py-10 md:py-14">
            <img src={post.img} alt={post.title} className="w-full rounded-2xl border border-slate-200 mb-10 object-cover" />
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8">{post.intro}</p>
            <div className="space-y-8">
              {post.sections.map((s: BlogSection, i: number) => (
                <section key={i}>
                  {s.heading && <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{s.heading}</h2>}
                  <div className="space-y-4">
                    {s.paras.map((p: string, j: number) => (
                      <p key={j} className="text-slate-600 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Want results like these for your brand?</h2>
              <p className="text-slate-600 mb-6">Let's turn these ideas into a growth system built for your business.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">Talk to us</Link>
                <Link to="/audit" className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100">Get a free audit</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="bg-slate-50 border-t border-slate-200">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
            <h2 className="text-lg font-bold text-slate-800 mb-6">Keep reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition flex flex-col">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-blue-600 font-semibold mb-2">{p.tag}</span>
                    <h3 className="font-bold text-slate-800 leading-snug mb-3 flex-1">{p.title}</h3>
                    <span className="text-blue-600 font-semibold text-xs inline-flex items-center gap-1">Read <ArrowRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
