
// change data before using

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Social = ({ siteTitle,  }) => {

// change data before using

// styles

let social = "social-div";

let socialIcon = "social-div-icon";

// let Partner = "social-partner-div";

  return (
    <div>
      <div className={social}>
            <div className={socialIcon}>

              <a rel="noopener noreferrer"target="_blank"href={`https://twitter.com/data`} aria-label="twiiter" ><FontAwesomeIcon icon={['fab',"twitter"]}/></a>

              <a rel="noopener noreferrer"target="_blank"href={"https://www.facebook.com/halijah.six"} aria-label="facebook" ><FontAwesomeIcon icon={['fab',"facebook-square"]}/></a>

              <a rel="noopener noreferrer"target="_blank"href={`https://www.instagram.com/data`}> <FontAwesomeIcon icon={['fab',"linkedin"]} /></a>
            
              <a rel="noopener noreferrer"target="_blank"href={`https://www.instagram.com/data`}> <FontAwesomeIcon icon={['fab',"instagram"]} /></a>

              
          </div>
      </div>
    </div>
  )
};

export default Social;

// change data before using