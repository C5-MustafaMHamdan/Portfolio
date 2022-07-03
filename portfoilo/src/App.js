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

  const skills = useRef(null);
  const scrollOnSkills = () => scrollToRef(skills);
/*   */
  return (
    <div className="App">
      <div className="navbar">
        <button onClick={scrollOnAbout}> about</button>
        <button onClick={scrollOnExperience}> Projects</button>
        <button onClick={scrollOnContact}> Contact</button>
        <button onClick={scrollOnSkills}> Skills</button>
      </div>
      <div className="about">
        <div ref={about} className="about-left">
          <span className="My-Name">Mustafa Hamdan </span>
          <p className="about_me_text">
            I am Mustafa, a web developer who is passionate about learning and
            dealing with new technology. I always strive to develop myself
          </p>
        </div>

        <div className="about-right">
          <img
            className="myImg"
            src="https://media-exp2.licdn.com/dms/image/C4E03AQFqzpYxgLmVkg/profile-displayphoto-shrink_200_200/0/1656766220828?e=1661990400&v=beta&t=YcTNSOnBNtyf7A0eB8reH5IccDkKLxkDmjVvZS-uuxk"
          />
        </div>
      </div>

      <div ref={skills} className="skills">
        <p>Skills & Technology </p>

        <div className="tech-skills">
          <div className="tech">
            HTML5{" "}
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
          </div>
          <div className="tech">
            CSS3{" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" />
          </div>
          <div className="tech">
            Node js{" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png" />{" "}
          </div>
          <div className="tech">
            Express{" "}
            <img src="https://initialcommit.com/img/initialcommit/beginners-guide-to-using-express-js-and-node-js-framework.png" />
          </div>
          <div className="tech">
            MySQL <img src="https://pngimg.com/uploads/mysql/mysql_PNG31.png" />{" "}
          </div>
          <div className="tech">
            MongoDB{" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" />
          </div>
          <div className="tech">
            React js{" "}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
          </div>
          <div className="tech">
            Redux{" "}
            <img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" />{" "}
          </div>
        </div>
      </div>

      <div ref={myExperience} className="my-experience">
        <h2>This Is My Projects </h2>
        <div className="discord">
          <img src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800895/discord_xcmquo.jpg" />

          <p>
            It is a discord clone with the same name as the app which has most
            of the features used
          </p>
          <a href="https://github.com/C5-MustafaMHamdan/Project-5">github</a>
        </div>
        <div className="doctors">
          <img src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800802/docr_ggl4lw.jpg" />
          <p>
            An application to organize appointments between doctors and patients
          </p>
          <a href="https://github.com/C5-MustafaMHamdan/MERAKI_Academy_Project_4">
            github
          </a>
        </div>
      </div>

      <div ref={myContact} className="contact-me">
        <h2>You Can Find Me There </h2>
        <a href="https://www.linkedin.com/in/mustafahamda/">LinkedIn</a>
        <a href="https://github.com/MustafaMHamdan">Github</a>
      </div>



 


      
    </div>
  );
}

export default App;
