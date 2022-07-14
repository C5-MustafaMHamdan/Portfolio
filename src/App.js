import "./App.css";
import "./App.scss";
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
        <button onClick={scrollOnContact}> Contact</button>
        <button onClick={scrollOnSkills}> Skills</button>
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
          <img
            className="myImg"
            src="https://media-exp2.licdn.com/dms/image/C4E03AQFqzpYxgLmVkg/profile-displayphoto-shrink_200_200/0/1656766220828?e=1661990400&v=beta&t=YcTNSOnBNtyf7A0eB8reH5IccDkKLxkDmjVvZS-uuxk"
          />
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

      {/* 
      <div ref={myExperience} className="my-experience">
        <div className="header">
          <h2>  My Projects </h2>
        </div>
        <div className="projects">
          <div className="item">
          <div className="img-div">
            <img
              className="cardImg"
              variant="top"
              src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800895/discord_xcmquo.jpg"
            /></div>
            <div>
              <div className="title">
                {" "}
                <a href="https://github.com/C5-MustafaMHamdan/Project-5">
                  Discord Clone
                </a>{" "}
              </div>
              <div className="desc">
                It is a discord clone with the same name as the app which it has
                most of the features used
              </div>
            </div>
           
          </div>
          <div className="item" >
            <div className="img-div" >
            <img
              
              className="cardImg"
              src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800802/docr_ggl4lw.jpg"
            /> </div>
            <div className="item">
              <Card.Title className="title"><a href="https://github.com/C5-MustafaMHamdan/MERAKI_Academy_Project_4">Appoint.Me </a></Card.Title>
              <div className="desc">
                An application to organize appointments between doctors and
                patients
              </div>
            </div>
            <Card.Footer>
       
            </Card.Footer>
          </div>
        </div>
      </div>     
  */}

      {/*             test1                          */}

      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<div id="container">	
	
	<div class="product-details">
		
	<h1>Discord Clone</h1>
	<span class="hint-star star">
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star" aria-hidden="true"></i>
		<i class="fa fa-star-o" aria-hidden="true"></i>
	</span>
		
			<p class="information">It is a discord clone with the same name as the app which it has
                most of the features used</p>

		
		
<div class="control">
	
	<button class="btn">
	 <span class="price">$250</span>
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <span class="buy">Get now</span>
 </button>
	
</div>
			
</div>
	
<div class="product-image">
	
	<img src="https://res.cloudinary.com/dnin1rp5m/image/upload/v1656800895/discord_xcmquo.jpg" alt=""/>
	

<div class="info">
	<h2> Description</h2>
	<ul>
		<li><strong>Height : </strong>5 Ft </li>
		<li><strong>Shade : </strong>Olive green</li>
		<li><strong>Decoration: </strong>balls and bells</li>
		<li><strong>Material: </strong>Eco-Friendly</li>
		
	</ul>
</div>
</div>

</div> */}

      {/* test 3 */}

      <div ref={myExperience} class="card-container">
        <h2> My Projects </h2>

        <div class="cardy" id="imgy1">
          <a href="https://github.com/C5-MustafaMHamdan/Project-5">
            Discord Clone
          </a>
          <p>
            {" "}
            It is a discord clone with the same name as the app which it has
            most of the features used
          </p>
        </div>

        <div class="cardy" id="imgy2">
          <a href="https://github.com/C5-MustafaMHamdan/MERAKI_Academy_Project_4">
            Appoint.Me{" "}
          </a>
          <p>
            {" "}
            An application to organize appointments between doctors and patients
          </p>
        </div>
      </div>

      <div ref={myContact} className="contact-me">
        <div className="findMe">
          <h2>You Can Find Me There </h2>
        </div>
        <div className="contactMe">
          <div className="linkdIn">
            <a href="https://www.linkedin.com/in/mustafahamda/">
              <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" />
            </a>
          </div>
          <div className="gitHub">
            {" "}
            <a href="https://github.com/MustafaMHamdan">
              {" "}
              <img src="https://iconape.com/wp-content/png_logo_vector/github-circle-coreui-icons-v1-0-0.png" />
            </a>{" "}
          </div>{" "}
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="front">
            <h1> You Can contact here</h1>
          </div>
          <div className="back">
            <h1>
              Mustafa Hamdan<span>Full-stack Developer </span>
            </h1>

            <h1> +962790863868 </h1>

            <h1> hamdan.mustafamof@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
