import '../../css/css_layout/footer.css';

import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaDev } from "react-icons/fa";

export default function Footer () {
  return (
    <footer>

      <div class="footer-icon">
        <a href="https://github.com/ZVKubajak"><FaGithub /></a>
      </div>

      <div class="footer-icon">
        <a href="mailto:zvkubajak@gmail.com"><SiGmail /></a>
      </div>

      <div class="footer-icon">
        <a href="https://dev.to/goburin"><FaDev /></a>
      </div>
      
    </footer>
  );
}