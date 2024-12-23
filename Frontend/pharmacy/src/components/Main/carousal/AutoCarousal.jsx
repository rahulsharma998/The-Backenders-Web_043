import React from 'react'
import './AutoCarousal.css'

let images = [{
    image:"https://images.apollo247.in/images/category/web_gificici.gif?tr=q-80,f-webp,w-1250,dpr-3,c-at_max 3750w"
}]

function AutoCarousal() {
  return (
    <>
        <div className="carousal-slide">
          <img src={images[0].image} alt="carousal" />
        </div>
    </>
  )
}

export default AutoCarousal
