import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. 
        Aliquam nulla facilisi cras fermentum odio eu. Elementum pulvinar etiam non
         quam lacus. Phasellus vestibulum lorem sed risus ultricies tristique nulla 
         aliquet enim. A pellentesque sit amet porttitor eget dolor morbi non arcu. 
         Sed id semper risus in hendrerit. Scelerisque mauris pellentesque pulvinar 
         pellentesque habitant. Lectus sit amet est placerat in egestas erat imperdiet.
          Eu feugiat pretium nibh ipsum. Facilisi morbi tempus iaculis urna id. Id neque
           aliquam vestibulum morbi. Lacus sed viverra tellus in hac habitasse platea. 
           Ultrices neque ornare aenean euismod elementum
        </p>
      </div>
    </div>
  );
}

export default About;
