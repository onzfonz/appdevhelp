import React from 'react'
import Link from 'gatsby-link'
import g from "glamorous"
import {rhythm} from "../utils/typography"

const IndexPage = ({data}) => {
  return (
    <div>      
      {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
         <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            {/* <g.Span color="#BBB">— {node.frontmatter.date}</g.Span> */}
          </g.H3>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default IndexPage
export const query = graphql`
query IndexQuery {
  allMarkdownRemark (sort: {order: DESC, fields: [frontmatter___title] }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
