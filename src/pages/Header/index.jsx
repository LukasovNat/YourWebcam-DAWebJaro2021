import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

export const Header = ({ isLogged, handleLogin }) => {
  const [burgerOpened, setBurgerOpened] = useState(false);

  const handleLogout = () => {
    handleLogin(false);
  };

  const handleSelectItem = () => {};

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
        {/* hamburger menu */}
        <div
          className={
            burgerOpened
              ? 'hamburgerMenu'
              : 'hamburgerMenu hamburgerMenu--closed'
          }
          onClick={() => setBurgerOpened(!burgerOpened)}
        >
          <p>
            <span className="hamburgerMenu--span">≡ Menu</span>
          </p>
          <div className="menu__items">
            <Link
              className="menu__item byloA"
              onSelect={handleSelectItem}
              to="/"
            >
              Úvod
            </Link>
            <Link
              className="menu__item byloA"
              onSelect={handleSelectItem}
              to="/details"
            >
              Co děláme
            </Link>
            <Link
              className="menu__item byloA"
              onSelect={handleSelectItem}
              to="/cameras"
            >
              Podporované kamery
            </Link>
            {isLogged ? (
              <Link
                className="menu__item byloA"
                onSelect={handleSelectItem}
                to="/gallery"
              >
                Galerie
              </Link>
            ) : (
              <Link
                className="menu__item byloA"
                onSelect={handleSelectItem}
                to="/price-list"
              >
                Ceník
              </Link>
            )}

            {isLogged ? (
              <Link
                className="menu__item byloA"
                onSelect={handleSelectItem}
                to="/settings"
              >
                Nastavení
              </Link>
            ) : (
              <>
                <Link
                  className="menu__item byloA"
                  onSelect={handleSelectItem}
                  to="/login"
                >
                  Přihlásit
                </Link>
                <Link
                  className="menu__item byloA"
                  onSelect={handleSelectItem}
                  to="/registration"
                >
                  Zaregistrovat
                </Link>
              </>
            )}
          </div>
        </div>

        {/* normal menu */}
        <ul className="menu--nav">
          <li>
            <NavLink className="byloA" activeClassName="selected" exact to="/">
              ÚVOD
            </NavLink>
          </li>
          <li>
            <NavLink className="byloA" activeClassName="selected" to="/details">
              CO DĚLÁME
            </NavLink>
          </li>
          <li>
            <NavLink className="byloA" activeClassName="selected" to="/cameras">
              PODPOROVANÉ KAMERY
            </NavLink>
          </li>
          {isLogged ? (
            <li>
              <NavLink
                className="byloA"
                activeClassName="selected"
                to="/gallery"
              >
                GALERIE
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="byloA"
                activeClassName="selected"
                to="/price-list"
              >
                CENÍK
              </NavLink>
            </li>
          )}
        </ul>
        <ul className="menu--auth">
          {isLogged
            ? console.log('User je lognuty')
            : console.log('User neni lognuty')}
          {isLogged ? (
            <>
              <li>
                <Link className="ucetAregistrace byloA" to="/settings">
                  <img
                    className="ikonka"
                    src="../../assets/iconmonstr-user-5.svg"
                  />
                  Nastavení
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleLogout}
                  className="ucetAregistrace byloA"
                  to="/"
                >
                  <img
                    className="ikonka"
                    src="../../assets/iconmonstr-edit-5.svg"
                  />
                  Odhlásit
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="ucetAregistrace byloA" to="/login">
                  <img
                    className="ikonka"
                    src="../../assets/iconmonstr-user-5.svg"
                  />
                  Přihlásit
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
            </>
          )}
        </ul>
      </header>
    </>
  );
};
