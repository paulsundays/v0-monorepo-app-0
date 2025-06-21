import { Hero } from "@/components/hero"
import { QuickCalculator } from "@/components/quick-calculator"
import { FeaturedProjects } from "@/components/featured-projects"
import { Benefits } from "@/components/benefits"
import { Partners } from "@/components/partners"

export default function HomePage() {
  return (
    <main className="min-h-screen animate-fade-in">
      <Hero />
      <QuickCalculator />
      <FeaturedProjects />
      <Benefits />
      <Partners />
    </main>
  )
}
