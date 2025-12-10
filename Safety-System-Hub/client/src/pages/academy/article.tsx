import React from "react";
import { Link } from "wouter";
import { 
  ChevronRight, 
  Clock, 
  User, 
  Calendar,
  Share2,
  Bookmark,
  Printer,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ArticleView() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200 sticky top-[73px] z-40 shadow-sm">
           <div className="container mx-auto px-4 py-3 text-xs text-slate-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
              <Link href="/academy"><span className="hover:text-orange-600 cursor-pointer">Academy</span></Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <Link href="/academy/blog"><span className="hover:text-orange-600 cursor-pointer">Articles</span></Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="font-bold text-slate-900 truncate">Fire Safety Signs: The Complete Compliance Guide 2024</span>
           </div>
        </div>

        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <article className="lg:col-span-8">
              {/* Article Header */}
              <header className="mb-8">
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none mb-4 font-bold uppercase tracking-wider">
                  Compliance
                </Badge>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                  Fire Safety Signs: The Complete Compliance Guide 2024
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium border-b border-slate-200 pb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs">SJ</div>
                    <span>Sarah Jenkins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" /> Dec 12, 2024
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" /> 12 min read
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80" 
                  alt="Fire exit sign" 
                  className="w-full h-auto object-cover"
                />
                <div className="bg-slate-50 p-3 text-xs text-slate-500 text-center italic border-t border-slate-100">
                  Proper placement of fire exit signage is critical for ISO 7010 compliance.
                </div>
              </div>

              {/* Content Body */}
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-a:text-orange-600 prose-img:rounded-xl">
                <p className="lead text-xl text-slate-600 font-medium">
                  Ensuring your workplace is compliant with the latest fire safety regulations isn't just a legal requirement—it's a moral imperative. In this guide, we break down everything you need to know about ISO 7010, BS 5499, and the Health and Safety (Safety Signs and Signals) Regulations 1996.
                </p>

                <h3>Why Standardization Matters</h3>
                <p>
                  In an emergency, every second counts. Ambiguity kills. That's why the <strong>ISO 7010</strong> standard was introduced—to ensure that safety signs are instantly recognizable, regardless of language or cultural barriers.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                  <h4 className="text-blue-900 font-bold flex items-center gap-2 mt-0">
                    <Shield className="w-5 h-5" /> Key Takeaway
                  </h4>
                  <p className="text-blue-800 mb-0">
                    If your current fire exit signs feature text only (e.g., just the word "EXIT"), they are likely <strong>non-compliant</strong>. Modern standards require the "running man" symbol.
                  </p>
                </div>

                <h3>The Anatomy of a Compliant Fire Exit Sign</h3>
                <p>
                  A compliant fire exit sign must adhere to specific color and design parameters:
                </p>
                <ul className="list-none space-y-2 pl-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Color:</strong> Safety Green (ISO 3864-4) covering at least 50% of the sign area.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Symbol:</strong> The "Running Man" pictogram moving towards a door.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Contrast:</strong> White symbols/text on a green background.</span>
                  </li>
                </ul>

                <h3>Placement & Visibility Heights</h3>
                <p>
                  Buying the right signs is only half the battle. Installing them correctly is equally important. Signs should be placed at a height where they are clearly visible and not obstructed by furniture or machinery.
                </p>
                
                <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                      <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">1</div>
                      Over-door Signs
                    </div>
                    <p className="text-sm text-slate-500">Should be installed immediately above the exit opening, with the base of the sign between 2.0m and 2.5m from the floor.</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3 text-slate-900 font-bold">
                      <div className="w-8 h-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">2</div>
                      Directional Signs
                    </div>
                    <p className="text-sm text-slate-500">Placed along the escape route at eye level (approx 1.7m) or suspended from ceilings in large open plan areas.</p>
                  </div>
                </div>

                <h3>Common Mistakes to Avoid</h3>
                <p>
                  We frequently see the following errors during site audits:
                </p>
                <ul>
                   <li>Mixing old text-only signs with new ISO 7010 symbols.</li>
                   <li>Placing "Fire Door Keep Shut" signs on the wrong side of the door.</li>
                   <li>Using photoluminescent signs in areas with insufficient charging light.</li>
                </ul>

                <h3>Conclusion</h3>
                <p>
                  Regular audits of your fire safety signage are essential. Regulations evolve, and signs degrade over time. If you're unsure about your current compliance status, use our free audit tool below.
                </p>
              </div>

              {/* CTA Box */}
              <div className="bg-slate-900 rounded-xl p-8 mt-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div>
                  <h3 className="text-2xl font-black mb-2 text-white">Need a Safety Signage Audit?</h3>
                  <p className="text-slate-300">Download our free 2024 compliance checklist template.</p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 font-bold px-8 h-12 whitespace-nowrap">
                  Download Checklist
                </Button>
              </div>

              {/* Author Bio */}
              <div className="bg-slate-50 rounded-xl p-8 mt-12 flex flex-col md:flex-row gap-6 items-start border border-slate-200">
                <div className="w-16 h-16 rounded-full bg-slate-200 shrink-0">
                  {/* Avatar placeholder */}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">About Sarah Jenkins</h4>
                  <p className="text-slate-500 text-sm mt-1 mb-3">
                    Sarah is a NEBOSH certified safety consultant with over 15 years of experience in industrial compliance. She specializes in fire safety systems and emergency evacuation planning.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-orange-600 font-bold">View all articles by Sarah &rarr;</Button>
                </div>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Table of Contents */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-32">
                 <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider">In This Article</h4>
                 <nav className="space-y-1">
                    {[
                      "Why Standardization Matters",
                      "The Anatomy of a Compliant Sign",
                      "Placement & Visibility Heights",
                      "Common Mistakes to Avoid",
                      "Conclusion"
                    ].map((item, i) => (
                       <a key={i} href="#" className="block py-2 px-3 rounded text-sm text-slate-600 hover:bg-slate-50 hover:text-orange-600 transition-colors border-l-2 border-transparent hover:border-orange-500">
                          {item}
                       </a>
                    ))}
                 </nav>
                 
                 <Separator className="my-6" />
                 
                 <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="flex-1"><Share2 className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="flex-1"><Bookmark className="w-4 h-4" /></Button>
                    <Button variant="outline" size="icon" className="flex-1"><Printer className="w-4 h-4" /></Button>
                 </div>
              </div>

              {/* Related Products Widget */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                 <h4 className="font-bold text-slate-900 mb-4 uppercase text-sm tracking-wider flex items-center gap-2">
                   <Shield className="w-4 h-4 text-orange-500" /> Related Products
                 </h4>
                 
                 <div className="space-y-4">
                    {[
                      { name: "Fire Exit Running Man Right", price: "£6.95", image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=200&q=80" },
                      { name: "Fire Action Notice", price: "£8.50", image: "https://images.unsplash.com/photo-1626125345510-4603468eedfb?auto=format&fit=crop&w=200&q=80" },
                      { name: "Fire Assembly Point", price: "£12.95", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=200&q=80" }
                    ].map((product, i) => (
                       <div key={i} className="flex gap-3 group cursor-pointer">
                          <div className="w-16 h-16 bg-slate-100 rounded border border-slate-200 flex items-center justify-center overflow-hidden">
                             <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                             <h5 className="font-bold text-slate-900 text-sm leading-tight mb-1 group-hover:text-orange-600 transition-colors">{product.name}</h5>
                             <div className="text-xs text-slate-500 mb-1">Rigid Plastic • 300x100mm</div>
                             <div className="font-bold text-slate-900">{product.price}</div>
                          </div>
                       </div>
                    ))}
                 </div>
                 
                 <Button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 font-bold text-xs uppercase">
                    Shop Fire Safety
                 </Button>
              </div>

              {/* Newsletter */}
              <div className="bg-orange-500 rounded-xl p-6 text-white shadow-lg">
                 <Mail className="w-8 h-8 mb-4 opacity-80" />
                 <h4 className="font-black text-xl mb-2">Weekly Safety Tips</h4>
                 <p className="text-orange-100 text-sm mb-4">Join 25,000+ safety managers receiving our weekly compliance updates.</p>
                 <div className="space-y-2">
                    <input type="email" placeholder="Enter your email" className="w-full h-10 px-3 rounded border-none text-slate-900 placeholder:text-slate-400 text-sm" />
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 font-bold text-xs uppercase">Subscribe</Button>
                 </div>
              </div>

            </aside>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
