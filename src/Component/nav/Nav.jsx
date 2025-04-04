/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { TbArrowBackUp } from 'react-icons/tb'
import { useState } from 'react'

const Nav = () => {

const[activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='https://milansharma.in' onClick={() => setActiveNav ('https://milansharma.in')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome /></a>
      <a href='https://milansharma.in' onClick={() => setActiveNav ('https://milansharma.in')} className={activeNav === '#about' ? 'active' : ''} ><TbArrowBackUp /></a>
    </nav>
  )
}

export default Nav