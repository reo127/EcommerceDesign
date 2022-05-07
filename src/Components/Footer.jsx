import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import '../App.css'

function Footer() {
  return (
    <div>

    <div className="footer">
        <h2 className='FooterHeading'>Copyright © 2022 Rohan Malo</h2>
        <div className="socialIcons">
            <a href="#"><LinkedInIcon fontSize='large' style={{marginLeft:'20px'}}/></a>
            <a href="#"><GitHubIcon fontSize='large' style={{marginLeft:'20px'}} /></a>
            <a href="#"><InstagramIcon fontSize='large' style={{marginLeft:'20px'}} /></a>
        </div>
    </div>

    </div>
  )
}

export default Footer