import React from "react";
import Toggle from "./toggle";

function Header() {
  return (
    <div className="navbar">
      <header>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Countries</a>
            </li>
            <li>
              <a href="https://github.com/singhshivanshu/countries">Source</a>
            </li>
          </ul>
          <Toggle/>
        </nav>
      </header>
    </div>
  );
}

export default Header;
