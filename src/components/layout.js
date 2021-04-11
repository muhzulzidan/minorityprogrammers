import * as React from "react"


import Nav from "../components/nav"
// import StartUpCard from "../components/StartUpCard";

import Globe from "../images/globe.inline.svg"
import Hand from "../images/hand.inline.svg"
import People from "../images/people.inline.svg"

const Layout = ({children, title}) => {



  return (
    <React.Fragment>
      <Nav/>
      <div className="main-banner">
          <Globe className="globe"/>
          <Hand className="hand"/>
          <h3>{title}</h3>
      </div>
      <main className="main">
        {children}
       </main>
    </React.Fragment>
  )
}

export default Layout

