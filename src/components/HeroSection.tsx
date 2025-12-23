import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import apraLogo from "@/assets/apra-logo.jpeg";
const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-center lg:text-left">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground mb-6">
              <BookOpen size={16} className="text-primary" />
              <span>Inspiring Minds, Empowering Futures
            </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6">
              <span className="text-foreground">APRA:</span>
              <br />
              <span className="text-primary">Group of</span>
              <br />
              <span className="text-foreground">Knowledge</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">Publishing transformative books and conducting insightful workshops, seminars and trainings.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/publications">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
                  <BookOpen className="mr-2" size={20} />
                  Explore Publications
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base font-medium px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="mr-2" size={20} />
                Join Workshops
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Logo Display */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3
        }} className="relative flex items-center justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <motion.div animate={{
              rotate: 360
            }} transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-0 -m-8 border-2 border-dashed border-primary/20 rounded-full" />
              <motion.div animate={{
              rotate: -360
            }} transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }} className="absolute inset-0 -m-16 border border-accent/20 rounded-full" />
              
              {/* Main Logo */}
              <motion.div animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} className="relative z-10">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-card">
                  <img src={apraLogo} alt="APRA - Group of Knowledge" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div animate={{
              y: [0, -15, 0],
              x: [0, 5, 0]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }} className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="text-primary-foreground" size={28} />
              </motion.div>

              <motion.div animate={{
              y: [0, 10, 0],
              x: [0, -5, 0]
            }} transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }} className="absolute -bottom-4 -left-4 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <Users className="text-accent-foreground" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2
      }} className="mt-16 flex justify-center">
          <motion.button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;