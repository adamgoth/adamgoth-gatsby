/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import "../shared/styles/base.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-175558248-1"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-175558248-1');
        `}
      </script>

      <link
        href="https://fonts.googleapis.com/css?family=Muli"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)

export default Layout
