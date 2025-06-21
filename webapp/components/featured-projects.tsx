import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, TreePine, Droplets, Wind } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Reforestación Amazónica",
    description: "Proyecto de conservación y reforestación en la selva amazónica brasileña",
    location: "Brasil",
    type: "Forestación",
    price: 15,
    impact: "2,500 tCO₂e",
    sdg: "ODS 15",
    icon: TreePine,
    image: "/images/projects/amazon-reforestation.jpg",
  },
  {
    id: 2,
    title: "Energía Eólica Patagonia",
    description: "Parque eólico que genera energía limpia en la región patagónica",
    location: "Argentina",
    type: "Energía Renovable",
    price: 12,
    impact: "5,000 tCO₂e",
    sdg: "ODS 7",
    icon: Wind,
    image: "/images/projects/wind-farm.jpg",
  },
  {
    id: 3,
    title: "Conservación de Humedales",
    description: "Protección y restauración de ecosistemas de humedales",
    location: "Colombia",
    type: "Conservación",
    price: 18,
    impact: "1,800 tCO₂e",
    sdg: "ODS 14",
    icon: Droplets,
    image: "/images/projects/wetlands-conservation.jpg",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre proyectos ambientales verificados que generan impacto positivo en toda Latinoamérica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600">{project.sdg}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-green-600" />
                      <Badge variant="secondary">{project.type}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">${project.price}</div>
                      <div className="text-xs text-muted-foreground">por tCO₂e</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="text-sm font-medium">Impacto: {project.impact}</div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/proyectos/${project.id}`}>Ver Detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/proyectos">Ver Todos los Proyectos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
