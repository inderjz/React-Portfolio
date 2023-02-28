//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React Portfolio site by{" "}
          <a href="https://github.com/inderjz" target="_blank" rel="noreferrer">
            Inderjit Singh 
          </a>
          .
          <hr />
          <a
            href="https://twitter.com/"
            target="_blank" rel="noreferrer"
          >
            Twitter
          </a>{" "}
          |{" "}{" "}
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
