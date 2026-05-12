import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { TrendingPlants } from "./components/TrendingPlants";
import { TopSelling } from "./components/TopSelling";
import { Reviews } from "./components/Reviews";
import { O2Plants } from "./components/O2Plants";
import { Footer } from "./components/Footer";

export default function App() {
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