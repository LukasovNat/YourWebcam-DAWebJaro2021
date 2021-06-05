import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <>
      <header className="hlavicka">
        <div className="logo">
          <img
            className="ikonka"
            src="../../assets/iconmonstr-webcam-4-240.png"
            alt="webka"
          />
          YOUR WEBCAM
        </div>
        <div className="hamburgerMenu">
          <p>
            <span className="hamburgerMenu--span">≡ Menu</span>
          </p>
        </div>
        <ul className="menu">
          <li>
            <Link className="byloA" to="/">
              Úvod
            </Link>
          </li>
          <li>
            <Link className="byloA" to="/details">
              Blizsi info
            </Link>
          </li>
          <li>
            <Link className="byloA" to="/cameras">
              Podporované web kamery
            </Link>
          </li>
          <li>
            <Link className="byloA" to="/price-list">
              Ceník
            </Link>
          </li>

          <li className="ucetAregistrace">
            <a href="mujUcet.html">
              <img
                className="ucetAregistrace"
                src="../../assets/iconmonstr-user-5.svg"
              />
              <span className="ucetAregistrace--span">Můj účet</span>
            </a>
          </li>
          <li className="ucetAregistrace">
            <Link className="byloA" to="/registration">
              <img
                className="ucetAregistrace"
                src="../../assets/iconmonstr-edit-5.svg"
              />
              <span className="ucetAregistrace--span">Zaregistrovat</span>
            </Link>
          </li>
        </ul>
      </header>
      {/* <Link to="/">Úvod</Link>
      <Link to="/price-list">Ceník</Link>
      <Link to="/registration">Registrace</Link>
      <Link to="/cameras">Podporované web kamery</Link> */}
    </>
  );
};
