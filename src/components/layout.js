import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.scss";

const Layout = ({ children }) => (
  <div style={{"outline": "none"}}>
    <Header />
    <div className="layout">{children}</div>
    <Footer />
  </div>
)

export default Layout