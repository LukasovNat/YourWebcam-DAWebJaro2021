import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

export const Login = ({ handleLogin }) => {
  let history = useHistory();
  const login = (event) => {
    event.preventDefault();
    handleLogin(true);
    history.push('/gallery');
  };

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
      <div className="kontejner">
        <div className="prihlaseniUzivatelskyUcet--div">
          <form
            onSubmit={login}
            method="POST"
            className="formularRegistrace"
            action="https://"
          >
            <fieldset>
              <ul className="formularovePole">
                <li>
                  <label htmlFor="email">E-mail: </label>
                  <input
                    type="email"
                    required="required"
                    id="email"
                    name="email"
                    className="velke"
                  />
                </li>
                <li>
                  <label htmlFor="heslo">Heslo: </label>
                  <input
                    type="password"
                    required="required"
                    minLength={8}
                    id="heslo"
                    name="heslo"
                    className="velke"
                  />
                </li>
              </ul>
            </fieldset>
            <fieldset>
              <input
                type="submit"
                className="vytvorit_ucet"
                value="Přihlásit"
              />
            </fieldset>
          </form>
          <Link className="ztrataHesla" to="/login">
            Zapomněli jste heslo?
          </Link>
        </div>
      </div>
    </>
  );
};
