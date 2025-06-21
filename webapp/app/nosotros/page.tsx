import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Award, Leaf, Heart, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "María González",
    role: "CEO & Fundadora",
    bio: "15 años de experiencia en mercados financieros y sostenibilidad",
    image: "/images/team/ceo-maria.jpg",
    linkedin: "#",
  },
  {
    name: "Carlos Mendoza",
    role: "CTO",
    bio: "Experto en blockchain y tecnologías verdes",
    image: "/images/team/cto-carlos.jpg",
    linkedin: "#",
  },
  {
    name: "Ana Silva",
    role: "Directora de Proyectos",
    bio: "Especialista en proyectos REDD+ y conservación",
    image: "/images/team/director-ana.jpg",
    linkedin: "#",
  },
  {
    name: "Roberto Fernández",
    role: "Director Comercial",
    bio: "20 años en desarrollo de negocios sustentables",
    image: "/images/team/commercial-roberto.jpg",
    linkedin: "#",
  },
]

const milestones = [
  {
    year: "2020",
    event: "Fundación de BCCBA Green",
    description: "Inicio de operaciones con enfoque en mercados regionales",
  },
  {
    year: "2021",
    event: "Primera certificación Verra",
    description: "Obtención de la primera certificación internacional",
  },
  {
    year: "2022",
    event: "Expansión a 5 países",
    description: "Crecimiento a Brasil, Colombia, Chile, Perú y Argentina",
  },
  { year: "2023", event: "1M tCO₂e transaccionadas", description: "Alcanzamos el millón de toneladas compensadas" },
  { year: "2024", event: "Plataforma digital", description: "Lanzamiento del marketplace digital automatizado" },
]

const values = [
  {
    icon: Shield,
    title: "Transparencia",
    description: "Información clara y verificable en cada transacción",
  },
  {
    icon: Heart,
    title: "Impacto Social",
    description: "Proyectos que benefician a comunidades locales",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Compromiso real con el medio ambiente",
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Solo proyectos certificados por estándares internacionales",
  },
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre <span className="text-green-600">BCCBA Green</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Somos pioneros en la democratización de los mercados de carbono en Latinoamérica, conectando empresas con
              proyectos ambientales verificados para crear un impacto positivo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contacto">Contáctanos</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/proyectos">Ver Proyectos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Facilitar el acceso a mercados de carbono transparentes y confiables, permitiendo que empresas de todos
                los tamaños puedan compensar su huella de carbono mientras apoyan proyectos que generan impacto
                ambiental y social positivo.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Visión 2030</h3>
                  <p className="text-muted-foreground">
                    Ser la plataforma líder de créditos de carbono en Latinoamérica
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about/sustainability-mission.jpg"
                alt="Misión BCCBA Green"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en BCCBA Green
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              El camino que nos ha llevado a ser líderes en mercados de carbono
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-green-200 mt-4" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{milestone.event}</h3>
                      <Badge variant="secondary">{milestone.year}</Badge>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados por crear un futuro más sostenible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={member.linkedin}>LinkedIn</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Impacto</h2>
            <p className="text-muted-foreground">Números que reflejan nuestro compromiso</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1.2M+</div>
              <div className="text-muted-foreground">tCO₂e Compensadas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-muted-foreground">Proyectos Verificados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-muted-foreground">Empresas Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-muted-foreground">Países de Operación</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Hacer la Diferencia?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya están compensando su huella de carbono con nosotros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/registro">Comenzar Ahora</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600"
              asChild
            >
              <Link href="/contacto">Hablar con un Experto</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
