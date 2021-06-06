import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Settings = () => {
  return (
    <>
      <div className="kontejner">
        <h3>Dobrý den</h3>
        <p>
          na této stránce naleznete přehled veškerých informací o svém účtu.
          <br />
          Moje zákaznické číslo: 1234567
        </p>
        <hr />
        <h4>Aktuální stav mého účtu:</h4>
        <p>
          Typ poskytované služby: PREMIUM
          <br />
          Poslední platba připsaná na účet dne: <br />
          Následující platba do: <br />
          Zrušení účtu{' '}
        </p>
        <hr />
        <h4>Moje aktivity</h4>
        <p>
          Moje emailová adresa: petrpavel@gmail.com
          <br />
          Heslo: **********
        </p>
        <hr />
        <h4></h4>
        <button className="ucetAregistrace">
          <Link className="byloA" to="/registration">
            <img className="ikonka" src="../../assets/iconmonstr-edit-5.svg" />
            Změnit údaje
          </Link>
        </button>
      </div>
    </>
  );
};
