import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock, Globe, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "HOME", to: "/", hash: undefined as string | undefined },
  { label: "ABOUT US", to: "/", hash: "about" },
  { label: "SERVICES", to: "/", hash: "services" },
  { label: "PORTFOLIOS", to: "/portfolio", hash: undefined },
  { label: "PACKAGES", to: "/packages", hash: undefined },
  { label: "EXPERIENCE", to: "/experience", hash: undefined },
  { label: "CONTACT", to: "/contact", hash: undefined },
];

function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap justify-between items-center gap-2">
        <a href="https://wa.me/12366134007" className="flex items-center gap-2 hover:text-white">
          <Phone className="w-4 h-4" /> WhatsApp: +1 (236) 613-4007
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <a href="mailto:info@brainboxworld.infy.uk" className="flex items-center gap-2 hover:text-white">
            <Mail className="w-4 h-4" /> info@brainboxworld.infy.uk
          </a>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Mon-Sat : 9 AM to 6 PM
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
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-wide">
            <span className="text-blue-600">BRAIN</span>
            <span className="text-slate-800">BOXWORLD</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              activeOptions={{ exact: true, includeHash: false }}
              activeProps={{ className: "text-sm font-semibold text-blue-600" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 py-2"
              >
                {item.label}
              </Link>
            ))}
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
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
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
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
            <li><Link to="/experience" className="hover:text-white">Experience</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (236) 613-4007</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@brainboxworld.infy.uk</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon-Sat : 9 AM to 6 PM</li>
          </ul>
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
      href="https://wa.me/12366134007"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg z-50"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
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
    <section className="bg-slate-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-slate-300">{subtitle}</p>}
      </div>
    </section>
  );
}
