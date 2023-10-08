import React from 'react'
import ProductData from '../Data/ProductData'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Block1(props) {
 let filter=ProductData.filter((a)=>a.category==props.tt) 
  return (
    <>
     <div className="container py-3">
        <h3 className='text-uppercase'>{props.tt}</h3>
        {/* {ProductData.map((a)=>(
          <>
          {a.title}
          </>
        ))} */}
       <OwlCarousel className='owl-theme' loop margin={10} items={5}  nav>

          {filter.slice(0,10).map((ii)=>(
            // <div className="box" key={ii.id}>
            //    <div className=" card shadow p-3">
            //     <img src={ii.thumbnail} alt="" className='w-100' />
            //     <p className='py-3'>{ii.title}</p>
            //     <p py-3>{ii.price}</p>
            //    </div>
 
            // </div>
            // <div className="col-md-3 col-sm-6">
  <div className="product-grid">
    <div className="product-image">
      <a href="#">
        <img className="pic-1" src={ii.thumbnail} />
        <img className="pic-2" src={ii.thumbnail}/>
      </a>
      <ul className="social">
        <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
        <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
        <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
      </ul>
      <span className="product-new-label">Sale</span>
      <span className="product-discount-label">20%</span>
    </div>
    <ul className="rating">
      <li className="fa fa-star" />
      <li className="fa fa-star" />
      <li className="fa fa-star" />
      <li className="fa fa-star" />
      <li className="fa fa-star disable" />
    </ul>
    <div className="product-content">
      <h3 className="title"><a href="#">{ii.title}</a></h3>
      <div className="price">{ii.price}
        <span>${ii.discountPercentage}%</span>
      </div>
      <a className="add-to-cart" href>+ Add To Cart</a>
    </div>
  </div>
// </div>

          ))}
          
          </OwlCarousel>;

     </div>
    </>
  )
}

export default Block1