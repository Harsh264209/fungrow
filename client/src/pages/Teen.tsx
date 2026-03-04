import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Zap, Lightbulb, PenTool, Database, Briefcase } from "lucide-react";

export default function Teen() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]"
            >
              Earn While <br /> <span className="gradient-text">You Learn</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Unlock your potential. Get paid to work on real projects, build a professional portfolio, and learn how to manage money—all while you're still in school.
            </p>
            <Button size="lg" className="gradient-button rounded-full px-10 py-7 text-xl h-auto">
              Download the App
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Join Funngro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border rounded-3xl hover:border-primary transition-colors group">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Real Certificates</h3>
              <p className="text-muted-foreground">Earn professional certifications and recommendation letters from the companies you work with.</p>
            </div>
            <div className="p-8 border border-border rounded-3xl hover:border-primary transition-colors group">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Financial Independence</h3>
              <p className="text-muted-foreground">Start your journey to financial freedom by earning your first income through smart work.</p>
            </div>
            <div className="p-8 border border-border rounded-3xl hover:border-primary transition-colors group">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Future-Proof Skills</h3>
              <p className="text-muted-foreground">Learn high-demand digital skills like content creation, data analysis, and marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Skills You Can Offer</h2>
            <p className="text-muted-foreground">What are you good at? Turn your hobbies into professional services.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <PenTool size={24} />, name: "Content Writing" },
              { icon: <Zap size={24} />, name: "Social Media" },
              { icon: <Database size={24} />, name: "Data Analysis" },
              { icon: <Briefcase size={24} />, name: "Market Research" },
            ].map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-2xl text-center shadow-sm border border-slate-100">
                <div className="text-primary flex justify-center mb-4">{skill.icon}</div>
                <div className="font-bold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold mb-8">
            <ShieldCheck size={20} />
            100% Safe & Secure
          </div>
          <h2 className="text-3xl font-bold mb-6">Safety is Our Priority</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Funngro provides a protected environment for teenagers. All companies are verified, projects are monitored, and payments are handled securely through our escrow system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">1</div>
              <div>
                <h4 className="font-bold">Verified Businesses</h4>
                <p className="text-muted-foreground text-sm">We only work with trusted companies and registered startups.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold">2</div>
              <div>
                <h4 className="font-bold">Privacy Protection</h4>
                <p className="text-muted-foreground text-sm">Your personal data and school info are never shared with anyone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-12 mb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px]" />
        <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">Start Your Professional Journey Today</h2>
          <p className="text-xl text-slate-400 mb-10">Join thousands of smart teens who are already building their futures. Available on iOS and Android.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-button rounded-xl px-10 py-7 text-lg h-auto">App Store</Button>
            <Button size="lg" variant="outline" className="rounded-xl px-10 py-7 text-lg border-white/20 text-white hover:bg-white/5 h-auto">Play Store</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}