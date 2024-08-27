import '../css/css_layouts/header.css'
import Nav from '../components/Navigation.jsx';

export default function App() {
  return (
    <header>
      <h1 href="google.com">
        <a href="#"><span>ZVK</span>ubajak</a>
      </h1>
      <Nav />
    </header>
  );
}