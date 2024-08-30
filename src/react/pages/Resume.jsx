import '../../css/css_pages/resume.css';

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Resume() {
  return (
    <section id="resume-section">

      <h1>Resume</h1>

      <hr></hr>

      <div id="icon-container">
        <div id="html-icon" class="resume-icon">
          <FaHtml5 />
        </div>

        <div id="css-icon" class="resume-icon">
          <FaCss3Alt />
        </div>

        <div id="javascript-icon" class="resume-icon">
          <BiLogoJavascript />
        </div>

        <div id="typescript-icon" class="resume-icon">
          <BiLogoTypescript />
        </div>

        <div id="nodejs-icon" class="resume-icon">
          <FaNodeJs />
        </div>

        <div id="react-icon" class="resume-icon">
          <FaReact />
        </div>

        <div id="postgresql-icon" class="resume-icon">
          <BiLogoPostgresql />
        </div>
      </div>

      <p id="resume-text">Download my resume <a id="resume-link" href="#">here</a>.</p>

    </section>
  );
} 