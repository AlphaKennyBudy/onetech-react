import React from "react";

import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="ProjectPage instaFade">
      <h1 className="ProjectTitle">Task2 - Phone Book</h1>
      <iframe
        className="ProjectFrame"
        src="https://onetech-react.vercel.app/"
        title="Task2 - Phone Book"
      ></iframe>
      <h1 className="ProjectTitle">Task 3 - Notes</h1>
      <iframe
        className="ProjectFrame"
        src="https://onetech-react.alphakennybudy.vercel.app/"
        title="Task 3 - Notes"
      ></iframe>
    </div>
  );
}
export default ProjectPage;
