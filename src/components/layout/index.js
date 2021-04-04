/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"


import { Container } from "./styles"

import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Layout = ({ children }) => {


  return (
    <Container>
      <GlobalStyle/>
      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
