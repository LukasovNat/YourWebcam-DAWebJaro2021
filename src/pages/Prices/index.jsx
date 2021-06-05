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
          <p>
            Balíček <span style={{ color: '#ee9b00' }}>FREE</span>
            <br />
            Po přihlášení do uživatelského účtu lze zobrazit historicky poslední
            uložený snímek z kamery. Tato služba je zdarma.
          </p>
          <p>
            Balíček <span style={{ color: '#ee9b00' }}>STANDARD</span>
            <br />
            Po přihlášení do uživatelského účtu lze zobrazit historicky poslední
            uložený snimek z kamery. V minuatuře dalších pět předešlých snímků.
            V historii si lze vybrat snímky za posledních 30 dnů.
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
                    <img className="obrazekPes" src={imgUrl} />
                  </td>
                </tr>
                <tr>
                  <td>aktualni snimek</td>
                </tr>
              </tbody>
            </table>
            <div className="miniaturyDiv">
              <table
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
              </table>
            </div>
            {/* <!-- <ul className="fotkyCenik">
          <li className="obrazekDvereOriginal"src="obrazky/reddoor.jpg" alt="dvere"></li>
          <li className="obrazekPes"src="obrazky/pes zmenšeno.jpg" alt="pes na pohovce"></li>
          <li className="obrazekPes"src="obrazky/pes zmenšeno.jpg" alt="pes na pohovce"></li>
          <li className="obrazekPes"src="obrazky/pes zmenšeno.jpg" alt="pes na pohovce"></li>
          <li className="obrazekPes"src="obrazky/pes zmenšeno.jpg" alt="pes na pohovce"></li>
        </ul>--> */}

            {/* <!-- <img className="obrazekPes" src="obrazky/pes zmenšeno.jpg" alt="dvere" />
      <img className="obrazekPes" src="obrazky/pes zmenšeno.jpg" alt="dvere" />
      <img className="obrazekPes" src="obrazky/pes zmenšeno.jpg" alt="dvere" />
      <img className="obrazekPes" src="obrazky/pes zmenšeno.jpg" alt="dvere" />--> */}
          </div>
        </section>
      </div>
    </>
  );
};
