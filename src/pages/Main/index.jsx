import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Main = () => {
  return (
    <div className="uvodStranaSPozadim">
      <div className="kontejner">
        <p className="uvodSlogan">
          <span className="uvodSlogan--span">
            {' '}
            Sledujte snímky z Vaší webové kamery ať už jste
          </span>{' '}
          kdekoliv.
        </p>
        <p className="uvodText">
          Už se nemusíte obávat o své auto před domem, ani pohybu dětí u bazénu.
          <br />
          Vámi nasnímané fotky Vám zpětně prezentujeme tak, jak právě
          potřebujete.
        </p>
        <div className="tlacitko">
          <Link className="byloA" to="/details">
            Chci se dozvědět více
          </Link>
        </div>
      </div>
    </div>
  );
};
