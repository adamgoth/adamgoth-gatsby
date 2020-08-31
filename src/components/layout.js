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

const Layout = ({ children, location }) => (
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
      <meta
        name="twitter:image"
        content={`https://pbs.twimg.com/profile_images/1227765372608057344/daNn331w_400x400.jpg`}
      />
    </Helmet>
    <Header location={location} />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
