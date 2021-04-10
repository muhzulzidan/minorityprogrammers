// fonts

import "typeface-red-hat-display"
import "typeface-roboto"

// styles

import "./src/styles/index.scss"


// icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare,  faInstagram, faLinkedin, faTwitterSquare , faTwitter, faWhatsappSquare, faPinterestSquare, faTelegram, faYoutubeSquare, } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faBars, faChevronCircleLeft,faChevronCircleRight,  faChevronDown,faChevronLeft, faSun, faMoon, faCircle} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope } from "@fortawesome/free-regular-svg-icons"



library.add( faCheckSquare, faCoffee, faBars, faChevronCircleLeft, faChevronLeft, faChevronCircleRight, faChevronDown, faEnvelope, faSun, faMoon, faCircle, faTwitterSquare, faTwitter, faFacebookSquare, faInstagram, faLinkedin,faWhatsappSquare,  faPinterestSquare, faTelegram, faYoutubeSquare)


// some config if the refresh is broken

export const disableCorePrefetching = () => true

export const registerServiceWorker = () => true
export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }


