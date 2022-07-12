import "./App.css";

import {
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  CardGroup,
} from "react-bootstrap";
import AboutMe from "./components/aboutMe";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import React, { useRef } from "react";
/*  import 'bootstrap/dist/css/bootstrap.min.css';
 */

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
            <img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" />
          </div>
          <div className="tech">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" />
          </div>
          <div className="tech">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png" />{" "}
          </div>
          <div className="tech">
            <img src="https://initialcommit.com/img/initialcommit/beginners-guide-to-using-express-js-and-node-js-framework.png" />
          </div>
          <div className="tech">
            <img src="https://pngimg.com/uploads/mysql/mysql_PNG31.png" />
          </div>
          <div className="tech">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" />
          </div>
          <div className="tech">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
          </div>
          <div className="tech">
            <img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" />{" "}
          </div>
        </div>
      </div>

      <div ref={myExperience} className="my-experience">
        <h2>This Is My Projects </h2>
        <CardGroup className="projects">
          <Card>
            <Card.Img className="cardImg"
              variant="top"
              src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800895/discord_xcmquo.jpg"
            />
            <Card.Body>
              <Card.Title>Discord Clone</Card.Title>
              <Card.Text>
              {/*   It is a discord clone with the same name as the app which it has
                most of the features used */}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/C5-MustafaMHamdan/Project-5">
                github
              </a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top" className="cardImg"
              src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800802/docr_ggl4lw.jpg"
            />
            <Card.Body>
              <Card.Title>Appoint.Me</Card.Title>
              <Card.Text>
               {/*  An application to organize appointments between doctors and
                patients */}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href="https://github.com/C5-MustafaMHamdan/MERAKI_Academy_Project_4">
                github
              </a>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

      <div ref={myContact} className="contact-me">
        <div className="findMe"><h2>You Can Find Me There </h2></div>
        <div className="contactMe">
          <div className="linkdIn">
        <a href="https://www.linkedin.com/in/mustafahamda/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5IK4NaSj_TqCzBxD92euNHBvly2plbDJativnsXZZoHpRgEq6h_uR5Fn-9oWDHC91Q8&usqp=CAU" />
        </a></div>
        <div className="gitHub"> <a href="https://github.com/MustafaMHamdan"> <img src="https://iconape.com/wp-content/png_logo_vector/github-circle-coreui-icons-v1-0-0.png" /></a> </div> </div>
      </div>

      <Container className="primary"></Container>
    
    </div>
  );
}

export default App;

 