import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import "./landing.scss"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          me: file(relativePath: { eq: "me.png" }) {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          github: file(relativePath: { eq: "social-github.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          linkedin: file(relativePath: { eq: "social-linkedin.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          twitter: file(relativePath: { eq: "social-twitter.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          instagram: file(relativePath: { eq: "social-instagram.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          email: file(relativePath: { eq: "social-email.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          devto: file(relativePath: { eq: "social-devto.png" }) {
            childImageSharp {
              fixed(width: 28) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <div className="Landing">
          <Img
            className="Landing-image"
            critical={true}
            fadeIn={false}
            fixed={data.me.childImageSharp.fixed}
          />
          <h1 className="Landing-name">@adamgoth</h1>
          <p className="Landing-desc">a Denver-based developer</p>
          <div className="Landing-social">
            <a
              className="Landing-icon"
              href="https://github.com/adamgoth"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fixed={data.github.childImageSharp.fixed} />
            </a>
            <a
              className="Landing-icon"
              href="https://www.linkedin.com/in/adam-goth-8a300163/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fixed={data.linkedin.childImageSharp.fixed} />
            </a>
            <a
              className="Landing-icon"
              href="https://dev.to/adamgoth"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fixed={data.devto.childImageSharp.fixed} />
            </a>
            <a
              className="Landing-icon"
              href="https://twitter.com/init_adam"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fixed={data.twitter.childImageSharp.fixed} />
            </a>
            {/* <a
              className="Landing-icon"
              href="https://www.instagram.com/adampeter"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fixed={data.instagram.childImageSharp.fixed} />
            </a> */}
            <a
              className="Landing-icon"
              href="mailto://hello@adamgoth.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Img fixed={data.email.childImageSharp.fixed} />
            </a>
          </div>
        </div>
      )}
    />
  )
}
