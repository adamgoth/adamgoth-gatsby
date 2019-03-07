import React from "react"
import Landing from "../components/landing"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="home"
      keywords={[`developer`, `portfolio`, `denver`, `web development`]}
    />
    <Landing />
  </Layout>
)

export default IndexPage
