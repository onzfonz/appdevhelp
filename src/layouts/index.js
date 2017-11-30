import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import g from "glamorous"
import {rhythm} from "../utils/typography"
import './index.css'
import logo from '../images/101Logo.png'

export default({children, data}) => (
  <div>
    <g.Div
      margin={`0 auto`}
      maxWidth={750}
      padding={rhythm(1)}
      paddingTop={rhythm(1)}
      textAlign="center">
      <Link to={`/`}>
        <img src={logo} align="middle"></img>
      </Link>
      <g.H1>
        {data.site.siteMetadata.title}
      </g.H1>
    </g.Div>


    <g.Div
      margin={`0 auto`}
      maxWidth={500} 
      padding={rhythm(1)}
      paddingTop={rhythm(1)} >
    {children()}
    </g.Div>
  </div>
)

export const query = graphql `
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`
