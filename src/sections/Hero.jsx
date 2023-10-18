import React from 'react';
import heroMask from '../assets/images/hero-mask.png'; // Make sure the path is correct
import heroClip from '../assets/images/hero-clip.svg'; // Make sure the path is correct
import Button from '../components/Button';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper gap-x-10">
        <div className="flex items-center justify-center">
          <div className="container">
          <h1
            style={{
              background: `url(${heroMask})`
            }}
            className='mask-text'
          >Where your music starts</h1>
          <p>Royalty-free sounds. Industry-leading software. Endless inspiration. Start creating with Splice.</p>
          <Button type="secondary">Sign Up</Button>
          </div>
        </div>
        <div className="">
          <img src={heroClip} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
