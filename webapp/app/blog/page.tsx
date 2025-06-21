import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredPost = {
  id: 1,
  title: "El Futuro de los Mercados de Carbono en Latinoamérica",
  excerpt: "Análisis completo sobre las tendencias y oportunidades en los mercados voluntarios de carbono en la región",
  content: "Los mercados de carbono en Latinoamérica están experimentando un crecimiento sin precedentes...",
  author: "Dr. María González",
  date: "2024-01-15",
  readTime: "8 min",
  category: "Mercados",
  image: "/images/blog/carbon-market-analysis.jpg",
  featured: true,
}

const posts = [
  {
    id: 2,
    title: "Cómo Verificar la Calidad de los Créditos de Carbono",
    excerpt: "Guía práctica para evaluar la legitimidad y calidad de los proyectos de compensación",
    author: "Carlos Mendoza",
    date: "2024-01-12",
    readTime: "6 min",
    category: "Educación",
    image: "/images/blog/verification-guide.jpg",
  },
  {
    id: 3,
    title: "Proyectos REDD+ en la Amazonía: Casos de Éxito",
    excerpt: "Análisis de proyectos exitosos de reducción de deforestación en Brasil y Colombia",
    author: "Ana Silva",
    date: "2024-01-10",
    readTime: "10 min",
    category: "Proyectos",
    image: "/images/blog/amazon-projects.jpg",
  },
  {
    id: 4,
    title: "Energías Renovables: El Motor de la Transición Energética",
    excerpt: "Cómo los proyectos de energía limpia están transformando la matriz energética regional",
    author: "Roberto Fernández",
    date: "2024-01-08",
    readTime: "7 min",
    category: "Energía",
    image: "/images/blog/renewable-transition.jpg",
  },
  {
    id: 5,
    title: "Blockchain y Transparencia en los Créditos de Carbono",
    excerpt: "La tecnología blockchain como herramienta para garantizar la trazabilidad",
    author: "Laura Martínez",
    date: "2024-01-05",
    readTime: "5 min",
    category: "Tecnología",
    image: "/images/blog/blockchain-tech.jpg",
  },
  {
    id: 6,
    title: "Impacto Social de los Proyectos Ambientales",
    excerpt: "Cómo los proyectos de carbono benefician a las comunidades locales",
    author: "Diego Ramírez",
    date: "2024-01-03",
    readTime: "9 min",
    category: "Impacto Social",
    image: "/images/blog/community-impact.jpg",
  },
  {
    id: 7,
    title: "Metodologías de Medición: Estándares Internacionales",
    excerpt: "Comparación entre Verra, Gold Standard y otros estándares de certificación",
    author: "Patricia López",
    date: "2024-01-01",
    readTime: "12 min",
    category: "Educación",
    image: "/images/blog/certification-standards.jpg",
  },
]

const categories = ["Todos", "Mercados", "Educación", "Proyectos", "Energía", "Tecnología", "Impacto Social"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & <span className="text-green-600">Recursos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Mantente informado sobre las últimas tendencias en mercados de carbono y sostenibilidad
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-600">Destacado</Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-3">
                {featuredPost.category}
              </Badge>
              <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <span>{featuredPost.readTime} de lectura</span>
              </div>
              <Button asChild>
                <Link href={`/blog/${featuredPost.id}`}>
                  Leer Artículo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Buscar Artículos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar por título o contenido..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más Recientes</SelectItem>
                  <SelectItem value="popular">Más Populares</SelectItem>
                  <SelectItem value="reading-time">Tiempo de Lectura</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <Badge className="absolute top-3 right-3 bg-blue-600">{post.category}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <span>{post.readTime} de lectura</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${post.id}`}>Leer Más</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Cargar Más Artículos
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Mantente Actualizado
            </CardTitle>
            <CardDescription>Recibe las últimas noticias sobre mercados de carbono y sostenibilidad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Tu email" type="email" className="flex-1" />
              <Button>Suscribirse</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
