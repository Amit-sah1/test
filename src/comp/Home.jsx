import React from 'react'
import Block1 from './Block1'

function Home() {
  return (
    <>
   <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://new.socheko.com/public/files/F4A3F6213A1B9CB-whole-sale-slider-final.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://new.socheko.com/public/files/46FF1B70D66586C-mixer-slider-2.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://new.socheko.com/public/files/DAA5F925B3AE59D-melange-kurthi-final.webp" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Block1 tt="smartphones" />
   <Block1 tt="laptops"/>
   <Block1 tt="fragrances"/>
   <Block1 tt="skincare"/>
    </>
  )
}

export default Home