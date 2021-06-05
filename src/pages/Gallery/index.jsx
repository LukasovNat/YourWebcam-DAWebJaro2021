import React from 'react';

export const Gallery = () => {
  const imgUrl = '../../assets//MartinAuto.jpg';

  return (
    <>
      <div className="kontejner">
        <h2>Vítejte "XY" ve svém uživatelském účtu!</h2>
        <p className="ucetUvod">
          Dobrý den,
          <br />v této sekci najdete přehled Vašich odeslaných snímků, které si
          zpetně můžete libovolně prohlížet.
        </p>
        <div className="ucetForm">
          <form>
            <label className="ucetFiltr">
              Filtruj snimky dle času pořízení:
              <input name="datum" type="date" />
            </label>
          </form>
        </div>
        <button type="submit" className="buttonHlavni">
          Filtruj
        </button>
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
                    <img className="obrazekAutoOriginal" src={imgUrl} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="obrazekPopis">Popisek</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="miniaturyDiv">
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekAuto" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
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
    </>
  );
};
