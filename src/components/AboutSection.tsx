import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Heart, Lightbulb, User, Crown, Briefcase } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const leaders = [
    {
      icon: Crown,
      role: "Founder & President",
      name: "Dr. Priyanka Verma",
      description: "With a passion for education and a vision to democratize knowledge, Dr. Priyanka Verma established APRA to bridge the gap between academic excellence and practical wisdom.",
      detail: "Her expertise spans multiple disciplines, and she has dedicated her career to mentoring the next generation of leaders, thinkers, and innovators through comprehensive publications and hands-on workshops."
    },
    {
      icon: User,
      role: "Vice-President",
      name: "Dr. Keemti Gaur",
      description: "Dr. Keemti Gaur brings invaluable expertise and leadership to APRA, playing a pivotal role in shaping the organization's strategic direction and educational initiatives.",
      detail: "With a deep commitment to academic excellence and community development, Dr. Gaur works tirelessly to expand APRA's reach and impact, ensuring that quality knowledge reaches every corner of society."
    },
    {
      icon: Briefcase,
      role: "Director",
      name: "Mrs. Himani Raizada",
      description: "Mrs. Himani Raizada serves as a key driving force behind APRA's operational excellence and strategic growth initiatives.",
      detail: "Her dedication to organizational development and commitment to APRA's mission ensures that every publication and workshop meets the highest standards of quality and impact."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To spread knowledge and empower individuals through quality publications and transformative workshops."
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "To nurture innovative, enlightened and empowered citizens and educators, fostering a culture of excellence and prosperity for future generations."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, excellence, and commitment to fostering a culture of continuous learning and growth."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Delivering exceptional content and experiences that inspire, educate, and transform lives."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary/20 via-secondary/40 to-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4 px-4 py-2 bg-primary/10 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Nurturing Minds, <span className="text-primary">Shaping Futures</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            APRA: Group of Knowledge is dedicated to the noble pursuit of spreading wisdom
            through quality book publications and engaging educational workshops.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl font-serif font-bold text-center text-foreground mb-12"
          >
            Our Leadership Team
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                  
                  {/* Card */}
                  <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Icon Badge */}
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <leader.icon className="text-primary-foreground" size={28} />
                    </div>
                    
                    {/* Role */}
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      {leader.role}
                    </span>
                    
                    {/* Name */}
                    <h4 className="text-xl font-serif font-bold text-foreground mt-2 mb-4">
                      {leader.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {leader.description}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leader.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-10 shadow-lg">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At APRA, we believe that knowledge is the most powerful tool for transformation.
              Our carefully curated publications cover a wide spectrum of subjects, designed
              to enlighten minds and inspire action.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our workshops are crafted to provide immersive learning experiences,
              combining theoretical foundations with practical applications. Whether you're
              a student, professional, or lifelong learner, APRA has something valuable to offer.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Excellence in Knowledge</span>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-serif font-bold text-center text-foreground mb-12"
        >
          What Drives Us
        </motion.h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                  <value.icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={26} />
                </div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;