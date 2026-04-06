import Customcursor from "./components/Customcursor";
import Introanimation from "./components/Introanimation";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import React from "react";


 

export default function App(){

  const [introDone, setIntroDone] = React.useState(false)
  return (

<>
{!introDone && < Introanimation onFinish={()=> setIntroDone(true)}/>}

{introDone && (
    <div className="relative gradient text-white">
     <Customcursor/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
)}
    </>
  )
}