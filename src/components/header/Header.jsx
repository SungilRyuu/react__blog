import React from "react";
import "./header.css";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <div className="header__logo">
        <h1>
          <Link to="/">
            <b>REACT</b> blog
          </Link>
        </h1>
      </div>
      <div className="header__nav">
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/view">VIEW</Link>
        <Link to="/write">WRITE</Link>
        <Link to="/" className="quiz">
          LOGOUT
        </Link>
      </div>
      <div className="header__info">
        <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <a href="#">환영합니다. 네모님</a>
      </div>
    </header>
  );
}

// https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500
