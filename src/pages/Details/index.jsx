import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Details = () => (
  <>
    <main role="main" className="kontejner">
      <div className="popisSluzby">
        <div className="popisSluzby1">
          <h2>Sledujte vše, co je pro Vás důležité</h2>
          <p>
            <strong>
              Nabízíme Vám jednoduché řešení dostupné pro kohokoliv, kdo vlastní{' '}
              funkční IP webkameru, která je schopna v definovaném čase zasílat
              nasnímané fotky snímky na určenou adresu.
            </strong>{' '}
          </p>
          <p>
            Chcete mít přehled, co se děje ve vašem domě, na parkovišti, na
            dvorku za domem, nebo jednoduše máte objekt zájmu, který chcete mít
            pod vizuální kontrolou? Nechcete utrácet peníze za finančně náročné
            zabezpečovací systémy?
            <br />
            Naše služba Vám umožní sledovat vše podstatné, třeba z pohodlí
            hotelového pokoje na druhém konci světa..Vy tak uvidíte, zda před
            vašimi dveřmi nebyla nečekaná návštěva nebo je vozidlo zaparkované,
            tak, jak jste jej před odjezdem zanechali.
            <br />
          </p>
        </div>
        <img className="domu" src="../../assets/backgroundKamera.jpg" />
        {/* <!--Popis1--> */}
        <div className="popisSluzby2">
          <h3>S námi je vše jednoduché...</h3>
          <p>
            Zkontrolujte si, zda je Vaše kamera kompatibilní s naší službou,
            nebo se rovnou zaregistrujte.
          </p>

          <div className="buttons">
            <Link className="byloA" to="/cameras">
              <button className="buttonHlavni" type="submit">
                Zkontrolovat parametry kamery
              </button>
            </Link>
            <Link className="byloA" to="/registration">
              <button className="buttonHlavni" type="submit">
                Zaregistrovat
              </button>
            </Link>
          </div>
          <p>
            Pokud si nejste jisti, zda služba, kterou hledáte splňuje Vaše
            požadavky vyzkoušejte si vše ve 14 dnech zdarma nebo si prohlédněte
            galerii, kde najdete typy zobrazení snímků dle zvoleného balíčku
            služeb. Sami si pak rozhodněte, zda si vybrané snímky pošlete e-mail
            nebo si je uchováte pro svoji potřebu.
          </p>
        </div>
      </div>
      <div className="tlacitko">
        <Link className="byloA" to="/registration">
          <strong>Vyzkoušet</strong> PREMIUM na 14 dní <strong>ZDARMA</strong>
        </Link>
      </div>
    </main>
  </>
);
