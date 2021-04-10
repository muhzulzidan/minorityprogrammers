import * as React from "react"
import { graphql } from "gatsby"

import Nav from "../components/nav"
import StartUpCard from "../components/StartUpCard";

import Globe from "../images/globe.inline.svg"
import Hand from "../images/hand.inline.svg"
import People from "../images/people.inline.svg"

const IndexPage = ({data}) => {

 const allStartup = data.all.edges
 const orovaultStartup = data.orovault.edges

  return (
    <React.Fragment>
      <Nav/>
      <div className="main-banner">
          <Globe className="globe"/>
          <Hand className="hand"/>
          <h3>Invest directly <br/> into minority innovations.</h3>
          <People className="people"/>
      </div>
      <main className="main">
       <h3>Featured Startups</h3>
       <div className="main-startup">
          <StartUpCard data={allStartup}/>
       </div>
       <h3>Upcoming Startups</h3>
       <div className="main-startup">
          <StartUpCard data={orovaultStartup}/>
       </div>
       <div className="buttons">
        <button className="main-button">Advise A Startup</button>
        <button className="main-button">Join Minority Ventures Cohort</button>
        <button className="main-button">{`Help <Code/>`}</button>
       </div>

       </main>
    </React.Fragment>
  )
}

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  orovault: allMarkdownRemark(
    filter: {frontmatter: {ProjectName: {eq: "orovault"}}}
  ) {
    edges {
      node {
        id
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
  all: allMarkdownRemark(
    filter: {frontmatter: {ProjectName: {nin: ["orovault", "Intro to Blockchain" ]}}}
  ) {
    edges {
      node {
        id
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
