import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./components/ThemeToggle";

const ACTIVATION_IMAGES = {
  main: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7rv-op_8Vs3T68DOdtvD82AzRZpjCR-rRLw7IGMWev8ne_dUT8-gKVx9wHUiEXkHBeDjWcP4K6l67BGYMlTPiNeu7VTcPLx8p4kts4J5SPhSmOp-bzuJsVoLnC_tCeg6bPAWrFYDOY9GRJjJxJqyqAe3GIRn_wwTZODxhQHqqTy0FIRp3sFSP_CjRpJTluE-I7sRJuH6RuPDVWj_Xwk2JTarXATh5VGtE1FTAWmqS2goHkj99dsCI44LaYVIGLSdxsz6MIUTe6RA",
  gaming: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHp4NKGxqwiJmH8Y2zqzWHw61iVfwSckxKfL4mVvy7AGui9fG6ZcoxECFxw08jiO2iN31L-8SX26yoR5SborhZDGlqfdsMY4u5C_zizecxGt0ZaEFKl0ba69DBOBaFiOJPJSzs56qG09JDX7ZLGVkJjnRCqUcNuO3zbi9q_iWmkYC-WXsPS3o6xYTNv9GTp_HHrPZoLBeoU22ohChnZYyC-SwWIXvmCcrFmCPjq0JnSDN8qliz96v85JYSbZgX6xNUX6QYW9AzHNg",
  tech: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9msfZAw9hpKIdohASAP5KwCkUzk2JMACvdevJj7gP1Q0RxWs2peY_e5JUoBfelXSaunGwdYcEumZXtL0tkqQwxfroEdAYikWBaXY_OHxzKpGMRnoByENG2ORjTVaqCf4FGgO-mnBkUJZYW0J2trhEeSQDLAdgM4fvGPQcYqANMdppMlXruomogDJLR8JcBm89jJx-GeucuGc4dYJZR7uRQGbUuUxkqYrEHimvTH4v4Vj-6-BhavwPEoStWAoKCsXscHleBT_YTYI",
  event: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn7LqarRSdctpp8MpvTeegJF-rX9CkEQYi2luz-bCh7UaME8hBQZN6eVozIvMngLPukjzbQOfjV3L3dfjpeuapWsECEuDF7Ni_HVTR-0z1BpxO4tDH_MS2UyTaZrZcXJe1QIW_mjvlPQOmsTHj80tG5fyQx24OCCsHqru0uCLmE82Eek4nhmscrIrxXmi1M3XgRoZ_lJX7cI6rlaI_UGX803NRHtk6Y8P1SIcBK300TTg9MdmCHkeNiHMFynVLTaBTcrnzINwgkgQ",
};
export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-white/5 bg-white/80 dark:bg-[#0a0a0f]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 shrink-0 py-2"
            >
              <Image
                src="/images/heloadzlogo.png"
                alt="HeloAdz"
                width={200}
                height={56}
                className="h-10 w-auto md:h-12 object-contain object-left"
                priority
              />
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="#impact"
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-primary transition-colors"
              >
                Impact
              </Link>
              <Link
                href="#slots"
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-primary transition-colors"
              >
                Smart Slots
              </Link>
              <Link
                href="#locations"
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-primary transition-colors"
              >
                Locations
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all"
              >
                Launch Campaign
              </Link>
              <ThemeToggle />
              <button
                type="button"
                className="md:hidden rounded-lg p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Menu"
              >
                <span className="material-icons-outlined text-2xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] animate-[pulse-glow_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-[100px] animate-[pulse-glow_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: "1s" }} />
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-[slide-up_0.8s_ease-out_forwards]">
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 backdrop-blur-sm text-xs md:text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 font-semibold">
              Next-Generation Outdoor Advertising, Designed for Impact
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              TURN STREETS INTO <br />
              <span className="text-gradient  text-2xl md:text-4xl lg:text-6xl ">SHOWSTOPPERS</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
              Command attention with high-impact curved LED billboards and immersive 3D anamorphic advertising. HelloAds transforms everyday urban spaces into unforgettable brand experiences that people stop, stare, and share.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                className="px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:-translate-y-1"
              >
                Launch Your Campaign
              </button>
              <button
                type="button"
                className="px-8 py-4 rounded-full border border-slate-300 dark:border-white/20 hover:border-primary text-slate-800 dark:text-white font-bold tracking-wide transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 group"
              >
                <span className="material-icons-outlined group-hover:text-primary transition-colors">play_circle</span>
                View Live Screens
              </button>
            </div>
          </div>
          <div className="relative min-h-[500px] lg:min-h-[700px] w-full anamorphic-container flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
            <div className="anamorphic-content relative w-full max-w-4xl mx-auto flex items-center justify-center -translate-y-10 lg:-translate-y-12">
              <div className="relative w-full mb-8 lg:mb-12 bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl transform rotate-3 shadow-2xl border border-slate-300 dark:border-white/5 overflow-hidden">
                <div className="relative w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Hero"
                    className="block w-full h-auto  object-contain object-center"
                    src="/images/banner.png"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-80 animate-pulse mix-blend-screen" />
                   
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 bg-secondary/30 rounded-full blur-[60px]" />
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-accent/30 rounded-full blur-[60px]" />
              <div
                className="absolute bottom-10 -left-6 bg-white/80 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 dark:border-white/10 shadow-xl w-48 animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Live Impression</span>
                </div>
                <div className="text-2xl font-display font-bold dark:text-white">124,592</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">+12% vs last hour</div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#impact"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">Scroll</span>
          <span className="material-icons-outlined text-slate-500 dark:text-slate-400">keyboard_arrow_down</span>
        </a>
      </header>

      <div className="py-12 bg-slate-100 dark:bg-black border-y border-slate-200 dark:border-white/5 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-transparent to-slate-100 dark:from-black dark:via-transparent dark:to-black z-10 pointer-events-none" />
        <div className="flex gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap opacity-50 dark:opacity-30">
          <span className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text">IMMERSIVE REALITY</span>
          <span className="text-4xl md:text-6xl font-display font-bold text-slate-400 dark:text-slate-600">ANAMORPHIC 3D</span>
          <span className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text">HIGH IMPACT</span>
          <span className="text-4xl md:text-6xl font-display font-bold text-slate-400 dark:text-slate-600">FUTURE ADVERTISING</span>
          <span className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text">IMMERSIVE REALITY</span>
          <span className="text-4xl md:text-6xl font-display font-bold text-slate-400 dark:text-slate-600">ANAMORPHIC 3D</span>
          <span className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text">HIGH IMPACT</span>
        </div>
      </div>

      <section className="py-24 md:py-32 relative" id="impact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 dark:text-white">
              Defined by <span className="text-gradient">Depth</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
              Traditional billboards fade into the background. HelloAds introduces next-generation curved LED screens that act as dynamic canvases, using advanced forced-perspective and 3D anamorphic technology to create jaw-dropping visual depth—visible clearly to the naked eye, no special equipment required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-transparent hover:from-primary hover:to-secondary transition-all duration-500">
              <div className="bg-white dark:bg-[#0A0A0E] h-full rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all" />
                <span className="material-icons-outlined text-4xl text-primary mb-6">view_in_ar</span>
                <h3 className="font-display text-xl font-bold mb-4 dark:text-white">Naked-Eye 3D Impact</h3>
                <p className="text-slate-600 dark:text-slate-400">Experience stunning 3D visuals without glasses. Our curved LED screens create real depth and dimension that instantly grabs attention from street level.</p>
              </div>
            </div>
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-transparent hover:from-secondary hover:to-accent transition-all duration-500">
              <div className="bg-white dark:bg-[#0A0A0E] h-full rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] group-hover:bg-secondary/20 transition-all" />
                <span className="material-icons-outlined text-4xl text-secondary mb-6">blur_on</span>
                <h3 className="font-display text-xl font-bold mb-4 dark:text-white">Ultra-High Definition Displays</h3>
                <p className="text-slate-600 dark:text-slate-400">Powered by ultra-high-resolution LED panels, your brand visuals remain sharp, vibrant, and lifelike—day or night, from every viewing angle.</p>
              </div>
            </div>
            <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-transparent hover:from-accent hover:to-primary transition-all duration-500">
              <div className="bg-white dark:bg-[#0A0A0E] h-full rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] group-hover:bg-accent/20 transition-all" />
                <span className="material-icons-outlined text-4xl text-accent mb-6">psychology</span>
                <h3 className="font-display text-xl font-bold mb-4 dark:text-white">Built for Virality</h3>
                <p className="text-slate-600 dark:text-slate-400">Our visuals don&apos;t just get noticed—they get recorded, shared, and talked about. Turn street traffic into organic social media reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-surface-dark relative overflow-hidden" id="slots">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Smart Slots"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/slot.png"
              />
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 backdrop-blur-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-display font-bold text-slate-800 dark:text-white">Slot Availability (Live View)</h4>
                <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-xs rounded uppercase border border-green-500/30 font-semibold">Live</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-slate-600 dark:text-gray-300">
                  <span>Prime Hours (6:00 PM – 10:00 PM)</span>
                  <span className="text-primary font-bold">Fully Booked</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-full" />
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-gray-300 pt-2">
                  <span>Morning Rush (7:00 AM – 11:00 AM)</span>
                  <span className="text-secondary font-bold">Limited Slots Available</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[70%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Programmatic Power</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 dark:text-white">
              Smart Slots.
              <br />
              Maximum Visibility.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Why pay for empty impressions? HelloAds uses intelligent slot-based advertising to display your brand exactly when your audience is most active—ensuring higher visibility, better engagement, and smarter ad spends.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                  <span className="material-icons-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-white">Time-Based Slot Control</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Schedule your ads during peak traffic hours or specific time windows to maximize exposure and ROI.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary mt-1">
                  <span className="material-icons-outlined">trending_up</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-white">Flexible Slot Pricing</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Choose from daily, weekly, or monthly slots with pricing that adapts to demand and location value.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg text-accent mt-1">
                  <span className="material-icons-outlined">analytics</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-white">Performance Insights</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Monitor visibility metrics, estimated impressions, and campaign performance to understand your brand impact.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark" id="locations">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl dark:text-white">Recent Activations</h2>
            <Link
              href="#"
              className="hidden md:flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              View All Projects <span className="material-icons-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
            <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="City Intersection Billboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={ACTIVATION_IMAGES.main}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-2 block">Fashion Week</span>
                <h3 className="text-white font-display text-2xl font-bold">Vogue x Metropolis</h3>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Gaming Ad"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={ACTIVATION_IMAGES.gaming}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">Gaming</span>
                <h3 className="text-white font-display text-lg font-bold">Cyberpunk Launch</h3>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Tech Product"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={ACTIVATION_IMAGES.tech}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary text-xs font-bold uppercase tracking-wider">Tech</span>
                <h3 className="text-white font-display text-lg font-bold">Series 15 Release</h3>
              </div>
            </div>
            <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Event Promo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={ACTIVATION_IMAGES.event}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Automotive</span>
                <h3 className="text-white font-display text-lg font-bold">Electric Future</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-slate-900 dark:bg-black z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-accent/20 dark:from-primary/20 dark:via-black dark:to-accent/10 opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary to-secondary rounded-full blur-[200px] opacity-20 animate-[pulse-glow_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-8 tracking-tight">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">GO VIRAL?</span>
          </h2>
          <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto">
            Join the revolution of outdoor advertising. Book your slot on the world&apos;s most advanced anamorphic screens today.
          </p>
          <form className="max-w-md mx-auto space-y-4 bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white/10 border-transparent focus:border-primary focus:bg-white/20 focus:ring-0 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/10 border-transparent focus:border-primary focus:bg-white/20 focus:ring-0 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full bg-white/10 border-transparent focus:border-primary focus:bg-white/20 focus:ring-0 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all"
            />
            <textarea
              placeholder="Tell us about your campaign idea..."
              rows={3}
              className="w-full bg-white/10 border-transparent focus:border-primary focus:bg-white/20 focus:ring-0 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all"
            />
            <button
              type="button"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg tracking-wide shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-background-light dark:bg-black border-t border-slate-200 dark:border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="flex items-center gap-2">
              <span className="text-4xl text-gradient font-display font-black">h</span>
              <span className="text-2xl font-display font-bold dark:text-white tracking-widest">HELOADZ</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-slate-500 hover:text-primary transition-colors" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-accent transition-colors" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  />
                </svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500 dark:text-slate-500">
            <p>© 2024 HeloAdz. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
