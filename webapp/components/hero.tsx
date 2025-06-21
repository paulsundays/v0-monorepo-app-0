import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Compensa tu <span className="text-green-600">Huella de Carbono</span> con Proyectos Verificados
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Marketplace transparente de créditos de carbono que conecta empresas con proyectos ambientales certificados
            en toda Latinoamérica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/calculadora">
                <Calculator className="mr-2 h-5 w-5" />
                Calcular mi Huella
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/proyectos">
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
