import React, { useState } from "react";
import productimg1 from "./../asset/images/headphone.png";
import productimg2 from "./../asset/images/headphone(1).png";
import './../styles/products.css'
import { useCart } from '../contexts/CartContext'; // Import useCart hook

function HeadphoneCollection() {
    const [isActive, setIsActive] = useState(false);
    const { addToCart } = useCart(); // Get addToCart from context

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const handleAddToCart = () => {
        const item = {
            id: "92012115850",
            name: "Noise Cancelling Headphones",
            price: 40.00
        };
        addToCart(item); // Call addToCart
    };

    return (
        <div className="product-main">
            <div className="product-columns grid grid-cols-2">
                <div className="product-gallery">
                    <div className="gallery">
                        <img src={productimg1} alt="img-1" />
                        <img src={productimg2} alt="img-2" />
                    </div>
                    <div className={`overly ${isActive ? 'active' : ''}`} onClick={toggleActiveClass}>
                        <p className="text-[#D1D700]">THE ONLY <br /> HEADPHONES <br /> THAT <br /> UNDERSTAND <br /> YOU’LL WANT <br /> TO SKIP THE <br /> SONG AFTER 10 <br /> SECONDS <br />
                            to have <br /> fun</p>
                    </div>
                </div>
                <div className="product-details flex flex-col">
                    <div className="product-data">
                        <h2 className="product-title">Headphone Collection</h2>
                        <p className="product-price text-black">
                            <span>40.00 $</span>
                        </p>
                        <p className="product-des" style={{ lineHeight: '30px', color: '#000' }}>
                            White noise-cancelling headphones that are stylish. They give you the solution to disconnect from your surroundings and dive into your thoughts.
                        </p>
                    </div>
                    <div className="product-last-date bg-[#D1D700] w-fit">
                        <p style={{ lineHeight: '25px', paddingBottom: '6px', paddingRight: '6px', color: '#000' }}>Last date 12/09/2024</p>
                    </div>
                    <div className="item-left-box-product-id mt-28">
                        <h5>2 items left</h5>
                        <span>Product ID: 92012115850</span>
                    </div>
                    <div className="product-add-to-cart flex items-center justify-center">
                        <button onClick={handleAddToCart} className="button bg-black text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeadphoneCollection;