import React, {useState} from "react";
import productimg1 from "./../asset/images/bag(3).png";
import productimg2 from "./../asset/images/bag(1).png";
import productimg3 from "./../asset/images/bag(5).png";
import './../styles/products.css'
import { Link } from "react-router-dom";
function Productbag() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="product-main">
      <div className="product-columns grid grid-cols-2">
        <div className="product-gallery">
          <div className="gallery">
          <img src={productimg1} alt="img-1"/>
          <img src={productimg2} alt="img-2"/>
          <img src={productimg3} alt="img-3"/>
          </div>
          <div className={`overly ${isActive ? 'active' : ''}`}  onClick={toggleActiveClass}>
            <p className="text-[#51A2DA]">We <br/> already <br/> know <br/> how <br/>
            to have <br/> fun</p>
          </div>
        </div>
        <div className="product-details flex flex-col">
          <div className="product-data">
            <h2 className="product-title">fabric bag</h2>
            <p className="product-price text-black">
              <span>5.00 $</span>
            </p>
            <p className="product-des" style={{lineHeight: '30px', color:'#000'}}>
              Our designed cloth bags are perfect for those seeking a stylish, <br/>
              eco-friendly, and versatile solution for their daily carrying <br/>
              needs. Made from high-quality materials, these bags are built to <br/>
              last and can be used repeatedly. Can be washed and ironed.
            </p>
          </div>
          <div className="product-last-date bg-[#51A2DA;] w-fit">
            <p style={{lineHeight:'25px', paddingBottom: '6px', paddingRight: '6px' , color:'#000'}}>last date 12/09/2024</p>
          </div>
          <div className="item-left-box-product-id">
            <h5>6 items left</h5>
            <span>Product ID: 1212805095</span>
          </div>
          <div className="product-add-to-cart flex items-center justify-center">
            <Link to='/instruction' className="button bg-black text-white">add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productbag;
