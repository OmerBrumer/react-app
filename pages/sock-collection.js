import React, { useEffect, useState } from "react";
import productimg1 from "./../asset/images/Artboard 2-1 1.png";
import productimg2 from "./../asset/images/sock(2).png";
import productimg3 from "./../asset/images/sock.png";
import './../styles/products.css'
import { Link } from "react-router-dom";
import arrowimg from './../asset/images/Arrow 11.svg'
function Productbsock() {
    useEffect(()=>{
        document.getElementById('43-46').checked = true;
        document.querySelectorAll('.soldout').forEach((soldoutelement)=>{
            soldoutelement.disabled = true
        })
    })
    const [selectedSize, setSelectedSize] = useState('43-46');

    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
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
          {selectedSize === '35-38' ? 
          <div className="gallery-3538 gallery">
          <img src={productimg2} alt="productimg-2"/>
          </div> : <div className="gallery-4346 gallery">
          <img src={productimg1} alt="productimg-2"/>
          <img src={productimg3} alt="productimg-3"/>
          </div>}
          <div className={`overly ${isActive ? 'active' : ''}`}  onClick={toggleActiveClass}>
          <p className="text-[#CA8DBD]">We have already <br/> made a mess of <br/> your socks. <br/>
          TO SAVE YOU <br/> SOME TIME...</p>
          </div>
        </div>
        <div className="product-details flex flex-col">
          <div className="product-data">
            <h2 className="product-title">socks collection</h2>
            <p className="product-price text-black">
              <span>20.90 $</span>
            </p>
            <p className="product-des mt-5" style={{lineHeight: '30px', color:'#000'}}>
            A pair of stylish socks with completely different designs, because you'll never find a matching pair anyway..
            </p>
          </div>
          <div className="product-last-date bg-[#51A2DA;] w-fit">
            <p style={{lineHeight:'25px', paddingBottom: '6px', paddingRight: '6px' , color:'#000'}}>last date 12/09/2024</p>
          </div>
          <div className="variant-size mx-5" style={{gridTemplateColumns: 'repeat(4, auto)'}}>
            <input type="radio" name="size" id="35-38" value="35-38" className="active"/>
            <label htmlFor="35-38" onClick={() => handleSizeChange('35-38')} >35-38</label>
            <input type="radio" name="size" id="39-42" value="39-42" className="active"/>
            <label htmlFor="39-42"  onClick={() => handleSizeChange('39-42')} >39-42</label>
            <input type="radio" name="size" id="43-46" value="43-46" className="active"/>
            <label htmlFor="43-46"  onClick={() => handleSizeChange('43-46')} >43-46</label>
            <input type="radio" name="size" id="47-50" value="47-50" className="active soldout"/>
            <label htmlFor="47-50"  onClick={() => handleSizeChange('47-50')} >47-50</label>
          </div>

          <div className="product-tabs mt-[40px]">
            <div className={`tabs ${activeTab === 'tab-1' ? 'active' : ''}`} id="tab-1">
                <div className={`tab-button ${activeTab === 'tab-1' ? 'active' : ''}`} onClick={() => handleTabClick('tab-1')}>product details <img className="tabs-arrow" src={arrowimg} alt="arrow"/></div>
                <div className="tab-content">
                    <ul>
                        <li>Cotton: Soft, breathable, and absorbent, ideal for everyday wear.</li>
                        <li>Moisture-Wicking: Materials designed to keep feet dry by drawing moisture away from the skin.</li>
                        <li>Fun and quirky designs featuring characters, themes, and bold prints.</li>
                    </ul>
                    <span>Product ID: 879521107158</span>
                </div>
            </div>
            <div className={`tabs ${activeTab === 'tab-2' ? 'active' : ''}`} id="tab-2">
                <div className={`tab-button ${activeTab === 'tab-2' ? 'active' : ''}`} onClick={() => handleTabClick('tab-2')}>product care <img className="tabs-arrow" src={arrowimg} alt="arrow"/></div>
                <div className="tab-content">
                    <ul>
                        <li>Do not use neutral or aggressive chemicals to clean.</li>
                        <li>Do not machine-wash. Instead, we recommend seeing a cleaning specialist.</li>
                    </ul>
                </div>
            </div>
            <div className={`tabs ${activeTab === 'tab-3' ? 'active' : ''}`} id="tab-3">
                <div className={`tab-button ${activeTab === 'tab-3' ? 'active' : ''}`} onClick={() => handleTabClick('tab-3')}>product sustainability <img className="tabs-arrow" src={arrowimg} alt="arrow"/></div>
                <div className="tab-content">
                <ul>
                        <li>Our approach: We are committed to the sustainable and ethical.</li>
                        <li>management of our operations. The goal of reducing our environmental.</li>
                        <li>impact influences our decisions. At all levels and in all locales.</li>
                        <li>we respect high standards for social and ecological responsibility.</li>
                    </ul>
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

export default Productbsock;
