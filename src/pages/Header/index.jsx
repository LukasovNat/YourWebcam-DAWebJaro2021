import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = ({ isLogged }) => {
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
              ÚVOD
            </Link>
          </li>
          <li>
            <Link className="byloA" to="/details">
              CO DĚLÁME
            </Link>
          </li>
          <li>
            <Link className="byloA" to="/cameras">
              PODPOROVANÉ KAMERY
            </Link>
          </li>
          <li>
            <Link className="byloA" to="/price-list">
              CENÍK
            </Link>
          </li>
        </ul>
        <ul className="menu">
          {isLogged
            ? console.log('User je lognuty')
            : console.log('User neni lognuty')}
          <li>
            <Link className="ucetAregistrace byloA" to="/gallery">
              <img
                className="ikonka"
                src="../../assets/iconmonstr-user-5.svg"
              />
              Můj účet
            </Link>
          </li>

          <li>
            <Link className="ucetAregistrace byloA" to="/registration">
              <img
                className="ikonka"
                src="../../assets/iconmonstr-edit-5.svg"
              />
              Zaregistrovat
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};
