import { useState } from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Subscribed! 🌿 Welcome to FloraVision");
    setEmail("");
  };

  return (
    <footer id="contact" className="border-t border-border mt-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">FloraVision<span className="text-primary">.</span></p>
          <p className="mt-4 text-sm text-muted-foreground">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick Link's</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="story-link hover:text-primary transition">Home</a></li>
            <li><a href="#types" className="story-link hover:text-primary transition">Types Of plants</a></li>
            <li><a href="#contact" className="story-link hover:text-primary transition">Contact</a></li>
            <li>
              <button
                onClick={() => toast.info("Privacy policy coming soon")}
                className="story-link hover:text-primary transition"
              >
                Privacy
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">For Every Update.</p>
          <form onSubmit={subscribe} className="mt-4 flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="flex-1 rounded-md border border-border bg-input px-3 py-2 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:scale-105 hover:bg-primary/90"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-muted-foreground sm:flex-row">
          <div className="flex gap-3">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                onClick={() => toast.info(`Follow us on ${label}`)}
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
          <p>FloraVision © all right reserve</p>
        </div>
      </div>
    </footer>
  );
}