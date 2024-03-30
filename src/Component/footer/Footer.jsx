/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FiInstagram, FiLinkedin, FiGithub} from 'react-icons/fi'
import {FaFacebookF, FaStackOverflow, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>MILAN</a>

      <ul className='permalinks'>
        <li><a href='https://milansharma.site'>Home</a></li>
        <li><a href='https://milansharma.site#about'>About</a></li>
      </ul>
      <div className='footer__socials'>
      <a href='https://www.facebook.com/milan.sharma.980315/'><FaFacebookF /></a>
        <a href='https://www.instagram.com/milansharma_449/'><FiInstagram /></a>
        <a href='https://twitter.com/milansharma449'><FaTwitter /></a>
        <a href='https://github.com/Milan-Sharma-449'><FiGithub /></a>
        <a href='https://www.linkedin.com/in/milan-sharma-3b9985166/'><FiLinkedin /></a>
        <a href='https://stackoverflow.com/users/20611664/milan-sharma'><FaStackOverflow /></a>
      </div>
    </footer>
  )
}

export default Footer