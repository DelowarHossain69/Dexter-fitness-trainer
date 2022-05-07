import React from 'react';
import "./Footer.css";
import facebookIcon from "../../../images/icon/facebook.png";
import youtubeIcon from "../../../images/icon/youtube.png";
import twitterIcon from "../../../images/icon/twitter.png";
import linkedin from "../../../images/icon/linkedin.png";
import { Link } from 'react-router-dom';

const Footer = () => {
      const date = new Date();

      return (
            <footer className='bg-dark py-4'>
                 <div className='container mx-auto text-center'> 
                        <div className='footer-socialMedia-icon'>
                              <Link to='/'><img src={facebookIcon} alt="" /></Link>
                              <Link to='/'><img src={youtubeIcon} alt="" /></Link>
                              <Link to='/'><img src={twitterIcon} alt="" /></Link>
                              <Link to='/'><img src={linkedin} alt="" /></Link>
                        </div>
                        <div>
                              <p className='primary-clr mt-4 mb-0'>All rights reserved ‐ {date.getFullYear()} &copy; Dexter - FitnessTrainer</p>
                        </div>
                 </div>
            </footer>
      );
};

export default Footer;