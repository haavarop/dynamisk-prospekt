import React from "react"
import TextLogoIcon from "../Icons/textLogo"
import "./header.scss"
import { Link } from "gatsby"

const Header = ({ children }) => (
  <header className="header">
    <div className="header__logo">
      <Link to="/">
        <TextLogoIcon />
      </Link>
    </div>
  </header>
)

export default Header
