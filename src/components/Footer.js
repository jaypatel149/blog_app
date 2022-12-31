import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import "../All.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
        <h4>NavGurukul</h4>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="/facebook">
                <FacebookIcon name='facebook' />
              </a>
            </li>
            <li>
              <a className="footer-link" href="/instagram">
                <InstagramIcon name='instagram'/>
              </a>
            </li>
            <li>
              <a className="footer-link" href="/twitter">
                <TwitterIcon name='twitter'/>
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy; <span className="year">2027</span> by navgurukul,
            Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              Navgurukul Dharamsala himanchal Pradesh fatehpur - 176057
            </p>
            <p>
              <a className="footer-link" href="tel:9082100916">
                9082100916
              </a>
              <br />
              <a className="footer-link" href="/">
                hello@navgurukul.org
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            {["Create account", "Sing in", "ios app", "Android app"].map(
              (item) => (
                <li key={item}>
                  <a className="footer-link" href="/signup">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            {[
              "About Navgurukul",
              "For Business",
              "Cooking Partners",
              "Carees",
            ].map((item) => (
              <li key={item}>
                <a className="footer-link" href="https://navgurukul.org/">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            {["test directory", "Help center", "Privacy & terms"].map(
              (item) => (
                <li key={item}>
                  <a className="footer-link" href="/contact">
                    {item}{" "}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;