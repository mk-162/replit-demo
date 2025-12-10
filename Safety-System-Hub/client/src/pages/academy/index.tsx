import React from "react";
import { Link } from "wouter";
import { 
  Shield, 
  Search, 
  BookOpen, 
  Scale, 
  Factory, 
  Wrench, 
  Package, 
  Download, 
  Video, 
  MessageCircle, 
  ChevronRight,
  ArrowRight,
  Clock,
  CheckCircle2,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function AcademyHome() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      
      <main className="flex-1">
        
        {/* Academy Hero */}
        <div className="bg-[#1e293b] text-white py-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ 
               backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-orange-400 border border-white/20">
               <Shield className="w-3 h-3" /> Safety Sign Academy
             </div>
             
             <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
               The UK's Most Comprehensive <br/><span className="text-orange-500">Safety Signage Resource</span>
             </h1>
             
             <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
               Expert guidance, compliance tools, and free downloads to help you keep your workplace safe and legally compliant.
             </p>
             
             <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input 
                    placeholder="Search knowledge base..." 
                    className="h-12 pl-10 bg-white text-slate-900 border-0" 
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>
                <Button className="h-12 bg-orange-500 hover:bg-orange-600 font-bold text-white px-8">
                   Browse Topics
                </Button>
             </div>
          </div>
        </div>
        
        {/* Quick Start Cards */}
        <div className="container mx-auto px-4 -mt-8 relative z-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  icon: BookOpen, 
                  title: "New to Safety Signs?", 
                  desc: "Start with our complete beginner's guide", 
                  color: "bg-blue-600",
                  link: "/academy/getting-started"
                },
                { 
                  icon: Scale, 
                  title: "Check Compliance", 
                  desc: "Legal requirements & regulations explained", 
                  color: "bg-indigo-600",
                  link: "#"
                },
                { 
                  icon: Factory, 
                  title: "Industry Guides", 
                  desc: "Sector-specific advice & standards", 
                  color: "bg-slate-700",
                  link: "#"
                },
                { 
                  icon: Search, 
                  title: "Find the Right Signs", 
                  desc: "Browse by type, use, or location", 
                  color: "bg-emerald-600",
                  link: "#"
                },
              ].map((card, i) => (
                <Link key={i} href={card.link}>
                  <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group h-full flex flex-col">
                    <div className={`${card.color} w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform`}>
                        <card.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{card.title}</h3>
                    <p className="text-slate-500 text-sm mb-4 flex-1">{card.desc}</p>
                    <div className="text-orange-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
        
        {/* Featured Tools Banner */}
        <div className="container mx-auto px-4 mt-12">
           <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                 <div>
                    <div className="flex items-center gap-2 mb-2 text-orange-100 font-bold text-xs uppercase tracking-widest">
                       <Wrench className="w-4 h-4" /> Interactive Compliance Tools
                    </div>
                    <h2 className="text-3xl font-black mb-4">Simplify Your Safety Audit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                       <div className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-orange-200" /> What Signs Do I Need? Wizard
                       </div>
                       <div className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-orange-200" /> Site Layout Planner
                       </div>
                       <div className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-orange-200" /> Sign Specification Calculator
                       </div>
                       <div className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-orange-200" /> Compliance Checker
                       </div>
                    </div>
                 </div>
                 
                 <Button className="bg-white text-orange-600 hover:bg-orange-50 font-bold h-12 px-6 shadow-xl border-b-4 border-orange-200 active:border-b-0 active:translate-y-1 transition-all">
                    Explore All Tools <ArrowRight className="w-4 h-4 ml-2" />
                 </Button>
              </div>
           </div>
        </div>
        
        {/* Main Content Categories */}
        <div className="container mx-auto px-4 mt-16">
           <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1.5 bg-slate-900 rounded-full"></div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Browse By Topic</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Sign Types & Meanings", 
                  icon: "🚦", 
                  items: ["Fire Safety Signs", "Warning Signs", "Mandatory Signs", "Prohibition Signs"],
                  action: "Explore"
                },
                { 
                  title: "Legal & Compliance", 
                  icon: "⚖️", 
                  items: ["UK Laws & Regulations", "ISO 7010 Standards", "HSE Guidelines", "Industry Rules"],
                  action: "Learn"
                },
                { 
                  title: "Industry Guides", 
                  icon: "🏭", 
                  items: ["Construction Sites", "Office Workplaces", "Schools & Education", "Healthcare Facilities"],
                  action: "View"
                },
                { 
                  title: "Install & Maintain", 
                  icon: "🔧", 
                  items: ["How to Install Signs", "Maintenance Guide", "Replacement Rules", "Inspection Checklist"],
                  action: "Guide"
                },
                { 
                  title: "Material & Tech", 
                  icon: "📦", 
                  items: ["Material Guide", "Size Calculator", "Durability Guide", "Photoluminescent Info"],
                  action: "Browse"
                },
                { 
                  title: "Download Resources", 
                  icon: "📥", 
                  items: ["Signage Templates", "Audit Checklists", "Compliance Forms", "Safety Policies"],
                  action: "Access"
                },
                { 
                  title: "Video Tutorials", 
                  icon: "🎬", 
                  items: ["Installation Guides", "Standard Explainers", "Industry Examples", "Best Practices"],
                  action: "Watch"
                },
                { 
                  title: "Ask The Expert", 
                  icon: "💬", 
                  items: ["Frequently Asked Questions", "Contact Support", "Live Chat", "Consultation"],
                  action: "Ask"
                },
              ].map((cat, i) => (
                <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-orange-200 group h-full">
                  <CardHeader className="pb-3 border-b border-slate-50">
                     <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="text-2xl">{cat.icon}</span> {cat.title}
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 flex flex-col h-full">
                     <ul className="space-y-2 mb-6 flex-1">
                        {cat.items.map((item, j) => (
                          <li key={j} className="text-sm text-slate-600 flex items-start gap-2 hover:text-orange-600 cursor-pointer">
                             <span className="text-slate-300 mt-1">•</span> {item}
                          </li>
                        ))}
                     </ul>
                     <Button variant="outline" className="w-full border-slate-200 hover:border-orange-500 hover:text-orange-600 group-hover:bg-orange-50 font-bold text-xs uppercase">
                        {cat.action} <ChevronRight className="w-3 h-3 ml-1" />
                     </Button>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>
        
        {/* Popular Articles & Latest Updates */}
        <div className="container mx-auto px-4 mt-16 mb-20">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Popular Guides */}
              <div className="lg:col-span-2">
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-1.5 bg-yellow-500 rounded-full"></div>
                       <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Most Popular Guides</h2>
                    </div>
                    <Button variant="link" className="text-orange-600 font-bold">View All</Button>
                 </div>
                 
                 <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    {[
                      { title: "Fire Safety Signs: Complete Compliance Guide", readTime: "12 min", views: "15k" },
                      { title: "What Signs Do I Need? Quick Reference Chart", readTime: "5 min", views: "12k" },
                      { title: "ISO 7010: Understanding the New Symbol Standards", readTime: "8 min", views: "10k" },
                      { title: "Construction Site Safety Signs: Legal Requirements", readTime: "10 min", views: "8.5k" },
                      { title: "Photoluminescent vs Standard Signs: Which to Choose", readTime: "6 min", views: "7k" },
                    ].map((article, i) => (
                       <div key={i} className="flex items-center gap-4 p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer group">
                          <div className="text-2xl font-black text-slate-200 w-8 text-center group-hover:text-orange-200">{i + 1}</div>
                          <div className="flex-1">
                             <h3 className="font-bold text-slate-800 text-lg group-hover:text-orange-600 transition-colors">{article.title}</h3>
                             <div className="flex items-center gap-4 mt-1 text-xs text-slate-400 font-medium">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                                <span>•</span>
                                <span>{article.views} views</span>
                             </div>
                          </div>
                          <ChevronRight className="text-slate-300 group-hover:text-orange-500" />
                       </div>
                    ))}
                 </div>
              </div>
              
              {/* Latest Updates */}
              <div>
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-1.5 bg-blue-500 rounded-full"></div>
                       <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Latest Updates</h2>
                    </div>
                    <Button variant="link" className="text-orange-600 font-bold">All News</Button>
                 </div>
                 
                 <div className="bg-slate-900 text-slate-300 rounded-xl p-6 shadow-lg">
                    <ul className="space-y-6">
                       {[
                         { title: "New Tool: Site Layout & Sign Positioning Planner", date: "Dec 24", type: "New Tool", color: "text-green-400" },
                         { title: "Guide Updated: Fire Door Sign Requirements 2024", date: "Nov 24", type: "Update", color: "text-blue-400" },
                         { title: "New Resource: Construction Site Audit Template", date: "Nov 24", type: "Download", color: "text-purple-400" },
                         { title: "Video Added: How to Install Fire Exit Signs", date: "Oct 24", type: "Video", color: "text-red-400" },
                       ].map((update, i) => (
                          <li key={i} className="border-b border-slate-700 pb-4 last:border-0 last:pb-0">
                             <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${update.color}`}>{update.type}</div>
                             <h4 className="font-bold text-white leading-tight hover:text-orange-400 cursor-pointer transition-colors">{update.title}</h4>
                             <div className="text-xs text-slate-500 mt-2">{update.date}</div>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
              
           </div>
        </div>

      </main>
      
      <Footer />
    </div>
  );
}
