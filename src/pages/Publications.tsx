import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emergingTrendsEducation from "@/assets/books/emerging-trends-education.jpeg";
import dincharyaSanatanDharma from "@/assets/books/dincharya-sanatan-dharma.jpeg";

const books = [
  {
    id: 1,
    title: "Emerging Trends and Issues in Education",
    author: "Dr. Priyanka Verma & Dr. Sonam Sharma",
    cover: emergingTrendsEducation,
    category: "Education"
  },
  {
    id: 2,
    title: "Dincharya Sanatan Dharma",
    author: "APRA Group of Knowledge",
    cover: dincharyaSanatanDharma,
    category: "Spirituality"
  },
  {
    id: 3,
    title: "Educational Excellence",
    author: "Dr. Priyanka Verma",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    category: "Education"
  },
  {
    id: 4,
    title: "Leadership in Learning",
    author: "Dr. Priyanka Verma",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    category: "Leadership"
  },
  {
    id: 5,
    title: "Innovative Teaching Methods",
    author: "Dr. Priyanka Verma",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    category: "Pedagogy"
  },
  {
    id: 6,
    title: "Empowering Educators",
    author: "Dr. Priyanka Verma",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    category: "Professional Development"
  },
  {
    id: 7,
    title: "Future of Education",
    author: "Dr. Priyanka Verma",
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop",
    category: "Vision"
  },
  {
    id: 8,
    title: "Knowledge & Growth",
    author: "Dr. Priyanka Verma",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    category: "Self Development"
  }
];

const Publications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2" size={18} />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-primary">Publications</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of transformative books designed to inspire, educate, and empower educators and learners alike.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-300">
                  {/* Book Cover */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                        {book.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Book Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                      <BookOpen size={14} />
                      {book.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
              Interested in Our Publications?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contact us to learn more about our books or to inquire about bulk orders for educational institutions.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
