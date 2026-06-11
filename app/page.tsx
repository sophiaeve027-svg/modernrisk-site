export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* HEADER / NAVIGATION */}
      <header className="border-b border-slate-200 bg-slate-50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-slate-900 tracking-tight">
            ModernRisk
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div>
            <a 
              href="#signup" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Enterprise Risk Management & Analytics
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Predict intelligence, mitigate vulnerabilities, and defend your infrastructure from a centralized, real-time dashboard.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a 
            href="#signup" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded shadow"
          >
            Get Started Free
          </a>
          <a 
            href="#about" 
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-3 rounded border border-slate-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* KEY INFORMATION / FEATURES */}
      <section id="features" className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Proactive Analytics</h3>
              <p className="text-slate-600 text-sm">
                Continuously monitor operations to pinpoint systematic vulnerabilities before they impact your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Exposure Mapping</h3>
              <p className="text-slate-600 text-sm">
                Track financial and digital asset liabilities across global infrastructures on a live timeline.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Compliance Frameworks</h3>
              <p className="text-slate-600 text-sm">
                Keep up with strict international regulations and custom internal risk mandates flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGN UP / ACTION SECTION */}
      <section id="signup" className="max-w-md mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Create Your Account</h2>
        <p className="text-slate-600 text-sm mt-2 mb-6">
          Get instant access to the ModernRisk platform setup.
        </p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
            required 
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded shadow"
          >
            Register Now
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ModernRisk. All rights reserved.</p>
      </footer>

    </div>
  );
}