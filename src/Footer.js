import React from "react";
import "./Footer.css";
import { Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

function Footer() {
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="footer">
      <div className="footer__links">
        <InstagramIcon href="www.google.com" onClick={preventDefault} />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Footer;
