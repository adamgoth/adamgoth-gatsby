/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../shared/styles/base.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)

export default Layout
