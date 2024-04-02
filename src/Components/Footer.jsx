import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footIcons">
        <SocialIcon url="www.instagram.com" />
        <SocialIcon url="www.facebook.com" />
        <SocialIcon url="www.youtube.com" />
        <SocialIcon url="www.tiktok.com" />
      </div>
      <div className="foot">
        <p>Email: noteworthy@berkeley.edu</p>
        <p>Copyright © NoteWorthy A Cappella 2024 ; all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
