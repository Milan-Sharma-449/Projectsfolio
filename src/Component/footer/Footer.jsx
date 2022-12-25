/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {FiInstagram, FiGithub} from 'react-icons/fi'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>MILAN</a>

      <ul className='permalinks'>
        <li><a href='https://milan-sharma-449.github.io/Portfolio-react/'>Home</a></li>
        <li><a href='https://milan-sharma-449.github.io/Portfolio-react/#about'>About</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><FaTwitter /></a>
        <a href='https://github.com'><FiGithub /></a>
      </div>
    </footer>
  )
}

export default Footer