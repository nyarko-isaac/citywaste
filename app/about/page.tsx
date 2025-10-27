import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Users, Target, Zap, Heart } from "lucide-react";

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Cycle City Waste
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Pioneering sustainable waste management since 2020, we've been
              committed to transforming how businesses and communities handle
              their environmental responsibility.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2010, Cycle City began with a simple vision: to
                  make sustainable waste management accessible and affordable
                  for everyone. What started as a small local operation has
                  grown into a trusted partner for hundreds of businesses and
                  thousands of households.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our journey has been driven by a deep commitment to
                  environmental stewardship and the belief that every action
                  counts. We've invested in cutting-edge technology, trained our
                  team extensively, and continuously innovated our processes to
                  minimize environmental impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to have diverted over 50,000 tons of waste
                  from landfills and helped our clients reduce their carbon
                  footprint significantly.
                </p>
              </div>
              <div
                className="rounded-lg overflow-hidden h-96 bg-muted"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=400&width=500&query=sustainable%20recycling%20facility%20team%20working)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every action
                we take.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Environmental Responsibility",
                  description:
                    "We prioritize the planet's health in every decision, striving to minimize waste and maximize positive impact.",
                },
                {
                  icon: Users,
                  title: "Community Focus",
                  description:
                    "We believe in building strong relationships with our clients and contributing positively to our communities.",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description:
                    "We continuously invest in new technologies and methods to improve our services and reduce environmental impact.",
                },
                {
                  icon: Target,
                  title: "Transparency",
                  description:
                    "We maintain open communication with our clients about our processes, impact, and commitment to sustainability.",
                },
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-background rounded-lg p-6 border border-border"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals committed to making a difference in waste management and environmental
                sustainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Prince",
                  role: "Founder & CEO",
                  image: "/professional-woman-ceo.png",
                },
                {
                  name: "Michael Chen",
                  role: "Operations Director",
                  image: "/professional-man-operations.png",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Sustainability Officer",
                  image: "/professional-woman-sustainability.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-full h-64 rounded-lg mb-4 bg-muted"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
