import React from 'react';
import './style.css';

export const Registration = () => {
  return (
    <>
      <div className="kontejner">
        <h3>REGISTRACE Vášeho účtu YOUR WEBCAM</h3>
        <p>
          S účtem Your Webcam budete jednoduše ovládat a spravovat Vaší historii
          snímků s těmito výhodami:
        </p>
        <div className="obrazRegistrace">
          <ul>
            <li>Jednoduché ovládání po zadání e-mailové adresy a hesla.</li>
            <li>Přehled a sledování snímku ve vámi určený časový horizont.</li>
            <li>Možnost zaslání vybraných snímků na libovolný e-mail.</li>
          </ul>
          <img
            className="imgRegistrace"
            src="../../assets/registrace.jpg"
            alt="registrace uzivatele"
          />
        </div>
        <hr />
        <form method="POST" className="formularRegistrace" action="https://">
          {/* <!--Zacatek poli uctu--> */}
          <fieldset>
            <h3>Jsem nový zákazník</h3>
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
                />
              </li>
              <li>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id="email" name="email" className="velke" />
              </li>
              <li>
                <label htmlFor="heslo">Heslo: </label>
                <input type="heslo" id="heslo" name="heslo" className="velke" />
              </li>
            </ul>
          </fieldset>
          {/* <!--Konec poli uctu--> */}
          {/* <!--Zacatak poli adresy--> */}
          <fieldset>
            <h3>Adresa</h3>
            <ul className="formularovePole">
              <li>
                <label htmlFor="ulice_a cislo_domu">Ulice a číslo domu: </label>
                <input
                  type="text"
                  id="ulice_a cislo_domu"
                  name="ulice_a cislo_domu"
                  className="velke"
                />
              </li>
              <li>
                <label htmlFor="mesto">Město: </label>
                <input type="text" id="mesto" name="mesto" className="velke" />
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
              <li>
                <label htmlFor="psc">PSČ: </label>
                <input type="text" id="psc" name="psc" className="male" />
              </li>
            </ul>
          </fieldset>
          {/* <!--Konec pole adresy--> */}
          {/* <!--Zacatek vyber sluzby--> */}
          <fieldset>
            <h3>Výběr poskytovaného balíčku služeb</h3>
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
