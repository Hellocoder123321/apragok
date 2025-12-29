import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "apra.publication@gmail.com",
      secondaryContent: "apra.groupofknowledge2024@outlook.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 8766251527",
      subtitle: "Mon-Fri, 10:00AM - 5:00 PM",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      title: "Facebook",
      href: "https://www.facebook.com/share/17bUBhU3y9/",
      color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500 hover:text-white",
    },
    {
      icon: Instagram,
      title: "Instagram",
      href: "https://www.instagram.com/apra.gok?igsh=M2I1OWFocnduZ3V4",
      color: "bg-pink-500/10 text-pink-600 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      href: "https://wa.me/message/PQ6G2FPVROSKH1",
      color: "bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mt-4 mb-6 text-foreground">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our publications or workshops? We'd love to hear from you. 
            Reach out and let's discuss how we can help.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <info.icon className="text-primary" size={20} />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  {info.title}
                </h4>
                <p className="text-sm text-foreground font-medium break-all">{info.content}</p>
                {info.secondaryContent && (
                  <p className="text-xs text-foreground font-medium break-all mt-0.5">{info.secondaryContent}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">{info.subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Connect with us on social media</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                  title={social.title}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
