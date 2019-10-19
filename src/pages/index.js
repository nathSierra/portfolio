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
      <p>I'm a graduate of Southern Illinois University. I was an English student.</p>
      <p>Now I learn about computers, talk to computers, and talk about computers.</p>
      <p>I am a freelance, fullstack web developer. <Highlight inputColor={Colors.primary}>// a self-taught > bootcamp > self-taught sequence</Highlight></p>
      <p>However, I specialize in front-end, React.js development.</p>
      <p>I also work part time as a tutor and teaching assistant.</p>
      <p>I'm currently learning and practicing React Native. I should soon have a few projects out on the App Store. <Highlight inputColor={Colors.primary}>// fingers crossed</Highlight></p>
    </Snippet>
    <h2 style={{color: Colors.purple}}>why?</h2>
    <br></br>
    <Snippet inputColor={Colors.purple}>
      <p>At first I was overwhelmed by the deluge of comp sci info.</p>
      <p>My mindset has changed drastically.</p>
      <p>Now I'm glad I have the opportunity to use what I've learned to create products and solve problems.</p>
      <p>I'm dedicating myself to learning something new in software everyday.
      <Highlight inputColor={Colors.primary}>// to be frank, I don't see that ever stopping.</Highlight></p>
      
    </Snippet>
    <h2 style={{color: Colors.seafoam}}>contact</h2>
    <Snippet inputColor={Colors.seafoam}>
      <p>If you wanna talk about a project or nerd out about tech, don't hesitate to reach out!</p>
      <p>Contact me at <a href='mailto:arreisnahtan@gmail.com' style={{color: `${Colors.purple}`}}>arreisnahtan@gmail.com</a> </p>
      <br></br>
      <p>Technology has the power to transform the world for the better; we have the responsibility to make it so.</p>
      </Snippet>
    

  </Layout >
)

export default IndexPage
