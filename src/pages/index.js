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
      <p>I'm currently learning and practicing React Native. I should soon have a few projects out on the App Store. <Highlight inputColor={Colors.primary}>// fingers crossed</Highlight></p>
    </Snippet>
    <h1 style={{color: Colors.purple}}>why?</h1>
    <br></br>
    <Snippet inputColor={Colors.purple}>
      <p>I'm a freelance software developer.</p>
      <p>I also work part time as a tutor and teaching assistant.</p>
      <p>I'm dedicating myself to learning something new in software everyday.
      <Highlight inputColor={Colors.primary}>// to be frank, I don't see that ever stopping.</Highlight></p>
      <p>Technology has the power to transform the world for the better; we have the responsibility to make it so.</p>
    </Snippet>
    <h1 style={{color: Colors.seafoam}}>contact</h1>
    <Snippet inputColor={Colors.seafoam}>
      <p>If you wanna talk about a project or nerd out about tech, don't hesitate to reach out!</p>
      <p>Contact me at <a href='mailto:arreisnahtan@gmail.com' style={{color: `${Colors.purple}`}}>arreisnahtan@gmail.com</a> </p></Snippet>
    

  </Layout >
)

export default IndexPage
