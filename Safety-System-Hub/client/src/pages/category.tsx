import React, { useState } from "react";
import { Link } from "wouter";
import { 
  ChevronRight, 
  Filter, 
  Grid, 
  List, 
  ChevronDown, 
  Check,
  Star,
  Truck,
  Shield,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentBlock } from "@/components/ui/content-block";

// Mock Data
const products = [
  {
    id: 1,
    title: "Fire Exit Running Man Right Arrow Sign",
    price: 6.95,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=400&q=80",
    inStock: true,
    bestseller: true,
    sku: "FR-102-R"
  },
  {
    id: 2,
    title: "Fire Action Notice - Call Point & Assembly Sign",
    price: 8.50,
    rating: 4.9,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1626125345510-4603468eedfb?auto=format&fit=crop&w=400&q=80",
    inStock: true,
    bestseller: false,
    sku: "FR-205-A"
  },
  {
    id: 3,
    title: "Fire Extinguisher ID Sign - CO2",
    price: 4.25,
    rating: 4.7,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80",
    inStock: true,
    bestseller: false,
    sku: "FE-003-C"
  },
  {
    id: 4,
    title: "Fire Exit Keep Clear - Mandatory Sign",
    price: 5.95,
    rating: 4.5,
    reviews: 28,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    inStock: true,
    bestseller: false,
    sku: "MA-101-B"
  },
  {
    id: 5,
    title: "Fire Assembly Point Letter A",
    price: 12.95,
    rating: 5.0,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    inStock: false,
    bestseller: false,
    sku: "AS-501-A"
  },
  {
    id: 6,
    title: "Your Fire Assembly Point Is... Sign",
    price: 9.95,
    rating: 4.6,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1504328345606-18aff0849309?auto=format&fit=crop&w=400&q=80",
    inStock: true,
    bestseller: true,
    sku: "AS-502-C"
  },
  {
    id: 7,
    title: "Push Bar To Open Sign",
    price: 3.95,
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1585776245991-cf79ddb0a3b9?auto=format&fit=crop&w=400&q=80",
    inStock: true,
    bestseller: true,
    sku: "FR-301-G"
  },
  {
    id: 8,
    title: "Fire Door Keep Shut Sign - Brushed Steel",
    price: 14.50,
    rating: 4.9,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80",
    inStock: true,
    bestseller: false,
    sku: "FR-404-SS"
  }
];

