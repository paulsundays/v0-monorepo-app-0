"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Zap, Car, Home, Utensils, ShoppingCart } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface EmissionResult {
  category: string
  amount: number
  unit: string
  emissions: number
}

export default function CalculadoraPage() {
  const [results, setResults] = useState<EmissionResult[]>([])
  const [totalEmissions, setTotalEmissions] = useState(0)

  const calculateEmissions = (category: string, amount: number, type: string) => {
    let emissions = 0
    let unit = ""

    switch (category) {
      case "electricity":
        emissions = amount * 0.5 // kWh to tCO2e
        unit = "kWh/mes"
        break
      case "transport":
        if (type === "car") {
          emissions = amount * 0.2 // km to tCO2e
          unit = "km/mes"
        } else if (type === "flight") {
          emissions = amount * 0.25 // km to tCO2e
          unit = "km/año"
        }
        break
      case "home":
        if (type === "gas") {
          emissions = amount * 2.0 // m3 to tCO2e
          unit = "m³/mes"
        } else if (type === "heating") {
          emissions = amount * 0.3 // kWh to tCO2e
          unit = "kWh/mes"
        }
        break
      case "food":
        emissions = amount * 0.1 // meals to tCO2e
        unit = "comidas/semana"
        break
    }

    return { emissions: Math.round(emissions * 100) / 100, unit }
  }

  const addEmission = (category: string, amount: number, type: string) => {
    const { emissions, unit } = calculateEmissions(category, amount, type)
    const newResult: EmissionResult = {
      category: `${category}-${type}`,
      amount,
      unit,
      emissions,
    }

    const updatedResults = [...results.filter((r) => r.category !== newResult.category), newResult]
    setResults(updatedResults)
    setTotalEmissions(updatedResults.reduce((sum, r) => sum + r.emissions, 0))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calculator className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Calculadora de <span className="text-green-600">Huella de Carbono</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Calcula tu impacto ambiental y descubre cómo compensar tus emisiones de CO₂
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Calcula tus Emisiones</CardTitle>
                <CardDescription>Completa las categorías que apliquen a tu estilo de vida</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="electricity" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="electricity" className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      <span className="hidden sm:inline">Energía</span>
                    </TabsTrigger>
                    <TabsTrigger value="transport" className="flex items-center gap-2">
                      <Car className="h-4 w-4" />
                      <span className="hidden sm:inline">Transporte</span>
                    </TabsTrigger>
                    <TabsTrigger value="home" className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      <span className="hidden sm:inline">Hogar</span>
                    </TabsTrigger>
                    <TabsTrigger value="food" className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      <span className="hidden sm:inline">Alimentación</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="electricity" className="space-y-4">
                    <ElectricityCalculator
                      onCalculate={(amount) => addEmission("electricity", amount, "consumption")}
                    />
                  </TabsContent>

                  <TabsContent value="transport" className="space-y-4">
                    <TransportCalculator onCalculate={(amount, type) => addEmission("transport", amount, type)} />
                  </TabsContent>

                  <TabsContent value="home" className="space-y-4">
                    <HomeCalculator onCalculate={(amount, type) => addEmission("home", amount, type)} />
                  </TabsContent>

                  <TabsContent value="food" className="space-y-4">
                    <FoodCalculator onCalculate={(amount) => addEmission("food", amount, "meals")} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Tu Huella de Carbono
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{totalEmissions.toFixed(1)} tCO₂e</div>
                  <div className="text-sm text-muted-foreground">Emisiones anuales estimadas</div>
                </div>

                {results.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Desglose por categoría:</h4>
                    {results.map((result, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="capitalize">{result.category.replace("-", " ")}</span>
                        <span className="font-medium">{result.emissions.toFixed(1)} tCO₂e</span>
                      </div>
                    ))}
                  </div>
                )}

                {totalEmissions > 0 && (
                  <>
                    <div className="pt-4 border-t">
                      <div className="text-center mb-4">
                        <div className="text-lg font-semibold mb-2">Costo de Compensación</div>
                        <div className="text-2xl font-bold text-blue-600">${(totalEmissions * 15).toFixed(0)}</div>
                        <div className="text-xs text-muted-foreground">Precio promedio $15 por tCO₂e</div>
                      </div>
                      <Button className="w-full" size="lg" asChild>
                        <Link href="/marketplace">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Compensar Ahora
                        </Link>
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Consejos para Reducir tu Huella</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Usa transporte público o bicicleta cuando sea posible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Cambia a electrodomésticos eficientes energéticamente</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Reduce el consumo de carne y productos lácteos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Apaga luces y dispositivos cuando no los uses</span>
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

// Componentes auxiliares para cada categoría
function ElectricityCalculator({ onCalculate }: { onCalculate: (amount: number) => void }) {
  const [consumption, setConsumption] = useState("")

  const handleCalculate = () => {
    if (consumption) {
      onCalculate(Number.parseFloat(consumption))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="h-5 w-5 text-yellow-500" />
        <h3 className="font-semibold">Consumo Eléctrico</h3>
      </div>
      <div className="space-y-2">
        <Label htmlFor="electricity">Consumo mensual (kWh)</Label>
        <Input
          id="electricity"
          type="number"
          placeholder="Ej: 300"
          value={consumption}
          onChange={(e) => setConsumption(e.target.value)}
        />
      </div>
      <Button onClick={handleCalculate} disabled={!consumption}>
        Calcular Emisiones
      </Button>
    </div>
  )
}

function TransportCalculator({ onCalculate }: { onCalculate: (amount: number, type: string) => void }) {
  const [distance, setDistance] = useState("")
  const [type, setType] = useState("")

  const handleCalculate = () => {
    if (distance && type) {
      onCalculate(Number.parseFloat(distance), type)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Car className="h-5 w-5 text-blue-500" />
        <h3 className="font-semibold">Transporte</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="transport-type">Tipo de Transporte</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="car">Automóvil (km/mes)</SelectItem>
              <SelectItem value="flight">Vuelos (km/año)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="distance">Distancia</Label>
          <Input
            id="distance"
            type="number"
            placeholder="Ej: 1000"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleCalculate} disabled={!distance || !type}>
        Calcular Emisiones
      </Button>
    </div>
  )
}

function HomeCalculator({ onCalculate }: { onCalculate: (amount: number, type: string) => void }) {
  const [consumption, setConsumption] = useState("")
  const [type, setType] = useState("")

  const handleCalculate = () => {
    if (consumption && type) {
      onCalculate(Number.parseFloat(consumption), type)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Home className="h-5 w-5 text-orange-500" />
        <h3 className="font-semibold">Hogar</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="home-type">Tipo de Consumo</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gas">Gas Natural (m³/mes)</SelectItem>
              <SelectItem value="heating">Calefacción (kWh/mes)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="home-consumption">Consumo</Label>
          <Input
            id="home-consumption"
            type="number"
            placeholder="Ej: 50"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleCalculate} disabled={!consumption || !type}>
        Calcular Emisiones
      </Button>
    </div>
  )
}

function FoodCalculator({ onCalculate }: { onCalculate: (amount: number) => void }) {
  const [meals, setMeals] = useState("")

  const handleCalculate = () => {
    if (meals) {
      onCalculate(Number.parseFloat(meals))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Utensils className="h-5 w-5 text-red-500" />
        <h3 className="font-semibold">Alimentación</h3>
      </div>
      <div className="space-y-2">
        <Label htmlFor="meals">Comidas con carne por semana</Label>
        <Input id="meals" type="number" placeholder="Ej: 10" value={meals} onChange={(e) => setMeals(e.target.value)} />
      </div>
      <Button onClick={handleCalculate} disabled={!meals}>
        Calcular Emisiones
      </Button>
    </div>
  )
}
