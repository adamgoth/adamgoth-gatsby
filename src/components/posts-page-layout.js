import React from "react"
import { Link, graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import components from "./mdxComponents"

import "./posts-page-layout.scss"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <SEO keywords={mdx.frontmatter.keywords} title={mdx.frontmatter.title} />
      <Helmet>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={mdx.frontmatter.title} />
        <meta name="twitter:description" content={mdx.frontmatter.preview} />
        {/* <meta
          name="twitter:image"
          content={`https://pbs.twimg.com/profile_images/1227765372608057344/daNn331w_400x400.jpg`}
        /> */}
      </Helmet>
      <Layout>
        <div style={{ padding: "0 1rem" }}>
          <h1>{mdx.frontmatter.title}</h1>
          <h4 className="template__post-info">
            {`${mdx.frontmatter.date} by ${mdx.frontmatter.author}`}{" "}
            <span style={{ padding: "0 0.3rem" }}>·</span> {mdx.timeToRead} min
            read
          </h4>
          <MDXProvider components={components}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <Link className="template__link" to={`/blog`} style={{}}>
          ← Back to posts
        </Link>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
        preview
        keywords
      }
      timeToRead
    }
  }
`
