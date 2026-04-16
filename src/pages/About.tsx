import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Vibeads Digital</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="flex flex-col gap-6 text-muted-foreground leading-relaxed">
              <p>
                Vibeads Digital Private Limited is a performance-driven digital company focused on delivering scalable growth solutions for brands across global markets.
              </p>
              <p>
                We specialise in building and executing both brand-oriented and performance-oriented campaigns, combining creative strategy with data-driven execution. From user acquisition to revenue optimization, our approach is designed to deliver measurable impact at every stage of the funnel.
              </p>
              <p>
                Our core expertise includes mobile app marketing, performance advertising, and digital media strategy, with a strong focus on high-growth sectors such as OTT and content platforms.
              </p>
              <p>
                Beyond client services, Vibeads Digital is actively developing its own digital ecosystem, including OTT platforms and mobile applications, enabling us to operate at the intersection of media, technology, and performance marketing.
              </p>
              <p>
                With a global outlook and a strong operational foundation in India, we aim to create sustainable, scalable, and results-oriented digital solutions for modern businesses.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-card border border-border rounded-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-foreground mb-6">Company Information</h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
              <p className="font-medium text-foreground">Vibeads Digital Private Limited</p>
              <p>CIN: U73100OD2026PTC053422</p>
              <div className="pt-4">
                <p className="font-medium text-foreground mb-1">Registered Address</p>
                <p>Managobindpur, Near Govt Hospital</p>
                <p>Daleiput, Khurda, Odisha – 752056</p>
                <p>India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
