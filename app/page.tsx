import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thumb ">
      {" "}
      <head>
        <title>Anubav&apos;s Portfolio</title>
      </head>
      <Header />
      <section id="hero" className="snap-start ">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* {experience} */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* {skills} */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* {projects} */}
      <section
        id="projects"
        className="snap-start overflow-x-scroll scrollbar scrollbar-track-gray-400/20"
      >
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="items-center flex justify-center">
            <img
              className="rounded-full h-10 w-12 flex-shrink-0 filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-fc5b1.appspot.com/o/WhatsApp%20Image%202024-01-09%20at%2018.52.39_ec1ef55f.jpg?alt=media&token=b5b2174f-c9f8-4c80-83c6-3ca5c7c45f90"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
