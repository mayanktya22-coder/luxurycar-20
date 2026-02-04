import { LucideIcon } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const IconCard = ({ icon: Icon, title, description }: IconCardProps) => {
  return (
    <div className="group p-8 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:bg-card hover:shadow-xl text-center md:text-left md:text-left animate-fade-in">
      {/* Icon */}
      <div className="inline-block md:block mb-4">
        <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
          <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Accent bar on hover */}
      <div className="mt-4 w-8 h-1 bg-accent rounded-full group-hover:w-12 transition-all duration-300 md:block hidden" />
    </div>
  );
};
