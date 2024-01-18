import Image from "next/image";
import Link from "next/link";
import ecellLogoWhite from "../public/assets/ecell-white-img.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="h-full bg-black text-white text-center max-h-full mt-auto"
    >
      <div className="px-4 pb-6 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <Image
                src={ecellLogoWhite}
                width={220}
                height={200}
                alt="logo"
                className="h-16 w-40"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 md:gap-6 lg:gap-10 md:grid-cols-2 xl:grid-cols-4 lg:col-span-3">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="font-bold text-base md:text-lg lg:text-xl uppercase text-start">
                  Consortium&apos;23
                </p>
                <p className="text-center lg:text-left text-[12px] md:text-sm lg:text-base lg:mt-4 w-1/2 lg:w-full">
                  Consortium, the Annual Entrepreneurship Summit and Management
                  Fest of VNIT, Nagpur
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="font-bold text-base md:text-lg lg:text-xl uppercase text-start">
                  Quick Links
                </p>
                <nav className="flex flex-col lg:mt-4 space-y-1 lg:space-y-2 items-center lg:items-start lg:ml-2 text-[12px] md:text-sm text-white">
                  <Link
                    className="hover:opacity-75 uppercase"
                    href="https://startupconclave.ecellvnit.org/"
                  >
                    Startup Conclave
                  </Link>
                  <Link
                    className="hover:opacity-75 uppercase"
                    target="_blank"
                    rel="noreferrer"
                    href="https://expo.ecellvnit.org/"
                  >
                    Startup Expo
                  </Link>
                  <Link
                    className="hover:opacity-75 uppercase"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.ecellvnit.org/merchandise/index.php"
                  >
                    Merchandise
                  </Link>
                  <Link
                    className="hover:opacity-75 uppercase"
                    target="_blank"
                    rel="noreferrer"
                    href="https://neo.ecellvnit.org/"
                  >
                    NEO
                  </Link>
                </nav>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="font-bold text-base md:text-lg lg:text-xl uppercase text-start">
                  Contact Us
                </p>
                <nav className="flex flex-col space-y-1 lg:space-y-2 lg:mt-4 text-start text-[11px] md:text-sm xl:text-base text-white">
                  <a
                    className="hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:team_ecell@vnit.ac.in"
                  >
                    For Queries & Communications: <br />
                    <strong>team_ecell@vnit.ac.in</strong>
                  </a>
                  <a
                    className="hover:opacity-75"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:corporateaffairs@ecellvnit.co.in"
                  >
                    For Association and Sponsorship: <br />
                    <strong>corporateaffairs@ecellvnit.co.in</strong>
                  </a>
                </nav>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="font-bold text-base md:text-lg lg:text-xl uppercase">
                  Follow Us
                </p>
                <nav className="flex flex-col lg:mt-4 space-y-2 lg:space-y-3 items-start text-sm text-white">
                  <Link
                    className="hover:opacity-75 flex justify-center gap-2 lg:gap-4"
                    href="https://www.instagram.com/ecellvnit/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 lg:h-7 lg:w-7"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9962 9.99787C12.2419 9.99787 9.99412 12.2456 9.99412 15C9.99412 17.7544 12.2419 20.0021 14.9962 20.0021C17.7506 20.0021 19.9984 17.7544 19.9984 15C19.9984 12.2456 17.7506 9.99787 14.9962 9.99787ZM29.9989 15C29.9989 12.9286 30.0176 10.876 29.9013 8.80832C29.785 6.40669 29.2371 4.27525 27.4809 2.51907C25.721 0.759128 23.5933 0.215011 21.1917 0.098682C19.1203 -0.0176466 17.0676 0.00111617 15 0.00111617C12.9286 0.00111617 10.876 -0.0176466 8.80832 0.098682C6.40669 0.215011 4.27525 0.762881 2.51907 2.51907C0.759128 4.27901 0.215011 6.40669 0.098682 8.80832C-0.0176466 10.8797 0.00111617 12.9324 0.00111617 15C0.00111617 17.0676 -0.0176466 19.124 0.098682 21.1917C0.215011 23.5933 0.762881 25.7247 2.51907 27.4809C4.27901 29.2409 6.40669 29.785 8.80832 29.9013C10.8797 30.0176 12.9324 29.9989 15 29.9989C17.0714 29.9989 19.124 30.0176 21.1917 29.9013C23.5933 29.785 25.7247 29.2371 27.4809 27.4809C29.2409 25.721 29.785 23.5933 29.9013 21.1917C30.0214 19.124 29.9989 17.0714 29.9989 15ZM14.9962 22.6964C10.7371 22.6964 7.2998 19.2591 7.2998 15C7.2998 10.7409 10.7371 7.30355 14.9962 7.30355C19.2554 7.30355 22.6927 10.7409 22.6927 15C22.6927 19.2591 19.2554 22.6964 14.9962 22.6964ZM23.0079 8.7858C22.0135 8.7858 21.2104 7.98276 21.2104 6.98834C21.2104 5.99392 22.0135 5.19087 23.0079 5.19087C24.0023 5.19087 24.8054 5.99392 24.8054 6.98834C24.8057 7.22447 24.7594 7.45834 24.6692 7.67655C24.5789 7.89476 24.4465 8.09303 24.2796 8.26C24.1126 8.42697 23.9143 8.55936 23.6961 8.64958C23.4779 8.73981 23.244 8.7861 23.0079 8.7858Z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-[11px] md:text-sm lg:text-lg">
                      Instagram
                    </span>
                  </Link>
                  <Link
                    className="hover:opacity-75 flex justify-center gap-2 lg:gap-4"
                    href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 lg:h-7 lg:w-7"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM11.3281 21.2172H8.29062V11.4422H11.3281V21.2172ZM9.79062 10.2422C8.83125 10.2422 8.21094 9.5625 8.21094 8.72187C8.21094 7.86406 8.85 7.20469 9.82969 7.20469C10.8094 7.20469 11.4094 7.86406 11.4281 8.72187C11.4281 9.5625 10.8094 10.2422 9.79062 10.2422ZM22.4219 21.2172H19.3844V15.8C19.3844 14.5391 18.9437 13.6828 17.8453 13.6828C17.0063 13.6828 16.5078 14.2625 16.2875 14.8203C16.2062 15.0188 16.1859 15.3 16.1859 15.5797V21.2156H13.1469V14.5594C13.1469 13.3391 13.1078 12.3187 13.0672 11.4406H15.7062L15.8453 12.7984H15.9062C16.3062 12.1609 17.2859 11.2203 18.925 11.2203C20.9234 11.2203 22.4219 12.5594 22.4219 15.4375V21.2172Z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-[11px] md:text-sm lg:text-lg">
                      LinkedIn
                    </span>
                  </Link>
                  <Link
                    className="hover:opacity-75 flex justify-center gap-2 lg:gap-4"
                    href="https://m.facebook.com/vnitecell/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 lg:h-7 lg:w-7"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 15.0838C0 22.5413 5.41625 28.7425 12.5 30V19.1663H8.75V15H12.5V11.6663C12.5 7.91625 14.9163 5.83375 18.3337 5.83375C19.4163 5.83375 20.5837 6 21.6663 6.16625V10H19.75C17.9163 10 17.5 10.9163 17.5 12.0837V15H21.5L20.8337 19.1663H17.5V30C24.5837 28.7425 30 22.5425 30 15.0838C30 6.7875 23.25 0 15 0C6.75 0 0 6.7875 0 15.0838Z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-[11px] md:text-sm lg:text-lg">
                      Facebook
                    </span>
                  </Link>
                  <Link
                    className="hover:opacity-75 flex justify-center gap-2 lg:gap-4"
                    href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 lg:h-7 lg:w-7"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5047 14.7391L13.9953 13.1016C13.6891 12.9594 13.4375 13.1187 13.4375 13.4578V16.5422C13.4375 16.8813 13.6891 17.0406 13.9953 16.8984L17.5031 15.2609C17.8109 15.1172 17.8109 14.8828 17.5047 14.7391ZM15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM15 21.0937C7.32188 21.0937 7.1875 20.4016 7.1875 15C7.1875 9.59844 7.32188 8.90625 15 8.90625C22.6781 8.90625 22.8125 9.59844 22.8125 15C22.8125 20.4016 22.6781 21.0937 15 21.0937Z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-[11px] md:text-sm lg:text-lg">
                      YouTube
                    </span>
                  </Link>
                  <Link
                    className="hover:opacity-75 flex justify-center gap-2 lg:gap-4"
                    href="https://twitter.com/ecell_vnit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5 lg:h-7 lg:w-7"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0C6.71562 0 0 6.71562 0 15C0 23.2844 6.71562 30 15 30C23.2844 30 30 23.2844 30 15C30 6.71562 23.2844 0 15 0ZM21.1016 12.2875C21.1078 12.4156 21.1094 12.5437 21.1094 12.6687C21.1094 16.575 18.1391 21.0766 12.7047 21.0766C11.0989 21.0792 9.52651 20.618 8.17656 19.7484C8.40625 19.7766 8.64219 19.7875 8.88125 19.7875C10.2656 19.7875 11.5391 19.3172 12.55 18.5234C11.9339 18.5113 11.337 18.3073 10.8424 17.9399C10.3477 17.5724 9.98008 17.0598 9.79062 16.4734C10.2331 16.5576 10.6888 16.5399 11.1234 16.4219C10.4548 16.2867 9.85343 15.9243 9.42142 15.3963C8.9894 14.8684 8.75329 14.2072 8.75312 13.525V13.4891C9.15156 13.7094 9.60781 13.8438 10.0922 13.8594C9.46531 13.4421 9.02154 12.801 8.85163 12.0674C8.68172 11.3337 8.79852 10.5629 9.17812 9.9125C9.92024 10.825 10.8457 11.5715 11.8946 12.1036C12.9436 12.6357 14.0925 12.9417 15.2672 13.0016C15.1178 12.3677 15.1821 11.7022 15.45 11.1086C15.7179 10.515 16.1744 10.0265 16.7485 9.71916C17.3227 9.41178 17.9823 9.30269 18.6248 9.40886C19.2674 9.51503 19.8568 9.83051 20.3016 10.3062C20.9628 10.1754 21.5968 9.9329 22.1766 9.58906C21.9562 10.2736 21.4948 10.855 20.8781 11.225C21.4638 11.1545 22.0357 10.997 22.575 10.7578C22.1789 11.3514 21.6799 11.8694 21.1016 12.2875Z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-[11px] md:text-sm lg:text-lg">
                      Twitter
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:pl-16 justify-center items-center pt-4 md:pt-10">
            <p className="font-bold text-base md:text-lg lg:text-xl uppercase">
              Visit us
            </p>
            <p className="text-center text-[11px] md:text-sm lg:text-base lg:mt-4 w-full lg:w-1/3">
              E-Cell office, 1st Floor VNIT Canteen, Visvesvaraya National
              Institute Of Technology, South Ambazari Road, Abhyankar Nagar,
              Nagpur-440010
            </p>
            <p className="mt-3 lg:mt-8 text-[11px] md:text-lg lg:text-2xl text-white">
              Copyright:
              <span className="text-[#0298F9]">{} E-CELL VNIT</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
