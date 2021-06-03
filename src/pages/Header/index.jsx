import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div>Header with menu here</div>
      <Link to="/">Home</Link>
      <Link to="/price-list">Cenik</Link>
      <Link to="/registration">Registrace</Link>
      <Link to="/cameras">Seznam podporovanych kamer</Link>
    </>
  );
};
