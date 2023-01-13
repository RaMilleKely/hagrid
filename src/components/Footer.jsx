import React from 'react'
import '../assets/css/footer.css'

export default function Footer() {
  return (
    <footer>
        <div className='footer-links'>
            <div className='footer-logo'>
                <img src="hagrid-logo-alt.svg" alt="hagrid-logo" className='logo' />
                <img src="top-post-badge.svg" alt="top-post-badge" className='badge'/>
            </div>
            <div className='link-block'>
                <p>Integration Guides</p>
                <div className='links'>
                    <a>Javascript</a>
                    <a>Webflow</a>
                    <a>ReactJS</a>
                    <a>Wordpress</a>
                    <a>Wix</a>
                    <a>Shopify</a>
                    <a>Carrd</a>
                </div>
            </div>
            <div className='link-block'>
                <p>About</p>
                <div className='links'>
                    <a>Roadmap</a>
                    <a>Story</a>
                    <a>Handbook</a>
                    <a>Contact Us</a>
                    <a>Twitter</a>
                    <a>LinkedIn</a>
                </div>
            </div>
            <div className='link-block'>
                <p>Projects</p>
                <div className='links'>
                    <a>magiceraser.io</a>
                    <a>backgrounderaser.io</a>
                    <a>hagrid.io</a>
                </div>
            </div>
            <div className='link-block'>
                <p>Legal</p>
                <div className='links'>
                    <a>Privacy Policy</a>
                    <a>Terms of Service</a>
                </div>
            </div>
            
        </div>
        <p className='copyright'>Copyright © 2020-2022 aarzoo, Inc. All rights reserved.</p>
    </footer>
  )
}
