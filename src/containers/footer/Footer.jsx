import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others?
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Aurelius AI is a Delaware C Corp.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a
          href="https://twitter.com/aureliuslabsai"
          target="_blank"
          rel="noreferrer"
        >
          <p>Twitter</p>
        </a>
        {/* <a
          href="https://twitter.com/aureliuslabsai"
          target="_blank"
          rel="noreferrer"
        >
          <p>Linkedin</p>
        </a> */}
        <a
          href="https://www.facebook.com/Aureliuslabsai"
          target="_blank"
          rel="noreferrer"
        >
          <p>Facebook</p>
        </a>
        {/* <p>Github</p> */}
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        {/* <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p> */}
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Aurelius AI is a Delaware C Corp.</p>
        {/* <p>555-555-5555</p> */}
        <p>hello@aureliuslabs.ai</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Aurelius AI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
