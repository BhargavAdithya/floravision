import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#types", label: "Plants Types" },
  { href: "#more", label: "More" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-xl font-bold tracking-tight text-foreground transition hover:opacity-80">
          FloraVision<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-foreground/90 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="story-link transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-foreground/90">
          <button
            onClick={() => toast.info("Search coming soon 🌱")}
            aria-label="Search"
            className="transition hover:scale-110 hover:text-primary"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => toast.success("Your bag is empty — start shopping!")}
            aria-label="Shopping bag"
            className="transition hover:scale-110 hover:text-primary"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden transition hover:text-primary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
          <ul className="flex flex-col gap-1 px-6 py-4 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-card hover:text-primary transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}