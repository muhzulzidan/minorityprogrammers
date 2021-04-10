import * as React from "react"
import {Link } from "gatsby"
import Social from "../components/social"

import Connect from "../images/ConnectWallet.inline.svg"
import Logo from "../images/logo.inline.svg"
import Search from "../images/search.inline.svg"

const Nav = () => {
    return (
    <header className="nav">
        <h1 className="nav-header1" >
            <Link className="nav-logo-link" to={`/`}>
                <div className="nav-logo" >
                    <Logo/>
                </div>
            </Link>
            <Social/>
            <div className="nav-middle-button">
                {/* <p>Connect Wallet</p> */}
                <Connect/>
            </div>
            <div className="nav-header-links">

                <Link className="link" to={`/service/`}>Service</Link>
                <Link className="link" to={`/events/`}>Events</Link>
                <Link className="link" to={`/learn/`}>Learn</Link>
                <Link className="link" to={`/join/`}>Join</Link>

            </div>
            <div className="nav-search">
                <Search/>
            </div>
        </h1>
    </header>
    )
}

export default Nav