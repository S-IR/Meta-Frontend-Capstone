import React from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../constants/general/navbarLinks";
import logo from "./logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img
          style={{
            objectFit: "scale-down",
          }}
          src={logo}
          alt={"Little Lemon Logo"}
          width={200}
          height={200}
        />
        <ul>
          {navbarLinks.map((navLink) => (
            <Link key={navLink.name} className={"navbarLink"} to={"/"}>
              {navLink.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
