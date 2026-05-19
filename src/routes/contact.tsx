import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get In Touch — BrainBoxWorld" },
      { name: "description", content: "Ready to transform your digital presence? We'd love to hear about your project and explore how we can help." },
      { property: "og:title", content: "Get In Touch — BrainBoxWorld" },
      { property: "og:description", content: "Contact BrainBoxWorld for a free digital marketing consultation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll get back to you shortly.");
    }, 600);
  };

  return (
    <SiteLayout>
      <PageHero
        title="Get In Touch"
        subtitle="Ready to transform your digital presence? We'd love to hear about your project and explore how we can help."
      />
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Let's Build Something Amazing</h2>
            <p className="text-slate-600 mb-8">
              Whether you need a new website, better SEO rankings, or a comprehensive digital marketing strategy,
              our team is here to help you achieve your goals.
            </p>
            <div className="space-y-5">
              <InfoRow icon={Mail} title="Email">
                <a href="mailto:info@brainboxworld.dedyn.io" className="hover:text-blue-600">info@brainboxworld.dedyn.io</a>
              </InfoRow>
              <InfoRow icon={Phone} title="Phone">
                <a href="https://wa.me/13312782900" className="hover:text-blue-600">+1 (331) 278-2900</a>
                <div className="text-xs text-slate-500">Available 24/7</div>
              </InfoRow>
              <InfoRow icon={MapPin} title="Location">Remote</InfoRow>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-slate-800 mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-200">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-4 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name *"><input required type="text" placeholder="John Doe" className={inputCls} /></Field>
              <Field label="Email *"><input required type="email" placeholder="john@example.com" className={inputCls} /></Field>
            </div>
            <Field label="Company"><input type="text" placeholder="Your Company" className={inputCls} /></Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Service Needed *">
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>SEO Optimization</option>
                  <option>Web Development</option>
                  <option>Social Media Marketing</option>
                  <option>PPC Advertising</option>
                  <option>Reputation Management</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Budget Range *">
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Select budget</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </Field>
            </div>
            <Field label="Project Details *">
              <textarea required rows={5} placeholder="Tell us about your project..." className={inputCls} />
            </Field>
            <button type="submit" disabled={submitting} className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60">
              <Send className="w-4 h-4" /> {submitting ? "Sending..." : "Send Message"}
            </button>
            <a href="https://wa.me/13312782900" target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Contact on WhatsApp
            </a>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

const inputCls = "w-full px-3 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <div className="font-semibold text-slate-800">{title}</div>
        <div className="text-slate-600 text-sm">{children}</div>
      </div>
    </div>
  );
}
