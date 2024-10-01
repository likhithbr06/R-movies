import React from 'react'
import './heroImage.scss'
const HeroImage = (props) => {


  return (
    <div style={{background:`linear-gradient(to bottom, rgba(0,0,0,0)39%,rgba(0,0,0,0)42%,rgba(0,0,0,0.70)100%), #1c1c1c`}}>
          <div className='hero-banner'>
                <img src={props.image} className='w-full img-fluid' alt='hero banner image'/>
                <div className='hero-wrapper'></div>
          </div>
          <div className="heroimage-content">
            <div className="heroimage-text">
                <h1 className="wow fadeInLeft" >{props.title}</h1>
                <p className="wow fadeIn">{props.description}</p>
            </div>
          </div>
    </div>
  )
}

export default HeroImage