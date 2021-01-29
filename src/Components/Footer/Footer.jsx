import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

function Footer(props) {
    return (
        <footer>
            <div>
                Designed and built with 🤍 by Ishan Bhardwaj
            </div>
            
            <div>
            <FontAwesomeIcon icon={faCoffee} />    
            </div>            

            {/* Designed and built with 🤍 by<span style={{color:"#121212"}}>_</span>Ishan<span style={{color:"#121212"}}>_</span>Bhardwaj */}
        </footer>
    )
}

export default Footer;