import deskPlant from "../assets/desk-plant.png";
import deskPlant2 from "../assets/desk-plant2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const slides = [deskPlant, deskPlant2];

export function O2Plants() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section id="more" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold">Our Best o2</h2>
      <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 md:flex-row">
        <div className="relative h-72 w-72 flex-shrink-0 overflow-hidden">
          <img
            key={idx}
            src={slides[idx]}
            alt="O2 plant"
            loading="lazy"
            className="h-full w-full object-contain animate-[scale-in_0.4s_ease-out]"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">We Have Small And Best O2 Plants Collection's</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={() => toast.info("Exploring O2 collection 💨")}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition hover:scale-105 hover:bg-primary/90"
            >
              Explore
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:scale-110 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:scale-110 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}