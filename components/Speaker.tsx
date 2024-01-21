import Image from "next/image";
import Link from "next/link";
import simon from "../public/assets/speakers/simon.jpg";
import kiran from "../public/assets/speakers/kiran.png";
import jatin from "../public/assets/speakers/jatin.jpg";
import anil from "../public/assets/speakers/anil.png";
import pankhuri from "../public/assets/speakers/pankhuri.png";
import divya from "../public/assets/speakers/divya.jpg";

const speakersData = [
  {
    name: "DR. KIRAN BEDI",
    role: "24th Lt. Governor",
    imageUrl: kiran,
    title: "Aman",
    youtube: "Puducherry",
  },
  {
    name: "SIMON TAUFEL",
    role: "Former Cricket Umpire",
    imageUrl: simon,
    title: "Aman",
    youtube: "International Cricket Council",
  },
  {
    name: "JATIN SAPRU",
    role: "Television Presentor",
    imageUrl: jatin,
    title: "Aman",
    youtube: "Star Sports",
  },
  {
    name: "ANIL SWARUP",
    role: "Former IAS Officer",
    imageUrl: anil,
    title: "Aman",
    youtube: "Former Lit. Sec of India",
  },
  {
    name: "PANKHURI GIDWANI",
    role: "Miss Grand India International",
    imageUrl: pankhuri,
    title: "Aman",
    youtube: "2018",
  },
  {
    name: "DIVYA GANESH",
    role: "McKinsey & Company",
    imageUrl: divya,
    title: "Aman",
    youtube: "Partner ",
  },
];

const Speakers = () => {
  return (
    <div className="min-h-screen bg-[#121212] bg-[url('/assets/red_spotlight1.png')] bg-blend-normal bg-cover">
      <div className="h-full bg-gradient-to-b from-[#000_2.04%] via-[rgba(0,0,0,0.5)_32.66%] to-[#000_99.67%]">
        <div className="w-full h-full flex justify-center overflow-hidden">
          <div className="w-full max-w-6xl 2xl:max-w-[95%] p-6">
            <div className="flex flex-col gap-3 items-center justify-center text-4xl xs:text-5xl lg:text-6xl font-semibold">
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
              <span className="uppercase text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FF2D34] to-[#D5242A]">
                Previous Speakers
              </span>
              <div className="w-3/4 lg:w-[15%] h-[0.1rem] mt-2 bg-[linear-gradient(90deg,rgba(255,45,52,0)_0%,#FF2D34_50%,rgba(255,45,52,0)_100%)]" />
            </div>
            <div className="flex-wrap gap-6 items-center justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {speakersData.map((speaker, index) => (
                <div
                  key={index}
                  className="bg-[#190401] relative hover:shadow-[0_8px_40px_2px_rgba(255,45,52,0.3)] overflow-hidden group rounded-xl p-5 m-5 md:m-10  transition-all duration-500 transform"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={speaker.imageUrl}
                      alt={speaker.title}
                      width={120}
                      height={120}
                      className="w-24 lg:w-[120px] lg:h-[120px] object-center object-cover rounded-full transition-all duration-500 transform"
                    />
                    <div className="w-fit transition-all transform duration-500">
                      <h1 className="text-red-500 font-bold text-lg">
                        {speaker.name}
                      </h1>
                      <p className="text-white text-sm">{speaker.role}</p>
                      <a className="text-sm text-white group-hover:opacity-100 opacity-0 transform transition-all delay-100 duration-500">
                        {speaker.youtube}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4 py-16">
              <Link
                href="/speakers"
                className="text-white text-lg lg:w-1/6 py-2 px-4 bg-gradient-to-b from-[#FF2D34] to-[#D5242A] hover:from-[#D9242A] hover:to-[#C12D34]  uppercase text-center"
              >
                View all speakers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
