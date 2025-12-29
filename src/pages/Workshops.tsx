import { motion } from "framer-motion";
import { Users, BookOpen, Award, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Each workshop is designed with clear objectives and measurable outcomes.",
  },
  {
    icon: Users,
    title: "Interactive Sessions",
    description: "Engage in hands-on activities, group discussions, and real-world case studies.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Receive recognized certificates upon successful completion of workshops.",
  },
  {
    icon: Lightbulb,
    title: "Expert Facilitators",
    description: "Learn from industry experts with years of practical experience.",
  },
];

const Workshops = () => {
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
              <Users size={14} className="mr-1" />
              Workshops & Training
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              <span className="text-foreground">Transform Your </span>
              <span className="text-primary">Potential</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join our expertly crafted workshops and training sessions designed to empower 
              individuals and organizations with practical skills and knowledge.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
              asChild
            >
              <a href="/#contact">
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Why Choose Our Workshops?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver transformative learning experiences that combine theory with practice.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <BookOpen className="mx-auto text-primary mb-6" size={48} />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Custom Training Solutions
            </h2>
            <p className="text-muted-foreground mb-8">
              Looking for tailored training programs for your organization? We design custom 
              workshops that align with your specific goals and challenges.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
              asChild
            >
              <a href="/#contact">
                Contact Us for Custom Programs
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
