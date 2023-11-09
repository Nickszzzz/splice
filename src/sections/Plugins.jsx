import React, { useEffect, useRef } from 'react'
import plugins_bg from '../assets/images/plugins-bg.png'
import GlowingCircle from '../lottie/GlowingCircle'
import Button from '../components/Button'
import studio from '../assets/images/studio.png'

const Plugins = () => {
  return (
    <>
      <div className='plugins flex'
        style={{
          backgroundImage: `url(${plugins_bg})`
        }}
      >
        <div className='grid-1'>
          <GlowingCircle />
        </div>
        <div className='grid-2'>
          <div>
            <p className='sub-heading'>PLUGINS</p>
            <h3 className='heading'>Build your <b>digital studio</b></h3>
            <p>Try industry-leading music software for free, pay it off over time and own it forever.</p>
            <Button type="secondary">TRY GEAR</Button>
          </div>
        </div>
      </div>
      <div className='plugins flex-reverse'
      >
        <div className='grid-1'>
        <div className='logos-holder'>
          <img src={studio} alt="" />
        </div>
        </div>
        <div className='grid-2'>
          <div>
            <p className='sub-heading'>STUDIO</p>
            <h3 className='heading'>Stay in <b>sync</b></h3>
            <p>Try industry-leading music software for free, pay it off over time and own it forever.</p>
            <Button type="secondary">TRY STUDIO</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plugins
