import { motion } from "framer-motion";
import { BookOpen, Mail, Phone, Facebook, MessageCircle, Instagram } from "lucide-react";
import apraLogo from "@/assets/apra-logo.jpeg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const services = ["Book Publications", "Workshops", "Training Programs", "Consulting"];
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <div className="flex items-center gap-3 mb-6">
              <img src={apraLogo} alt="APRA Logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-serif font-bold">APRA</h3>
                <p className="text-xs opacity-70">Group of Knowledge</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">Empowering minds through quality publications and transformative workshops, seminars and trainings. </p>
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="opacity-70" />
              <span className="text-sm opacity-70">Inspiring Minds, Empowering Future
            </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h4 className="text-lg font-serif font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map(service => <li key={service}>
                  <span className="text-sm opacity-70">{service}</span>
                </li>)}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="opacity-70 mt-0.5" />
                <span className="text-sm opacity-80 text-[#b7b2ae]">apra.publication@gmail.com

              </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="opacity-70 mt-0.5" />
                <span className="text-sm opacity-80">+91 8766251527</span>
              </li>
              <li className="flex items-start gap-3">
                <Facebook size={18} className="opacity-70 mt-0.5" />
                <a 
                  href="https://www.facebook.com/share/17bUBhU3y9/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Follow us on Facebook
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={18} className="opacity-70 mt-0.5" />
                <a 
                  href="https://www.instagram.com/apra.gok?igsh=M2I1OWFocnduZ3V4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Follow us on Instagram
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="opacity-70 mt-0.5" />
                <a 
                  href="https://wa.me/message/PQ6G2FPVROSKH1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {currentYear} APRA: Group of Knowledge. All rights reserved.
            </p>
            <p className="text-sm opacity-60">
              Founded by Dr. Priyanka Verma
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;