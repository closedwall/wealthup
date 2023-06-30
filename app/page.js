import Image from "next/image";
import "@fontsource/poppins";
import TodoList from "@/components/TodoList";
import Curve from "@/components/Curve";

export default function Home() {
  return (
    <div>
    <main className=" bg-gradient-to-r from-blue-900 to-teal-500 ">
      <h1 className="text-7xl text-center text-white font-poppins pt-20">
        Check your financial health
      </h1>
      <div className="flex justify-center">
        <p className="w-72 text-[#FFF] mt-4">
          Use WeathoMeter to get a free report card for your finances-within
          minutes!
        </p>
      </div>
      <div className="text-center mt-10 ">
        <button className="text-center bg-[#FB7306] rounded-2xl px-10 py-2 text-white font-bold">
          Get Started
        </button>
      </div>
      <div className="flex m-auto w-3/4 justify-evenly">
        <div className="left">
          <div className="flex items-center text-white">
            <img className="" src="/tick.png" alt="tick" />
            <span>Expected Retirement Age</span>
          </div>
          <hr className="border-t-2" />
          <div className="flex items-center text-white mt-5">
            <img className="w-10 h-10" src="/tick.png" alt="tick" />
            <span>Identify Mistakes</span>
          </div>
          <hr className="border-t-2" />
        </div>
        <div className="middle text-center ml-24">
          <Image src="/mobile.png" alt="mobile" width="325" height="512" />
        </div>
        <div className="right">
          <div className="flex items-center text-white">
            <img src="/tick.png" alt="tick" />
            <span>Personalised Road Map</span>
          </div>
          <hr className="border-t-2" />
          <div className="flex items-center text-white mt-5">
            <img src="/tick.png" alt="tick" />
            <span>Tips To Improve</span>
          </div>
          <hr className="border-t-2" />
        </div>
      </div>
      {/* <div className="w-2/4 m-auto text-center relative z-10 top-1">
        <h2 className="text-4xl font-bold text-white">How it Works?</h2>
        <div className="flex flex-col align-middle text-center justify-center">
          <img className="h-52" src="/linker.png" alt="linker" />
          <div className="flex flex-row justify-between">
            <span className="w-40">Answer few questions</span>
            <span className="w-40">Register using phone and OTP</span>
            <span className="w-40">Get report and personal roadmap</span>
          </div>
          <div>
          <button className="text-center mt-24 bg-[#FB7306] rounded-2xl px-10 py-2 text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
      <div className="relative top-[-40rem] h-auto w-auto">
        <svg
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
        </svg>
      </div> */}
      <Curve/>
      <TodoList/>

    </main>
    </div>
  );
}
