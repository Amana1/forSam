import React from 'react';
import logo from '../../res/images/devLogo.png';

const Header = () => (
  <div className="header row">
    <div className="logo">
      <img src={logo} alt="react logo" />
    </div>
    <h1>Remote Test Lab</h1>
      <button type="button" className="btn btn-primary">
          <span className="glyphicon glyphicon-log-out" /> Log Out
      </button>
  </div>
);

export default Header;
