import React from "react"
// import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"
import Snippet from "../components/Snippet"
import Highlight from '../components/Highlight'

import Colors from '../constants/Colors'


const IndexPage = (location) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>hello.</h1>

    <Snippet>
      <p>My name is Nathan Sierra.</p>
      <p>I am a freelance, fullstack web developer. <Highlight inputColor={Colors.primary}>// I'm learning to love structuring data</Highlight></p>
      <p>However, I specialize in front-end, React.js development.</p>
      <p>I'm currently learning and practicing React Native. <Highlight inputColor={Colors.primary}>// I'm impressed how the React ecosystem can handle web AND mobile development</Highlight></p>
    </Snippet>
    <h2>qualifications:</h2>
    <br></br>
    <Snippet inputColor={Colors.purple}>
      Yeah?
    </Snippet>
    <Snippet inputColor={Colors.seafoam}>We see stuff here</Snippet>
    <Snippet inputColor={Colors.primary}>What is it.</Snippet>

  </Layout >
)

export default IndexPage
