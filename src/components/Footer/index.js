import React from "react"
import LogoIcon from "../Icons/logo"
import "./footer.scss"

const Footer = () => (
  <div className="footer">
    <footer>
      <div className="footer__content">
        <LogoIcon />
        <p>© {new Date().getFullYear()}, Dynamisk Prospekt</p>
      </div>
    </footer>
  </div>
)

export default Footer
