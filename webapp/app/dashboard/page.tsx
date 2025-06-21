import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Leaf, Award, Download, Eye, ShoppingCart, FileText } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard de Impacto</h1>
          <p className="text-muted-foreground">
            Monitorea tu progreso en compensación de carbono y gestiona tu portafolio
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Compensado</CardTitle>
              <Leaf className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">125.5 tCO₂e</div>
              <p className="text-xs text-muted-foreground">+12% desde el mes pasado</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Proyectos Apoyados</CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">En 4 países diferentes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inversión Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,890</div>
              <p className="text-xs text-muted-foreground">Promedio $15.07 por tCO₂e</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificados</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Todos verificados</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Transacciones Recientes</CardTitle>
                <CardDescription>Historial de tus últimas compras de créditos de carbono</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "TXN-001",
                      project: "Reforestación Amazónica",
                      amount: 25,
                      price: 375,
                      date: "2024-01-15",
                      status: "Completada",
                    },
                    {
                      id: "TXN-002",
                      project: "Energía Eólica Patagonia",
                      amount: 50,
                      price: 600,
                      date: "2024-01-10",
                      status: "Completada",
                    },
                    {
                      id: "TXN-003",
                      project: "Conservación de Humedales",
                      amount: 15,
                      price: 270,
                      date: "2024-01-05",
                      status: "Pendiente",
                    },
                  ].map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{transaction.project}</div>
                        <div className="text-sm text-muted-foreground">
                          {transaction.amount} tCO₂e • {transaction.date}
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="font-medium">${transaction.price}</div>
                        <Badge variant={transaction.status === "Completada" ? "default" : "secondary"}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Ver Todas las Transacciones
                </Button>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle>Mi Portafolio</CardTitle>
                <CardDescription>Créditos de carbono en tu posesión</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      project: "Reforestación Amazónica",
                      amount: 75,
                      status: "Disponible",
                      value: 1125,
                    },
                    {
                      project: "Energía Eólica Patagonia",
                      amount: 50,
                      status: "Cancelado",
                      value: 600,
                    },
                  ].map((holding, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="font-medium">{holding.project}</div>
                        <div className="text-sm text-muted-foreground">{holding.amount} tCO₂e</div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="font-medium">${holding.value}</div>
                        <Badge variant={holding.status === "Disponible" ? "default" : "secondary"}>
                          {holding.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Comprar Créditos
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Ver Certificados
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Reporte
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Eye className="mr-2 h-4 w-4" />
                  Explorar Proyectos
                </Button>
              </CardContent>
            </Card>

            {/* Impact Goal */}
            <Card>
              <CardHeader>
                <CardTitle>Meta de Compensación 2024</CardTitle>
                <CardDescription>Progreso hacia tu objetivo anual</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progreso</span>
                    <span>125.5 / 200 tCO₂e</span>
                  </div>
                  <Progress value={62.75} className="h-2" />
                  <div className="text-sm text-muted-foreground">62.75% completado</div>
                </div>
                <Button className="w-full">Ajustar Meta</Button>
              </CardContent>
            </Card>

            {/* Recent Certificates */}
            <Card>
              <CardHeader>
                <CardTitle>Certificados Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: "CERT-001", project: "Amazónica", date: "2024-01-15" },
                    { id: "CERT-002", project: "Eólica", date: "2024-01-10" },
                    { id: "CERT-003", project: "Humedales", date: "2024-01-05" },
                  ].map((cert) => (
                    <div key={cert.id} className="flex items-center justify-between text-sm">
                      <div>
                        <div className="font-medium">{cert.id}</div>
                        <div className="text-muted-foreground">{cert.project}</div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