export default function CategoryPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      
      {/* Breadcrumb & Title Header */}
      <div className="bg-white border-b border-slate-200">
         <div className="container mx-auto px-4 py-3 text-xs text-slate-500 flex items-center gap-2">
            <Link href="/"><span className="hover:text-orange-600 cursor-pointer">Home</span></Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/category"><span className="hover:text-orange-600 cursor-pointer">Safety Signs</span></Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-bold text-slate-900">Fire Safety Signs</span>
         </div>
         
         <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-black text-slate-900 mb-4">Fire Safety Signs</h1>
            <p className="text-slate-600 max-w-4xl text-sm leading-relaxed">
              Ensure your premises are compliant with the Regulatory Reform (Fire Safety) Order 2005. Our extensive range of fire safety signage includes Fire Exit signs, Fire Action notices, and Fire Extinguisher ID signs. All signs are manufactured in the UK and meet ISO 7010 standards.
            </p>
         </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-6">
            <div className="flex items-center justify-between lg:hidden mb-4">
               <Button variant="outline" className="w-full gap-2"><Filter className="w-4 h-4" /> Filter Products</Button>
            </div>
            
            <div className="hidden lg:block space-y-6">
               <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Filters</h3>
                  
                  <Accordion type="multiple" defaultValue={["category", "material", "price"]} className="w-full">
                    <AccordionItem value="category" className="border-b-0">
                      <AccordionTrigger className="text-sm font-bold py-3 hover:no-underline hover:text-orange-600">Category</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {["Fire Exit Signs", "Fire Action Notices", "Extinguisher ID", "Assembly Point", "Fire Door Signs"].map((item, i) => (
                             <div key={i} className="flex items-center space-x-2">
                               <Checkbox id={`cat-${i}`} />
                               <Label htmlFor={`cat-${i}`} className="text-sm font-normal text-slate-600 cursor-pointer hover:text-orange-600">{item}</Label>
                             </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="material" className="border-b-0">
                      <AccordionTrigger className="text-sm font-bold py-3 hover:no-underline hover:text-orange-600">Material</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {["Rigid Plastic", "Self-Adhesive Vinyl", "Photoluminescent (Glow)", "Aluminium", "Brushed Steel"].map((item, i) => (
                             <div key={i} className="flex items-center space-x-2">
                               <Checkbox id={`mat-${i}`} />
                               <Label htmlFor={`mat-${i}`} className="text-sm font-normal text-slate-600 cursor-pointer hover:text-orange-600">{item}</Label>
                             </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="price" className="border-b-0">
                      <AccordionTrigger className="text-sm font-bold py-3 hover:no-underline hover:text-orange-600">Price</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {["Under £5.00", "£5.00 - £10.00", "£10.00 - £20.00", "Over £20.00"].map((item, i) => (
                             <div key={i} className="flex items-center space-x-2">
                               <Checkbox id={`price-${i}`} />
                               <Label htmlFor={`price-${i}`} className="text-sm font-normal text-slate-600 cursor-pointer hover:text-orange-600">{item}</Label>
                             </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
               </div>
               
               {/* Banner Ad */}
               <div className="bg-[#1e293b] rounded-lg p-6 text-white text-center">
                  <Shield className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2 text-white">Bulk Discounts</h4>
                  <p className="text-slate-300 text-sm mb-4">Save up to 25% when you buy in bulk for your site.</p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 font-bold text-xs uppercase">View Rates</Button>
               </div>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-1">
             {/* Toolbar */}
             <div className="bg-white border border-slate-200 rounded-lg p-3 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                <div className="text-sm text-slate-600 font-medium pl-2">
                   Showing <span className="font-bold text-slate-900">1-8</span> of <span className="font-bold text-slate-900">248</span> products
                </div>
                
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500 hidden sm:inline">Sort by:</span>
                      <div className="relative">
                         <select className="appearance-none bg-slate-50 border border-slate-200 rounded px-3 py-1.5 pr-8 text-sm font-bold text-slate-700 focus:outline-none focus:border-orange-500 cursor-pointer">
                            <option>Relevance</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Best Selling</option>
                         </select>
                         <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                   </div>
                   
                   <div className="flex border border-slate-200 rounded overflow-hidden">
                      <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2 ${viewMode === 'grid' ? 'bg-slate-100 text-slate-900' : 'bg-white text-slate-400 hover:text-slate-600'}`}
                      >
                         <Grid className="w-4 h-4" />
                      </button>
                      <div className="w-px bg-slate-200"></div>
                      <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2 ${viewMode === 'list' ? 'bg-slate-100 text-slate-900' : 'bg-white text-slate-400 hover:text-slate-600'}`}
                      >
                         <List className="w-4 h-4" />
                      </button>
                   </div>
                </div>
             </div>
             
             {/* Products */}
             <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
                {products.map((product) => (
                   <Link key={product.id} href="/product/fire-exit-sign">
                     <Card className={`group border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all cursor-pointer overflow-hidden flex ${viewMode === 'list' ? 'flex-row' : 'flex-col'}`}>
                        <div className={`relative bg-white p-6 flex items-center justify-center border-b ${viewMode === 'list' ? 'w-48 border-b-0 border-r shrink-0' : 'aspect-[4/3] border-slate-100'}`}>
                           {product.bestseller && (
                              <Badge className="absolute top-2 left-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 border-none font-bold text-[10px] uppercase shadow-sm z-10">
                                 Best Seller
                              </Badge>
                           )}
                           <img 
                              src={product.image} 
                              alt={product.title} 
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                           />
                           {!product.inStock && (
                              <div className="absolute inset-0 bg-white/60 flex items-center justify-center backdrop-blur-[1px]">
                                 <Badge variant="destructive" className="font-bold">Out of Stock</Badge>
                              </div>
                           )}
                        </div>
                        
                        <div className="flex-1 flex flex-col p-4">
                           <div className="text-[10px] text-slate-400 font-mono mb-1">{product.sku}</div>
                           <h3 className="font-bold text-slate-900 text-sm leading-tight mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                              {product.title}
                           </h3>
                           
                           {viewMode === 'list' && (
                              <p className="text-xs text-slate-500 mb-4 line-clamp-2 hidden sm:block">
                                 High quality rigid plastic fire safety sign. Compliant with EN ISO 7010:2012. Suitable for indoor and outdoor use. Pre-drilled holes for easy fixing.
                              </p>
                           )}
                           
                           <div className="mt-auto">
                              <div className="flex items-center justify-between mb-3">
                                 <div className="flex items-center gap-1">
                                    <div className="flex text-yellow-400">
                                       {[...Array(5)].map((_, i) => (
                                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-slate-200'}`} />
                                       ))}
                                    </div>
                                    <span className="text-[10px] text-slate-400">({product.reviews})</span>
                                 </div>
                                 {product.inStock && (
                                    <div className="flex items-center gap-1 text-[10px] text-green-600 font-bold">
                                       <Truck className="w-3 h-3" /> Next Day
                                    </div>
                                 )}
                              </div>
                              
                              <div className="flex items-end justify-between gap-2">
                                 <div>
                                    <span className="text-xs text-slate-400">From</span>
                                    <div className="text-lg font-black text-slate-900 leading-none">£{product.price.toFixed(2)}</div>
                                    <span className="text-[10px] text-slate-400">ex. VAT</span>
                                 </div>
                                 <Button size="sm" className="bg-orange-500 hover:bg-orange-600 font-bold text-xs uppercase px-4 h-8" disabled={!product.inStock}>
                                    {viewMode === 'list' ? 'View Details' : 'Add'}
                                 </Button>
                              </div>
                           </div>
                        </div>
                     </Card>
                   </Link>
                ))}
             </div>
             
             {/* Pagination */}
             <div className="mt-12 flex justify-center gap-2">
                <Button variant="outline" disabled className="w-10 h-10 p-0"><ChevronRight className="w-4 h-4 rotate-180" /></Button>
                <Button className="w-10 h-10 p-0 bg-slate-900 text-white font-bold border-slate-900">1</Button>
                <Button variant="outline" className="w-10 h-10 p-0 font-bold text-slate-600 hover:text-orange-600 hover:border-orange-500">2</Button>
                <Button variant="outline" className="w-10 h-10 p-0 font-bold text-slate-600 hover:text-orange-600 hover:border-orange-500">3</Button>
                <div className="flex items-end justify-center w-10 h-10 pb-2 text-slate-400 tracking-widest">...</div>
                <Button variant="outline" className="w-10 h-10 p-0 font-bold text-slate-600 hover:text-orange-600 hover:border-orange-500">12</Button>
                <Button variant="outline" className="w-10 h-10 p-0"><ChevronRight className="w-4 h-4" /></Button>
             </div>
             
             {/* SEO Content Block */}
             <div className="mt-16 bg-slate-50 border border-slate-200 rounded-lg p-8">
                <h2 className="text-lg font-bold text-slate-900 mb-4">About Fire Safety Signage</h2>
                <div className="prose prose-sm prose-slate max-w-none text-slate-600">
                   <p className="mb-4">
                      Fire safety signs are a critical component of any building's safety strategy. They provide essential information to occupants about escape routes, fire fighting equipment, and mandatory actions in the event of an emergency. In the UK, the Health and Safety (Safety Signs and Signals) Regulations 1996 require employers to provide specific safety signs whenever there is a risk that has not been avoided or controlled by other means.
                   </p>
                   <p>
                      Our range includes all the necessary signage to meet ISO 7010 standards, ensuring your premises are fully compliant. From the iconic "Running Man" fire exit signs to "Fire Door Keep Shut" notices, we stock high-quality, durable signs suitable for offices, warehouses, schools, and construction sites.
                   </p>
                </div>
             </div>
             
             {/* Academy Content Block */}
             <ContentBlock variant="category" />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
