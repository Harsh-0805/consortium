"use client";
import React from "react";

import conso from "../public/assets/conso.png";
import Image from "next/image";
import Link from "next/link";

// import { Icon } from "@iconify/react";

const Landing = () => {
  return (
    <div className="min-h-screen max-w-full  bg-red-500 bg-[url('/assets/BackgroundImage1.png')] bg-blend-normal bg-no-repeat bg-center lg:bg-top bg-cover bg-fixed">
      <div className="h-screen bg-gradient-to-t from-[rgba(0,0,0,0.5)_0%] to-[rgb(0,0,0,0.35)_92.5%]">
        <div className="h-[90%] w-full lg:h-full grid grid-rows-6 items-center text-white">
          <div className="row-span-3 w-full h-full flex justify-center items-center lg:items-end">
            <Image
              src={conso}
              alt="Conso"
              className="w-full md:translate-y-20 scale-[0.9] lg:scale-[0.7]"
            />
          </div>
          <div className="self-center flex flex-row items-center gap-1 lg:gap-16 w-full pb-10 space-x-5">
            <div className="w-1/6 md:w-1/4 xl:w-2/5 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] h-[2px] lg:h-[5px] mix-blend-normal" />
            <div className="w-2/3 md:w-1/2 xl:w-1/5 flex gap-5 lg:gap-10 justify-center self-center lg:self-start">
              <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.65)]">
                <Link
                  className="hover:opacity-75 bg-transparent"
                  href="https://www.instagram.com/ecellvnit/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="h-5 w-5 xs:h-6 xs:w-6 sm:w-7 sm:h-7 md:h-8 md:w-8"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9968 7.51479C9.79333 7.51479 7.99515 9.2043 7.99515 11.2746C7.99515 13.3449 9.79333 15.0344 11.9968 15.0344C14.2002 15.0344 15.9984 13.3449 15.9984 11.2746C15.9984 9.2043 14.2002 7.51479 11.9968 7.51479ZM23.9987 11.2746C23.9987 9.71764 24.0137 8.1748 23.9206 6.62068C23.8275 4.81552 23.3893 3.21345 21.9843 1.89343C20.5764 0.57059 18.8743 0.16161 16.953 0.0741733C15.2959 -0.0132638 13.6539 0.000838957 11.9998 0.000838957C10.3427 0.000838957 8.70061 -0.0132638 7.04652 0.0741733C5.12526 0.16161 3.42014 0.573411 2.01522 1.89343C0.607291 3.21627 0.172005 4.81552 0.0789442 6.62068C-0.014117 8.17762 0.000892919 9.72046 0.000892919 11.2746C0.000892919 12.8287 -0.014117 14.3744 0.0789442 15.9285C0.172005 17.7337 0.610293 19.3357 2.01522 20.6557C3.42314 21.9786 5.12526 22.3876 7.04652 22.475C8.70361 22.5624 10.3457 22.5483 11.9998 22.5483C13.6569 22.5483 15.2989 22.5624 16.953 22.475C18.8743 22.3876 20.5794 21.9758 21.9843 20.6557C23.3923 19.3329 23.8275 17.7337 23.9206 15.9285C24.0167 14.3744 23.9987 12.8315 23.9987 11.2746ZM11.9968 17.0595C8.58954 17.0595 5.83973 14.4759 5.83973 11.2746C5.83973 8.07326 8.58954 5.48963 11.9968 5.48963C15.404 5.48963 18.1538 8.07326 18.1538 11.2746C18.1538 14.4759 15.404 17.0595 11.9968 17.0595ZM18.406 6.60375C17.6105 6.60375 16.968 6.00015 16.968 5.25271C16.968 4.50526 17.6105 3.90166 18.406 3.90166C19.2015 3.90166 19.8439 4.50526 19.8439 5.25271C19.8442 5.43019 19.8071 5.60598 19.735 5.76999C19.6628 5.93401 19.5569 6.08304 19.4233 6.20854C19.2897 6.33404 19.1311 6.43355 18.9565 6.50136C18.782 6.56918 18.5949 6.60397 18.406 6.60375Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.65)]">
                <Link
                  className="hover:opacity-75"
                  href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> LinkedIn </span>
                  <svg
                    className="h-5 w-5 xs:h-6 xs:w-6 sm:w-7 sm:h-7 md:h-8 md:w-8"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.7031 0C2.11677 0 0 1.9888 0 4.41888V18.1314C0 20.5615 2.11672 22.5496 4.7031 22.5496H19.2977C21.884 22.5496 24 20.5615 24 18.1314V4.41888C24 1.98884 21.884 0 19.2977 0H4.7031ZM5.886 3.72114C7.1261 3.72114 7.88994 4.48604 7.91352 5.49149C7.91352 6.47474 7.12605 7.26114 5.86202 7.26114H5.83875C4.62226 7.26114 3.83599 6.47479 3.83599 5.49149C3.83599 4.48606 4.64605 3.72114 5.88598 3.72114H5.886ZM16.5726 8.4205C18.9575 8.4205 20.7454 9.8851 20.7454 13.0325V18.908H17.1209V13.4264C17.1209 12.0489 16.5964 11.1091 15.2847 11.1091C14.2834 11.1091 13.6865 11.7426 13.4245 12.3545C13.3287 12.5734 13.3052 12.8791 13.3052 13.1854V18.908H9.68074C9.68074 18.908 9.72831 9.62228 9.68074 8.6608H13.3059V10.1119C13.7876 9.4137 14.6491 8.42047 16.5726 8.42047V8.4205ZM4.04978 8.66154H7.67423V18.9081H4.04978V8.66154Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.65)]">
                <Link
                  className="hover:opacity-75 bg-transparent"
                  href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="h-5 w-9 xs:h-6 xs:w-9 sm:w-10 sm:h-7 md:h-8 md:w-11"
                    viewBox="0 0 33 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.4245 5.07843C32.4245 2.38319 30.3145 0.21502 27.7072 0.21502C24.1757 0.059894 20.574 0 16.8932 0H15.7458C12.074 0 8.46594 0.0598941 4.93438 0.215619C2.33352 0.215619 0.223501 2.39577 0.223501 5.09101C0.0641343 7.22264 -0.00343715 9.35488 0.000387648 11.4871C-0.00598702 13.6193 0.0662592 15.7536 0.217126 17.8898C0.217126 20.585 2.32714 22.7712 4.928 22.7712C8.63806 22.9329 12.4437 23.0048 16.3132 22.9988C20.189 23.0108 23.984 22.9349 27.6983 22.7712C30.3055 22.7712 32.4156 20.585 32.4156 17.8898C32.5685 15.7516 32.6387 13.6193 32.6323 11.4811C32.6467 9.34889 32.5775 7.21466 32.4245 5.07843ZM13.1959 17.3627V5.59352L22.4392 11.4751L13.1959 17.3627Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.65)]">
                <Link
                  className="hover:opacity-75"
                  href="https://m.facebook.com/vnitecell/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="h-5 w-5 xs:h-6 xs:w-6 sm:w-7 sm:h-7 md:h-8 md:w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.38226 0C1.95468 0 0 1.95468 0 4.38226V19.6178C0 22.0453 1.95468 24 4.38226 24H12.6398V14.6175H10.1588V11.2395H12.6398V8.35351C12.6398 6.08611 14.1057 4.00426 17.4825 4.00426C18.8497 4.00426 19.8608 4.13551 19.8608 4.13551L19.7813 7.29002C19.7813 7.29002 18.7501 7.28028 17.625 7.28028C16.4073 7.28028 16.212 7.84135 16.212 8.77279V11.2395H19.878L19.7183 14.6175H16.212V24H19.6177C22.0453 24 24 22.0454 24 19.6178V4.38228C24 1.9547 22.0453 2.4e-05 19.6177 2.4e-05H4.38223L4.38226 0Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
              <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.65)]">
                <Link
                  className="hover:opacity-75"
                  href="https://twitter.com/ecell_vnit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <svg
                    className="h-5 w-5 xs:h-6 xs:w-6 sm:w-7 sm:h-7 md:h-8 md:w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 7.53125C19.4167 7.79167 18.7865 7.96875 18.1094 8.0625C18.8177 7.64583 19.3021 7.03646 19.5625 6.23438C18.8854 6.63021 18.1875 6.89583 17.4688 7.03125C16.8333 6.34375 16.0365 6 15.0781 6C14.1719 6 13.3984 6.32031 12.7578 6.96094C12.1172 7.60156 11.7969 8.375 11.7969 9.28125C11.7969 9.58333 11.8229 9.83333 11.875 10.0312C10.5312 9.95833 9.27083 9.61979 8.09375 9.01562C6.91667 8.41146 5.91667 7.60417 5.09375 6.59375C4.79167 7.11458 4.64062 7.66667 4.64062 8.25C4.64062 9.4375 5.11458 10.349 6.0625 10.9844C5.57292 10.974 5.05208 10.8385 4.5 10.5781V10.6094C4.5 11.3906 4.76042 12.0859 5.28125 12.6953C5.80208 13.3047 6.44271 13.6823 7.20312 13.8281C6.90104 13.9115 6.63542 13.9531 6.40625 13.9531C6.27083 13.9531 6.06771 13.9323 5.79688 13.8906C6.01562 14.5469 6.40365 15.0885 6.96094 15.5156C7.51823 15.9427 8.15104 16.1615 8.85938 16.1719C7.65104 17.1094 6.29167 17.5781 4.78125 17.5781C4.51042 17.5781 4.25 17.5625 4 17.5312C5.54167 18.5104 7.21875 19 9.03125 19C10.1979 19 11.2917 18.8151 12.3125 18.4453C13.3333 18.0755 14.2083 17.5807 14.9375 16.9609C15.6667 16.3411 16.2943 15.6276 16.8203 14.8203C17.3464 14.013 17.737 13.1693 17.9922 12.2891C18.2474 11.4089 18.375 10.5312 18.375 9.65625C18.375 9.46875 18.3698 9.32812 18.3594 9.23438C19.0156 8.76562 19.5625 8.19792 20 7.53125ZM24 4.5V19.5C24 20.7396 23.5599 21.7995 22.6797 22.6797C21.7995 23.5599 20.7396 24 19.5 24H4.5C3.26042 24 2.20052 23.5599 1.32031 22.6797C0.440104 21.7995 0 20.7396 0 19.5V4.5C0 3.26042 0.440104 2.20052 1.32031 1.32031C2.20052 0.440104 3.26042 0 4.5 0H19.5C20.7396 0 21.7995 0.440104 22.6797 1.32031C23.5599 2.20052 24 3.26042 24 4.5Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-1/6 md:w-1/4 xl:w-2/5 items-center bg-gradient-to-r from-[#FF2D34] to-[#D5242A] h-[2px] lg:h-[5px] mix-blend-normal" />
          </div>
          <a href="/explore/#about">
            <div className="flex flex-col gap-10 items-center text-center mt-10">
              <div className="text-lg uppercase font-semibold xl:text-2xl animate-bounce text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                Scroll down
              </div>
              <div className="animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
