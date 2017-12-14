import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import g from "glamorous"
import {rhythm} from "../utils/typography"
import './index.css'
import logo from '../images/101Logo.png'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default({children, data}) => (
  <MuiThemeProvider>
  <div>
    <g.Div
      margin={`0 auto`}
      maxWidth={800}
      padding={rhythm(1)}
      paddingTop={rhythm(1)}
      textAlign="center">
      <Link to={`/`}>
        <img src={logo} align="middle"></img>
        <g.H1>
        {data.site.siteMetadata.title}
        </g.H1>
      </Link>
    </g.Div>


    <g.Div
      margin={`0 auto`}
      maxWidth={800}
      padding={rhythm(1)}
      paddingTop={rhythm(1)} >
    {children()}
    </g.Div>
  </div>
  </MuiThemeProvider>
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
