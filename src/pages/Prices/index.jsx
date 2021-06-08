import React from 'react';
import './style.css';

export const Prices = () => {
  const imgUrl = '../../assets/pesZmenseno.jpg';

  return (
    <>
      {/* <!--Sekce galerie a cenik--> */}
      <div className="kontejner">
        <section className="fotogalerieCenik" id="dvereGalerie">
          <h2>Galerie a ceník poskytovaných služeb</h2>
          <hr />
          <h3>
            Balíček <span style={{ color: '#ee9b00' }}>FREE</span>
          </h3>
          <h4>
            <span style={{ color: '#e63946' }}>ZDARMA</span>
          </h4>
          <p>
            Po přihlášení do uživatelského účtu lze zobrazit historicky poslední
            uložený snímek z kamery. Tato služba je zdarma.
          </p>
          <h3>
            Balíček <span style={{ color: '#ee9b00' }}>STANDARD</span>
          </h3>
          <h4>
            <span style={{ color: '#e63946' }}>25 Kč/měsíc vč. DPH</span>
          </h4>
          <p>
            Po přihlášení do uživatelského účtu lze zobrazit historicky poslední
            uložený snimek z kamery. V minuatuře snímky pořízené během Vámi
            definovaného časového úseku (den, týden atd.). V historii si lze
            vybrat snímky za posledních 30 dnů.
          </p>

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
                    <img className="obrazekPesOriginal" src={imgUrl} />
                  </td>
                </tr>
                <tr>
                  <td>aktualni snimek</td>
                </tr>
              </tbody>
            </table>
            <div className="miniaturyDiv">
              {/* <table
                className="miniatury"
                style={{ border: '2' }}
                height="200px"
                width="650px"
              >
                <tbody>
                  <tr>
                    <td>
                      <img className="obrazekPes" src={imgUrl} />
                    </td>
                    <td>
                      <img className="obrazekPes" src={imgUrl} />
                    </td>
                    <td>
                      <img className="obrazekPes" src={imgUrl} />
                    </td>
                    <td>
                      <img className="obrazekPes" src={imgUrl} />
                    </td>
                    <td>
                      <img className="obrazekPes" src={imgUrl} />
                    </td>
                  </tr>
                  <tr className="textKObrazkum">
                    <td>obrazek c. 1</td>
                    <td>obrazek c. 2</td>
                    <td>obrazek c. 3</td>
                    <td>obrazek c. 4</td>
                    <td>obrazek c. 5</td>
                  </tr>
                </tbody>
              </table> */}
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
              <div className="obrazekKontejner">
                <img className="obrazekPes" src={imgUrl} />
                <span className="obrazekPopis">Popisek</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
