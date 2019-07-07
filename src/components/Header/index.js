import React from "react"
import TextLogoIcon from "../Icons/textLogo"
import "./header.scss"

const Header = ({ children }) => (
  <header className="header">
    <div className="header__logo">
      <TextLogoIcon />
    </div>
  </header>
)

export default Header
