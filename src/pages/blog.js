import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import "./blog.scss"

const BlogIndex = ({ data, location }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout location={location}>
      <ul className="blog__list">
        {posts.map(({ node: post }) => (
          <li className="blog__list-item" key={post.id}>
            <Link className="blog__link" to={`/${post.frontmatter.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <h4 style={{ lineHeight: "1.7" }}>{post.frontmatter.preview}</h4>
              <h4 className="blog__read-more">Read more →</h4>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            preview
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
