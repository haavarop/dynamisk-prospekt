import React from "react"
import LogoIcon from "../Icons/logo"
import "./footer.scss"
import { Link } from "gatsby"
import FBIcon from "../Icons/facebook"
import InstaIcon from "../Icons/instagram"
import MAIcon from "../Icons/mittanbud"

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
        <LogoIcon />
        <div className="footer__links">
          <Link to="/contact">
            <h3>Ta kontakt</h3>
          </Link>
      </div>
        <div className="footer__some">
          <a href="https://mittanbud.no/profil/1046064/dynamisk-prospekt-as/">
            <MAIcon />
          </a>
          <a href="https://www.facebook.com/dynamiskprospekt/">
            <FBIcon />
          </a>
          <a href="https://www.instagram.com/dynamiskprospekt/">
            <InstaIcon />
          </a>
        </div>
      <div className="footer__links"></div>
    </div>
  </footer>
)

export default Footer
