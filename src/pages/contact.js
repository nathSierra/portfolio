import React from "react"
// import { Link } from "gatsby"

import Layout from "../layout/layout"
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

const ContactPage = ({location}) => (
  <Layout location ={location}>
    <SEO title="Contact" />

    <Snippet>
      <p>If you want to set up a project, or even just chat, feel free to contact me at arreisnahtan@gmail.com <Highlight inputColor={Colors.primary} hover={Colors.yellow}>// I'll reach you as soon as I can!</Highlight></p>
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

export default ContactPage