import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from '@fortawesome/free-solid-svg-icons'

export default function Socialbutton() {
    
const iconos = [<FontAwesomeIcon icon={faFacebook} />, <FontAwesomeIcon icon={faGithub} />,<FontAwesomeIcon icon={faLinkedin} /> ]
 console.log (iconos)
    return (
       
    <div>Socialbutton
     </div>
  )
}

