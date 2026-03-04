import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-black gradient-text tracking-tighter mb-4 block">FUNNGRO</span>
            <p className="text-muted-foreground max-w-sm">
              The smartest platform for teen talent. Connecting innovative businesses with the next generation of digital workers.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/company" className="hover:text-primary">For Companies</Link></li>
              <li><Link href="/teen" className="hover:text-primary">For Teens</Link></li>
              <li><Link href="/" className="hover:text-primary">How it works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Funngro. All rights reserved. Made for smart talent.
        </div>
      </div>
    </footer>
  );
}