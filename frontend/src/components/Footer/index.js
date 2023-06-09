import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="row">
        <li className="footerLi">
          <a key={1} href="https://www.facebook.com/john.odonnell.96/">
            <FontAwesomeIcon icon="fa-brands fa-facebook"></FontAwesomeIcon>
          </a>
        </li>
        <li key={2} className="footerLi">
          <a href="https://www.instagram.com/lvcky_gg/">
            <FontAwesomeIcon icon="fa-brands fa-instagram"></FontAwesomeIcon>
          </a>
        </li>
        <li key={3} className="footerLi">
          <a href="https://www.linkedin.com/in/john-o-donnell-36a38a161/">
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in"></FontAwesomeIcon>
          </a>
        </li>
        <li key={4} className="footerLi">
          <a href="https://github.com/Lvcky-gg">
            <FontAwesomeIcon icon="fa-brands fa-square-github"></FontAwesomeIcon>
          </a>
        </li>
        <li key={5} className="footerLi">
          <a href="https://twitter.com/lvcky_dev">
            <FontAwesomeIcon icon="fa-brands fa-twitter"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
