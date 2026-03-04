import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Rocket, Target, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
              Smart <span className="gradient-text">Teen Talent</span> Platform
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Empowering the next generation to earn, learn and grow. Funngro connects ambitious teenagers with real-world opportunities at top companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company">
                <Button size="lg" className="gradient-button rounded-full px-8 py-7 text-lg h-auto">
                  Hire Teens
                </Button>
              </Link>
              <Link href="/teen">
                <Button size="lg" variant="outline" className="rounded-full px-8 py-7 text-lg border-primary text-primary hover:bg-primary/5 h-auto">
                  Start Earning
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Real Projects</h3>
              <p className="text-muted-foreground">Work on meaningful tasks for established businesses and startups.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Payouts</h3>
              <p className="text-muted-foreground">Get rewarded for your talent quickly and securely through our platform.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Career Growth</h3>
              <p className="text-muted-foreground">Build a professional portfolio and gain experience before you even graduate.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}