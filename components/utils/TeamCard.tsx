import React, { Component } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default class NewCard extends Component {
  render() {
    return (
      <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
        <div className="w-64 h-82 p-2 bg-whilte rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl relative">
          <div className="absolute bg-[#d5242a] w-full h-32  top-0 right-0"></div>

          {/* <!-- Image --> */}
          <div className="flex justify-center mt-4">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
              className="h-52  rounded-full object-cover border-[#d5242a] z-10 hover:w-56 hover:h-56 hover:duration-150"
              width="210 "
            />
          </div>

          <div className="p-2 mb-3 hover:static">
            {/* <!-- NAME --> */}
            <div>
              <h2 className="font-extrabold text-lg mb-2 z-10 ">Name</h2>
            </div>

            {/* <!-- post --> */}
            <div>
              <p className="text-sm text-gray-400">Ecell Manager</p>
            </div>

            <div className="flex mt-3  gap-2 ml-2 justify-evenly	">
              {/* Linkedin */}
              <div>
                <FaLinkedin
                  size="1.8rem"
                  className="hover:w-14 hover:duration-150"
                />
              </div>

              {/* email */}
              <div>
                <MdEmail
                  size="1.8rem"
                  className="hover:w-14 hover:duration-150 "
                />
              </div>

              {/* phone number */}
              <div>
                <FaPhone
                  size="1.8rem"
                  className="hover:w-14 hover:duration-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
