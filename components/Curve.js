import React from "react";

const Curve = () => {
  return (
    <>
      <div className="w-2/4 m-auto text-center relative z-10 top-1">
        <h2 className="text-4xl font-bold text-white">How it Works?</h2>
        <div className="flex flex-col align-middle text-center justify-center">
          <img className="h-52" src="/linker.png" alt="linker" />
          <div className="flex flex-row justify-between">
            <span className="w-40">Answer few questions</span>
            <span className="w-40">Register using phone and OTP</span>
            <span className="w-40">Get report and personal roadmap</span>
          </div>
          <div>
            <button className="text-center mt-24 bg-[#FB7306] rounded-2xl px-10 py-2 text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="relative top-[-37rem] h-auto w-auto">
        <img src="/curve.png" alt="curve" />
        {/* <svg
          width="100%"
          height="790"
          viewBox="0 0 1502 790"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1007 172C689 62 449 124 295 282C178.954 401.06 51.4328 419.449 -7 413.383V790H1509V0C1275.4 187.2 1077 192.667 1007 172Z"
            fill="#0A5783"
          />
        </svg> */}
      </div>
    </>
  );
};

export default Curve;
