import aglaonema from "@/assets/aglaonema.png";
import plantain from "@/assets/plantain.png";
import cactus from "@/assets/cactus.png";
import swiss from "@/assets/swiss-cheese.png";
import sansevieria from "@/assets/sansevieria.png";
import agave from "@/assets/agave.png";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const plants = [
  { name: "Aglaonema plant", desc: "The Aglaonema plant, commonly known as Chinese Evergreen, is known for its attractive foliage and ease of care.", price: "Rs. 300/-", img: aglaonema },
  { name: "Plantain Lilies", desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes.", price: "Rs. 380/-", img: plantain },
  { name: "Cactus", desc: "It is known for their ability to thrive in arid environments.", price: "Rs. 259/-", img: cactus },
  { name: "Swiss cheese Plant", desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves.", price: "Rs. 400/-", img: swiss },
  { name: "Sansevioria plant", desc: "It is appealing to those plant admirers for its striking appearance and low-maintenance nature.", price: "Rs. 450/-", img: sansevieria },
  { name: "Agave plant", desc: "The Agave plant is a genus of succulents popular known for its striking rosettes of thick, fleshy leaves.", price: "Rs. 359/-", img: agave },
];

export function TopSelling() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold">Our Top Selling Plants</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map((p, i) => (
          <article
            key={p.name}
            style={{ animationDelay: `${i * 80}ms` }}
            className="group rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
          >
            <div className="flex h-44 items-center justify-center overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold transition group-hover:text-primary">{p.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-base font-bold">{p.price}</p>
              <button
                onClick={() => toast.success(`${p.name} added to cart 🌱`)}
                aria-label={`Add ${p.name} to cart`}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border transition hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}