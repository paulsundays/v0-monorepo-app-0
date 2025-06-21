import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { MapPin, Calendar, Award, ShoppingCart, Download, Share2, Heart } from "lucide-react"
import Image from "next/image"

// Mock data - en producción vendría de la base de datos
const project = {
  id: 1,
  title: "Reforestación Amazónica Premium",
  description:
    "Proyecto de conservación y reforestación en la selva amazónica brasileña con monitoreo satelital en tiempo real y participación de comunidades locales",
  location: "Acre, Brasil",
  coordinates: { lat: -9.0238, lng: -70.812 },
  type: "Forestación",
  price: 15,
  totalCredits: 10000,
  availableCredits: 2500,
  soldCredits: 7500,
  sdg: ["ODS 13", "ODS 15", "ODS 1"],
  image: "/images/projects/amazon-reforestation.jpg",
  gallery: [
    "/images/gallery/forest-1.jpg",
    "/images/gallery/forest-2.jpg",
    "/images/gallery/forest-3.jpg",
    "/images/gallery/forest-4.jpg",
  ],
  certification: "Verra VCS",
  certificationId: "VCS-2024-001",
  vintage: "2024",
  developer: "Amazon Conservation Corp",
  status: "Activo",
  startDate: "2023-01-15",
  endDate: "2030-12-31",
  methodology: "VM0007 - REDD+ Methodology Framework",
  verifier: "SCS Global Services",
  lastVerification: "2024-01-15",
  impactMetrics: {
    treesPlanted: 50000,
    hectaresProtected: 1200,
    communitiesBenefited: 15,
    jobsCreated: 45,
  },
  timeline: [
    { date: "2023-01-15", event: "Inicio del proyecto", status: "completed" },
    { date: "2023-06-30", event: "Primera verificación", status: "completed" },
    { date: "2023-12-31", event: "Plantación de 25,000 árboles", status: "completed" },
    { date: "2024-06-30", event: "Segunda verificación", status: "in-progress" },
    { date: "2024-12-31", event: "Meta de 50,000 árboles", status: "pending" },
  ],
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const completionPercentage = (project.soldCredits / project.totalCredits) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.sdg.map((sdg) => (
                    <Badge key={sdg} className="bg-green-600">
                      {sdg}
                    </Badge>
                  ))}
                  <Badge className="bg-blue-600">{project.certification}</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Vintage {project.vintage}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    {project.developer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="impact">Impacto</TabsTrigger>
                <TabsTrigger value="timeline">Cronograma</TabsTrigger>
                <TabsTrigger value="documents">Documentos</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Descripción del Proyecto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Detalles Técnicos</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Metodología:</span>
                            <span className="font-medium">{project.methodology}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Verificador:</span>
                            <span className="font-medium">{project.verifier}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>ID Certificación:</span>
                            <span className="font-medium">{project.certificationId}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Última Verificación:</span>
                            <span className="font-medium">{project.lastVerification}</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Período del Proyecto</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span>Fecha de Inicio:</span>
                            <span className="font-medium">{project.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fecha de Fin:</span>
                            <span className="font-medium">{project.endDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Estado:</span>
                            <Badge variant="default">{project.status}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Galería del Proyecto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Imagen ${index + 1} del proyecto`}
                            fill
                            className="object-cover hover:scale-105 transition-transform cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="impact" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Métricas de Impacto</CardTitle>
                    <CardDescription>Resultados medibles del proyecto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">
                          {project.impactMetrics.treesPlanted.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Árboles Plantados</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">
                          {project.impactMetrics.hectaresProtected.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Hectáreas Protegidas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">
                          {project.impactMetrics.communitiesBenefited}
                        </div>
                        <div className="text-sm text-muted-foreground">Comunidades Beneficiadas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600">{project.impactMetrics.jobsCreated}</div>
                        <div className="text-sm text-muted-foreground">Empleos Creados</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Progreso de Créditos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Créditos Vendidos</span>
                        <span>
                          {project.soldCredits.toLocaleString()} / {project.totalCredits.toLocaleString()} tCO₂e
                        </span>
                      </div>
                      <Progress value={completionPercentage} className="h-2" />
                      <div className="text-sm text-muted-foreground">{completionPercentage.toFixed(1)}% completado</div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cronograma del Proyecto</CardTitle>
                    <CardDescription>Hitos y eventos importantes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {project.timeline.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div
                            className={`w-3 h-3 rounded-full mt-2 ${
                              item.status === "completed"
                                ? "bg-green-500"
                                : item.status === "in-progress"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                            }`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{item.event}</h4>
                              <span className="text-sm text-muted-foreground">{item.date}</span>
                            </div>
                            <Badge variant={item.status === "completed" ? "default" : "secondary"} className="mt-1">
                              {item.status === "completed"
                                ? "Completado"
                                : item.status === "in-progress"
                                  ? "En Progreso"
                                  : "Pendiente"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Documentos del Proyecto</CardTitle>
                    <CardDescription>Certificaciones y documentos técnicos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Certificado VCS", type: "PDF", size: "2.4 MB" },
                        { name: "Reporte de Verificación", type: "PDF", size: "5.1 MB" },
                        { name: "Documento de Diseño del Proyecto", type: "PDF", size: "8.7 MB" },
                        { name: "Monitoreo Satelital", type: "PDF", size: "3.2 MB" },
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <span className="text-red-600 font-semibold text-xs">{doc.type}</span>
                            </div>
                            <div>
                              <div className="font-medium">{doc.name}</div>
                              <div className="text-sm text-muted-foreground">{doc.size}</div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Comprar Créditos</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">${project.price}</div>
                    <div className="text-xs text-muted-foreground">por tCO₂e</div>
                  </div>
                </CardTitle>
                <CardDescription>{project.availableCredits.toLocaleString()} tCO₂e disponibles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cantidad (tCO₂e)</label>
                  <Input type="number" placeholder="Ingresa la cantidad" min="1" max={project.availableCredits} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span className="font-medium">$0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Comisión (3%):</span>
                    <span className="font-medium">$0</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>$0</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Agregar al Carrito
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Favorito
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartir
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total de Créditos:</span>
                    <span className="font-medium">{project.totalCredits.toLocaleString()} tCO₂e</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Vendidos:</span>
                    <span className="font-medium">{project.soldCredits.toLocaleString()} tCO₂e</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Disponibles:</span>
                    <span className="font-medium text-green-600">
                      {project.availableCredits.toLocaleString()} tCO₂e
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
