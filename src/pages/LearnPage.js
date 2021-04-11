import * as React from "react"
import { graphql } from "gatsby"

import Nav from "../components/nav"
import StartUpCard from "../components/StartUpCard";

import Globe from "../images/globe.inline.svg"
import Butterfly from "../images/butterfly.inline.svg"
import People from "../images/people.inline.svg"


import Science from "../images/science.inline.svg"
import Programming from "../images/programming.inline.svg"
import Innovation from "../images/innovation.inline.svg"
import Enginering from "../images/enginering.inline.svg"


const LearnPage = ({data}) => {

 const allStartup = data.allMarkdownRemark.edges

  return (
    <React.Fragment>
      <Nav/>
      <div className="main-banner learnpage-banner">
          <Globe className="globe"/>
          <Butterfly className="hand"/>
          <div className="text">
            <h3>Learn high in <br/> Demand IT Skills & get crypto</h3>
            <h4>powered by KoinStreet</h4>
          </div>
          <People className="people"/>
      </div>
      <main className="main learnpage-main">
          <h3>My Courses</h3>
          <div className="main-startup">
            <StartUpCard data={allStartup}/>
          </div>
          <h3>Featured Courses</h3>
          <div className="main-startup">
            <StartUpCard data={allStartup}/>
          </div>
          <h3>By Category</h3>
          <div className="main-startup category">
              <Enginering/>
              <Science/>
              <Innovation/>
              <Programming/>
          </div>
      </main>
    </React.Fragment>
  )
}

export default LearnPage

export const LearnQuery = graphql`
query LearnQuery {
  allMarkdownRemark(
    filter: {frontmatter: {ProjectName: {eq: "Intro to Blockchain"}}}
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        frontmatter {
          title
          ProjectName
          ProjectLogo {
            childImageSharp {
              gatsbyImageData(width: 720, layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
          GiveLink
          LearnLink
          ProjectDescription
          CurrentFunding
          FundingGoal
        }
      }
    }
  }
}

`
