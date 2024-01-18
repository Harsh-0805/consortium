import Image from 'next/image'
import Link from 'next/link';
import simon from "../public/assets/speakers/simon.jpg"
import kiran from "../public/assets/speakers/kiran.png"
import jatin from "../public/assets/speakers/jatin.jpg"
import anil from "../public/assets/speakers/anil.png"
import pankhuri from "../public/assets/speakers/pankhuri.png"
import divya from "../public/assets/speakers/divya.jpg"

const Speakers = () => {
  return (
    <div className="min-h-screen bg-[#121212] bg-[url('/assets/red_spotlight1.png')] bg-blend-normal bg-cover">
      <div className="h-full bg-gradient-to-b from-[#000_2.04%] via-[rgba(0,0,0,0.5)_32.66%] to-[#000_99.67%]">
        <div className="w-full h-full flex justify-center overflow-hidden">
          <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
            <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
              <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">Previous Speakers</span>
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly items-center pt-10 gap-10 px-2">
              <div />
              <div className="md:col-span-2 lg:col-span-3 justify-center items-center flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-xs md:max-w-5xl">
                  <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                    <div className="bg-black">
                      <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                        <Image
                          src={kiran}
                          alt="Kiran"
                          className="w-full scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-4 py-8 bg-black">
                      <span className="font-bold uppercase text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                        Dr. Kiran bedi
                      </span>
                      <div className="flex flex-col font-medium text-xs xl:text-sm text-center text-white">
                        <span>24<sup>th</sup>Lt. Governor</span>
                        <span>Puducherry</span>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                    <div className="bg-black">
                      <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                        <Image
                          src={simon}
                          alt="Simon"
                          className="w-full scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-4 py-8 bg-black">
                      <span className="font-bold uppercase text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                        Simon taufel
                      </span>
                      <div className="flex flex-col font-medium text-xs xl:text-sm text-center text-white">
                        <span>Former Cricket Umpire</span>
                        <span>International Cricket Council</span>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                    <div className="bg-black">
                      <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                        <Image
                          src={anil}
                          alt="Anil"
                          className="w-full scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-4 py-8 bg-black">
                      <span className="font-bold uppercase text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                        Anil Swarup
                      </span>
                      <div className="flex flex-col font-medium text-xs xl:text-sm text-center text-white">
                        <span>Former IAS Officer</span>
                        <span>Former Lit. Sec of India</span>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                    <div className="bg-black">
                      <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                        <Image
                          src={jatin}
                          alt="Jatin"
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-4 py-8 bg-black">
                      <span className="font-bold uppercase text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                        Jatin sapru
                      </span>
                      <div className="flex flex-col font-medium text-xs xl:text-sm text-center text-white">
                        <span>Television Presenter</span>
                        <span>Star Sports</span>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                    <div className="bg-black">
                      <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                        <Image
                          src={divya}
                          alt="Divya"
                          className="w-full scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-4 py-8 bg-black">
                      <span className="font-bold uppercase text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                        Divya Ganesh
                      </span>
                      <div className="flex flex-col font-medium text-xs xl:text-sm text-center text-white">
                        <span>Partner</span>
                        <span>McKinsey & Company</span>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0_8px_40px_2px_rgba(255,45,52,0.15)] lg:scale-90">
                    <div className="bg-black">
                      <div className="flex flex-col justify-center gap-6 h-72 overflow-clip">
                        <Image
                          src={pankhuri}
                          alt="Pankhuri"
                          className="w-full scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 px-4 py-8 bg-black">
                      <span className="font-bold uppercase text-2xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                        Pankhuri Gidwani
                      </span>
                      <div className="flex flex-col font-medium text-xs xl:text-sm text-center text-white">
                        <span>Miss Grand India International</span>
                        <span>2018</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 py-16">
              <Link href="/speakers" className="text-white text-lg lg:w-1/6 py-2 px-4 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center">
                View all speakers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers
