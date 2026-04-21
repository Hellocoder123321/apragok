import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";

const EventRibbon = () => {
  return (
    <Link
      to="/workshops"
      className="fixed top-0 left-0 right-0 z-[60] block bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground shadow-md hover:shadow-lg transition-shadow group"
      aria-label="View upcoming event details"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-4 py-2 text-xs sm:text-sm font-medium flex-wrap">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary-foreground/15 backdrop-blur-sm rounded-full uppercase tracking-wider text-[10px] font-semibold">
            <Sparkles size={12} />
            Upcoming
          </span>
          <span className="font-serif font-semibold truncate">
            Spectrum of Knowledge Conference 2026
          </span>
          <span className="hidden md:inline-flex items-center gap-1 opacity-90">
            <Calendar size={14} />
            May 23, 2026
          </span>
          <span className="hidden lg:inline-flex items-center gap-1 opacity-90">
            <MapPin size={14} />
            National Prestige School, Ghaziabad
          </span>
          <span className="inline-flex items-center gap-1 font-semibold underline-offset-2 group-hover:underline">
            Details
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default EventRibbon;
