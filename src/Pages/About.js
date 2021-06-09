import React from "react";
import "./About.css";
import aboutImage from "../images/about.png";
const About = () => {
  return (
    <main>
      <div className="section_center flex_about">
        <div className="image_container">
          <img src={aboutImage} alt="" />
        </div>
        <div className="about_content">
          <h2>Our story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempore
            laborum laudantium omnis! Vero incidunt dolorum impedit perspiciatis
            suscipit ducimus possimus repudiandae dolore magnam, libero eius
            nemo deserunt dignissimos eos eaque totam eligendi molestias atque
            quam, at recusandae odit et veniam? Ipsa voluptatem quos totam
            doloremque, placeat harum veniam amet eligendi aut quasi sunt
            facilis rerum, necessitatibus blanditiis eaque, voluptas doloribus.
            Vero error ipsum, nobis deserunt quibusdam dolore. Ad in modi
            sapiente neque voluptatibus, labore fuga repellendus! Doloremque
            vero quidem dignissimos libero necessitatibus nostrum debitis.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
