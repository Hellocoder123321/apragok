import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Users, GraduationCap, PenTool, Presentation, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: BookOpen,
      title: "Book Publications",
      description: "High-quality publications across diverse subjects including academic texts, research papers, and educational materials.",
      features: ["Academic Books", "Research Publications", "Educational Guides"],
      color: "primary",
    },
    {
      icon: Presentation,
      title: "Interactive Workshops",
      description: "Engaging workshops designed to provide hands-on learning experiences and practical skill development.",
      features: ["Skill Development", "Hands-on Learning", "Expert Guidance"],
      color: "accent",
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Comprehensive training sessions tailored for students, professionals, and organizations.",
      features: ["Corporate Training", "Student Programs", "Professional Development"],
      color: "primary",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Expert content development services for educational institutions and organizations.",
      features: ["Curriculum Design", "Study Materials", "Digital Content"],
      color: "accent",
    },
    {
      icon: Users,
      title: "Seminars & Conferences",
      description: "Organizing knowledge-sharing events that bring together experts and learners.",
      features: ["Expert Panels", "Networking Events", "Knowledge Exchange"],
      color: "primary",
    },
    {
      icon: Award,
      title: "Consulting Services",
      description: "Professional consulting for educational planning and institutional development.",
      features: ["Academic Consulting", "Strategic Planning", "Quality Assurance"],
      color: "accent",
    },
  ];

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions for knowledge seekers and educational institutions. 
            From publications to workshops, we cover every aspect of learning.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-card border border-border rounded-2xl p-8 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'primary' ? 'from-primary/5' : 'from-accent/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`${service.color === 'primary' ? 'text-primary' : 'text-accent'}`} size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in our services? Let's discuss how we can help you.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
