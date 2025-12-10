import React from "react";
import { Link } from "wouter";
import { 
  BookOpen, 
  Scale, 
  Factory, 
  ChevronRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ContentBlockProps {
  variant?: "product" | "category";
}

export function ContentBlock({ variant = "category" }: ContentBlockProps) {
  return (
    <div className="mt-16 mb-8">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              Safety Sign Academy
            </h2>
            <p className="text-slate-500 max-w-xl">
              Expert guides and compliance advice to help you choose the right signage.
            </p>
          </div>
          <Link href="/academy">
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-600 font-bold">
              View All Guides <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/academy/article/fire-safety-guide">
            <Card className="border-slate-200 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group h-full">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Fire Safety Sign Guide
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Complete guide to fire exit sign placement, legal requirements, and ISO 7010 compliance.
                </p>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wide flex items-center gap-1">
                  Read Guide <ChevronRight className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/academy/getting-started">
            <Card className="border-slate-200 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group h-full">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Compliance Checklist
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Ensure your facility meets all current UK health and safety regulations with our checklist.
                </p>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wide flex items-center gap-1">
                  Check Compliance <ChevronRight className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/academy">
            <Card className="border-slate-200 hover:border-orange-500 hover:shadow-md transition-all cursor-pointer group h-full">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Industry Standards
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  Specific signage requirements for construction, warehousing, manufacturing, and offices.
                </p>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wide flex items-center gap-1">
                  View Standards <ChevronRight className="w-3 h-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
