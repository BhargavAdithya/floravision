import heroPlant from "../assets/hero-plant.jpg";
import aglaonema from "../assets/aglaonema.png";
import { Play } from "lucide-react";
import { toast } from "sonner";

export function HeroBanner() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden">
      <img
        src={heroPlant}
        alt="Lush green plant"
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[fade-in_1.2s_ease-out]"
        width={1280}
        height={896}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-20">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-5xl font-extrabold leading-tight text-foreground md:text-7xl">
            Earth's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Exhale</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/80">
            "Earth's Exhale" symbolizes the purity and vitality of the Earth's natural
            environment and its essential role in sustaining life.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => scrollTo("types")}
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-primary/50"
            >
              Buy Now
            </button>
            <button
              onClick={() => toast.info("Demo video coming soon 🎬")}
              className="group flex items-center gap-2 text-sm text-foreground/90 transition hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/40 transition group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/20">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Join Demo
            </button>
          </div>

          <div className="mt-10 max-w-xs rounded-2xl border border-border bg-card-glass p-3 backdrop-blur-md transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <p className="text-sm font-semibold">Bonnie Hardi</p>
                <p className="text-xs text-muted-foreground">
                  Visit my shop with so beautiful plants and a lot more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-6 top-32 hidden w-72 rounded-2xl border border-border bg-card-glass p-4 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 md:block animate-fade-in">
          <img
            src={aglaonema}
            alt="Aglaonema"
            className="mx-auto h-40 w-40 object-contain transition-transform duration-500 hover:scale-110 hover:rotate-3"
          />
          <p className="mt-2 text-xs text-muted-foreground">most likely</p>
          <div className="mt-1 flex items-center justify-between">
            <p className="font-semibold">Aglaonema plant</p>
            <span className="text-primary transition-transform group-hover:translate-x-1">→</span>
          </div>
          <button
            onClick={() => toast.success("Aglaonema added to cart 🌿")}
            className="mt-3 rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background transition hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}