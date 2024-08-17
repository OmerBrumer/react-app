import React from 'react';
import qrcodeimg from './../asset/images/QR.png';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; // Import the useCart hook

function Checkout() {
    const { cart, getCartTotal } = useCart(); // Get cart and total from context

    console.log('Cart:', cart);

    return (
        <div className='checkout-main flex'>
            <div className="columns flex flex-row checkout-column w-full">
                <div className='w-2/5' style={{ borderRight: '1px solid #181717' }}>
                    <div className='h-[40%] bg-[#C685B8] p-12 pl-[27px] flex justify-center flex-col' style={{ borderBottom: '1px solid #181717' }}>
                        <h5>
                            Wait! I forgot something
                        </h5>
                        <p className='ml-[47px] mt-[16px]'>To continue your purchase, open the door and <br /> take the products</p>
                    </div>
                    <div className='h-[60%] pt-[40px] flex flex-col'>
                        <img className='trashimg mx-auto' src={qrcodeimg} alt='qrcode' style={{ maxWidth: '180px' }} />
                        <div className='mt-[28.33px] pl-[27px]'>
                            <h5>Scan to contact our service</h5>
                            <p className='pl-[10px] pr-[20px] ml-[5%]'>To return products, complaints or <br /> just to compliment</p>
                        </div>
                    </div>
                </div>
                <div className='w-3/5 pt-[50px] flex flex-col'>
                    <div className='box'>
                        <table className='w-full data-table'>
                            <tbody>
                                {cart.length > 0 ? (
                                    cart.map((item) => (
                                        <tr key={item.id}>
                                            <td><p>{item.name}</p></td>
                                            <td><p>{item.price.toFixed(2)} $</p></td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2">No items in cart</td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr className='flex'>
                                    <td className='total-title'>Total amount</td>
                                    <td className='total-amount'>{getCartTotal()} $</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <Link to='/instruction' className='button bg-black text-white mt-[40px] mb-0p mx-auto'>Enough is enough</Link>
                </div>
            </div>
        </div>
    );
}

export default Checkout;