"use client";

import React from "react";
import { 
  Shield, 
  TrendingUp, 
  Cpu, 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Lock 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
            <Shield className="w-6 h-6 text-indigo-500" />
            <span>Modern<span className="text-indigo-400">Risk</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-600/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/20 mb-6">
          <Lock className="w-3 h-3" /> Next-Generation Risk Management
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.15] text-white">
          Predict intelligence. <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mitigate modern risk.
          </span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          The ultimate platform for proactive enterprise risk management. Track liabilities, analyze exposure, and protect operations in real-time.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-semibold px-6 py-3 rounded-xl transition shadow-xl">
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-6 py-3 rounded-xl border border-slate-800 transition">
            Book a Demo
          </button>
        </div>
      </header>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Engineered for absolute stability</h2>
          <p className="mt-4 text-slate-400">Everything you need to map vulnerabilities and defend your infrastructure from a centralized dashboard.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl relative group hover:border-indigo-500/30 transition duration-300">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">AI Analytics</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Machine learning models inspect patterns continuously to call out systematic flaws before they amplify.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl relative group hover:border-purple-500/30 transition duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Exposure Mapping</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Visualize real-time financial and technical risks dynamically linked directly across your assets.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl relative group hover:border-emerald-500/30 transition duration-300">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Modular Audits</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Plug compliance requirements into custom frameworks to monitor global mandates effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION / TRUST SECTION */}
      <section id="solutions" className="max-w-5xl mx-auto px-6 py-16 mb-24 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Ready to fortify your enterprise operations?</h2>
          <p className="mt-4 text-slate-400 text-base">Join over 400 modern operations mapping risk workflows flawlessly across the globe.</p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-indigo-400" /> SOC2 Certified</div>
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-indigo-400" /> GDPR Compliant</div>
            <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-indigo-400" /> 99.99% Uptime</div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-500 text-xs py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-slate-400">
            <Shield className="w-4 h-4 text-indigo-500" />
            <span>ModernRisk copyright; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}