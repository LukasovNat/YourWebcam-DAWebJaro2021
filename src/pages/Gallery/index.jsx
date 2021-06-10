import React, { useState } from 'react';

const testPicDb = [
  { id: '1', url: '../../assets/MartinAuto.jpg', label: 'Prvni' },
  { id: '2', url: '../../assets/pesZmenseno.jpg', label: 'Druhy' },
  { id: '3', url: '../../assets/MartinAuto.jpg', label: 'Treti' },
  { id: '4', url: '../../assets/pesZmenseno.jpg', label: 'Ctvrty' },
  { id: '5', url: '../../assets/MartinAuto.jpg', label: 'Paty' },
];

const Obrazek = ({ url, label, handleClick }) => {
  return (
    <div onClick={() => handleClick(url, label)} className="obrazekKontejner">
      <img className="obrazekAuto" src={url} />
      <span className="obrazekPopis">{label}</span>
    </div>
  );
};

export const Gallery = () => {
  const img = testPicDb[0] || {
    id: 'default',
    url: '../../assets/MartinAuto.jpg',
    label: 'Default pic',
  };

  const [currentPic, setCurrentPic] = useState(img);

  const changePic = (url, label) => {
    setCurrentPic({ url: url, label: label });
  };

  return (
    <>
      <div className="kontejner">
        <h2>Vítejte "XY" ve svém uživatelském účtu!</h2>
        <p className="ucetUvod">
          Dobrý den,
          <br />v této sekci najdete přehled Vašich snímků, které si zpětně
          můžete prohlížet. <br /> V základní verzi zobrazujeme historicky
          posledni snímek a v miniatuře 5 snímků, které byly z kamery uloženy.
          <br />V rámci služby STANDARD můžete zobrazit snímky ve Vámi
          definovaném čase. Maximální možný počet zobrazených snímků v galerii
          je 40 fotografií.
        </p>
        <div className="ucetForm">
          <hr />
          <div className="container">
            <div className="obrazkyDiv">
              <table
                className="aktualniSnimek"
                style={{ border: '2' }}
                height=" 400px"
                width="350px"
              >
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="obrazekAutoOriginal"
                        src={currentPic.url}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="obrazekPopis">{currentPic.label}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="miniaturyDiv">
                {testPicDb.map((pic) => (
                  <Obrazek
                    url={pic.url}
                    label={pic.label}
                    handleClick={changePic}
                    key={pic.id}
                  />
                ))}
              </div>
            </div>
          </div>

          <form method="POST" className="formularRegistrace" action="https://">
            <fieldset>
              <ul className="formularovePole">
                <li>
                  <label for="date">Zobrazuj snímky OD</label>
                  <input
                    type="datetime-local"
                    id="dateFrom"
                    name="date"
                    className="velke"
                  />
                </li>
                <li>
                  <label for="date">Zobrazuj snímky DO</label>
                  <input
                    type="datetime-local"
                    id="dateTo"
                    name="date"
                    className="velke"
                  />
                </li>
              </ul>
            </fieldset>
            <fieldset>
              <input type="submit" className="vytvorit_ucet" value="Filtruj" />
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};
