import Image from "next/image"

const photos = [
  { src: "/placeholder.svg?height=300&width=400", alt: "Barbering service" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Massage treatment" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Hair styling" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Spa treatment" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Manicure service" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Pedicure service" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Facial treatment" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Waxing service" },
]

export function PhotoGallery() {
  return (
    <section className="py-16 bg-peach">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-coral">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square">
              <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

