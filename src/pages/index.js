import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Snippet from "../components/snippet"

import Colors from '../constants/Colors'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is my site. So far.</h1>
    <Snippet>
      What do we see here.
    </Snippet>
    <Snippet inputColor={Colors.purple}>
      Yeah?
    </Snippet>

  </Layout>
)

export default IndexPage
