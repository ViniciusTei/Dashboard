import * as React from "react"
import Dashboard from "../components/dasboard"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from '../components/sidebar'

const IndexPage = () => (
  <Layout>
    <SEO title="Dashboard"/>
    <SideBar/>
    <Dashboard/>
  </Layout>
  
)

export default IndexPage
