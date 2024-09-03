import '../../css/css_components/nav.css';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            CONTACT
          </Link>
        </li>
        <li>
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  );
}