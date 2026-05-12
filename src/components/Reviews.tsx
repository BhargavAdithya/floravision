import { Star } from "lucide-react";

const reviews = [
  { name: "Shelly Russel", text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!" },
  { name: "Lula Rolfson", text: "Each one exudes its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home." },
  { name: "Carol Huels", text: "It's like bringing a little piece of nature indoors. The vibes are the freshness — my fern collection has never looked better!" },
];

export function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold">Customer Review</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            style={{ animationDelay: `${i * 100}ms` }}
            className="rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <p className="font-semibold">{r.name}</p>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}