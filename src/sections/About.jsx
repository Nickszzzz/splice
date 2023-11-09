import React from 'react'
// import { useLottie } from 'lottie-react'
// import earth_rotate from '../assets/json/earth-rotate.json'
import earth from '../assets/images/earth.png'
import Button from '../components/Button'

const About = () => {

    // const options = {
    //     animationData: earth_rotate,
    //     loop: true
    // }

    // const {View} = useLottie(options);

  return (
    <div className='about'>
      <div className="grid">
        <div className="grid-4">
            <div>
                <h3 className='heading'>What <b>creators</b> are saying about Splice</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.</p>
                <Button type="secondary">TRY IT NOW</Button>
            </div>
        </div>
        <div className="grid-8">
            <img src={earth} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
