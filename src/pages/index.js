import React from 'react'
import Link from 'gatsby-link'
import g from "glamorous"
import {rhythm} from "../utils/typography"
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import logo from '../images/101Logo.png'
import Divider from 'material-ui/Divider';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};

const IndexPage = ({data}) => {
  return (
    <div styles={styles.root}>
      <GridList
        cellHeight={50}
        cols={1}
        style={styles.gridList}
      >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
        <GridTile>
         <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
          </g.H3>
          </Link>
          </GridTile>
          <Divider inset={false}/>
        </div>
      ))}
      </GridList>
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
