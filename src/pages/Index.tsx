import { useEffect, useState } from "react";
import jtLogo from "@/assets/jt-logo.png";
import couplePhoto from "@/assets/couple-photo.png";

const NAV_ITEMS = ["Home", "Our Day", "Registry", "Our Story", "Chat", "Chocolate"];

const Navigation = () => (
  <nav className="bg-burgundy py-6">
    <div className="flex justify-center gap-8 md:gap-12 flex-wrap px-4">
      {NAV_ITEMS.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(" ", "-")}`}
          className="font-heading text-gold text-xs tracking-[0.2em] uppercase hover:text-paper transition-colors duration-300"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="bg-burgundy py-20 md:py-32 text-center">
    <div className="max-w-editorial mx-auto px-4">
      <img src={jtLogo} alt="JT Monogram" className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-12 object-contain" />
      <p className="font-heading text-gold text-xs tracking-[0.3em] uppercase mb-4">
        The Wedding Of
      </p>
      <h1 className="font-script text-gold text-6xl md:text-8xl animate-ink-bleed">
        Jessica & Tomide
      </h1>
    </div>
  </section>
);

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, targetDate.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
};

const Countdown = () => {
  const target = new Date("2026-12-22T00:00:00");
  const { days, hours, mins, secs } = useCountdown(target);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="bg-sand py-16 md:py-20 text-center">
      <p className="font-script text-chocolate text-2xl md:text-3xl mb-6">Countdown begins!</p>
      <div className="flex justify-center items-center gap-2 md:gap-4 text-chocolate">
        {[
          { val: days, label: "DAYS" },
          { val: hours, label: "HOURS" },
          { val: mins, label: "MINS" },
          { val: secs, label: "SECS" },
        ].map((item, i) => (
          <div key={item.label} className="flex items-center gap-2 md:gap-4">
            {i > 0 && <span className="font-heading text-3xl md:text-5xl">:</span>}
            <div className="text-center">
              <span className="font-heading text-4xl md:text-6xl font-bold tracking-wide">
                {pad(item.val)}
              </span>
              <p className="font-heading text-xs tracking-[0.2em] mt-2">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="font-heading text-chocolate text-xs tracking-[0.25em] uppercase mt-10">
        December 22nd, 2026 · Lagos, Nigeria
      </p>
    </section>
  );
};

const OurStory = () => {
  const stories = [
    {
      title: "The Dance",
      text: "It began with a glance across a crowded room, a hand extended, and a first dance that neither wanted to end. In that moment, the world fell away, and all that remained was the rhythm of two hearts finding their tempo.",
    },
    {
      title: "The Meeting",
      text: "What started as a chance encounter at a friend's gathering became the beginning of something extraordinary. Over long conversations and shared laughter, a friendship blossomed into a love neither had expected to find.",
    },
    {
      title: "The Future",
      text: "Now, standing at the threshold of forever, Jessica and Tomide invite you to witness the next chapter of their story — one written in gold, bound in love, and celebrated with those who matter most.",
    },
  ];

  return (
    <section id="our-story" className="bg-burgundy py-24 md:py-36">
      <div className="max-w-editorial mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Frame + Photo */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="w-52 h-64 md:w-60 md:h-72 mx-auto rounded-[50%] overflow-hidden ornate-frame">
                <img src={couplePhoto} alt="Jessica and Tomide" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="mt-8">
              <p className="font-heading text-paper text-4xl md:text-5xl tracking-[0.15em] uppercase leading-tight">
                Our
              </p>
              <p className="font-script text-gold text-5xl md:text-6xl -mt-2">Story</p>
            </div>
          </div>

          {/* Right: Story blocks */}
          <div className="space-y-10">
            {stories.map((story) => (
              <div key={story.title}>
                <h3 className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-3">
                  {story.title}
                </h3>
                <p className="font-body text-paper/80 text-base leading-relaxed">{story.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DRESS_COLORS = ["#3D1C11", "#4A2828", "#6B7B5E", "#C2AC7B", "#2D0009"];

const OurDay = () => {
  const sections = [
    { title: "Venue", text: "The ceremony and reception will be held at a stunning waterfront estate in Lagos, offering breathtaking views and an atmosphere of timeless elegance." },
    { title: "Accommodation", text: "A curated selection of luxury accommodations has been arranged nearby for our guests. Details and booking links will be shared closer to the date." },
    { title: "Transportation", text: "Complimentary shuttle services will be provided from select hotels to the venue and back. A detailed schedule will be shared in your welcome package." },
    { title: "Dress Code", text: "We invite you to dress in rich, elegant tones that complement our palette. Think luxurious fabrics, refined silhouettes, and timeless style." },
  ];

  return (
    <section id="our-day" className="bg-burgundy py-24 md:py-36">
      <div className="max-w-editorial mx-auto px-4">
        {/* Lace-style paper card */}
        <div className="relative">
          {/* Lace scallop top */}
          <div className="flex justify-center">
            <svg viewBox="0 0 700 30" className="w-full max-w-[700px]" preserveAspectRatio="none">
              <path
                d="M0,30 Q17.5,0 35,30 Q52.5,0 70,30 Q87.5,0 105,30 Q122.5,0 140,30 Q157.5,0 175,30 Q192.5,0 210,30 Q227.5,0 245,30 Q262.5,0 280,30 Q297.5,0 315,30 Q332.5,0 350,30 Q367.5,0 385,30 Q402.5,0 420,30 Q437.5,0 455,30 Q472.5,0 490,30 Q507.5,0 525,30 Q542.5,0 560,30 Q577.5,0 595,30 Q612.5,0 630,30 Q647.5,0 665,30 Q682.5,0 700,30"
                fill="hsl(33, 100%, 97%)"
              />
            </svg>
          </div>
          <div className="bg-paper px-6 md:px-16 pb-16 pt-8 text-center">
            <h2 className="font-script text-chocolate text-5xl md:text-6xl mb-12">Our Day</h2>
            <div className="space-y-10 text-left max-w-md mx-auto">
              {sections.map((s) => (
                <div key={s.title}>
                  <h3 className="font-heading text-gold text-lg tracking-wide mb-2">{s.title}</h3>
                  <p className="font-body text-chocolate/80 text-base leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            {/* Color swatches */}
            <div className="flex justify-center gap-4 mt-12 mb-8">
              {DRESS_COLORS.map((c) => (
                <div key={c} className="w-10 h-10 rounded-full border-2 border-chocolate/20" style={{ backgroundColor: c }} />
              ))}
            </div>

            <p className="font-heading text-chocolate text-xs tracking-[0.2em] uppercase mb-4">
              Chat with our AI for more details
            </p>
            <button className="bg-burgundy text-paper font-heading text-sm tracking-[0.15em] uppercase px-10 py-3 hover:bg-chocolate transition-colors duration-300 inline-flex items-center gap-2">
              Chat Now <span className="text-lg">→</span>
            </button>
          </div>
          {/* Lace scallop bottom */}
          <div className="flex justify-center rotate-180">
            <svg viewBox="0 0 700 30" className="w-full max-w-[700px]" preserveAspectRatio="none">
              <path
                d="M0,30 Q17.5,0 35,30 Q52.5,0 70,30 Q87.5,0 105,30 Q122.5,0 140,30 Q157.5,0 175,30 Q192.5,0 210,30 Q227.5,0 245,30 Q262.5,0 280,30 Q297.5,0 315,30 Q332.5,0 350,30 Q367.5,0 385,30 Q402.5,0 420,30 Q437.5,0 455,30 Q472.5,0 490,30 Q507.5,0 525,30 Q542.5,0 560,30 Q577.5,0 595,30 Q612.5,0 630,30 Q647.5,0 665,30 Q682.5,0 700,30"
                fill="hsl(33, 100%, 97%)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChocolateSection = () => (
  <section id="chocolate" className="bg-burgundy py-24 md:py-36">
    <div className="max-w-editorial mx-auto px-4">
      <div className="relative">
        {/* Outer envelope */}
        <div className="bg-paper pt-16 pb-0 px-6 md:px-12 text-center" style={{ clipPath: "polygon(0 15%, 50% 0, 100% 15%, 100% 100%, 0 100%)" }}>
          {/* Inner card */}
          <div className="bg-burgundy mx-auto max-w-lg py-16 px-8 md:px-12 mb-0" style={{ borderRadius: "0 0 0 0" }}>
            {/* Decorative top flourish */}
            <div className="flex justify-center mb-8">
              <svg width="120" height="30" viewBox="0 0 120 30" fill="none">
                <path d="M0,15 Q30,0 60,15 Q90,30 120,15" stroke="hsl(42, 52%, 62%)" strokeWidth="1.5" fill="none" />
                <path d="M20,15 Q45,5 60,15 Q75,25 100,15" stroke="hsl(42, 52%, 62%)" strokeWidth="1" fill="none" />
                <circle cx="60" cy="15" r="3" fill="hsl(42, 52%, 62%)" />
              </svg>
            </div>
            <h2 className="font-script text-gold text-5xl md:text-6xl mb-6">Chocolate</h2>
            <p className="font-body text-paper/70 text-base leading-relaxed max-w-sm mx-auto">
              A curated selection of artisan chocolates will accompany your experience — each piece crafted to reflect the richness and sweetness of this celebration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-sand py-12 text-center">
    <p className="font-script text-chocolate text-xl md:text-2xl">
      Thank you for sharing this moment with us
    </p>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Countdown />
      <OurStory />
      <OurDay />
      <ChocolateSection />
      <Footer />
    </div>
  );
};

export default Index;
