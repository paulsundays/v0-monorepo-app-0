import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Award, BarChart3, Globe } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Todos los proyectos están verificados por certificadoras internacionales reconocidas",
  },
  {
    icon: Award,
    title: "Certificación Oficial",
    description: "Recibe certificados con QR y hash blockchain para garantizar autenticidad",
  },
  {
    icon: BarChart3,
    title: "Impacto Medible",
    description: "Monitorea tu progreso con métricas detalladas y reportes de impacto",
  },
  {
    icon: Globe,
    title: "Alcance Regional",
    description: "Proyectos en toda Latinoamérica que generan impacto local y global",
  },
]

export function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Por qué elegir BCCBA Green?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestra plataforma garantiza transparencia, trazabilidad y legitimidad en cada transacción de créditos de
            carbono
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center border-0 shadow-sm">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
