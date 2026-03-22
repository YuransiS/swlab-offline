import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Niches } from "@/components/sections/Niches";
import { Program } from "@/components/sections/Program";
import { LimitedSpots } from "@/components/sections/LimitedSpots";
import { Location } from "@/components/sections/Location";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col selection:bg-[var(--color-accent)] selection:text-white">
      <Header />
      <Hero />
      <Niches />
      <Program />
      <LimitedSpots />
      <Location />
      <LeadForm />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
