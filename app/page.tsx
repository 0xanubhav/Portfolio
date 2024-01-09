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
              className="rounded-full h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmT8-_QFjtTTrHmS998umeL1VGQmzPUfg8BrtDdS0CFQLfdUZJbjDHiR6VYx9_FFQvwXY&usqp=CAU"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
