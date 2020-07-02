import React from "react";

import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="ProjectPage instaFade">
      <h1 className="ProjectTitle">Task2 - Phone Book</h1>
      <iframe
        className="ProjectFrame"
        src="https://onetech-react-task2.now.sh"
        title="Task2 - Phone Book"
      ></iframe>
      <h1 className="ProjectTitle">Task 3 - Notes</h1>
      <iframe
        className="ProjectFrame"
        src="https://onetech-react-task3.now.sh"
        title="Task 3 - Notes"
      ></iframe>
      <h1 className="ProjectTitle">Task 5 - Login Form</h1>
      <iframe
        className="ProjectFrame"
        src="https://onetech-react-task5.now.sh"
        title="Task 5 - Login Form"
      ></iframe>
    </div>
  );
}
export default ProjectPage;
