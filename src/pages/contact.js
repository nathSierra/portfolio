import React from "react"


import Layout from "../layout/layout"
import SEO from "../components/seo"
import Snippet from "../components/Snippet"
import Highlight from '../components/Highlight'

import Colors from '../constants/Colors'

const ContactPage = ({location}) => (
  <Layout location ={location}>
    <SEO title="Contact" />

    <Snippet>
      <p>If you want to set up a project, or even just chat, feel free to contact me at <a href='mailto:arreisnahtan@gmail.com' style={{color: `${Colors.purple}`}}>arreisnahtan@gmail.com</a> <Highlight inputColor={Colors.blue}>// I'll reach you as soon as I can!</Highlight></p>
    </Snippet>
  </Layout >
)

export default ContactPage