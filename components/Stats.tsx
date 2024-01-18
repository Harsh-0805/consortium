"use client";

import { IBM_Plex_Sans_Condensed } from "next/font/google";
import { classNames } from "./utils/helper";
const ibmPlex = IBM_Plex_Sans_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

import Count from "./utils/Count";
const Stats = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center py-20 gap-8 px-10">
      <div className="flex justify-center gap-10 bg-[#101010] shadow-[0_6px_50px_rgba(255,45,52,0.3)] p-4 xl:p-8 mr-5 lg:mr-0">
        <svg
          className="h-12 w-14 self-center"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90.9091 72.7273V31.8182H27.2727V72.7273H90.9091ZM90.9091 9.09091C93.3202 9.09091 95.6325 10.0487 97.3373 11.7536C99.0422 13.4585 100 15.7708 100 18.1818V72.7273C100 75.1383 99.0422 77.4506 97.3373 79.1555C95.6325 80.8604 93.3202 81.8182 90.9091 81.8182H27.2727C24.8617 81.8182 22.5494 80.8604 20.8445 79.1555C19.1396 77.4506 18.1818 75.1383 18.1818 72.7273V18.1818C18.1818 15.7708 19.1396 13.4585 20.8445 11.7536C22.5494 10.0487 24.8617 9.09091 27.2727 9.09091H31.8182V0H40.9091V9.09091H77.2727V0H86.3636V9.09091H90.9091ZM75.1364 45.7273L54.9545 65.9091L42.7727 53.7273L47.5909 48.9091L54.9545 56.2727L70.3182 40.9091L75.1364 45.7273ZM9.09091 90.9091H72.7273V100H9.09091C6.67985 100 4.36754 99.0422 2.66267 97.3373C0.95779 95.6325 0 93.3202 0 90.9091V36.3636H9.09091V90.9091Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col text-white justify-center gap-2">
          <span
            className={classNames(
              "text-2xl xl:text-4xl font-medium text-[#FF2D34]",
              ibmPlex.className
            )}
          >
            <Count number={20} duration={2} />
          </span>
          <span className="text-sm uppercase text-start">Events</span>
        </div>
      </div>
      <div className="flex justify-center gap-10 bg-[#101010] shadow-[0_6px_50px_rgba(255,45,52,0.3)] p-4 xl:p-8">
        <svg
          className="h-14 lg:h-16 w-14 self-center"
          viewBox="0 0 132 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.763 1.99408C59.651 0.681089 62.8068 0 66.0025 0C69.1982 0 72.354 0.681089 75.242 1.99408L128.853 26.3671C129.787 26.7913 130.577 27.4594 131.134 28.2948C131.691 29.1302 131.991 30.0992 132 31.0907C132.009 32.0822 131.727 33.0561 131.186 33.9009C130.645 34.7457 129.867 35.4271 128.941 35.8672L75.594 61.2641C72.6129 62.6834 69.3303 63.422 66.0025 63.422C62.6747 63.422 59.392 62.6834 56.411 61.2641L11.0055 39.6461V63.333C11.0055 64.7328 10.4261 66.0752 9.39467 67.065C8.36328 68.0548 6.96441 68.6108 5.5058 68.6108C4.04719 68.6108 2.64832 68.0548 1.61692 67.065C0.585529 66.0752 0.00609799 64.7328 0.00609799 63.333V31.4021C-0.0450343 30.3588 0.226299 29.3242 0.786007 28.4283C1.34571 27.5325 2.16883 26.8154 3.15193 26.3671L56.763 1.98352V1.99408ZM22.0049 56.6724V73.8887C22.005 74.583 22.1479 75.2704 22.4254 75.9116C22.7029 76.5528 23.1094 77.1352 23.6218 77.6254L23.6438 77.6571L23.8968 77.8787L24.5568 78.4698C28.0038 81.4182 31.7305 84.051 35.6881 86.3338C43.0357 90.5666 53.6502 95 66.0025 95C78.3548 95 88.9692 90.5666 96.3278 86.3338C100.285 84.051 104.012 81.4182 107.459 78.4698L108.119 77.8787L108.295 77.7098L108.361 77.6465L108.372 77.6359L108.394 77.6254C108.905 77.1343 109.309 76.5516 109.585 75.9104C109.86 75.2692 110.001 74.5822 110 73.8887V56.6618L80.4777 70.722C75.9786 72.8632 71.0245 73.9774 66.0025 73.9774C60.9805 73.9774 56.0264 72.8632 51.5273 70.722L22.0049 56.6618V56.6724Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col text-white justify-center gap-2 md:ml-2 lg:ml-0">
          <span
            className={classNames(
              "text-2xl xl:text-4xl font-medium text-[#FF2D34]",
              ibmPlex.className
            )}
          >
            <Count number={200} duration={2} />
          </span>
          <span className="text-sm uppercase text-start">Colleges</span>
        </div>
      </div>
      <div className="flex justify-center gap-10 bg-[#101010] shadow-[0_6px_50px_rgba(255,45,52,0.3)] p-4 xl:p-8">
        <svg
          className="h-14 lg:h-16 w-14 self-center"
          viewBox="0 0 129 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M91.9568 53.068C99.9199 58.4736 105.5 65.7974 105.5 75.5624V92.9999H122.937C126.134 92.9999 128.75 90.3843 128.75 87.1874V75.5624C128.75 62.8911 107.999 55.393 91.9568 53.068Z"
            fill="white"
          />
          <path
            d="M47.375 46.4999C60.2156 46.4999 70.625 36.0905 70.625 23.2499C70.625 10.4093 60.2156 -0.00012207 47.375 -0.00012207C34.5343 -0.00012207 24.1249 10.4093 24.1249 23.2499C24.1249 36.0905 34.5343 46.4999 47.375 46.4999Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M82.25 46.4999C95.0956 46.4999 105.5 36.0955 105.5 23.2499C105.5 10.4043 95.0956 -0.00012207 82.25 -0.00012207C79.5181 -0.00012207 76.9606 0.581127 74.5193 1.39488C79.5211 7.58064 82.2498 15.2949 82.2498 23.2499C82.2498 31.2049 79.5211 38.9191 74.5193 45.1049C76.9606 45.9187 79.5181 46.4999 82.25 46.4999ZM47.375 52.3124C31.8556 52.3124 0.874924 60.1012 0.874924 75.5624V87.1874C0.874924 90.3843 3.49055 92.9999 6.68743 92.9999H88.0625C91.2594 92.9999 93.875 90.3843 93.875 87.1874V75.5624C93.875 60.1012 62.8943 52.3124 47.375 52.3124Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col text-white justify-center gap-2">
          <span
            className={classNames(
              "text-2xl xl:text-4xl font-medium text-[#FF2D34]",
              ibmPlex.className
            )}
          >
            <Count number={20000} duration={2} />
          </span>
          <span className="text-sm uppercase text-start">Footfalls</span>
        </div>
      </div>
      <div className="flex justify-center gap-10 bg-[#101010] shadow-[0_6px_50px_rgba(255,45,52,0.3)] p-4 xl:p-8">
        <svg
          className="h-12 w-14 self-center"
          viewBox="0 0 98 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.2294 52.7305C0.645308 53.1301 0.233371 53.7279 0.0734229 54.4081C-0.0865256 55.0884 0.0169052 55.8026 0.36367 56.4124L7.42017 68.3863C8.14433 69.6136 9.805 70.1205 11.1063 69.4962L32.657 59.2671V96H43.5466V54.0912L65.7125 43.5633L51.4471 19.338L1.2294 52.7305ZM95.0384 10.8217C92.104 5.84889 87.2749 2.22136 81.6125 0.736493C75.95 -0.748372 69.9177 0.030944 64.8413 2.90315C59.8866 5.70454 56.6305 10.1547 55.0352 15.1172L71.239 42.6295C76.4171 43.7607 81.9817 43.2165 86.9474 40.4151C92.0246 37.5422 95.7294 32.8104 97.2467 27.2606C98.7641 21.7108 97.9697 15.7976 95.0384 10.8217Z"
            fill="white"
          />
        </svg>
        <div className="flex flex-col text-white justify-center gap-2">
          <span
            className={classNames(
              "text-2xl xl:text-4xl font-medium text-[#FF2D34]",
              ibmPlex.className
            )}
          >
            <Count number={20} duration={2} />
          </span>
          <span className="text-sm uppercase text-start">Speakers</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
