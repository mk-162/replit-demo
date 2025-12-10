import React from "react";
import { 
  Shield, 
  Phone, 
  Mail, 
  User 
} from "lucide-react";

export function Footer() {
  return (
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
  );
}
