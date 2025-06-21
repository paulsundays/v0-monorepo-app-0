"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, Zap, Car, Plane } from "lucide-react"
import { useState } from "react"

export function QuickCalculator() {
  const [consumption, setConsumption] = useState("")
  const [type, setType] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculateEmissions = () => {
    if (!consumption || !type) return

    const value = Number.parseFloat(consumption)
    let emissions = 0

    switch (type) {
      case "electricity":
        emissions = value * 0.5 // kWh to tCO2e
        break
      case "fuel":
        emissions = value * 2.3 // liters to tCO2e
        break
      case "flight":
        emissions = value * 0.25 // km to tCO2e
        break
    }

    setResult(Math.round(emissions * 100) / 100)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Calculadora Rápida de Huella de Carbono</h2>
            <p className="text-muted-foreground">Obtén una estimación inmediata de tus emisiones de CO₂</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Calcula tus Emisiones
              </CardTitle>
              <CardDescription>Selecciona el tipo de consumo e ingresa la cantidad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de Consumo</Label>
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electricity">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Electricidad (kWh/mes)
                        </div>
                      </SelectItem>
                      <SelectItem value="fuel">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4" />
                          Combustible (L/mes)
                        </div>
                      </SelectItem>
                      <SelectItem value="flight">
                        <div className="flex items-center gap-2">
                          <Plane className="h-4 w-4" />
                          Vuelos (km/año)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="consumption">Cantidad</Label>
                  <Input
                    id="consumption"
                    type="number"
                    placeholder="Ingresa la cantidad"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                  />
                </div>
              </div>

              <Button onClick={calculateEmissions} className="w-full" disabled={!consumption || !type}>
                Calcular Emisiones
              </Button>

              {result !== null && (
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{result} tCO₂e</h3>
                  <p className="text-muted-foreground mb-4">Emisiones estimadas por año</p>
                  <Button asChild>
                    <a href="/marketplace">Compensar Ahora</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
