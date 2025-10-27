import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  CheckCircle,
  Truck,
  Recycle,
  Leaf,
  Zap,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Recycle,
      title: "Commercial Recycling",
      description:
        "Comprehensive recycling solutions for businesses of all sizes",
      features: [
        "Customized recycling programs",
        "Regular collection schedules",
        "Waste audits and reporting",
        "Contamination prevention",
      ],
      image: "/commercial-recycling-bins-business.jpg",
    },
    {
      icon: Truck,
      title: "Waste Collection & Disposal",
      description: "Reliable and efficient waste management services",
      features: [
        "Scheduled pickups",
        "Emergency collection",
        "Hazardous waste handling",
        "Proper disposal certification",
      ],
      image: "/waste-collection-truck-disposal.jpg",
    },
    {
      icon: Leaf,
      title: "Organic Waste Composting",
      description: "Transform organic waste into valuable compost",
      features: [
        "Food waste collection",
        "Yard waste processing",
        "Compost production",
        "Soil amendment services",
      ],
      image: "/composting-organic-waste-facility.jpg",
    },
    {
      icon: Zap,
      title: "E-Waste Recycling",
      description: "Safe and responsible electronic waste management",
      features: [
        "Electronics collection",
        "Data destruction",
        "Component recovery",
        "Compliance certification",
      ],
      image: "/electronic-waste-recycling-e-waste.jpg",
    },
    {
      icon: BarChart3,
      title: "Waste Audits & Consulting",
      description: "Strategic guidance for waste reduction and sustainability",
      features: [
        "Waste stream analysis",
        "Sustainability planning",
        "Cost optimization",
        "Compliance guidance",
      ],
      image: "/waste-audit-consulting-analysis.jpg",
    },
    {
      icon: CheckCircle,
      title: "Compliance & Reporting",
      description:
        "Ensure regulatory compliance and track environmental impact",
      features: [
        "Regulatory compliance",
        "Impact reporting",
        "Documentation",
        "Certification support",
      ],
      image: "/compliance-reporting-documentation.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Comprehensive waste management and recycling solutions tailored to
              meet your specific needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                  >
                    {/* Service Image */}
                    <div
                      className="w-full h-48 bg-muted"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Service Content */}
                    <div className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle
                              size={16}
                              className="text-primary mt-0.5 shrink-0"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process ensures efficient and reliable service
                delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description:
                    "We evaluate your waste streams and specific needs",
                },
                {
                  step: "2",
                  title: "Planning",
                  description: "Develop a customized waste management strategy",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description: "Deploy collection systems and staff training",
                },
                {
                  step: "4",
                  title: "Monitoring",
                  description: "Track progress and optimize continuously",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-background rounded-lg p-6 border border-border text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30 transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Service Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Flexible pricing options for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$299",
                  period: "/month",
                  description: "Perfect for small businesses",
                  features: [
                    "Weekly collection",
                    "Basic recycling",
                    "Monthly reporting",
                    "Email support",
                  ],
                  highlighted: false,
                },
                {
                  name: "Professional",
                  price: "$599",
                  period: "/month",
                  description: "Ideal for growing companies",
                  features: [
                    "Twice weekly collection",
                    "Comprehensive recycling",
                    "Weekly reporting",
                    "Phone & email support",
                    "Waste audit included",
                  ],
                  highlighted: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "pricing",
                  description: "For large organizations",
                  features: [
                    "Daily collection",
                    "All service types",
                    "Real-time tracking",
                    "Dedicated account manager",
                    "Custom solutions",
                  ],
                  highlighted: false,
                },
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-8 border transition-all ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                      : "bg-card border-border text-foreground"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p
                    className={`mb-6 text-sm ${
                      tier.highlighted ? "opacity-90" : "text-muted-foreground"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span
                      className={`text-sm ${
                        tier.highlighted
                          ? "opacity-90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-primary-foreground text-primary hover:bg-muted"
                        : "bg-primary text-primary-foreground hover:bg-secondary"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your waste management needs and find
              the perfect solution for your business
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground hover:bg-muted text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
