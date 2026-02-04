import { Header } from "@/components/Header";
import { CarCard } from "@/components/CarCard";
import { IconCard } from "@/components/IconCard";
import {
  Award,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

export default function Index() {
  const featuredCars = [
    {
      image: "https://images.unsplash.com/photo-1617469767537-b85ba699fcb6?w=800&h=600&fit=crop",
      name: "Phantom IX",
      category: "Luxury Sedan",
      specs: [
        { label: "0-60 mph", value: "4.2s" },
        { label: "Power", value: "563 HP" },
        { label: "Top Speed", value: "175 mph" },
      ],
      startingPrice: "$450,000",
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      name: "Apex GT",
      category: "Performance",
      specs: [
        { label: "0-60 mph", value: "3.2s" },
        { label: "Power", value: "720 HP" },
        { label: "Top Speed", value: "205 mph" },
      ],
      startingPrice: "$580,000",
    },
    {
      image: "https://images.unsplash.com/photo-1494976866165-199999999999?w=800&h=600&fit=crop",
      name: "Zenith EV",
      category: "Electric",
      specs: [
        { label: "0-60 mph", value: "3.0s" },
        { label: "Range", value: "450 miles" },
        { label: "Charge", value: "15 min 80%" },
      ],
      startingPrice: "$520,000",
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Curated Collection",
      description: "Hand-selected vehicles representing the pinnacle of automotive excellence and craftsmanship.",
    },
    {
      icon: Sparkles,
      title: "Bespoke Service",
      description: "Personalized concierge experience tailored to your preferences and lifestyle.",
    },
    {
      icon: Shield,
      title: "Certified Excellence",
      description: "Every vehicle undergoes rigorous inspection and comes with comprehensive warranty coverage.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Access to the latest luxury and performance technologies before they're widely available.",
    },
  ];

  const carCategories = [
    {
      title: "Luxury Sedans",
      image: "https://images.unsplash.com/photo-1617469767537-b85ba699fcb6?w=400&h=300&fit=crop",
      description: "Experience refined comfort and timeless elegance with our premium sedan collection.",
    },
    {
      title: "Performance",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      description: "Push the limits with cutting-edge performance and exhilarating acceleration.",
    },
    {
      title: "Electric Future",
      image: "https://images.unsplash.com/photo-1560958089-b8a46dd52919?w=400&h=300&fit=crop",
      description: "Sustainable luxury with zero emissions and unprecedented efficiency.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight mb-4">
                  Experience the Art of Performance
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Curated collection of the world's most exclusive automobiles. Where luxury meets innovation, and every drive tells a story of craftsmanship.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#featured"
                  className="px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent/90 hover:scale-105 transition-all text-center"
                >
                  Explore Collection
                </a>
                <a
                  href="#schedule"
                  className="px-8 py-4 border border-accent text-accent font-semibold rounded-sm hover:bg-accent/10 transition-all text-center"
                >
                  Schedule Test Drive
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex gap-8 pt-8 border-t border-border/50">
                <div>
                  <p className="text-2xl font-serif font-bold text-accent">200+</p>
                  <p className="text-sm text-muted-foreground">Vehicles</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-accent">5000+</p>
                  <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-accent">25+</p>
                  <p className="text-sm text-muted-foreground">Years Heritage</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img
                src="https://images.unsplash.com/photo-1617469767537-b85ba699fcb6?w=800&h=900&fit=crop"
                alt="Luxury car"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="collection" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three distinct categories of excellence, each representing the pinnacle of automotive engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {carCategories.map((category) => (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-lg h-80 cursor-pointer animate-fade-in"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="featured" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Featured Vehicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked masterpieces from our exclusive inventory, carefully selected for their exceptional qualities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.name} {...car} />
            ))}
          </div>

          {/* Section CTA */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent/90 hover:scale-105 transition-all"
            >
              View Full Inventory
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Choose Luxe Motors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than vehicles—a gateway to a lifestyle of uncompromising excellence and refined elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="schedule" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-transparent to-accent/5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Ready to Drive Your Dream?
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a personalized test drive and experience the extraordinary on the road. Our concierge team is ready to serve you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:bg-accent/90 hover:scale-105 transition-all text-center"
            >
              Schedule Test Drive
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-accent text-accent font-semibold rounded-sm hover:bg-accent/10 transition-all text-center"
            >
              Get Insider Access
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-lg">L</span>
                </div>
                <span className="font-serif font-bold text-lg text-foreground">
                  Luxe Motors
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                The ultimate destination for exclusive luxury and performance vehicles.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-bold text-foreground mb-4">
                Collection
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#collection" className="hover:text-accent transition-colors">
                    Luxury Sedans
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-accent transition-colors">
                    Performance
                  </a>
                </li>
                <li>
                  <a href="#collection" className="hover:text-accent transition-colors">
                    Electric
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-serif font-bold text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#why-us" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#featured" className="hover:text-accent transition-colors">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif font-bold text-foreground mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@luxemotors.com" className="hover:text-accent transition-colors">
                    hello@luxemotors.com
                  </a>
                </li>
                <li>123 Luxury Lane, City, ST 12345</li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Luxe Motors. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
