import React from 'react'
import Button from '../components/Button'
import sound_image from '../assets/images/sounds.png'
import bg_curve from '../assets/images/bg-curve.svg'

const Sounds = () => {
  return (
    <div className='sounds'
      style={{
        backgroundImage: `url(${bg_curve})`
      }}
    >
      <div className="container flex items-center flex-col">
        <p>SOUNDS</p>
        <h3>Find your <b>sound</b></h3>
        <p className="content">
        Preview and download millions of royalty-free samples from top producers, artists, and sound designers. Available on desktop, web, and mobile.
        </p>
        <Button type="secondary">TRY SOUNDS</Button>
        <figure>
          <img src={sound_image} alt="" />
          </figure>
      </div>
    </div>
  )
}

export default Sounds
