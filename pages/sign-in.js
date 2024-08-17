import React, { useState } from "react";
import "./../styles/signin.css";
import video from './../asset/images/מעברון.mp4'
import { Link } from "react-router-dom";
function Signin() {
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const handleButtonClick = (number) => {
  //   let rawNumber = phoneNumber.replace(/-/g, '');
  //     rawNumber += number;
  //     if (rawNumber.length <= 12) {
  //       setPhoneNumber(rawNumber);
  //     }
  //   }# can you change it in the code too? the size of the bar t 496px
  return (
    <div className="columns-main signin w-full flex flex-row">
      <div className="w-fit bg-[#171717]">
      <video 
      src={video}
      autoPlay 
      loop 
      muted 
      className="videobg"
      playsInline
    />
      </div>
      <div
        className="flex-1 pb-[10px] pt-[1.5rem]"
      >
        <div className="max-w-[638px] h-full flex align-middle content-center flex-col ml-[65px] form-column pr-[35.71px]">
          <h3 className="text-start mb-[25px]">
            Fill in details quickly to receive
          </h3>
          <form className="w-full flex-col flex mb-10">
            <input placeholder="NAME" type="text" />
            <input
              maxLength="12"
              placeholder="PHONE NUMBER"
              type="number"
              className="m-0"
            />
            <Link to='/instruction' className="button bg-[#181717] text-white m-auto mt-[50px]">
              I can't wait to start
            </Link>
          </form>
          {/* <div className="numberinputs mt-auto grid gap-2 justify-self-end">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleButtonClick(number.toString())}>
          {number}
        </button>
        ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Signin;
