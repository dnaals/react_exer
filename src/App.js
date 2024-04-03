import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Css from './pages/Css';
import Not from './pages/Not';
import Deploy from './pages/Deploy';
import Props from './pages/Props';
import Router from './pages/Router';
import Image from './pages/Image';
import './App.css';
import './test.scss';



function App() {
  return (
    <HashRouter>
      <header>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="css"> Css 활용 </Link>
          <Link to="/image"> Image 활용 </Link>
          <Link to="/router?num=4000" state={{ num: 100 }}> Router(페이지이동) </Link>
          <Link to="/props"> State&Props </Link>
          <Link to="/deploy"> Github Deploy </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css" element={<Css />} />
          <Route path="/deploy" element={<Deploy />} />
          <Route path="/image" element={<Image />} />
          <Route path="/props" element={<Props />} />
          <Route path="/router" element={<Router />} />
          <Route path="/*" element={<Not />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
