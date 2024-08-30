import '../../css/css_layout/footer.css';
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDev } from "react-icons/fa";

export default function Footer () {
  return (
    <footer>

      <div class="footer-icon">
        <a href="#"><FaGithub /></a>
      </div>

      <div class="footer-icon">
        <a href="#"><SiGmail /></a>
      </div>

      <div class="footer-icon">
        <a href="https://dev.to/goburin"><FaDev /></a>
      </div>
      
    </footer>
  );
}