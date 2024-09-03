import './css/css_layout/app.css';

import Header from './react/layout/Header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './react/layout/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
