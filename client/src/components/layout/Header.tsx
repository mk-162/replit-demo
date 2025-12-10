import React from "react";
import { Link } from "wouter";
import { 
  Shield, 
  ShoppingCart, 
  Search, 
  Menu, 
  Package, 
  FileText, 
  CheckCircle2,
  Truck,
  Clock,
  Settings,
  Phone,
  Mail,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <>
      {/* Top Bar - Dark Navy */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
              <Phone className="h-3 w-3 text-orange-500" /> 
              <span className="hidden sm:inline">Phone:</span> 
              <span className="text-white font-bold tracking-wide">01246 386 126</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer hidden sm:flex">
              <Mail className="h-3 w-3 text-orange-500" /> 
              sales@safetysignhub.com
            </span>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              <FileText className="h-3 w-3" /> Request Quote
            </span>
            <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              <User className="h-3 w-3" /> Trade Account
            </span>
          </div>
        </div>
      </div>

      {/* Main Header - Deep Navy with White Text */}
      <header className="bg-[#1e293b] text-white sticky top-0 z-50 shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            
            {/* Logo Area */}
            <div className="flex flex-col shrink-0">
               <Link href="/">
                 <div className="flex items-center gap-2 cursor-pointer">
                   <div className="bg-orange-500 p-1.5 rounded-sm shadow-lg shadow-orange-500/20">
                     <Shield className="h-7 w-7 text-white" fill="currentColor" />
                   </div>
                   <div className="leading-none">
                     <h1 className="text-2xl font-black tracking-tight text-white">
                       SafetySign<span className="text-orange-500">Hub</span>
                     </h1>
                     <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-0.5 ml-0.5">
                       by GTSE
                     </div>
                   </div>
                 </div>
               </Link>
            </div>

            {/* Search - High Prominence Center */}
            <div className="flex-1 max-w-3xl">
              <div className="flex w-full shadow-lg shadow-black/20 rounded-md overflow-hidden group focus-within:ring-2 focus-within:ring-orange-500 transition-all">
                <div className="relative w-full">
                  <Input 
                    placeholder="Search over 25,000 safety products..." 
                    className="w-full pl-5 pr-10 h-12 border-0 rounded-none focus-visible:ring-0 text-slate-900 bg-white placeholder:text-slate-400 text-base" 
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                </div>
                <div className="bg-orange-500 h-12 px-4 flex items-center justify-center border-l border-orange-600">
                    <div className="p-1 border-2 border-white/30 rounded">
                        <Package className="h-5 w-5 text-white" />
                    </div>
                </div>
              </div>
            </div>

            {/* Account & Cart */}
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex items-center gap-3 cursor-pointer group">
                 <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-slate-700 transition-colors">
                    <User className="h-6 w-6 text-slate-200" />
                 </div>
                 <div className="flex flex-col text-sm hidden xl:flex">
                    <span className="text-slate-400 text-xs">Welcome</span>
                    <span className="font-bold text-white">Sign In / Register</span>
                 </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden lg:block"></div>

              <div className="flex items-center gap-3 cursor-pointer group">
                 <div className="relative bg-orange-500 p-2 rounded-full shadow-lg shadow-orange-500/20 group-hover:bg-orange-400 transition-colors">
                    <ShoppingCart className="h-6 w-6 text-white" />
                    <span className="absolute -top-1 -right-1 bg-white text-orange-600 text-[10px] font-black h-4 w-4 flex items-center justify-center rounded-full border-2 border-[#1e293b]">3</span>
                 </div>
                 <div className="flex flex-col text-sm hidden xl:flex">
                    <span className="text-slate-400 text-xs">Basket</span>
                    <span className="font-bold text-white">£124.50</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Orange High Vis */}
        <div className="bg-orange-500 shadow-md">
          <div className="container mx-auto px-4">
             <nav className="flex items-center text-sm font-bold text-white overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 bg-orange-600 px-6 py-3 mr-4 cursor-pointer hover:bg-orange-700 transition-colors shadow-inner">
                   <Menu className="h-5 w-5" />
                   <span className="uppercase tracking-wide">All Departments</span>
                </div>
                {['Custom Signs', 'Warning Signs', 'Fire Safety', 'First Aid', 'PPE & Workwear', 'Lockout Tagout', 'Spill Control'].map((item) => (
                  <a key={item} href="#" className="px-5 py-3 hover:bg-orange-400 transition-colors whitespace-nowrap border-r border-orange-400/30 first:border-l">
                    {item}
                  </a>
                ))}
                
                {/* Academy Link Added */}
                <Link href="/academy">
                  <span className="px-5 py-3 hover:bg-orange-400 transition-colors whitespace-nowrap border-r border-orange-400/30 cursor-pointer flex items-center gap-1 bg-orange-600/20">
                    <Shield className="h-4 w-4" /> Academy
                  </span>
                </Link>

                <div className="flex-1"></div>
                <a href="#" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 transition-colors whitespace-nowrap flex items-center gap-2 shadow-inner">
                   <FileText className="h-4 w-4" /> Quick Quote
                </a>
             </nav>
          </div>
        </div>
      </header>
      
      {/* Trust Bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm py-3">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold text-slate-600">
           <div className="flex items-center justify-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-orange-500" />
              <span>OSHA & ANSI Compliant Signs</span>
           </div>
           <div className="flex items-center justify-center gap-3 border-l border-slate-100">
              <Truck className="h-5 w-5 text-orange-500" />
              <span>Free Shipping on Orders $99+</span>
           </div>
           <div className="flex items-center justify-center gap-3 border-l border-slate-100">
              <Settings className="h-5 w-5 text-orange-500" />
              <span>Custom Signs Available</span>
           </div>
           <div className="flex items-center justify-center gap-3 border-l border-slate-100">
              <Clock className="h-5 w-5 text-orange-500" />
              <span>24/7 Expert Support</span>
           </div>
        </div>
      </div>
    </>
  );
}
