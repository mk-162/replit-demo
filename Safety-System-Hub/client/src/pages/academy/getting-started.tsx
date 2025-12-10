import React from "react";
import { Link } from "wouter";
import { 
  Shield, 
  ChevronRight,
  Clock,
  CheckCircle2,
  FileText,
  Download,
  AlertCircle,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      
      <main className="flex-1">
        
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
           <div className="container mx-auto px-4 py-3 text-xs text-slate-500 flex items-center gap-2">
              <Link href="/academy"><span className="hover:text-orange-600 cursor-pointer">Academy</span></Link>
              <ChevronRight className="w-3 h-3" />
              <span className="font-bold text-slate-900">Getting Started</span>
           </div>
        </div>
        
        {/* Article Header */}
        <div className="bg-white border-b border-slate-200 pb-12 pt-12">
           <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                 <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none font-bold uppercase tracking-wide">Beginner's Course</Badge>
                 <span className="text-slate-400 text-sm font-medium flex items-center gap-1"><Clock className="w-3 h-3" /> ~1.5 hours total</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Getting Started with Safety Signs
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                New to workplace safety signage? Start here. Our step-by-step guides will take you from beginner to confident in just a few hours. Learn the legal basics, understand sign types, and ensure compliance.
              </p>
              
              <div className="flex items-center gap-4">
                 <Button className="h-12 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded shadow-lg shadow-orange-500/20">
                    Start Learning Path
                 </Button>
                 <Button variant="outline" className="h-12 px-6 font-bold text-slate-600 hover:text-orange-600">
                    <Download className="w-4 h-4 mr-2" /> Download Syllabus
                 </Button>
              </div>
           </div>
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl -mt-8 mb-20">
           
           {/* Learning Path Card */}
           <Card className="shadow-xl border-slate-200 overflow-hidden mb-12">
              <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                 <div>
                    <h3 className="font-black text-xl uppercase tracking-wide flex items-center gap-2">
                       <Shield className="w-5 h-5 text-orange-500" /> Learning Path
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">Complete these steps in order</p>
                 </div>
                 <div className="text-right hidden sm:block">
                    <div className="text-2xl font-black text-orange-500">0%</div>
                    <div className="text-xs text-slate-400 uppercase font-bold">Completed</div>
                 </div>
              </div>
              
              <div className="bg-slate-50 p-6 border-b border-slate-200">
                 <div className="flex justify-between text-xs font-bold text-slate-500 uppercase mb-2">
                    <span>Progress</span>
                    <span>0/5 Steps</span>
                 </div>
                 <Progress value={0} className="h-2 bg-slate-200" indicatorClassName="bg-orange-500" />
              </div>
              
              <CardContent className="p-0">
                 {[
                   { step: 1, title: "Safety Signs 101", desc: "What they are, why they matter, legal basics", time: "15 min", status: "Start" },
                   { step: 2, title: "The 5 Types of Signs", desc: "Fire, Warning, Mandatory, Prohibition, Safe Condition", time: "20 min", status: "Locked" },
                   { step: 3, title: "Your Legal Obligations", desc: "UK law, who's responsible, penalties", time: "25 min", status: "Locked" },
                   { step: 4, title: "Choosing the Right Signs", desc: "Risk assessment, placement, quantity", time: "15 min", status: "Locked" },
                   { step: 5, title: "Installation Guide", desc: "Heights, positions, visibility rules", time: "10 min", status: "Locked" },
                 ].map((item, i) => (
                    <div key={i} className={`p-6 border-b border-slate-100 last:border-0 flex gap-4 items-start ${item.status === 'Locked' ? 'opacity-60 bg-slate-50' : 'hover:bg-orange-50 cursor-pointer group transition-colors'}`}>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 ${item.status === 'Locked' ? 'bg-slate-200 text-slate-400' : 'bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors'}`}>
                          {item.step}
                       </div>
                       <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg group-hover:text-orange-700">{item.title}</h4>
                          <p className="text-slate-500 text-sm mb-2">{item.desc}</p>
                          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                             <Clock className="w-3 h-3" /> {item.time} read
                          </div>
                       </div>
                       <div className="self-center">
                          {item.status === 'Start' ? (
                             <Button size="sm" className="bg-orange-500 hover:bg-orange-600 font-bold uppercase text-xs">Start <ArrowRight className="w-3 h-3 ml-1" /></Button>
                          ) : (
                             <div className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1"><Shield className="w-3 h-3" /> Locked</div>
                          )}
                       </div>
                    </div>
                 ))}
                 
                 <div className="p-6 bg-green-50 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 shrink-0">
                       <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-green-900">Certificate of Completion</h4>
                       <p className="text-green-700 text-sm">Unlock your certificate and compliance checklist after completing all steps.</p>
                    </div>
                 </div>
              </CardContent>
           </Card>
           
           {/* Quick Reference Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-500" /> Quick Reference Guides
                 </h3>
                 <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-blue-50 cursor-pointer group transition-colors">
                       <div className="font-semibold text-slate-700 group-hover:text-blue-700">Quick Start Checklist</div>
                       <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-blue-50 cursor-pointer group transition-colors">
                       <div className="font-semibold text-slate-700 group-hover:text-blue-700">5-Minute Compliance Check</div>
                       <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-blue-50 cursor-pointer group transition-colors">
                       <div className="font-semibold text-slate-700 group-hover:text-blue-700">Site Survey Template</div>
                       <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    </div>
                 </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-purple-500" /> Common Questions
                 </h3>
                 <ul className="space-y-3">
                    {[
                      "What signs are legally required?",
                      "How many signs do I need?",
                      "Where should signs be placed?",
                      "What's the best material for my needs?",
                      "How often should signs be replaced?"
                    ].map((q, i) => (
                       <li key={i} className="flex items-start gap-2 text-sm text-slate-600 hover:text-orange-600 cursor-pointer">
                          <span className="text-slate-300 mt-0.5">•</span> {q}
                       </li>
                    ))}
                 </ul>
                 <Button variant="link" className="mt-2 text-orange-600 font-bold p-0 h-auto">See All FAQs &rarr;</Button>
              </div>
           </div>
           
           {/* Need Help CTA */}
           <div className="bg-[#1e293b] rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-black mb-2">Still Unsure Where to Start?</h3>
              <p className="text-slate-400 mb-6 max-w-lg mx-auto">Our safety experts are available 24/7 to help you perform a risk assessment and choose the right signage.</p>
              <div className="flex justify-center gap-4">
                 <Button className="bg-orange-500 hover:bg-orange-600 font-bold">Chat with an Expert</Button>
                 <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-white/10 hover:text-white">Call 0800 123 4567</Button>
              </div>
           </div>
           
        </div>
        
      </main>
      
      <Footer />
    </div>
  );
}
