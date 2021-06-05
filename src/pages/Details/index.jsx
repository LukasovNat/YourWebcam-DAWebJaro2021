import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const Details = () => (
  <>
    <main role="main" className="kontejner">
      <div className="popisSluzby">
        <div className="popisSluzby1">
          <h3>"Sledujte vše, co je pro Vás důležité"</h3>

          <p>
            Chcete mít přehled, co se děje ve vašem domě, na parkovišti, na
            dvorku za domem, nebo jednoduše máte objekt zájmu, který chcete mít
            pod vizuální kontrolou? Nechcete utrácet peníze za finančně náročné
            zabezpečovací systémy?
            <br />
            Nabízíme Vám jednoduché řešení dostupné pro kohokoliv, kdo vlastní{' '}
            <strong>funkční webkameru</strong>, která je schopna v definovaném
            čase zasílat nasnímané fotky snímky na určenou adresu. A na Vás je
            už jen z pohodlí hotelového pokoje na druhém konci světa sledovat,
            zda před vašimi dveřmi není nečekaná návštěva nebo je vozidlo
            zaparkované, tak, jak jste jej před odjezdem zanechali.
            <br />
          </p>
        </div>

        {/* <!--Popis1--> */}
        <div className="popisSluzby2">
          <h3>S námi je vše jednoduché</h3>
          <p>
            Zkontrolujte si, zda je Vaše kamera kompatibilní s naší službou nebo
            se rovnou zaregistrujte.
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
      <h1>
        <Link className="byloA" to="/registration">
          Vyzkoušet PREMIUM na 14 dní ZDARMA
        </Link>
      </h1>
    </main>
  </>
);
