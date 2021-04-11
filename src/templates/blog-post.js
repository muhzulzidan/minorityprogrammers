import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function BlogPost({ data  }) {
    const post = data.markdownRemark

  return (
    <Layout title={data.markdownRemark.frontmatter.ProjectName}>
      <div>
        <h1>{post.frontmatter.ProjectName}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        ProjectName
      }
    }
  }
`