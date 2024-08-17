import React, {useState} from "react";
import productimg1 from "./../asset/images/bag(2).png";
import './../styles/products.css'
import { Link } from "react-router-dom";
function BagCollection() {
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
          </div>
          <div className={`overly ${isActive ? 'active' : ''}`}  onClick={toggleActiveClass}>
            <p className="text-[#51A2DA]">You <br/> wanted <br/> a  bag,<br/> you got <br/> us!</p>
          </div>
        </div>
        <div className="product-details flex flex-col">
          <div className="product-data">
            <h2 className="product-title">bag collection</h2>
            <p className="product-price text-black">
              <span>80.00 $</span>
            </p>
            <p className="product-des" style={{lineHeight: '30px', color:'#000'}}>
            High-Quality Multi-Compartment Backpack
Perfect for studies, work, and daily use. attached keychain so you have one less thing to lose.
            </p>
          </div>
          <div className="product-last-date bg-[#51A2DA] w-fit">
            <p style={{lineHeight:'25px', paddingBottom: '6px', paddingRight: '6px' , color:'#000'}}>last date 12/09/2024</p>
          </div>
          <div className="item-left-box-product-id" style={{marginTop : '120px'}}>
            <h5>2 items left</h5>
            <span>Product ID: 108795211015</span>
          </div>
          <div className="product-add-to-cart flex items-center justify-center">
            <Link to='/instruction' className="button bg-black text-white">add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BagCollection;
