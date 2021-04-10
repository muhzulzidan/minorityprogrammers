import React from "react";

import { GatsbyImage } from "gatsby-plugin-image"
import {  Link } from "gatsby"

import NumberFormat from 'react-number-format'
import ProgressBar from "@ramonak/react-progress-bar"

import EarnButton from "../images/earn.inline.svg"



const StartUpCard = ({ data}) => {

    const startUp = data
    let percent = (startUp[0].node.frontmatter.CurrentFunding / startUp[0].node.frontmatter.FundingGoal) * 100 


    return(
        
        <ul className="startup">

            {startUp.map(({ node, }) => {

                 if(node.frontmatter.ProjectName === "orovault")
                 return <li className="startupcard" key={node.frontmatter.id}>
                 {/* <div>{node.frontmatter.ProjectName}</div> */}
                 
                 <GatsbyImage  image={node.frontmatter.ProjectLogo.childImageSharp.gatsbyImageData} alt={node.frontmatter.ProjectName} className="startupcard-image startupcard-image-orovolt" />
                 <p>
                     {node.frontmatter.ProjectDescription}
                 </p>
                 <div className="details">
                     <div className="buttons">
                         <button className="give"><Link to={node.frontmatter.GiveLink}>GIVE</Link></button>
                         <button className="learn"><Link to={node.frontmatterLearnLink}>LEARN</Link></button>
                     </div>
                     <p className="funding">
                         <NumberFormat value={node.frontmatter.CurrentFunding} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / <NumberFormat value={node.frontmatter.FundingGoal} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
                     </p>
                     <ProgressBar width="15em" height="1em" className="progressbar" completed={percent} isLabelVisible={false}/>
                     <p className="percent">
                         {percent}% Funded
                     </p>
                 </div>
             </li>
                 if(node.frontmatter.ProjectName === "Intro to Blockchain")
                 return <li className="startupcard blockchain" key={node.frontmatter.id}>
                    <EarnButton/>
                 <h2>{node.frontmatter.ProjectName}</h2>
                 <p>
                     {node.frontmatter.ProjectDescription}
                 </p>
                 <div className="details">
                     <div className="buttons">
                         <button className="learn"><Link to={node.frontmatterLearnLink}>LEARN</Link></button>
                     </div>
                     <p className="funding">
                            8.3/10 Modules 
                     </p>
                     <ProgressBar width="15em" height="1em" className="progressbar" completed={percent} isLabelVisible={false}/>
                     <p className="percent">
                         {percent}% Completed
                     </p>
                 </div>
             </li>
             
                    return (
                        <li className="startupcard" key={node.frontmatter.id}>
                            {/* <div>{node.frontmatter.ProjectName}</div> */}

                            <GatsbyImage  image={node.frontmatter.ProjectLogo.childImageSharp.gatsbyImageData} alt={node.frontmatter.ProjectName} className="startupcard-image" />
                            <p>
                                {node.frontmatter.ProjectDescription}
                            </p>
                            <div className="details">
                                <div className="buttons">
                                    <button className="give"><Link to={node.frontmatter.GiveLink}>GIVE</Link></button>
                                    <button className="learn"><Link to={node.frontmatterLearnLink}>LEARN</Link></button>
                                </div>
                                <p className="funding">
                                    <NumberFormat value={node.frontmatter.CurrentFunding} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / <NumberFormat value={node.frontmatter.FundingGoal} displayType={'text'} thousandSeparator={true} prefix={'$'} /> 
                                </p>
                                <ProgressBar width="15em" height="1em" className="progressbar" completed={percent} isLabelVisible={false}/>
                                <p className="percent">
                                    {percent}% Funded
                                </p>
                            </div>
                           
                            
                        </li>
                    )
                })}
                
        </ul>
    )
}

export default StartUpCard