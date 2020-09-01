import React from "react"
import Landing from "../components/landing"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="adamgoth.com"
      keywords={[
        `javascript`,
        `react`,
        `developer`,
        `portfolio`,
        `denver`,
        `web development`,
      ]}
    />
    <Landing />
  </Layout>
)

export default IndexPage
