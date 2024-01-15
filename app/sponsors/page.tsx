import ecellLogoWhite from "@/public/assets/ecell-white-img.png";
import React from "react";
import "./Sponser.css";
import Image from "next/image";

const Sponsers = () => {
  return (
    <>
      <div className="bg-blend-overlay bg-no-repeat bg-fixed bg-center bg-cover w-full h-fit text-black sponsers flex gap-5 flex-col justify-center items-center">
        <h1 className="font-extrabold text-[4rem] text-white ">OUR SPONSERS</h1>
        <div className="allsponsers my-5 flex gap-5 flex-col justify-center items-center">
          <h1 className="font-extrabold text-[2.5rem] text-white">
            Title Sponsers
          </h1>
          <div className="sponsercontainer backdrop-blur-md rounded-[0.7rem] h-[80vh] w-[85%] flex flex-col justify-center items-center">
            <div className="row h-[48%] w-[99%] flex justify-center items-center">
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] md:h-[100%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] md:h-[90%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10 md:h-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
            </div>
            <div className="row h-[48%] w-[99%] flex justify-center items-center">
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-extrabold text-[2.5rem] text-white">
            Other Sponsers
          </h1>
          <div className="sponsercontainer backdrop-blur-md rounded-[0.7rem] h-[80vh] w-[85%] flex flex-col justify-center items-center">
            <div className="row h-[48%] w-[99%] flex justify-center items-center">
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
            </div>
            <div className="row h-[48%] w-[99%] flex justify-center items-center">
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
              <div className="sponseritem hover:h-full rounded-2xl w-[33%] h-[90%] flex flex-col justify-center items-center duration-300">
                <div className="sponserimage sponsercards h-[35%] w-[98%] ease-in-out duration-300 flex items-center justify-center">
                  <Image
                    src={ecellLogoWhite}
                    alt=""
                    className="duration-500 w-9/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sponsers;
