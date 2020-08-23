import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import components from "./mdxComponents"

import "./posts-page-layout.scss"

export default function PageTemplate({ data, data: { mdx } }) {
  return (
    <Layout>
      <div className="template">
        <h1>{mdx.frontmatter.title}</h1>
        <h4 className="template__post-info">{`${mdx.frontmatter.date} by ${mdx.frontmatter.author}`}</h4>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
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
      }
    }
  }
`
