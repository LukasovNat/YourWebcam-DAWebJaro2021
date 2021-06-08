import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Login = () => {
  return (
    <>
      <div className="prihlaseniUzivatelskyUcet">
        <p className="prihlaseniUzivatelskyUcet--nadpis">
          Přihlášení do uživatelského účtu
        </p>
        <p className="prihlaseniUzivatelskyUcet--uvitani">
          Již mám vytvořený uživatelský účet. Prosím vložte svoji emailovou
          adresu a heslo:
        </p>
      </div>
      <div className="prihlaseniUzivatelskyUcet--div">
        <form method="POST" className="formularRegistrace" action="https://">
          <fieldset>
            <ul className="formularovePole">
              <li>
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" className="velke" />
              </li>
              <li>
                <label for="heslo">Heslo: </label>
                <input
                  type="password"
                  id="heslo"
                  name="heslo"
                  className="velke"
                />
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <input type="submit" className="vytvorit_ucet" value="Přihlásit" />
          </fieldset>
        </form>
        <Link className="ztrataHesla" to="/login">
          Zapomněli jste heslo?
        </Link>
      </div>
    </>
  );
};
