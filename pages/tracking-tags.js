import React, {useState} from "react";
import productimg1 from "./../asset/images/tag.png";
import './../styles/products.css'
import { Link } from "react-router-dom";
import arrowimg from './../asset/images/Arrow 11.svg'
function Trackingtags() {

  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (tabName) => {
      setActiveTab(prevTab => (prevTab === tabName ? null : tabName));
  };

  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="product-main">
      <div className="product-columns grid grid-cols-2">
        <div className="product-gallery">
          <div className="gallery" style={{minHeight: '100vh'}}>
          <img src={productimg1} alt="img-1" style={{height:'100vh', width: 'auto', objectFit: 'cover', objectPosition: 'center'}}/>
          </div>
          <div className={`overly ${isActive ? 'active' : ''}`}  onClick={toggleActiveClass}>
            <p className="text-[#C685B8]">t least <br/> this way, <br/>
            it will <br/> take a bit <br/> longer <br/> before you <br/> lose your <br/> belongings.</p>
          </div>
        </div>
        <div className="product-details flex flex-col">
          <div className="product-data">
            <h2 className="product-title">Tracking tags</h2>
            <p className="product-price text-black">
              <span>45.90 $</span>
            </p>
            <p className="product-des" style={{lineHeight: '30px', color:'#000'}}>
            Tired of losing your keys, wallet, or even your pet? Our Tracking tags Kit has got your back (and your stuff)!
            </p>
          </div>
          <div className="product-last-date bg-[#C685B8] w-fit">
            <p style={{lineHeight:'25px', paddingBottom: '6px', paddingRight: '6px' , color:'#000'}}>last date 12/09/2024</p>
          </div>
          {/* <div className="item-left-box-product-id">
            <h5>2 items left</h5>
            <span>Product ID: 92012115850</span>
          </div> */}
          <div className="product-tabs mt-[40px]">
            <div className={`tabs ${activeTab === 'tab-1' ? 'active' : ''}`} id="tab-1">
                <div className={`tab-button ${activeTab === 'tab-1' ? 'active' : ''}`} onClick={() => handleTabClick('tab-1')}>product details <img className="tabs-arrow" src={arrowimg} alt="arrow"/></div>
                <div className="tab-content">
                    <ul>
                        <li>Unique Designs: Get our set of three white tracking tags, each with a unique drawing. </li>
                        <li>Real-Time Tracking</li>
                        <li>Compact & Sleek</li>
                    </ul>
                    <span>Product ID: 5095812012</span>
                </div>
            </div>
            </div>
          <div className="product-add-to-cart flex items-center justify-center">
            <Link to='/instruction' className="button bg-black text-white">add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trackingtags;
