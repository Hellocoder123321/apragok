import { motion } from "framer-motion";
import { Camera, Images } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const galleryImages = [
  {
    id: 1,
    title: "Workshop Session 2024",
    description: "Interactive training session with participants",
    placeholder: true,
  },
  {
    id: 2,
    title: "Leadership Seminar",
    description: "Expert-led leadership development program",
    placeholder: true,
  },
  {
    id: 3,
    title: "Team Building Activity",
    description: "Collaborative exercises for team synergy",
    placeholder: true,
  },
  {
    id: 4,
    title: "Certificate Distribution",
    description: "Recognizing achievements of our participants",
    placeholder: true,
  },
  {
    id: 5,
    title: "Guest Lecture Series",
    description: "Industry experts sharing their insights",
    placeholder: true,
  },
  {
    id: 6,
    title: "Networking Event",
    description: "Building connections that last",
    placeholder: true,
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Images size={14} className="mr-1" />
              Photo Gallery
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-foreground">Moments from Our </span>
              <span className="text-primary">Workshops</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Relive the memorable experiences from our past workshops, training sessions, 
              and collaborative events that have empowered countless individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-secondary/30 aspect-[4/3] cursor-pointer"
              >
                {/* Placeholder for images */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <Camera className="text-primary/30" size={48} />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-background">
                    <h3 className="font-serif font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-80">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Coming Soon Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              More photos coming soon. Stay tuned for updates from our upcoming events!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
