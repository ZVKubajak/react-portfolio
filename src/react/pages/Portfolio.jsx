import '../../css/css_pages/portfolio.css';
import Project from '../components/Project.jsx';

import projectData from '../../projectData.js';

export default function Portfolio() {
  return (
    <section id="portfolio-section">

      <h1>
        Portfolio
      </h1>

      <hr></hr>

      <div id="project-container">
        <div class="project-item"><Project projectData={projectData[0]} /></div>
        <div class="project-item"><Project projectData={projectData[1]} /></div>
        <div class="project-item"><Project projectData={projectData[2]} /></div>
        <div class="project-item"><Project projectData={projectData[3]} /></div>
        <div class="project-item"><Project projectData={projectData[4]} /></div>
        <div class="project-item"><Project projectData={projectData[5]} /></div>
      </div>

    </section>
  );
}