import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock, MapPin, Menu, X, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { useScrollReveal } from "@/hooks/use-reveal";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/adam-bawa-aliyu-8463a93b2",
  facebook: "https://www.facebook.com/bawaaliyuadams",
  tiktok: "https://www.tiktok.com/@brainboxworld",
  instagram: "https://www.instagram.com/brainboxproworld?igsh=aTNlNDNoaTkweXMx",
  x: "https://x.com/Brainboxworld",
};

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.05a8.16 8.16 0 0 0 4.93 1.55V7.16a4.78 4.78 0 0 1-2-.47z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21l-6.52 7.452L22 22h-6.828l-5.34-6.97L3.6 22H.84l6.974-7.97L1.5 2h6.99l4.83 6.39L18.244 2zm-1.196 18h1.82L7.04 4H5.1L17.048 20z"/>
    </svg>
  );
}

export const SocialLinks = ({ variant = "default" }: { variant?: "default" | "footer" }) => {
  const base =
    variant === "footer"
      ? "w-10 h-10 rounded-full bg-white/5 hover:bg-blue-500 text-slate-300 hover:text-white border border-white/10"
      : "w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-blue-600 hover:border-blue-600";
  const cls = `${base} flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5`;
  return (
    <div className="flex gap-3">
      <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={cls}><Linkedin className="w-4 h-4" /></a>
      <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={cls}><Facebook className="w-4 h-4" /></a>
      <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={cls}><Instagram className="w-4 h-4" /></a>
      <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={cls}><TikTokIcon className="w-4 h-4" /></a>
      <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={cls}><XIcon className="w-4 h-4" /></a>
    </div>
  );
};


const desktopNavItems = [
  { label: "About", to: "/about", hash: undefined as string | undefined },
  { label: "Services", to: "/", hash: "services" },
  { label: "Portfolio", to: "/portfolio", hash: undefined },
  { label: "Case Studies", to: "/case-studies", hash: undefined },
  { label: "Blog", to: "/blog", hash: undefined },
  { label: "Packages", to: "/packages", hash: undefined },
  { label: "Contact", to: "/contact", hash: undefined },
];

const mobileNavItems = [
  { label: "HOME", to: "/", hash: undefined as string | undefined },
  { label: "ABOUT", to: "/about", hash: undefined },
  { label: "SERVICES", to: "/", hash: "services" },
  { label: "PORTFOLIO", to: "/portfolio", hash: undefined },
  { label: "CASE STUDIES", to: "/case-studies", hash: undefined },
  { label: "BLOG", to: "/blog", hash: undefined },
  { label: "PACKAGES", to: "/packages", hash: undefined },
  { label: "AUDIT", to: "/audit", hash: undefined },
  { label: "CONTACT", to: "/contact", hash: undefined },
];


function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap justify-between items-center gap-2">
        <a href="https://wa.me/13312782900" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone className="w-4 h-4" /><span>WhatsApp: +1 (331) 278-2900</span>
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href="mailto:info@brainboxworld.dedyn.io" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" /><span>info@brainboxworld.dedyn.io</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /><span>Remote</span>
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /><span>Available 24/7</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="BrainBoxWorld logo"
            className="w-11 h-11 object-contain transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
          />
          <span className="text-lg sm:text-xl font-bold tracking-wide">
            <span className="text-blue-600">BRAIN</span>
            <span className="text-slate-800">BOXWORLD</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {desktopNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors story-link"
              activeOptions={{ exact: true, includeHash: false }}
              activeProps={{ className: "text-sm font-medium text-blue-600" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/audit"
            className="ml-1 inline-flex items-center bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-md transition-all hover:scale-105 hover:shadow-lg"
          >
            Book an Audit
          </Link>
        </nav>
        <button
          className="md:hidden p-2 text-slate-700 transition-transform hover:scale-110"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t bg-white animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {mobileNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 hover:translate-x-1 transition-all py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/audit"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-md transition-colors"
            >
              Book an Audit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="BrainBoxWorld logo" className="w-11 h-11 object-contain bg-white/5 rounded-full p-1" />
            <span className="text-lg font-bold text-white">
              BRAIN<span className="text-blue-400">BOXWORLD</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Professional Digital Marketing & SEO Services helping businesses achieve top Google rankings.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white story-link">Home</Link></li>
            <li><Link to="/about" className="hover:text-white story-link">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-white story-link">Portfolio</Link></li>
            <li><Link to="/case-studies" className="hover:text-white story-link">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white story-link">Blog</Link></li>
            <li><Link to="/packages" className="hover:text-white story-link">Packages</Link></li>
            <li><Link to="/audit" className="hover:text-white story-link">Free Audit</Link></li>
            <li><Link to="/contact" className="hover:text-white story-link">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+1 (331) 278-2900</span></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>info@brainboxworld.dedyn.io</span></li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>Remote</span></li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>Available 24/7</span></li>
          </ul>
          <div className="mt-5">
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} BrainBoxWorld. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/13312782900"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg z-50 animate-fade-in hover:scale-110 transition-transform before:absolute before:inset-0 before:rounded-full before:bg-green-400 before:animate-ping before:-z-10"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useScrollReveal();
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-blob delay-300" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">{title}</h1>
        {subtitle && <p className="text-lg text-slate-300 animate-slide-up delay-200">{subtitle}</p>}
      </div>
    </section>
  );
}
