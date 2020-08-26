import React from "react"

export default props => {
  // for use with internal links
  // comment out for now
  // if (props.href.includes("adamgoth.com") || props.href[0] === "/") {
  //   return <a href={props.href}>{props.children}</a>
  // }
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}
