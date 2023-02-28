//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "TextEditor",
    languages: "html, css, js",
    image: "/img/jate.png",
    description: "With or without an internet connection, the user can generate notes or code snippets in the program, and they can be safely retrieved for use at a later time. The application will continue to function properly even when there is no active internet connection thanks to the integrated service worker and Cache APIs. Even when the app is offline, the user may view previously visited sites thanks to this program.",
    repo: "https://github.com/inderjz/Text-Editor",
    live: "https://text-editor-inderjz.herokuapp.com/",
  },
  {
    id: 1,
    title: "NoteTaker",
    languages: "html, css, js",
    image: "/img/notetaker.png",
    description: "Anyone can use this to make fast notes just like they would on paper or in a notebook, but they run the risk of losing their paper and any essential notes they made.",
    repo: "https://github.com/inderjz/Module-11-Challenge-Note-Taker",
    live: "https://note-taker-inderjz.herokuapp.com/",
  },
  {
    id: 2,
    title: "MVCTechBlog",
    languages: "css, js, handlebars",
    image: "/img/mvc.png",
    description: "My Project is a MVC-Tech-Blog where developers can publish their blog posts and comment on other developers posts as well.",
    live: "https://moduel-14-mvc-tech-blog.herokuapp.com/",
    repo: "https://github.com/inderjz/Module-14-Challenge-MVC-Tech-Blog",
  },
  {
    id: 3,
    title: "Basic Portfolio",
    languages: "html, css",
    image: "/img/work-portfolio.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/inderjz/Module-02-Challenge",
    live: "https://dainty-daffodil-172ed9.netlify.app/",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "html, css, js",
    image: "/img/weather-app.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/inderjz/Module-06-Challenge",
    live: "https://glittery-sable-27ae69.netlify.app/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
