import React from 'react';
import './style.css';

export const Login = () => {
  return (
    <>
      <div className="prihlaseniUzivatelskyUcet">
        <p className="prihlaseniUzivatelskyUcet--nadpis">
          Přihlášení do uživatelského účtu
        </p>
        <p className="prihlaseniUzivatelskyUcet--uvitani">
          Již mám vytvořený uživatelský účet. Prosím vložte svoji e-mailovou
          adresu a heslo:
        </p>
      </div>
      <div className="prihlaseniUzivatelskyUcet--div">
        <form method="POST" className="formularRegistrace" action="https://">
          <fieldset>
            <h4>Jsem nový zákazník</h4>
            <ul className="formularovePole">
              <li>
                <label for="email">E-mail: </label>
                <input type="email" id="email" name="email" className="velke" />
              </li>
              <li>
                <label for="heslo">Heslo: </label>
                <input type="heslo" id="heslo" name="heslo" className="velke" />
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <input type="submit" className="vytvorit_ucet" value="Potvrdit" />
          </fieldset>
        </form>
      </div>
    </>
  );
};
