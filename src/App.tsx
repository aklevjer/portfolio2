import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="space-y-20 py-12 md:py-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
