import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Podcasts from './pages/Podcasts';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
          {/* nav bar */}
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="/Movies">
            Movies
          </Link>
          <Link className="nav-item nav-link" to="/Podcasts">
            My Podcasts
          </Link>
        </div>
      </nav>
      <div className="container d-flex flex-column">
        <Routes>
          {/* routes for the app */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/podcasts" element={<Podcasts />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
