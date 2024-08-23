import React, { useEffect, useState } from "react";
import productLvideo from "./../asset/images/t-shirt video.mp4";
import galleryl1 from "./../asset/images/t-shirt front.png";
import galleryl2 from "./../asset/images/t-shirt back(1).png";
import { Link } from "react-router-dom";
import arrowimg from "./../asset/images/Arrow 11.svg";
import "./../styles/products.css";

function TshirtCollection() {
  useEffect(() => {
    document.getElementById("L").checked = true;
    document.querySelectorAll(".soldout").forEach((soldoutelement) => {
      soldoutelement.disabled = true;
    });
  });

  const [selectedSize, setSelectedSize] = useState("M");

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (tabName) => {
    setActiveTab((prevTab) => (prevTab === tabName ? null : tabName));
  };
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="product-main">
      <div className="product-columns grid grid-cols-2">
        <div className="product-gallery">
          {selectedSize === "L" ? (
            <div className="gallery-L gallery">
              <video
                src={productLvideo}
                autoPlay
                loop
                muted
                className="product-video"
                playsInline
              />
              <img src={galleryl1} alt="gallery-l-1" />
              <img src={galleryl2} alt="gallery-l-2" />
            </div>
          ) : selectedSize === "S" ? (
            <div className="gallery-S gallery">
              <video
                src={productLvideo}
                autoPlay
                loop
                muted
                className="product-video"
                playsInline
              />
              <img src={galleryl1} alt="gallery-l-1" />
              <img src={galleryl2} alt="gallery-l-2" />
            </div>
          ) : (
            <div className="gallery-M gallery">
              <video
                src={productLvideo}
                autoPlay
                loop
                muted
                className="product-video"
                playsInline
              />
              <img src={galleryl1} alt="gallery-l-1" />
              <img src={galleryl2} alt="gallery-l-2" />
            </div>
          )}

          <div
            className={`overly ${isActive ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <p className="text-[#ED6E1A]">
              We <br /> think <br /> our <br /> ADHD <br /> has got <br />{" "}
              you...
            </p>
          </div>
        </div>
        <div className="product-details flex flex-col">
          <div className="product-data">
            <h2 className="product-title">t-shirt collection</h2>
            <p className="product-price text-black">
              <p className="mt-[-1%]">31.20 $</p>
            </p>
            <p className="product-des mt-[3%]" style={{lineHeight: '30px', color:'#000', fontStretch: 'narrower'}} >
              White t-shirt in all sizes - suitable for the hyperactive and
              stylish! Get yours and stand out!
            </p>
          </div>
          <div className="product-last-date bg-[#ED6E1A] w-fit">
            <p
              style={{
                lineHeight: "25px",
                paddingBottom: "6px",
                paddingRight: "6px",
                color: "#000",
              }}
            >
              last date 12/09/2024
            </p>
          </div>
          <div className="variant-size mx-5 yellowtype">
            <input type="radio" name="size" id="XS" value="XS" className="active soldout" />
            <label htmlFor="XS" onClick={() => handleSizeChange("XS")} style={{ fontWeight: '590', fontStretch: 'condensed' }}>XS</label>
            <input type="radio" name="size" id="S" value="S" className="active" />
            <label htmlFor="S" onClick={() => handleSizeChange("S")} style={{ fontWeight: '590', fontStretch: 'condensed' }}>S</label>
            <input type="radio" name="size" id="M" value="M" className="active soldout" />
            <label htmlFor="M" onClick={() => handleSizeChange("M")} style={{ fontWeight: '590', fontStretch: 'condensed' }}>M</label>
            <input type="radio" name="size" id="L" value="L" className="active" />
            <label htmlFor="L" onClick={() => handleSizeChange("L")} style={{ fontWeight: '590', fontStretch: 'condensed' }}>L</label>
            <input type="radio" name="size soldout" id="XL" value="XL" className="active" />
            <label htmlFor="XL" onClick={() => handleSizeChange("XL")} style={{ fontWeight: '590', fontStretch: 'condensed' }}>XL</label>
            <input type="radio" name="size soldout" id="XXL" value="XXL" className="active soldout" />
            <label htmlFor="XXL" onClick={() => handleSizeChange("XXL")} style={{ fontWeight: '590', fontStretch: 'condensed' }}>XXL</label>
          </div>
          {/* <div className="item-left-box-product-id">
            <h5>6 items left</h5>
            <span>Product ID: 1212805095</span>
          </div> */}

          <div className="product-tabs mt-[14px] tshirt-tabs">
            <div
              className={`tabs ${activeTab === "tab-1" ? "active" : ""}`}
              id="tab-1"
            >
              <div
                className={`tab-button ${activeTab === "tab-1" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("tab-1")}
              >
                product details{" "}
                <img className="tabs-arrow" src={arrowimg} alt="arrow" />
              </div>
              <div className="tab-content">
                <ul>
                  <li>
                    Cotton: Soft, breathable, and absorbent, ideal for everyday
                    wear.
                  </li>
                  <li>Short sleeves</li>
                  <li>
                    Main fabric: 100% cotton - Trimming: 95% cotton, 5%
                    elastane.
                  </li>
                  <li>Made in israel.</li>
                </ul>
                <span>Product ID: 1589201250</span>
              </div>
            </div>
            <div
              className={`tabs ${activeTab === "tab-2" ? "active" : ""}`}
              id="tab-2"
            >
              <div
                className={`tab-button ${activeTab === "tab-2" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("tab-2")}
              >
                product care{" "}
                <img className="tabs-arrow" src={arrowimg} alt="arrow" />
              </div>
              <div className="tab-content">
                <ul>
                  <li>Cold machine wash, mild process.</li>
                </ul>
              </div>
            </div>
            <div
              className={`tabs ${activeTab === "tab-3" ? "active" : ""}`}
              id="tab-3"
            >
              <div
                className={`tab-button ${activeTab === "tab-3" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("tab-3")}
              >
                product sustainability{" "}
                <img className="tabs-arrow" src={arrowimg} alt="arrow" />
              </div>
              <div className="tab-content">
                <span className="ml-5 block">
                  Our approach: We are committed to the sustainable and ethical
                  management of our operations. The goal of reducing our
                  environmental impact influences our decisions. At all levels
                  and in all locales. we respect high standards for social and
                  ecological responsibility.
                </span>
              </div>
            </div>
          </div>
          <div className="product-add-to-cart flex items-center justify-center">
            <Link to="/instruction" className="button bg-black text-white">
              add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TshirtCollection;
