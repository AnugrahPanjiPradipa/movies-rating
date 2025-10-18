import React from 'react';
import movie from '../assets/movie.png';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark py-3">
      <div className="container-fluid d-flex flex-column gap-1 pt-0 flex-md-row align-items-center justify-content-between">
        <a className="navbar-brand px-3 text-light d-flex align-items-center gap-1">
          <img
            src={movie}
            alt="movie icon"
            width={48}
            height={48}
          />
          <span className="fs-4 fw-semibold">MoviesRate</span>
        </a>
        <form
          className="d-flex mx-auto"
          role="search"
          style={{ width: '50%' }}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
