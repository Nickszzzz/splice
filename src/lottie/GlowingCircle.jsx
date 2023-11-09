import React from 'react'
import { useLottie } from 'lottie-react'
import glow_circle from '../assets/json/glowing-circle.json'
import logos from '../assets/images/logos.png'

const GlowingCircle = () => {
    const options = {
        animationData: glow_circle,
        loop: true
    }

    const {View} = useLottie(options);
  return (
    <div className='logos-holder'>
      {View}
      <img src={logos} alt="" />
    </div>
  )
}

export default GlowingCircle
