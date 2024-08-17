import React from 'react'
import video from './../asset/images/main.mp4'
import { Link } from 'react-router-dom'
function Instructionscreen() {
  return (
    <div id='container-main' className="containermain relative" style={{position: 'relative'}}>
    <div className="columns-main w-full flex flex-row absolute top-0 left-0 h-full z-10">
        <div className='w-[61%] flex items-center justify-center'>
            <Link to='/checkout' className='button bg-black text-white mt-[20%]'>I bought enough</Link>
        </div>
        <div className='w-[39.9%] flex items-end justify-end' style={{borderLeft: '1px solid #181717'}}>
            <div className='bg-[#F1F1F1] w-full h-[38%] flex items-center justify-center px-[50px]' style={{borderTop: '1px solid #181717', position: 'relative' , bottom : '-2px'}}>
                <p style={{maxWidth: '600px'}}><span className='architest-font font-normal text-[40px]'>P.S.</span> Don't worry, the card will be charged only after you confirm the products you want to purchase.</p>
            </div>
        </div>
    </div>
    <video 
      src={video}
      autoPlay 
      loop 
      muted 
      playsInline
      style={{ width: '100%', height: '100%' , objectFit: 'cover' }} 
    />
    </div>
  )
}

export default Instructionscreen