import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


const Index = () => {
  const [isNewUI, setIsNewUI] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isNewUI
          ? "bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white font-[Poppins]"
          : "bg-background text-foreground font-sans"
      }`}
    >
      {/* Navigation with toggle props */}
      <Navigation isNewUI={isNewUI} setIsNewUI={setIsNewUI} />

      <main className="p-6 md:p-12 space-y-20">
        {isNewUI ? (
          <>
            {/* ✨ New UI */}
            <section className="rounded-3xl bg-white/10 backdrop-blur-lg p-10 shadow-2xl">
              <Hero />
            </section>

            <section className="grid md:grid-cols-2 gap-12">
              <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-lg shadow-xl">
                <About />
              </div>
              <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-lg shadow-xl">
                <Projects />
              </div>
            </section>

            <section className="p-10 rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-800 shadow-2xl">
              <Contact />
            </section>
          </>
        ) : (
          <>
            {/* 🎨 Classic UI (your original layout) */}
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
