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
          <br />v této sekci najdete přehled Vašich odeslaných snímků, které si
          zpětně můžete libovolně prohlížet.
        </p>

        <div className="ucetForm">
          <form method="POST" className="formularRegistrace" action="https://">
            <fieldset>
              <ul className="formularovePole">
                <li>
                  <label for="date">Filtruj snimky podle data a času</label>
                  <input
                    type="datetime-local"
                    id="datum"
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
          {/* <form>
            <label className="ucetFiltr">
              Filtruj snimky dle času pořízení:
              <input name="datum" type="date" />
            </label>
          </form>
        </div>
        <button type="submit" className="buttonHlavni">
          Filtruj
  </button>*/}
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
            {/* <!--<div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input  name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>
      <div className="gallery">
        <img src="obrazky/Martin auto.jpg">
        <div className="desc">Snimek ze dne: </div>
        <div className="radioBtn">
          <label className="desc">
            zaslat na email
            <input name="vybrat" type="radio" value="souhlasim">
          </label>
        </div>
      </div>--> */}
          </div>
        </div>
      </div>
    </>
  );
};
