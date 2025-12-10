import React from "react";
import { Link } from "wouter";
import { 
  Shield, 
  ShoppingCart, 
  Search, 
  Menu, 
  ChevronRight, 
  Star, 
  Package, 
  Clock, 
  FileText, 
  CheckCircle2,
  HardHat,
  Truck,
  ArrowRight,
  Phone,
  Mail,
  User,
  AlertTriangle,
  LogOut,
  Info,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import warehouseBg from '@assets/generated_images/industrial_warehouse_interior_with_pallet_racking.png'
import safetySigns from '@assets/generated_images/safety_sign_collage_on_wall.png'
import workerPpe from '@assets/generated_images/industrial_worker_in_ppe_using_tablet.png'

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
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
               <div className="flex items-center gap-2">
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
              <span>Free Shipping on Orders £99+</span>
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

      <main className="space-y-16 pb-20">
        
        {/* Hero Section - Immersive with Overlay */}
        <section className="relative bg-[#0f172a] h-[500px] flex items-center overflow-hidden">
          {/* Background Image Placeholder - would be the warehouse generated image */}
          <div className="absolute inset-0 bg-slate-800">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent z-10"></div>
            {/* Image would go here with object-cover */}
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay"
              style={{ backgroundImage: `url(${warehouseBg})` }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <Badge className="bg-orange-500 hover:bg-orange-500 text-white border-none rounded-sm px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-lg shadow-orange-500/20">
                 UK's most Helpful Safety Supplier
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight drop-shadow-xl">
                Maximum Safety.<br/>
                <span className="text-orange-500">Zero Compromise.</span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-lg leading-relaxed font-medium">
                Equip your facility with industrial-grade signage and safety equipment. Fully compliant with OSHA/ANSI standards. Same-day shipping on stock items.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button className="h-14 px-8 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg rounded shadow-xl shadow-orange-900/20 border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 transition-all uppercase tracking-wide">
                  Get Instant Quote
                </Button>
                <Button variant="outline" className="h-14 px-8 border-2 border-white/20 text-white hover:bg-white/10 hover:text-white font-bold text-lg rounded backdrop-blur-sm">
                  View Catalog
                </Button>
              </div>
              
              <div className="pt-6 flex items-center gap-6 text-slate-400 text-sm font-medium">
                 <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                       {[1,2,3,4].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0f172a] flex items-center justify-center text-[10px] text-white font-bold">
                            {String.fromCharCode(64+i)}
                         </div>
                       ))}
                    </div>
                    <span>Trusted by 50,000+ Companies</span>
                 </div>
                 <div className="h-4 w-px bg-white/20"></div>
                 <div className="flex gap-1 text-orange-500">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    <span className="text-slate-400 ml-1">4.9/5 Rating</span>
                 </div>
              </div>
            </div>

            {/* Right Side Cards - Floating Category Quick Links */}
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-in fade-in zoom-in duration-700 delay-200">
               {[
                 { title: "Warning Signs", icon: AlertTriangle, color: "text-yellow-500", img: "https://images.unsplash.com/photo-1626125345510-4603468eedfb?auto=format&fit=crop&w=500&q=80" },
                 { title: "Exit Signs", icon: LogOut, color: "text-red-500", img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=500&q=80" },
                 { title: "Regulatory", icon: Info, color: "text-blue-500", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=500&q=80" },
                 { title: "Custom Signs", icon: Settings, color: "text-slate-700", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80" }
               ].map((cat, i) => (
                 <div key={i} className="bg-white rounded-lg p-4 shadow-2xl shadow-black/30 transform hover:-translate-y-1 transition-all cursor-pointer group">
                    <div className="h-32 bg-slate-100 rounded mb-4 overflow-hidden relative">
                       <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-[2px]">
                          <cat.icon className={`w-12 h-12 ${cat.color} drop-shadow-sm`} />
                       </div>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-orange-600 transition-colors">{cat.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                       <span className="text-xs font-semibold text-slate-500">Shop Now</span>
                       <div className="bg-orange-100 text-orange-600 p-1 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Shop By Category</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-slate-500 mt-4">Browse our extensive range of safety signage and equipment. All products manufactured to meet rigorous industrial standards.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
             {[
               { name: "Safety Signs", count: "12,400+" },
               { name: "Traffic Control", count: "3,200+" },
               { name: "Lockout Tagout", count: "850+" },
               { name: "PPE", count: "5,100+" },
               { name: "First Aid", count: "1,200+" },
               { name: "Spill Control", count: "450+" },
             ].map((cat, i) => (
               <div key={i} className="group bg-white border border-slate-200 rounded-lg p-6 text-center hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 transition-all cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="w-16 h-16 bg-slate-50 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                     <Shield className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">{cat.name}</h3>
                  <p className="text-xs text-slate-400 font-medium">{cat.count} Products</p>
               </div>
             ))}
          </div>
        </section>

        {/* Featured Products Carousel Mockup */}
        <section className="bg-slate-50 py-16 border-y border-slate-200">
           <div className="container mx-auto px-4">
              <div className="flex justify-between items-end mb-10">
                 <div>
                    <h2 className="text-2xl font-black text-slate-900">Best Selling Essentials</h2>
                    <p className="text-slate-500 mt-1">Most popular items this week</p>
                 </div>
                 <Button variant="outline" className="hidden sm:flex border-slate-300 text-slate-700 hover:text-orange-600 hover:border-orange-500 font-bold">
                    View All Bestsellers
                 </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                 {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white">
                       <div className="relative aspect-square p-8 flex items-center justify-center bg-white overflow-hidden border-b border-slate-100">
                          <div className="absolute top-3 left-3 z-10">
                             <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200 font-bold text-[10px] px-2">IN STOCK</Badge>
                          </div>
                          {item === 2 && (
                             <div className="absolute top-3 right-3 z-10">
                                <Badge className="bg-red-500 hover:bg-red-600 border-none font-bold text-[10px] px-2">-15%</Badge>
                             </div>
                          )}
                          <img 
                             src={`https://images.unsplash.com/photo-${item === 1 ? '1581091226825-a6a2a5aee158' : item === 2 ? '1504328345606-18aff0849309' : item === 3 ? '1535713875002-d1d0cf377fde' : '1585776245991-cf79ddb0a3b9'}?auto=format&fit=crop&w=400&q=80`} 
                             alt="Product" 
                             className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                             <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 font-bold text-xs uppercase tracking-wide">
                                Quick Add
                             </Button>
                          </div>
                       </div>
                       <CardContent className="p-4">
                          <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">Category Name</div>
                          <h3 className="font-bold text-slate-900 leading-tight mb-2 h-10 line-clamp-2 group-hover:text-orange-600 transition-colors">
                             Heavy Duty Industrial Safety Sign - Aluminum Composite 3mm
                          </h3>
                          <div className="flex items-center gap-1 mb-3">
                             {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                             <span className="text-xs text-slate-400 ml-1">(24)</span>
                          </div>
                          <div className="flex items-end gap-2">
                             <span className="text-lg font-black text-slate-900">£24.99</span>
                             {item === 2 && <span className="text-sm text-slate-400 line-through mb-1">£29.99</span>}
                          </div>
                       </CardContent>
                    </Card>
                 ))}
              </div>
           </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="container mx-auto px-4">
           <div className="bg-[#1e293b] rounded-2xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                 <div className="text-center md:text-left space-y-4">
                    <h3 className="text-2xl font-black mb-6 text-white">Why Professionals <br/>Trust <span className="text-orange-500">SafetySignHub</span></h3>
                    <div className="flex items-center gap-4">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/OSHA_logo.svg/1200px-OSHA_logo.svg.png" className="h-12 bg-white p-1 rounded opacity-90" alt="OSHA" />
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/ANSI_logo.svg/1200px-ANSI_logo.svg.png" className="h-12 bg-white p-1 rounded opacity-90" alt="ANSI" />
                    </div>
                 </div>

                 <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                       <div className="bg-orange-500/20 p-3 rounded-lg h-fit">
                          <CheckCircle2 className="w-8 h-8 text-orange-500" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1 text-white">Compliance Guaranteed</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">Every sign we manufacture meets the latest OSHA 1910.145 and ANSI Z535 standards.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-orange-500/20 p-3 rounded-lg h-fit">
                          <Truck className="w-8 h-8 text-orange-500" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1 text-white">Fast Shipping</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">98% of orders ship same-day. Free shipping on all orders over £99.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-orange-500/20 p-3 rounded-lg h-fit">
                          <Settings className="w-8 h-8 text-orange-500" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1 text-white">Custom Manufacturing</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">Need specific wording or branding? We design and manufacture custom signs in-house.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="bg-orange-500/20 p-3 rounded-lg h-fit">
                          <Phone className="w-8 h-8 text-orange-500" />
                       </div>
                       <div>
                          <h4 className="font-bold text-lg mb-1 text-white">Expert Support</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">Real safety experts ready to help you find the right compliance solutions.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </main>

      {/* Footer - Dense & Dark */}
      <footer className="bg-[#0f172a] text-slate-400 pt-16 pb-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-2 space-y-6">
                 <div className="flex items-center gap-2">
                    <Shield className="h-8 w-8 text-orange-500" fill="currentColor" />
                    <span className="text-2xl font-black text-white">SafetySign<span className="text-orange-500">Hub</span></span>
                 </div>
                 <p className="text-sm max-w-sm leading-relaxed">
                    The leading provider of industrial safety signage and equipment. Dedicated to keeping your workplace safe, compliant, and productive.
                 </p>
                 <div className="flex gap-4 pt-2">
                    {[1,2,3,4].map(i => (
                       <div key={i} className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                          <User className="w-5 h-5" />
                       </div>
                    ))}
                 </div>
              </div>
              
              <div className="space-y-4">
                 <h4 className="text-white font-bold uppercase tracking-wider text-sm">Shop</h4>
                 <ul className="space-y-2 text-sm">
                    {['Warning Signs', 'Danger Signs', 'Notice Signs', 'Traffic Signs', 'Parking Signs'].map(item => (
                       <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
                    ))}
                 </ul>
              </div>
              
              <div className="space-y-4">
                 <h4 className="text-white font-bold uppercase tracking-wider text-sm">Support</h4>
                 <ul className="space-y-2 text-sm">
                    {['Contact Us', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'Terms of Service'].map(item => (
                       <li key={item}><a href="#" className="hover:text-orange-500 transition-colors">{item}</a></li>
                    ))}
                 </ul>
              </div>

              <div className="space-y-4">
                 <h4 className="text-white font-bold uppercase tracking-wider text-sm">Contact</h4>
                 <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                       <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                       <span>1-800-123-4567<br/><span className="text-xs text-slate-500">Mon-Fri 8am-6pm EST</span></span>
                    </li>
                    <li className="flex items-start gap-3">
                       <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                       <span>support@safetysignhub.com</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="w-5 h-5 text-orange-500 shrink-0">📍</div>
                       <span>123 Safety Blvd,<br/>Industrial District, NY</span>
                    </li>
                 </ul>
              </div>
           </div>
           
           <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
              <p>&copy; 2024 SafetySignHub by GTSE. All rights reserved.</p>
              <div className="flex gap-4">
                 <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Visa</span>
                 <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Mastercard</span>
                 <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">Amex</span>
                 <span className="bg-slate-800 px-2 py-1 rounded text-slate-300">PayPal</span>
              </div>
           </div>
        </div>
      </footer>

    </div>
  );
}
