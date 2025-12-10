import React, { useState } from "react";
import { Link } from "wouter";
import { 
  ChevronRight, 
  Star, 
  Truck, 
  CheckCircle2, 
  Shield, 
  Download, 
  Ruler, 
  Info,
  Package,
  Printer,
  Share2,
  Heart,
  Minus,
  Plus,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentBlock } from "@/components/ui/content-block";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState("rigid");
  const [selectedSize, setSelectedSize] = useState("300x100");
  
  const product = {
    title: "Fire Exit Running Man Right Arrow Sign",
    sku: "FR-102-R",
    rating: 4.8,
    reviews: 124,
    price: 6.95,
    description: "High visibility fire exit sign with running man symbol and directional arrow. Complies with BS EN ISO 7010. Essential for clearly marking escape routes in all commercial and industrial premises.",
    features: [
      "Conforms to EN ISO 7010:2012",
      "High quality durable materials",
      "Suitable for indoor and outdoor use",
      "UV resistant inks to prevent fading",
      "5 Year Manufacturer Warranty"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200 sticky top-[73px] z-30">
         <div className="container mx-auto px-4 py-3 text-xs text-slate-500 flex items-center gap-2 overflow-x-auto">
            <Link href="/"><span className="hover:text-orange-600 cursor-pointer">Home</span></Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link href="/category"><span className="hover:text-orange-600 cursor-pointer">Safety Signs</span></Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link href="/category"><span className="hover:text-orange-600 cursor-pointer">Fire Safety Signs</span></Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span className="font-bold text-slate-900 truncate">{product.title}</span>
         </div>
      </div>

      <main className="container mx-auto px-4 py-8 flex-1">
        
        {/* Product Main Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Image Gallery */}
            <div className="lg:col-span-5 space-y-4">
               <div className="aspect-square bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center p-8 relative overflow-hidden group">
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                     <Badge className="bg-green-600 hover:bg-green-700 text-white border-none font-bold uppercase tracking-wider">In Stock</Badge>
                     <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none font-bold uppercase tracking-wider">Best Seller</Badge>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80" 
                    alt="Product Main" 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-4 right-4">
                     <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur hover:bg-white rounded-full shadow-sm">
                        <Share2 className="w-4 h-4 text-slate-600" />
                     </Button>
                  </div>
               </div>
               <div className="grid grid-cols-4 gap-4">
                  {[1,2,3,4].map(i => (
                     <div key={i} className={`aspect-square rounded border cursor-pointer flex items-center justify-center bg-slate-50 p-2 ${i === 0 ? 'border-orange-500 ring-1 ring-orange-500' : 'border-slate-200 hover:border-slate-300'}`}>
                        <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=100&q=80" className="w-full h-full object-contain mix-blend-multiply" />
                     </div>
                  ))}
               </div>
            </div>
            
            {/* Product Details */}
            <div className="lg:col-span-7 flex flex-col">
               <div className="mb-6">
                  <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">{product.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                     <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">SKU: {product.sku}</span>
                     <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="font-bold text-slate-700">{product.rating}</span>
                        <span className="text-slate-400 underline cursor-pointer hover:text-orange-600">({product.reviews} Reviews)</span>
                     </div>
                     <span className="flex items-center gap-1 text-green-600 font-bold">
                        <CheckCircle2 className="w-4 h-4" /> In Stock for Next Day Delivery
                     </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                     {product.description}
                  </p>
               </div>
               
               <Separator className="mb-6" />
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Configuration */}
                  <div className="space-y-6">
                     <div className="space-y-3">
                        <div className="flex justify-between">
                           <label className="text-sm font-bold text-slate-900">Material</label>
                           <span className="text-xs text-orange-600 font-bold cursor-pointer hover:underline flex items-center gap-1">
                              <Info className="w-3 h-3" /> Material Guide
                           </span>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                           {[
                             { id: "rigid", name: "Rigid Plastic (1mm)", price: "+£0.00" },
                             { id: "vinyl", name: "Self-Adhesive Vinyl", price: "-£1.50" },
                             { id: "glow", name: "Photoluminescent", price: "+£3.25" },
                             { id: "alu", name: "Aluminium Composite", price: "+£5.50" }
                           ].map(mat => (
                              <div 
                                key={mat.id}
                                onClick={() => setSelectedMaterial(mat.id)}
                                className={`flex items-center justify-between p-3 rounded border cursor-pointer transition-all ${selectedMaterial === mat.id ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-500' : 'border-slate-200 hover:border-slate-300'}`}
                              >
                                 <span className={`text-sm font-medium ${selectedMaterial === mat.id ? 'text-orange-900' : 'text-slate-700'}`}>{mat.name}</span>
                                 <span className="text-xs font-bold text-slate-500">{mat.price}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     
                     <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-900">Size</label>
                        <div className="flex flex-wrap gap-2">
                           {["300x100mm", "450x150mm", "600x200mm"].map(size => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 text-sm font-medium rounded border transition-all ${selectedSize === size ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}
                              >
                                 {size}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
                  
                  {/* Price & Cart */}
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col">
                     <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-1">
                           <span className="text-4xl font-black text-slate-900">£{product.price.toFixed(2)}</span>
                           <span className="text-sm text-slate-500 font-medium">ex. VAT</span>
                        </div>
                        <div className="text-sm text-slate-400">£{(product.price * 1.2).toFixed(2)} inc. VAT</div>
                     </div>
                     
                     {/* Bulk Pricing Mini Table */}
                     <div className="mb-6 bg-white rounded border border-slate-200 overflow-hidden">
                        <div className="bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200">
                           Bulk Savings
                        </div>
                        <table className="w-full text-sm text-left">
                           <tbody>
                              <tr className="border-b border-slate-100 last:border-0">
                                 <td className="px-3 py-2 text-slate-600">1 - 9</td>
                                 <td className="px-3 py-2 font-bold text-slate-900 text-right">£6.95</td>
                              </tr>
                              <tr className="border-b border-slate-100 last:border-0 bg-green-50/50">
                                 <td className="px-3 py-2 text-slate-600">10 - 49</td>
                                 <td className="px-3 py-2 font-bold text-green-700 text-right">£6.25</td>
                              </tr>
                              <tr className="border-b border-slate-100 last:border-0">
                                 <td className="px-3 py-2 text-slate-600">50+</td>
                                 <td className="px-3 py-2 font-bold text-slate-900 text-right">£5.50</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     
                     <div className="mt-auto space-y-3">
                        <div className="flex gap-3">
                           <div className="flex items-center border border-slate-300 bg-white rounded w-32">
                              <button 
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                              >
                                 <Minus className="w-4 h-4" />
                              </button>
                              <input 
                                type="text" 
                                value={quantity} 
                                readOnly 
                                className="flex-1 w-full text-center font-bold text-slate-900 border-none h-10 focus:ring-0 p-0" 
                              />
                              <button 
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-10 h-10 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                              >
                                 <Plus className="w-4 h-4" />
                              </button>
                           </div>
                           <Button className="flex-1 h-10 bg-orange-500 hover:bg-orange-600 font-bold uppercase tracking-wide shadow-lg shadow-orange-500/20">
                              Add to Basket
                           </Button>
                        </div>
                        <div className="flex gap-2">
                           <Button variant="outline" className="flex-1 border-slate-300 text-slate-600 hover:text-orange-600 hover:border-orange-500 h-9 text-xs font-bold uppercase">
                              <Heart className="w-3 h-3 mr-2" /> Save List
                           </Button>
                           <Button variant="outline" className="flex-1 border-slate-300 text-slate-600 hover:text-orange-600 hover:border-orange-500 h-9 text-xs font-bold uppercase">
                              <FileText className="w-3 h-3 mr-2" /> Quote
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Trust Badges */}
               <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <Shield className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-slate-900">ISO 7010</div>
                        <div className="text-xs text-slate-500">Compliant</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                        <Truck className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-slate-900">Next Day</div>
                        <div className="text-xs text-slate-500">Delivery</div>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-slate-900">5 Year</div>
                        <div className="text-xs text-slate-500">Warranty</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="mb-16">
           <Tabs defaultValue="specs" className="w-full">
              <TabsList className="w-full justify-start border-b border-slate-200 bg-transparent h-auto p-0 rounded-none gap-8">
                 <TabsTrigger value="specs" className="bg-transparent border-b-4 border-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none rounded-none h-12 px-0 font-bold text-slate-500 data-[state=active]:text-orange-600 text-base">
                    Specifications
                 </TabsTrigger>
                 <TabsTrigger value="desc" className="bg-transparent border-b-4 border-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none rounded-none h-12 px-0 font-bold text-slate-500 data-[state=active]:text-orange-600 text-base">
                    Description
                 </TabsTrigger>
                 <TabsTrigger value="downloads" className="bg-transparent border-b-4 border-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none rounded-none h-12 px-0 font-bold text-slate-500 data-[state=active]:text-orange-600 text-base">
                    Downloads & Datasheets
                 </TabsTrigger>
                 <TabsTrigger value="reviews" className="bg-transparent border-b-4 border-transparent data-[state=active]:border-orange-500 data-[state=active]:shadow-none rounded-none h-12 px-0 font-bold text-slate-500 data-[state=active]:text-orange-600 text-base">
                    Reviews (124)
                 </TabsTrigger>
              </TabsList>
              
              <div className="bg-white border border-t-0 border-slate-200 rounded-b-xl p-8 shadow-sm">
                 <TabsContent value="specs" className="mt-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Product Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                       <div className="flex justify-between py-3 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Orientation</span>
                          <span className="text-slate-900 font-bold">Landscape</span>
                       </div>
                       <div className="flex justify-between py-3 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Sign Type</span>
                          <span className="text-slate-900 font-bold">Fire Exit</span>
                       </div>
                       <div className="flex justify-between py-3 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Symbol Type</span>
                          <span className="text-slate-900 font-bold">Running Man Right</span>
                       </div>
                       <div className="flex justify-between py-3 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Compliance</span>
                          <span className="text-slate-900 font-bold">ISO 7010, BS 5499</span>
                       </div>
                       <div className="flex justify-between py-3 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Fixing Method</span>
                          <span className="text-slate-900 font-bold">Screw / Adhesive</span>
                       </div>
                       <div className="flex justify-between py-3 border-b border-slate-100">
                          <span className="text-slate-500 font-medium">Application</span>
                          <span className="text-slate-900 font-bold">Indoor / Outdoor</span>
                       </div>
                    </div>
                 </TabsContent>
                 
                 <TabsContent value="desc" className="mt-0">
                    <div className="prose prose-slate max-w-none">
                       <p>
                          Ensure safe evacuation of your premises with our <strong>Fire Exit Running Man Right Arrow Sign</strong>. Designed to meet the latest ISO 7010 standards, this sign provides clear, unambiguous guidance to the nearest emergency exit.
                       </p>
                       <h4>Key Features:</h4>
                       <ul>
                          <li><strong>High Visibility:</strong> Features the internationally recognized "Running Man" symbol in Safety Green (ISO 3864).</li>
                          <li><strong>Durable Construction:</strong> Available in rigid plastic, self-adhesive vinyl, or aluminium composite to suit various environments.</li>
                          <li><strong>Easy Installation:</strong> Can be easily mounted using silicone adhesive, double-sided tape, or screws.</li>
                          <li><strong>Compliant:</strong> Fully conforms to BS EN ISO 7010:2012 and the Health and Safety (Safety Signs and Signals) Regulations 1996.</li>
                       </ul>
                    </div>
                 </TabsContent>
                 
                 <TabsContent value="downloads" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       <div className="border border-slate-200 rounded-lg p-4 flex items-start gap-4 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group">
                          <div className="bg-red-50 text-red-600 p-3 rounded group-hover:bg-red-100 transition-colors">
                             <FileText className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Technical Datasheet</h4>
                             <p className="text-xs text-slate-500 mb-2">PDF • 1.2 MB</p>
                             <span className="text-xs font-bold text-orange-600 uppercase tracking-wide flex items-center gap-1">Download <Download className="w-3 h-3" /></span>
                          </div>
                       </div>
                       <div className="border border-slate-200 rounded-lg p-4 flex items-start gap-4 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group">
                          <div className="bg-blue-50 text-blue-600 p-3 rounded group-hover:bg-blue-100 transition-colors">
                             <Ruler className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Size Guide</h4>
                             <p className="text-xs text-slate-500 mb-2">PDF • 0.8 MB</p>
                             <span className="text-xs font-bold text-orange-600 uppercase tracking-wide flex items-center gap-1">Download <Download className="w-3 h-3" /></span>
                          </div>
                       </div>
                       <div className="border border-slate-200 rounded-lg p-4 flex items-start gap-4 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group">
                          <div className="bg-green-50 text-green-600 p-3 rounded group-hover:bg-green-100 transition-colors">
                             <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">Compliance Certificate</h4>
                             <p className="text-xs text-slate-500 mb-2">PDF • 0.5 MB</p>
                             <span className="text-xs font-bold text-orange-600 uppercase tracking-wide flex items-center gap-1">Download <Download className="w-3 h-3" /></span>
                          </div>
                       </div>
                    </div>
                 </TabsContent>
                 
                 <TabsContent value="reviews" className="mt-0">
                    <div className="text-center py-12">
                       <div className="text-5xl font-black text-slate-900 mb-2">4.8</div>
                       <div className="flex justify-center text-yellow-400 mb-2">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                       </div>
                       <p className="text-slate-500">Based on 124 reviews</p>
                       <Button className="mt-6">Write a Review</Button>
                    </div>
                 </TabsContent>
              </div>
           </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
           <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <span className="bg-orange-500 w-2 h-8 rounded-full"></span>
              Frequently Bought Together
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Fire Action Notice", price: "£8.50", image: "https://images.unsplash.com/photo-1626125345510-4603468eedfb?auto=format&fit=crop&w=400&q=80" },
                { title: "Fire Extinguisher ID", price: "£4.25", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80" },
                { title: "Fire Door Keep Shut", price: "£3.95", image: "https://images.unsplash.com/photo-1585776245991-cf79ddb0a3b9?auto=format&fit=crop&w=400&q=80" },
                { title: "Assembly Point A", price: "£12.95", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80" }
              ].map((item, i) => (
                 <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="aspect-square bg-slate-50 rounded mb-4 flex items-center justify-center p-4">
                       <img src={item.image} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-orange-600 line-clamp-1">{item.title}</h4>
                    <div className="flex justify-between items-center">
                       <span className="font-bold text-slate-900">{item.price}</span>
                       <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-orange-50 hover:text-orange-600">
                          <Plus className="w-4 h-4" />
                       </Button>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Academy Content Block */}
        <ContentBlock variant="product" />

      </main>
      
      <Footer />
    </div>
  );
}
