import React, { useEffect, useState } from "react";
import productMvideo from "./../asset/images/t-shirt video(2).mp4";
import productLvideo from "./../asset/images/t-shirt video.mp4";
import productSvideo from "./../asset/images/t-shirt video(1).mp4";
import gallerym1 from "./../asset/images/mockup.png";
import gallerym2 from "./../asset/images/t-shirt back.png";
import gallerym3 from "./../asset/images/t-shirt front(2).png";
import gallerys1 from "./../asset/images/t-shirt front(1).png";
import gallerys2 from "./../asset/images/t-shirt bag.png";
import galleryl1 from "./../asset/images/t-shirt front.png";
import galleryl2 from "./../asset/images/t-shirt back(1).png";
import "./../styles/products.css";
import { Link } from "react-router-dom";
import arrowimg from "./../asset/images/Arrow 11.svg";
function TshirtCollection() {
  useEffect(() => {
    document.getElementById("M").checked = true;
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
                src={productSvideo}
                autoPlay
                loop
                muted
                className="product-video"
                playsInline
              />
              <img src={gallerys1} alt="gallery-s-1" />
              <img src={gallerys2} alt="gallery-s-2" />
            </div>
          ) : (
            <div className="gallery-M gallery">
              <video
                src={productMvideo}
                autoPlay
                loop
                muted
                className="product-video"
                playsInline
              />
              <img src={gallerym1} alt="gallery-m-1" />
              <img src={gallerym2} alt="gallery-m-3" />
              <img src={gallerym3} alt="gallery-m-3" />
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
              <span>31.20 $</span>
            </p>
            <p
              className="product-des mt-5"
              style={{ lineHeight: "30px", color: "#000", fontSize: "27px" }}
            >
              White t-shirt in all sizes - suitable for the hyperactive and
              stylish! <br /> Get yours and stand out!
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
            <input type="radio" name="size" id="XS" value="XS" className="active" />
            <label htmlFor="XS" onClick={() => handleSizeChange("XS")}>XS</label>
            <input type="radio" name="size" id="S" value="S" className="active" />
            <label htmlFor="S" onClick={() => handleSizeChange("S")}>S</label>
            <input type="radio" name="size" id="M" value="M" className="active" />
            <label htmlFor="M" onClick={() => handleSizeChange("M")}>M</label>
            <input type="radio" name="size" id="L" value="L" className="active" />
            <label htmlFor="L" onClick={() => handleSizeChange("L")}>L</label>
            <input type="radio" name="size soldout" id="XL" value="XL" className="active" />
            <label htmlFor="XL" onClick={() => handleSizeChange("XL")}>XL</label>
            <input type="radio" name="size soldout" id="XXL" value="XXL" className="active" />
            <label htmlFor="XXL" onClick={() => handleSizeChange("XXL")}>XXL</label>
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
