import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Main = () => {
  return (
    <>
      <div className="uvodStranaSPozadim">
        <div className="kontejner">
          <p className="uvodSlogan">
            <span className="uvodSlogan--span">
              {' '}
              Sledujte snímky z Vaší IPwebové kamery ať už jste
            </span>{' '}
            kdekoliv.
          </p>
          <div className="tlacitko">
            <Link className="byloA" to="/details">
              Chci se dozvědět více
            </Link>
          </div>
        </div>
      </div>
      <div className="vlozenyDiv">
        <p className="uvodText">
          Už se nemusíte obávat o své auto před domem!
          <br />
          Vámi nasnímané fotky Vám zpětně prezentujeme tak, jak právě
          potřebujete.
        </p>
      </div>
    </>
  );
};
