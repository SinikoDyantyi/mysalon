import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Phone, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { PhotoGallery } from "@/components/photo-gallery"

export default function BeautySalon() {
  return (
    <div className="min-h-screen bg-peach">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-coral">Snizz Beauty</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-coral transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-coral transition-colors">
              Services
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-coral transition-colors">
              Contact
            </Link>
            <Button className="bg-salmon hover:bg-coral text-white">Book Now</Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate to different sections of our website.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="#about" className="text-sm font-medium hover:text-coral transition-colors">
                  About
                </Link>
                <Link href="#services" className="text-sm font-medium hover:text-coral transition-colors">
                  Services
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-coral transition-colors">
                  Contact
                </Link>
                <Button className="w-full bg-salmon hover:bg-coral text-white">Book Now</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Beauty salon interior"
          className="absolute inset-0 object-cover"
          width={1920}
          height={600}
          priority
        />
        <div className="absolute inset-0 bg-coral/40" />
        <div className="relative container text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Snizz Beauty</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the ultimate in natural beauty treatments and relaxation
          </p>
          <Button size="lg" className="bg-salmon hover:bg-coral text-white">
            Book Your Treatment
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About Snizz Beauty"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-coral">About Snizz Beauty</h2>
              <p className="text-muted-foreground mb-6">
                At Snizz Beauty, we're dedicated to providing a comprehensive range of beauty and grooming services. Our
                skilled team of barbers, massage therapists, and beauty experts are committed to enhancing your natural
                beauty and ensuring a relaxing, rejuvenating experience. Whether you're looking for a fresh haircut, a
                soothing massage, or indulgent spa treatments, we've got you covered.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Clock className="text-salmon" />
                  <span>Open Monday to Saturday: 8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="text-salmon" />
                  <span>123 Thabo Mbeki, Libode, South Africa</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-salmon" />
                  <span>+27 123 456 789</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-peach">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-coral">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-coral">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button className="w-full bg-salmon hover:bg-coral text-white">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-coral">Book Your Treatment</h2>
            <div className="grid gap-6">
              <Button size="lg" className="bg-salmon hover:bg-coral text-white flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call to Book: +27 123 456 789
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-peach text-coral hover:text-coral flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Footer */}
      <footer className="border-t py-12 bg-white">
        <div className="container text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Snizz Beauty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Exceptional Barbering",
    description: "Expert haircuts and grooming services for a polished look",
  },
  {
    title: "Massage",
    description: "Relaxing and therapeutic massage treatments to rejuvenate your body and mind",
  },
  {
    title: "Salon Services",
    description: "Comprehensive hair care, styling, and beauty treatments",
  },
  {
    title: "Spa Services",
    description: "Luxurious spa treatments for ultimate relaxation and self-care",
  },
]

