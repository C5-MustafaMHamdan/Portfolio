import "./App.css";
import "./App.scss";

import React, { useRef } from "react";
/*  import 'bootstrap/dist/css/bootstrap.min.css'; */

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
        <button onClick={scrollOnAbout}> About</button>
        <button onClick={scrollOnExperience}> Projects</button>
        <button onClick={scrollOnSkills}> Skills</button>
        <button onClick={scrollOnContact}> Contact</button>
       
      </div>

      <div className="about">
        <div ref={about} className="about-left">
          <span className="My-Name">About Me </span>
          <p className="about_me_text">
            I am Mustafa, a web developer who is passionate about learning and
            dealing with new technology. I always strive to develop myself
          </p>
        </div>

        <div className="about-right">
          
        </div>
      </div>











      <div ref={skills} class="all">
        <div class="lefter" id="MySQL">
          <div class="text">MySQL</div>
        </div>
        <div class="lefter" id="Node-Js">
          <div class="text">Node Js</div>
        </div>

        <div class="lefter" id="MongoDB">
          <div class="text">MongoDB</div>
        </div>

        <div class="left" id="react">
          <div class="text">React</div>
        </div>
        <div class="center">
          <div class="explainer">
            <span>My Skills</span>
          </div>
          <div class="text"> </div>
        </div>
        <div class="right" id="HTML5">
          <div class="text">HTML5 </div>
        </div>
        <div class="righter" id="CSS3">
          <div class="text">CSS3</div>
        </div>
        <div class="righter" id="Redux">
          <div class="text">Redux</div>
        </div>

        <div class="righter" id="Java-Script">
          <div class="text">Java Script</div>
        </div>
      </div>

      


     
      <div   ref={myExperience}     class="wrapper2">
        <div  class="wrapper2-title"><h1 >My Projects</h1></div>
        <div   class="projects" >
        <div  class="cardz"  >
            <a href="https://github.com/C5-MustafaMHamdan/Project-5">
            Discord Clone
          </a>
            <img src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800895/discord_xcmquo.jpg" 
            />
            
            <div class="descriptions">
                <h1>Discord Clone</h1>
                <p>
                It is a discord clone with the same name as the app which it has
            most of the features used               </p>
            <a href="https://github.com/C5-MustafaMHamdan/Project-5">
            Discord Clone
          </a>
            </div>

        </div>

        <div class="cardz">
            <img src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800802/docr_ggl4lw.jpg"/>
            <div class="descriptions">
                <h1>Appoint.Me</h1>
                <p>
                An application to organize appointments between doctors and patients             </p>
            <a href="https://github.com/C5-MustafaMHamdan/MERAKI_Academy_Project_4">
            Appoint.Me{" "}
          </a>
            </div>
        </div>
        </div>
    </div>








 


      <div ref={myContact} class="infocardContainer">
  <div id="main">
    <img src="https://media-exp2.licdn.com/dms/image/C4E03AQFqzpYxgLmVkg/profile-displayphoto-shrink_200_200/0/1656766220828?e=1661990400&v=beta&t=YcTNSOnBNtyf7A0eB8reH5IccDkKLxkDmjVvZS-uuxk"></img>
  </div>
  <div id="textbois">
    <h2>Mustafa Hamdan</h2>
    <h4>Full-stack Developer</h4>
    <a href="hamdan.mustafamof@gmail.com">hamdan.mustafamof@gmail.com</a>
    <div id="hotlinks">
    <a href="https://github.com/MustafaMHamdan">
              {" "}
              <img src="https://iconape.com/wp-content/png_logo_vector/github-circle-coreui-icons-v1-0-0.png" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/mustafahamda/">
              <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" />
            </a>
    
    </div>
  </div>
</div> 



    








    
    </div>
  );
}

export default App;
