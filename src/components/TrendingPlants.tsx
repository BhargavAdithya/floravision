import deskPlant from "@/assets/desk-plant.png";
import deskPlant2 from "@/assets/desk-plant2.png";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

function TrendCard({ image, reverse = false }: { image: string; reverse?: boolean }) {
  return (
    <div
      className={`group flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        src={image}
        alt="Plant"
        loading="lazy"
        className="h-48 w-48 flex-shrink-0 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold">For Your Desks Decorations</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          The greenery adds a touch of nature and serenity to my workspace, and it has made such a positive influence!
        </p>
        <p className="mt-3 text-lg font-semibold">Rs. 599/-</p>
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={() => toast.info("Exploring desk plants 🪴")}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition hover:scale-105 hover:bg-primary/90"
          >
            Explore
          </button>
          <button
            onClick={() => toast.success("Added to cart 🛒")}
            aria-label="Add to cart"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:scale-110 hover:border-primary hover:bg-primary/10"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function TrendingPlants() {
  return (
    <section id="types" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold">Our Trendy plants</h2>
      <div className="mt-10 space-y-6">
        <TrendCard image={deskPlant} />
        <TrendCard image={deskPlant2} reverse />
      </div>
    </section>
  );
}