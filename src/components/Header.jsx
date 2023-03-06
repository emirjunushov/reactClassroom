import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="container-header">
      <div>
        <img
          className="heder-image"
          src="https://i.pinimg.com/564x/7a/d5/ac/7ad5ac2c872c789f32da738216357dca.jpg"
          alt=""
        />
      </div>
      <h2 className="list-header">Contact book</h2>
      <div className="container-right-side">
        <input
          className="input-header"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </div>
  );
};

export default Header;
