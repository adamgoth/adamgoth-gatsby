import React from "react"
import Helmet from "react-helmet"

const Header = () => (
  <header>
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
  </header>
)

export default Header
