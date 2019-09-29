import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Snippet from "../components/snippet"

import Colors from '../constants/Colors'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>hello.</h1>

    <Snippet>
      <p>My name is Nathan Sierra.</p>
      <p>I am a freelance, fullstack web developer (I'm learning to love data)</p>
      <p>However, I specialize in front-end, React.js development.</p>

    </Snippet>
    <Snippet inputColor={Colors.purple}>
      Yeah?
    </Snippet>
    <Snippet inputColor={Colors.seafoam}>We see stuff here</Snippet>
    <Snippet inputColor={Colors.primary}>What is it.</Snippet>

  </Layout>
)

export default IndexPage
