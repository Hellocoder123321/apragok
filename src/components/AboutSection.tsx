import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Heart, Lightbulb } from "lucide-react";
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const values = [{
    icon: Target,
    title: "Our Mission",
    description: "To spread knowledge and empower individuals through quality publications and transformative workshops."
  }, {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To become a leading platform for knowledge dissemination and skill development across diverse domains."
  }, {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, excellence, and commitment to fostering a culture of continuous learning and growth."
  }, {
    icon: Award,
    title: "Our Commitment",
    description: "Delivering exceptional content and experiences that inspire, educate, and transform lives."
  }];
  return <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Nurturing Minds, Shaping Futures
          </h2>
          <p className="text-lg text-muted-foreground">APRA: Group of Knowledge is dedicated to the noble pursuit of spreading wisdom through quality book publications and engaging educational workshops, seminars, conference and trainings. <strong className="text-foreground">Dr. Priyanka Verma</strong>, 
            APRA: Group of Knowledge is dedicated to the noble pursuit of spreading wisdom 
            through quality book publications and engaging educational workshops.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Meet Our Founder
                </h3>
                <h4 className="text-xl text-primary font-semibold mb-4">
                  Dr. Priyanka Verma
                </h4>
                <p className="text-muted-foreground mb-4">
                  With a passion for education and a vision to democratize knowledge, 
                  Dr. Priyanka Verma established APRA to bridge the gap between academic 
                  excellence and practical wisdom.
                </p>
                <p className="text-muted-foreground">
                  Her expertise spans multiple disciplines, and she has dedicated her 
                  career to mentoring the next generation of leaders, thinkers, and innovators 
                  through comprehensive publications and hands-on workshops.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="space-y-6">
            <p className="text-lg text-muted-foreground">
              At APRA, we believe that knowledge is the most powerful tool for transformation. 
              Our carefully curated publications cover a wide spectrum of subjects, designed 
              to enlighten minds and inspire action.
            </p>
            <p className="text-lg text-muted-foreground">
              Our workshops are crafted to provide immersive learning experiences, 
              combining theoretical foundations with practical applications. Whether you're 
              a student, professional, or lifelong learner, APRA has something valuable to offer.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-1 bg-primary rounded-full" />
              <span className="text-primary font-medium">Excellence in Knowledge Sharing</span>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => <motion.div key={value.title} initial={{
          opacity: 0,
          y: 40
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.1
        }} className="group">
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                </div>
                <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default AboutSection;