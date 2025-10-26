import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Leaf, Recycle, Truck, Award } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover z-0"
            poster="/recycling-waste-management-facility.jpg"
          >
            <source src="/recycling-waste-management-facility.jpg" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 z-1"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building a Sustainable Future
            </h1>
            <p
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Professional recycling and waste management solutions for a cleaner, greener tomorrow
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 transform"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-all border border-white/30 hover:scale-105 transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Cycle City Waste?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're committed to environmental responsibility and sustainable practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Recycle,
                  title: "Comprehensive Recycling",
                  description: "We handle all types of recyclable materials with care and expertise",
                },
                {
                  icon: Truck,
                  title: "Reliable Collection",
                  description: "Scheduled pickups and flexible collection services for your convenience",
                },
                {
                  icon: Leaf,
                  title: "Eco-Friendly",
                  description: "Committed to reducing environmental impact and promoting sustainability",
                },
                {
                  icon: Award,
                  title: "Certified Professional",
                  description: "Industry-certified team with years of waste management experience",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all hover:scale-105 transform animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses and households committed to sustainable waste management
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground hover:bg-muted text-primary px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 transform"
            >
              Schedule a Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
