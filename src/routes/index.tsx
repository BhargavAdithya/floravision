import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { TrendingPlants } from "@/components/TrendingPlants";
import { TopSelling } from "@/components/TopSelling";
import { Reviews } from "@/components/Reviews";
import { O2Plants } from "@/components/O2Plants";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FloraVision — Earth's Exhale" },
      { name: "description", content: "Discover trendy indoor plants, O2 plants, and decor at FloraVision." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroBanner />
      <TrendingPlants />
      <TopSelling />
      <Reviews />
      <O2Plants />
      <Footer />
    </div>
  );
}