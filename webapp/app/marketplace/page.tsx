import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, ShoppingCart, MapPin, TreePine, Wind, Droplets } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Reforestación Amazónica Premium",
    description: "Proyecto de conservación y reforestación en la selva amazónica brasileña con monitoreo satelital",
    location: "Brasil",
    type: "Forestación",
    price: 15,
    stock: 2500,
    impact: "2,500 tCO₂e disponibles",
    sdg: "ODS 15",
    icon: TreePine,
    image: "/images/projects/amazon-reforestation.jpg",
    certification: "Verra VCS",
    vintage: "2024",
  },
  {
    id: 2,
    title: "Energía Eólica Patagonia",
    description: "Parque eólico de 50MW que genera energía limpia en la región patagónica argentina",
    location: "Argentina",
    type: "Energía Renovable",
    price: 12,
    stock: 5000,
    impact: "5,000 tCO₂e disponibles",
    sdg: "ODS 7",
    icon: Wind,
    image: "/images/projects/wind-farm.jpg",
    certification: "Gold Standard",
    vintage: "2024",
  },
  {
    id: 3,
    title: "Conservación de Humedales",
    description: "Protección y restauración de ecosistemas de humedales en Colombia",
    location: "Colombia",
    type: "Conservación",
    price: 18,
    stock: 1800,
    impact: "1,800 tCO₂e disponibles",
    sdg: "ODS 14",
    icon: Droplets,
    image: "/images/projects/wetlands-conservation.jpg",
    certification: "CAR",
    vintage: "2024",
  },
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketplace de Créditos de Carbono</h1>
          <p className="text-muted-foreground">
            Explora y compra créditos de carbono verificados de proyectos ambientales en Latinoamérica
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Precio" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="font-medium">Vintage: {project.vintage}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Disponible:</span>
                      <span className="font-medium">{project.stock.toLocaleString()} tCO₂e</span>
                    </div>
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Cantidad (tCO₂e)"
                        className="flex-1"
                        min="1"
                        max={project.stock}
                      />
                      <Button className="flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Agregar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Cargar Más Proyectos
          </Button>
        </div>
      </div>
    </div>
  )
}
