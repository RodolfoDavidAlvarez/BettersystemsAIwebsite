import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your Business with AI
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Embrace the future of business operations with our cutting-edge AI solutions. 
              We help companies modernize, optimize, and grow.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/booking">Book Consultation</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&auto=format&fit=crop"
              alt="AI Business Transformation"
              className="rounded-lg shadow-2xl object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
