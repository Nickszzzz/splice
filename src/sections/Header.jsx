import React from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import {HiMenuAlt3} from 'react-icons/hi'

const Header = () => {

  return (
    <div className='navigation grid grid-cols-2 gap-x-10'>
      <div className='flex gap-x-20 justify-start items-center gap-y-4 flex-wrap'>
        <Logo />
        <nav>
            <ul className='flex gap-x-8 justifyt-start'>
                <li><a href="#studio">studio</a></li>
                <li><a href="#community">community</a></li>
                <li><a href="#sounds">sounds</a></li>
                <li><a href="#plugins">plugins</a></li>
                <li><a href="#blog">blog</a></li>
            </ul>
        </nav>
      </div>
      <div className='flex justify-end items-start header-button'>
            <Button>Log In</Button>
            <Button type="primary">Sign Up</Button>
      </div>
      <div className="responsive-menu">
        <HiMenuAlt3 />
      </div>
    </div>
  )
}

export default Header
