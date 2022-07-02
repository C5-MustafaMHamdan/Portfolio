import "./App.css";
import { Button } from "react-bootstrap";
import AboutMe from "./components/aboutMe";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import React, { useRef } from "react";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
function App() {
  const about = useRef(null);
  const scrollOnAbout = () => scrollToRef(about);

  const myExperience = useRef(null);
  const scrollOnExperience = () => scrollToRef(myExperience);

  const myContact = useRef(null);
  const scrollOnContact = () => scrollToRef(myContact);

  return (
    <div className="App">
      <div className="navbar">
        <button onClick={scrollOnAbout}> about</button>
        <button onClick={scrollOnExperience}> myExperience</button>
        <button onClick={scrollOnContact}> Contact</button>
      </div>

      <div ref={about} className="about-me">
        <h1> Hi,</h1> <br></br> <h1> I am Mustafa Hamdan Web Developer </h1>
        <br></br>
        <h2>Full-Stack Developer</h2>
     
        <img src=" ../assist/portofoilo.jpg"/>    
           
        
      </div>

      <div ref={myExperience} className="my-experience">
        <h2>This Is My Projects </h2>
      </div>

      <div ref={myContact} className="contact-me">
        <h2>You Can Find Me There </h2>
      </div>
    </div>
  );
}

export default App;
