import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../All.css";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col lg='3' md='4' sm='6' xs='12'>
        <h4 style={{display:'flex', justifyContent:'center',color:'white'}}>NavGurukul</h4>
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
        </Col>
        <Col lg='3' md='4' sm='6' xs='12'>
          <h4 className="footer-heading">Contact us</h4>
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
        </Col>
        <Col lg='2' md='4' sm='6' xs='12'>
          <h4 className="footer-heading">Account</h4>
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
        </Col>

        <Col lg='2' md='4' sm='6' xs='12'>
          <h4 className="footer-heading">Company</h4>
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
        </Col>
        <Col lg='2' md='4' sm='6' xs='12'>
          <h4 className="footer-heading">Resources</h4>
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
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;