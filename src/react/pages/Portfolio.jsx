import '../../css/css_pages/portfolio.css';
import Project from '../components/Project.jsx';

export default function Protfolio() {
  return (
    <section id="portfolio-section">
      <h1>
        Portfolio
      </h1>
      <div id="project-container">
        <div class="project-item"><Project /></div>
        <div class="project-item"><Project /></div>
        <div class="project-item"><Project /></div>
        <div class="project-item"><Project /></div>
        <div class="project-item"><Project /></div>
        <div class="project-item"><Project /></div>
      </div>
    </section>
  );
}