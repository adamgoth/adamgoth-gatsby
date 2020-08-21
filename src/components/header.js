import React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = ({ location }) => {
  const onHomepage = location && location.pathname === "/"
  return (
    <header className="header">
      {!onHomepage && (
        <Link className="header__link header__home-link" to="/">
          @adamgoth
        </Link>
      )}
      <div className="header__nav-links">
        {!onHomepage && (
          <Link className="header__link" to="/">
            contact
          </Link>
        )}
        <Link className="header__link" to="/blog">
          blog
        </Link>
      </div>
    </header>
  )
}

export default Header
