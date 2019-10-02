import React from "react"
// import { Link } from "gatsby"

import Layout from "../layout/Layout"
import SEO from "../components/seo"
import Snippet from "../components/Snippet"
import Styled from 'styled-components';

import Colors from '../constants/Colors'

const Highlight = Styled.span`
  color: ${props => props.inputColor || 'grey'};
  &:hover {
    color: ${props => props.hover || 'white'}
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>hello.</h1>

    <Snippet>
      <p>My name is Nathan Sierra.</p>
      <p>I am a freelance, fullstack web developer <Highlight inputColor={Colors.yellow} hover={Colors.primary}>(I'm learning to love structuring data)</Highlight></p>
      <p>However, I specialize in front-end, React.js development.</p>
      <p>I'm currently learning and practicing React Native <Highlight inputColor={Colors.yellow}>(it's really impressive how the React ecosystem can handle web and mobile development.)</Highlight></p>

    </Snippet>
    <br></br>
    <Snippet inputColor={Colors.purple}>
      Yeah?
    </Snippet>
    <Snippet inputColor={Colors.seafoam}>We see stuff here</Snippet>
    <Snippet inputColor={Colors.primary}>What is it.</Snippet>

  </Layout >
)

export default IndexPage
