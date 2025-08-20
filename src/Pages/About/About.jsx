import React from 'react'
import AboutHero from "../../Components/AboutPages/AboutHero";
import OurStory from "../../Components/AboutPages/OurStory";
import Team from "../../Components/AboutPages/Team";
import OurBelieve from "../../Components/AboutPages/OurBelieve";
import Investors from "../../Components/AboutPages/Investors";
import Hiring from "../../Components/AboutPages/Hiring";
import Blog from "../../Components/AboutPages/Blog";
const About = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <Team />
      <OurBelieve />
      <Hiring/>
      <Investors />
      <Blog />
    </div>
  )
}

export default About