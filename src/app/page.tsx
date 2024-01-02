import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import type { NextPage } from "next";

const Home: NextPage = ()=>{
  return(
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      
      <Header/>
        
      <section id="hero" className="snap-center">
        <Hero/>
      </section>
      
      <section>
        <About/>
      </section>
      {/* Experience */}
      {/* skills */}
      {/* Projects */}
      {/* Contact Me */}
      
    </div>
  );
}

export default Home;

