import React from "react";
import { footerContactLinks } from "../../constants/general/footerContact";
import { navbarLinks } from "../../constants/general/navbarLinks";
import logo from "./logo-no-text.png";

const Footer = () => {
  return (
    <footer>
      <img
        style={{ objectFit: "scale-down" }}
        src={logo}
        alt={"Little Lemon logo with no text"}
        width={200}
        height={200}
      />

      <div>
        <p className="footer-header">Doormat Navigation</p>
        {navbarLinks.map((navLink) => (
          <a href={navLink.href}>{navLink.name}</a>
        ))}
      </div>
      <div>
        <p className="footer-header">Contact Info</p>
        {footerContactLinks.map((footerContact) => (
          <a href={footerContact.href} key={footerContact.name}>
            {" "}
            {footerContact.name}{" "}
          </a>
        ))}
      </div>
      <div>
        <p className="footer-header">Links to Social Media</p>
      </div>
    </footer>
  );
};

export default Footer;
