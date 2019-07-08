import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import Header from "./Header"
import "./layout.scss"

const Layout = ({ children }) => (
  <div style={{ outline: "none" }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dynamisk prospekt</title>
      <link rel="canonical" href="https://www.dynamiskprospekt.no/" />
    </Helmet>
    <Header />
    <div className="layout">{children}</div>
    <Footer />
  </div>
)

export default Layout
