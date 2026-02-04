import { ArrowRight } from "lucide-react";

interface CarCardProps {
  image: string;
  name: string;
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
  startingPrice: string;
}

export const CarCard = ({
  image,
  name,
  category,
  specs,
  startingPrice,
}: CarCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/50 animate-fade-in">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-64 sm:h-80">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-accent/90 text-primary text-xs font-semibold uppercase tracking-wide rounded-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">Luxury Edition</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-3">
          {specs.slice(0, 3).map((spec) => (
            <div key={spec.label} className="text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {spec.label}
              </p>
              <p className="text-sm font-semibold text-accent mt-1">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting From</p>
            <p className="text-xl font-serif font-bold text-accent">
              {startingPrice}
            </p>
          </div>
          <button className="p-3 bg-accent/10 text-accent rounded-sm hover:bg-accent hover:text-primary transition-all group-hover:translate-x-1">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
