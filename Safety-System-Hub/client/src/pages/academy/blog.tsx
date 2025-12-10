import React from "react";
import { Link } from "wouter";
import { 
  Search, 
  ChevronRight, 
  Clock, 
  User, 
  Tag, 
  Calendar,
  Filter,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function BlogIndex() {
  const categories = ["All Posts", "Compliance", "Safety Tips", "Industry News", "Case Studies", "Product Guides"];
  
  const posts = [
    {
      id: 1,
      title: "Fire Safety Signs: The Complete Compliance Guide 2024",
      excerpt: "Understanding ISO 7010 standards, proper placement heights, and the legal requirements for fire exit signage in UK workplaces.",
      category: "Compliance",
      author: "Sarah Jenkins",
      date: "Dec 12, 2024",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Photoluminescent vs. Standard Signs: Which Should You Choose?",
      excerpt: "A cost-benefit analysis of glow-in-the-dark signage versus standard rigid plastic for emergency escape routes.",
      category: "Product Guides",
      author: "Mike Ross",
      date: "Dec 10, 2024",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1626125345510-4603468eedfb?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Construction Site Safety: Mandatory Signage Checklist",
      excerpt: "Don't get fined. Ensure your site meets HSE regulations with this essential checklist of required safety notifications.",
      category: "Safety Tips",
      author: "David Miller",
      date: "Dec 05, 2024",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Understanding COSHH Symbols and Meanings",
      excerpt: "Decode the new GHS hazard symbols for chemical safety. What every facility manager needs to know about hazardous substances.",
      category: "Compliance",
      author: "Sarah Jenkins",
      date: "Nov 28, 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 5,
      title: "How to Conduct a Workplace Signage Audit",
      excerpt: "Step-by-step guide to reviewing your current safety signs. Download our free audit template to get started.",
      category: "Safety Tips",
      author: "Mike Ross",
      date: "Nov 15, 2024",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1504328345606-18aff0849309?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Office Safety: It's More Than Just Wet Floor Signs",
      excerpt: "Overlooked hazards in corporate environments and the subtle signage that prevents common office accidents.",
      category: "Industry News",
      author: "Jennifer Wu",
      date: "Nov 10, 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-slate-200">
           <div className="container mx-auto px-4 py-3 text-xs text-slate-500 flex items-center gap-2">
              <Link href="/academy"><span className="hover:text-orange-600 cursor-pointer">Academy</span></Link>
              <ChevronRight className="w-3 h-3" />
              <span className="font-bold text-slate-900">Articles & Guides</span>
           </div>
        </div>

        {/* Header */}
        <div className="bg-white border-b border-slate-200 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Safety Insights & Guides</h1>
                <p className="text-slate-500 max-w-xl">Expert advice on workplace safety, compliance regulations, and industry best practices.</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                   <Input placeholder="Search articles..." className="pl-9" />
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
                <Button variant="outline" className="gap-2"><Filter className="w-4 h-4" /> Filters</Button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 mt-8 no-scrollbar">
              {categories.map((cat, i) => (
                <Button 
                  key={i} 
                  variant={i === 0 ? "default" : "outline"} 
                  className={`rounded-full px-6 ${i === 0 ? 'bg-slate-900 hover:bg-slate-800' : 'border-slate-200 text-slate-600 hover:text-orange-600 hover:border-orange-200'}`}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-12">
              <Link href="/academy/article/fire-safety-guide">
                <div className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[21/9] md:aspect-[21/8] cursor-pointer">
                  <div className="absolute inset-0">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-3xl">
                    <Badge className="bg-orange-500 hover:bg-orange-600 border-none mb-4 text-xs uppercase tracking-wider font-bold">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight group-hover:text-orange-100 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-300 text-lg mb-6 line-clamp-2 hidden md:block">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-300 font-medium">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-orange-500" /> {featuredPost.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-500" /> {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" /> {featuredPost.readTime} read
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Regular Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href="/academy/article/fire-safety-guide">
                <Card className="h-full border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all cursor-pointer group flex flex-col overflow-hidden">
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm border-none shadow-sm font-bold text-xs uppercase tracking-wider">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto border-t border-slate-50">
                    <div className="flex items-center justify-between w-full pt-4">
                      <div className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs">
                           {post.author.charAt(0)}
                        </div>
                        {post.author}
                      </div>
                      <div className="text-orange-600 text-xs font-bold uppercase flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                        Read Article <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="border-slate-300 text-slate-600 font-bold px-8 hover:border-orange-500 hover:text-orange-600">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
