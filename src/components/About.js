// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">New Full Stack Developer </p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpeg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        I'm Inder, a student studying the full stack to better my work
        as a technical writer in the tech fields.
      </p>
      <p className="content">
      I am a student at UC Berkely Bootcamp and currently learning
      how to code. I didn't had any experince with the coding before
      joining the bootcamp. I joined the bootcamp in hope when I
      graduate I will have gained the skills required for me to get a job
      as an Software Developer.
      </p>
    </div>
  );
}

export default About;
