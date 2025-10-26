import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Globe, TrendingUp, Leaf, Lightbulb } from "lucide-react"

export default function Mission() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-secondary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Mission & Vision</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Shaping a sustainable future through innovative waste management and environmental stewardship.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-lg p-8 sm:p-12 border border-border">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To provide comprehensive, innovative, and environmentally responsible waste management solutions that
                empower businesses and communities to reduce their environmental footprint while building a more
                sustainable future for generations to come.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to excellence in service delivery, continuous improvement, and transparent
                communication with all our stakeholders. Every action we take is guided by our unwavering commitment to
                environmental protection and social responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-background rounded-lg p-8 sm:p-12 border border-border">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A world where waste is viewed as a resource, where sustainable practices are the norm, and where every
                organization takes responsibility for its environmental impact. We envision a future where zero waste is
                not just an aspiration but an achievable reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By 2030, we aim to be the leading waste management provider in our region, recognized for our
                innovation, reliability, and unwavering commitment to environmental excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Strategic Goals</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our roadmap for creating lasting environmental and social impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Expand Global Reach",
                  description:
                    "Extend our sustainable waste management services to new markets and communities, helping more organizations achieve their environmental goals.",
                  metrics: "Target: 50+ new locations by 2030",
                },
                {
                  icon: TrendingUp,
                  title: "Increase Diversion Rate",
                  description:
                    "Continuously improve our waste diversion rate from landfills through advanced recycling and composting technologies.",
                  metrics: "Target: 90% waste diversion by 2028",
                },
                {
                  icon: Leaf,
                  title: "Carbon Neutrality",
                  description:
                    "Achieve carbon neutrality across all our operations through renewable energy adoption and emission reduction initiatives.",
                  metrics: "Target: Net-zero emissions by 2027",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation & R&D",
                  description:
                    "Invest in research and development to create breakthrough technologies in waste processing and resource recovery.",
                  metrics: "Target: 5+ new technologies launched",
                },
              ].map((goal, index) => {
                const Icon = goal.icon
                return (
                  <div key={index} className="bg-card rounded-lg p-8 border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-foreground">{goal.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{goal.description}</p>
                    <p className="text-sm font-semibold text-primary">{goal.metrics}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact So Far</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Measurable results from our commitment to environmental sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "50,000+", label: "Tons of Waste Diverted" },
                { number: "500+", label: "Active Clients" },
                { number: "15", label: "Years of Service" },
                { number: "98%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
