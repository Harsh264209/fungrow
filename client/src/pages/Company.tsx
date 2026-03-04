import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, TrendingDown, Users, Briefcase, Star } from "lucide-react";

export default function Company() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-slate-50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl lg:text-6xl font-black tracking-tight mb-6"
          >
            Hire <span className="gradient-text">Teen Talent</span> for Your Business
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get high-quality digital work done by the most innovative and cost-effective student freelancers in the market.
          </p>
          <Button size="lg" className="gradient-button rounded-full px-10 py-7 text-lg h-auto shadow-xl">
            Post a Task Now
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Traditional Hiring is <span className="text-destructive">Expensive</span> & Slow</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <TrendingDown className="text-destructive shrink-0" size={24} />
                  <p className="text-lg text-muted-foreground">High recruitment costs and agency fees for simple digital tasks.</p>
                </div>
                <div className="flex gap-4">
                  <TrendingDown className="text-destructive shrink-0" size={24} />
                  <p className="text-lg text-muted-foreground">Repetitive tasks taking up your core team's valuable time.</p>
                </div>
                <div className="flex gap-4">
                  <TrendingDown className="text-destructive shrink-0" size={24} />
                  <p className="text-lg text-muted-foreground">Difficulty finding fresh, creative perspectives for social media and content.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-primary">The Funngro Solution</h3>
              <p className="text-lg mb-8">Access a curated pool of thousands of smart teenagers ready to tackle your digital projects with enthusiasm and speed.</p>
              <ul className="space-y-4">
                {['Social Media Management', 'Content Writing', 'Research & Data Entry', 'Creative Design'].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-semibold">
                    <CheckCircle className="text-primary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Businesses Love Funngro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-primary mb-4 font-black text-4xl">50%</div>
              <h4 className="text-xl font-bold mb-2">Cost Effective</h4>
              <p className="text-muted-foreground">Reduce your operational costs by delegating tasks to student talent.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-primary mb-4 font-black text-4xl">48h</div>
              <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
              <p className="text-muted-foreground">Our teens are digital natives who work fast and meet deadlines.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-primary mb-4 font-black text-4xl">∞</div>
              <h4 className="text-xl font-bold mb-2">Innovative Ideas</h4>
              <p className="text-muted-foreground">Get fresh perspectives from the generation that defines digital trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Post Task", desc: "List your digital project requirements." },
              { step: 2, title: "Pick Talent", desc: "Choose from interested student freelancers." },
              { step: 3, title: "Review Work", desc: "Collaborate and review the project progress." },
              { step: 4, title: "Pay Securely", desc: "Release payment only after task completion." }
            ].map((item) => (
              <div key={item.step} className="relative text-center p-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold mb-2 text-lg">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-16">Trusted by 1000+ Startups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
              <div className="flex gap-1 mb-4 text-yellow-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-lg italic mb-6">"Funngro has been a game changer for our social media presence. The student we hired brought amazing energy and fresh ideas!"</p>
              <div className="font-bold text-primary">— Founder, TechNova</div>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
              <div className="flex gap-1 mb-4 text-yellow-400">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-lg italic mb-6">"Incredible speed and quality. We've managed to scale our research team without the high overhead of full-time hires."</p>
              <div className="font-bold text-primary">— Marketing Lead, GlowApp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-8">Ready to Scale Your Business with Teen Talent?</h2>
          <Button size="lg" className="bg-white text-primary hover:bg-slate-100 rounded-full px-12 py-7 text-xl h-auto shadow-2xl">
            Hire Your First Student Freelancer
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}