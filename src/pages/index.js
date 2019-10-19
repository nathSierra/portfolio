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
    <h2>hello.</h2>

    <Snippet>
      <p>My name is Nathan Sierra.</p>
      <p>I'm a graduate of Southern Illinois University. I was an English student.</p>
      <p>I've also been a barista, housekeeper, English teacher, bellman, and server.<Highlight inputColor={Colors.primary}> // Glacier National Park will always have my heart.</Highlight></p>
      <p>Now I learn about computers, talk to computers, and talk about computers.</p>
      <p>I am a freelance, fullstack web developer. <Highlight inputColor={Colors.primary}>// a self-taught > bootcamp > self-taught sequence</Highlight></p>
      <p>However, I specialize in front-end, React.js development. <Highlight inputColor={Colors.primary}> // this doesn't mean I'm against Angular-- I see the benefits.</Highlight></p>
      <p>And yes, I do subscribe to the thought that there's an <a href="https://css-tricks.com/the-great-divide/" style={{color: `${Colors.purple}`}} target="_blank">interesting discussion</a> regarding the current state of front end development.</p>
      <p>I also work part time as a tutor and teaching assistant to help others along their coding journeys.</p>
      <p>I'm currently learning and practicing React Native. I should have a few projects out on the App Store soon. <Highlight inputColor={Colors.primary}>// fingers crossed</Highlight></p>
    </Snippet>
    <h2 style={{color: Colors.purple}}>why?</h2>
    <br></br>
    <Snippet inputColor={Colors.purple}>
      <p>English is a passion of mine. However, I didn't want to be stuck in academia all my life.</p>
      <p>I spent a few years after college deciding what I should do with my life.</p>
      <p>But programming?</p>
      <p>Well.</p>
      <p>At first I was overwhelmed by the deluge of comp sci info.<Highlight inputColor={Colors.primary}> // I thought I couldn't possibly learn it.</Highlight></p>
      <p>It's tough.</p>
      <p>However, my mindset has changed drastically.</p>
      <p>I don't want to be deny myself the opportunity to become a software developer purely due to fear.</p>
      <p>Now I'm glad I have the opportunity to use what I've learned to create products and solve problems.</p>
      <p>I'm dedicating myself to learning something new in software everyday.
      <Highlight inputColor={Colors.primary}> // to be frank, I don't see that ever stopping.</Highlight></p>
      
    </Snippet>
    <h2 style={{color: Colors.seafoam}}>contact</h2>
    <Snippet inputColor={Colors.seafoam}>
      <p>If you want to talk about a project or nerd out about tech, literature, classical music, or beer don't hesitate to reach out!</p>
      <p>Contact me at <a href='mailto:arreisnahtan@gmail.com' style={{color: `${Colors.purple}`}}>arreisnahtan@gmail.com</a> <Highlight inputColor={Colors.primary}> //Let's see if we can craft you a solution.</Highlight></p>
      <br></br>
      <p>Technology has the power to transform the world for the better; we have the responsibility to make it so.</p>
      </Snippet>
    

  </Layout >
)

export default IndexPage
