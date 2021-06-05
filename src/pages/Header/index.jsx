import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <>
      <header className="hlavicka">
        <div className="logo">
          <img
            className="ikonkaCam"
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
        </ul>
        <ul className="menu">
          <li>
            <button className="ucetAregistrace">
              <Link className="byloA" to="/gallery">
                <img
                  className="ikonka"
                  src="../../assets/iconmonstr-user-5.svg"
                />
                Můj účet
              </Link>
            </button>
          </li>

          <li>
            <button className="ucetAregistrace">
              <Link className="byloA" to="/registration">
                <img
                  className="ikonka"
                  src="../../assets/iconmonstr-edit-5.svg"
                />
                Zaregistrovat
              </Link>
            </button>
          </li>
        </ul>
      </header>
    </>
  );
};
