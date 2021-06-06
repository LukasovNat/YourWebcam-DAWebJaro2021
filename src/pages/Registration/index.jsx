import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export const Registration = ({ handleLogin }) => {
  let history = useHistory();
  const register = (event) => {
    event.preventDefault();
    handleLogin(true);
    history.push('/gallery');
  };

  return (
    <>
      <div className="kontejner">
        <h2>REGISTRACE Vášeho účtu YOUR WEBCAM</h2>
        <p>
          S účtem Your Webcam budete jednoduše ovládat a spravovat Vaší historii
          snímků s těmito výhodami:
        </p>
        <div className="obrazRegistrace">
          <p>
            Jednoduché ovládání po zadání e-mailové adresy a hesla. Přehled a
            sledování snímku ve vámi určený časový horizont. Možnost zaslání
            vybraných snímků na libovolný e-mail.
          </p>
          <img
            className="imgRegistrace"
            src="../../assets/registrace.jpg"
            alt="registrace uzivatele"
          />
        </div>
        <hr />
        {/* TODO check if registration was successfull before loging */}
        <form
          onSubmit={register}
          method="POST"
          className="formularRegistrace"
          action="https://"
        >
          {/* <!--Zacatek poli uctu--> */}
          <fieldset>
            <h4>Jsem nový zákazník</h4>
            <ul className="formularovePole">
              <li>
                <label htmlFor="jmeno">Jméno: </label>
                <input
                  type="text"
                  id="jmeno"
                  name="jmeno"
                  className="velke"
                  required="required"
                  placeholder="Zadejte své jméno"
                />
              </li>
              <li>
                <label htmlFor="prijmeni">Příjmení: </label>
                <input
                  type="text"
                  id="prijmeni"
                  name="prijmeni"
                  className="velke"
                  required="required"
                />
              </li>
              <li>
                <label htmlFor="email">E-mail: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="velke"
                  required="required"
                />
              </li>
              <li>
                <label htmlFor="heslo">Heslo: </label>
                <input
                  type="heslo"
                  id="heslo"
                  name="heslo"
                  className="velke"
                  required="required"
                />
              </li>
            </ul>
          </fieldset>
          {/* <!--Konec poli uctu--> */}
          {/* <!--Zacatak poli adresy--> */}
          <fieldset>
            <h4>Údaje o Vaší kameře</h4>
            <ul className="formularovePole">
              <li>
                <label htmlFor="udaje_o_kamere">Značka: </label>
                <input
                  type="text"
                  id="udaje_o_kamere"
                  name="udaje_o_kamere"
                  className="velke"
                />
              </li>
              <li>
                <label htmlFor="mesto">Typ: </label>
                <input type="text" id="typ" name="typ" className="velke" />
              </li>
              {/* <!--<li>
              <label htmlFor="stat">Stát: </label>
              <select id="stat" name="stat">
                <option value="CZ" className="velke">Česká republika</option>
                <option value="SK">Slovensko</option>
                <option value="DE">Něměcko</option>
                <option value="Pl">Polsko</option>
              </select>
            </li>--> */}
            </ul>
          </fieldset>
          {/* <!--Konec pole adresy--> */}
          {/* <!--Zacatek vyber sluzby--> */}
          <fieldset>
            <h4>Výběr poskytovaného balíčku služeb</h4>
            <ul className="formularovePole">
              <li className="buttonVyber">
                <label htmlFor="typ_sluzby">Free </label>
                <input type="radio" value="souhlasim" id="typ_sluzby" />
              </li>
              <li className="buttonVyber">
                <label htmlFor="typ_sluzby">Standard </label>
                <input type="radio" value="souhlasim" id="typ_sluzby" />
              </li>
              <li className="buttonVyber">
                <label htmlFor="typ_sluzby">Premium</label>
                <input type="radio" value="souhlasim" id="typ_sluzby" />
              </li>
              <li className="buttonVyber">
                <label htmlFor="typ_sluzby">
                  Vyzkoušet Premium na 14 dní ZDARMA
                </label>
                <input type="radio" value="souhlasim" id="typ_sluzby" />
              </li>
            </ul>
          </fieldset>
          {/* <!--Konec vyberu sluzby--> */}
          <fieldset>
            <input
              type="submit"
              className="vytvorit_ucet"
              value="Vytvořit účet"
            />
          </fieldset>
        </form>
      </div>
    </>
  );
};
