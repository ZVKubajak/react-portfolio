import '../../css/css_layout/footer.css';
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer () {
  return (
    <footer>
      <div class="icon">
        <a href="#"><FaGithub /></a>
      </div>
      <p>ZVKubajak</p>
      <div class="icon">
        <a href="#"><SiGmail /></a>
      </div>
    </footer>
  );
}