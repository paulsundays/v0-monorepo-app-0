import Image from "next/image"

const partners = [
  { name: "Verra", logo: "/images/partners/verra-official.png" },
  { name: "Gold Standard", logo: "/images/partners/gold-standard-official.png" },
  { name: "Climate Action Reserve", logo: "/images/partners/climate-action-reserve.png" },
  { name: "UNFCCC", logo: "/images/partners/unfccc.png" },
  { name: "IETA", logo: "/images/partners/ieta.png" },
  { name: "ICROA", logo: "/images/partners/icroa.png" },
]

export function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Certificadoras y Partners</h2>
          <p className="text-muted-foreground">Trabajamos con las principales organizaciones internacionales</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center p-4 hover:scale-105 transition-transform duration-300">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={140}
                height={80}
                className="opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 object-contain max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
