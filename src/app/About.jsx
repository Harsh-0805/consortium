import React from "react";
import image from "../assets/conso1.jpg";

const About = () => {
  return (
  <div>
    <section className="grid w-full justify-center mx-auto md:grid-cols-2">
      <div className="bg-[#161a1d] text-left py-3">
      
        <h1 className="font-extrabold text-[#d5242a] text-4xl pb-28 px-8 md:text-6xl md:pb-20 md:pt-10">ABOUT <br />CONSORTIUM'24</h1>
      <p className="text-xl font-serif md:px-8 px-4 text-white">Consortium is the flagship annual entrepreneurship summit and management festival of VNIT. It offers a platform for students to showcase their entrepreneurial skills and network with industry experts. The event features engaging competitions and keynote sessions, inspiring and fueling the spirit of entrepreneurship among attendees. Join us to ignite your entrepreneurial spark at Consortium!
      </p>
      
      </div>
      <div className="bg-[#161a1d] p-4 flex flex-col-reverse md:flex-col">
      <div className="flex md:flex-row flex-col gap-5 justify-between items-center px-10 pt-3 pb-10" >
        <div className=" place-content-center bg-[#d5242a] rounded-md">
          <DrawOutlineButton>TEAM</DrawOutlineButton>
        </div>
        <div className=" place-content-center bg-[#d5242a] rounded-md">
          <DrawOutlineButton>GLIMPSES</DrawOutlineButton>
        </div>
        <div className=" place-content-center bg-[#d5242a] rounded-md">
          <DrawOutlineButton>CONTACT</DrawOutlineButton>
        </div>
      </div>
        <div>
        <img src={image} alt="images" width={560}  className="float-right" />
        <hr class="w-60 h-1.5 border-0 bg-[#d5242a] float-right"/>
        </div>
      </div>
    </section>    
    
  </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-6 py-3 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-gray-400"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-slate-400 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-slate-500 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-slate-600 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-slate-700 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default About;
