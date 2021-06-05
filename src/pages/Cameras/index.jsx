import React, { useState } from 'react';
import { cameraTypes } from '../../cameraTypes';

export const Cameras = () => {
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');

  const getBrands = () =>
    cameraTypes
      .map((camera) => camera.brand)
      .filter((value, index, self) => self.indexOf(value) === index);

  const isSupported = () => {
    return cameraTypes.find((camera) => camera.type === type).isSupported;
  };

  return (
    <>
      <div>
        Vyberte z nasledujiciho dropdownu znacku a typ vasi kamery, abyste
        overili kompatibilitu
      </div>
      <label>
        <div>Znacka:</div>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Vyberte</option>
          {getBrands().map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>
      {brand !== '' ? (
        <label>
          <div>Typ:</div>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Vyberte</option>
            {cameraTypes.map((camera) => {
              if (camera.brand === brand) {
                return (
                  <option key={camera.id} value={camera.type}>
                    {camera.type}
                  </option>
                );
              }
            })}
          </select>
        </label>
      ) : null}
      {brand !== '' && type !== '' ? (
        isSupported() ? (
          <div className="webcam--supported">Tuto webkameru muzete pouzit</div>
        ) : (
          <div className="webcam--not_supported">
            Tuto webkameru bohuzel jeste nepodporujeme
          </div>
        )
      ) : (
        <div>vyberte znacku a typ kamery</div>
      )}
    </>
  );
};
