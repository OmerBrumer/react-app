import React from 'react'
import logo from './../asset/images/logo(1).png'
import video from './../asset/images/strip (online-video-cutter.com) (1).mp4'
import emojiimg1 from './../asset/images/פה עם סוכריה.png'
import emojiimg2 from './../asset/images/Group 57.png'
import emojiimg3 from './../asset/images/צנצנת.png'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleDivClick = () => {
      navigate('/sign-in');
    };
  return (
    <div className='homepage relative min-h-screen'>
        <div className='flex flex-row w-full min-h-screen bg-[#F1F1F1] relative'>
            <div className='w-[65%]' style={{borderRight: '1px solid #181717'}}>
                <div className='logo_area pt-[50px] pb-[30px] pl-[142px]' style={{borderBottom: '1px solid #181717'}}>
                    <img src={logo} className='max-w-[450px] w-full' alt='logo'/>
                </div>
                <div className='content pt-[60px] pl-[142px]'>
                    <p className='max-w-[615px] text-[40px]'>Purchase products from the brand and enjoy a unique shopping experience and products that each of us needs</p>
                    <div className='absolute h-full w-full z-10 left-0 top-0'  onClick={handleDivClick}></div>
                    <button className='outline-button relative z-40 shadow-none' onClick={()=> {window.location.reload()}} >Return to the brand video</button>
                </div>
            </div>
            <div className='w-[35%] relative images-box'>
                    <img src={emojiimg1} alt='' className='img-1'/>
                    <img src={emojiimg2} alt='' className='img-2'/>
                    <img src={emojiimg3} alt='' className='img-3'/>
            </div>
        </div>
        <video 
      src={video}
      autoPlay 
      loop 
      muted 
      playsInline
      style={{ width: '100%', height: 'auto', position: 'absolute', bottom: '0px'}} 
    />
    </div>
  )
}

export default Home