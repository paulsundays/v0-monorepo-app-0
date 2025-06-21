import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, TreePine, Wind, Droplets, Zap, Factory } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Reforestación Amazónica Premium",
    description:
      "Proyecto de conservación y reforestación en la selva amazónica brasileña con monitoreo satelital en tiempo real",
    location: "Acre, Brasil",
    type: "Forestación",
    price: 15,
    impact: "2,500 tCO₂e disponibles",
    sdg: ["ODS 15", "ODS 13"],
    icon: TreePine,
    image: "/images/projects/amazon-reforestation.jpg",
    certification: "Verra VCS",
    vintage: "2024",
    developer: "Amazon Conservation Corp",
    status: "Activo",
  },
  {
    id: 2,
    title: "Energía Eólica Patagonia",
    description: "Parque eólico de 50MW que genera energía limpia en la región patagónica argentina",
    location: "Chubut, Argentina",
    type: "Energía Renovable",
    price: 12,
    impact: "5,000 tCO₂e disponibles",
    sdg: ["ODS 7", "ODS 13"],
    icon: Wind,
    image: "/images/projects/wind-farm.jpg",
    certification: "Gold Standard",
    vintage: "2024",
    developer: "Patagonia Wind Energy",
    status: "Activo",
  },
  {
    id: 3,
    title: "Conservación de Humedales",
    description: "Protección y restauración de ecosistemas de humedales en la región del Magdalena",
    location: "Magdalena, Colombia",
    type: "Conservación",
    price: 18,
    impact: "1,800 tCO₂e disponibles",
    sdg: ["ODS 14", "ODS 15"],
    icon: Droplets,
    image: "/images/projects/wetlands-conservation.jpg",
    certification: "CAR",
    vintage: "2024",
    developer: "Wetlands Colombia",
    status: "Activo",
  },
  {
    id: 4,
    title: "Energía Solar Atacama",
    description: "Planta solar fotovoltaica de 100MW en el desierto de Atacama",
    location: "Antofagasta, Chile",
    type: "Energía Renovable",
    price: 10,
    impact: "8,000 tCO₂e disponibles",
    sdg: ["ODS 7", "ODS 13"],
    icon: Zap,
    image: "/images/projects/solar-atacama.jpg",
    certification: "Gold Standard",
    vintage: "2024",
    developer: "Solar Atacama Ltd",
    status: "Activo",
  },
  {
    id: 5,
    title: "Captura de Metano Landfill",
    description: "Sistema de captura y aprovechamiento de metano en relleno sanitario",
    location: "São Paulo, Brasil",
    type: "Captura de Metano",
    price: 8,
    impact: "3,200 tCO₂e disponibles",
    sdg: ["ODS 11", "ODS 13"],
    icon: Factory,
    image: "/images/projects/methane-capture.jpg",
    certification: "Verra VCS",
    vintage: "2024",
    developer: "Waste Management Brasil",
    status: "Activo",
  },
  {
    id: 6,
    title: "Agroforestería Sostenible",
    description: "Implementación de sistemas agroforestales en pequeñas fincas cafeteras",
    location: "Huila, Colombia",
    type: "Agroforestería",
    price: 20,
    impact: "1,500 tCO₂e disponibles",
    sdg: ["ODS 2", "ODS 15"],
    icon: TreePine,
    image: "/images/projects/agroforestry-coffee.jpg",
    certification: "Plan Vivo",
    vintage: "2024",
    developer: "Coffee Forest Initiative",
    status: "Activo",
  },
]

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Proyectos Ambientales <span className="text-green-600">Verificados</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explora nuestra cartera de proyectos de mitigación climática certificados por estándares internacionales
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros de Búsqueda
            </CardTitle>
            <CardDescription>Encuentra proyectos que se ajusten a tus criterios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar proyectos..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="País" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="argentina">Argentina</SelectItem>
                  <SelectItem value="brasil">Brasil</SelectItem>
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="chile">Chile</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de Proyecto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="forestacion">Forestación</SelectItem>
                  <SelectItem value="energia">Energía Renovable</SelectItem>
                  <SelectItem value="conservacion">Conservación</SelectItem>
                  <SelectItem value="agroforesteria">Agroforestería</SelectItem>
                  <SelectItem value="metano">Captura de Metano</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Rango de Precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-10">$0 - $10</SelectItem>
                  <SelectItem value="10-20">$10 - $20</SelectItem>
                  <SelectItem value="20+">$20+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={project.id}
                className="overflow-hidden card-hover animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    {project.sdg.map((sdg) => (
                      <Badge key={sdg} className="bg-green-600 text-xs">
                        {sdg}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="absolute top-3 left-3 bg-blue-600">{project.certification}</Badge>
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
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <span className="font-medium">Vintage: {project.vintage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Desarrollador:</span>
                      <span className="font-medium">{project.developer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Disponible:</span>
                      <span className="font-medium text-green-600">{project.impact}</span>
                    </div>
                  </div>
                  <Button className="w-full transition-smooth" asChild>
                    <Link href={`/proyectos/${project.id}`}>Ver Detalles Completos</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Load More */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Button variant="outline" size="lg" className="transition-smooth">
            Cargar Más Proyectos
          </Button>
        </div>
      </div>
    </div>
  )
}
