import '../../css/css_components/project.css';

import { RiGitRepositoryFill } from "react-icons/ri";

export default function Project({ projectData }) {
  return (
    <div id="project-card">
      <img src={projectData.image}></img>

      <h2 id="project-title">
        <a id="project-app-link" href={projectData.appLink}>{projectData.title}</a>
      </h2>
      
      <a id="project-repo-link" href={projectData.repoLink}><RiGitRepositoryFill /></a>
    </div>
  );
}