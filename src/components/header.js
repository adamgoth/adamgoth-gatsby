import React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => (
  <header className="header">
    <div>
      <Link className="header__link" to="/blog">
        Blog
      </Link>
      <Link className="header__link" to="/">
        Contact
      </Link>
    </div>
  </header>
)

export default Header
