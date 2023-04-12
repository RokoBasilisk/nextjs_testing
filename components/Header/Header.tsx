import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faPinterest,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <header className="border-b-[1px] block border-headerBorder border-solid h-[100px] mt-5">
        <div className="container md:w-[750px] lg:w-[970px] xl:w-[1200px] px-[15px] mx-auto">
          <div className="p-0 border-b-0 h-[100px] fixed top-0 z-[10000] bg-white left-0 right-0 !justify-around shadow-headerShadow flex items-center md:!justify-between">
            <a href="#" className="mt-[2px] leading-[1] hidden float-left">
              <i className="input-icon st-border-radius field-icon fa">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g
                    id="Ico_off_menu"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <g id="Group" stroke="#1A2B48" stroke-width="1.5">
                      <g id="navigation-menu-4">
                        <rect
                          id="Rectangle-path"
                          x="0.75"
                          y="0.753"
                          width="22.5"
                          height="22.5"
                          rx="1.5"
                        ></rect>
                        <path d="M6.75,7.503 L17.25,7.503" id="Shape"></path>
                        <path d="M6.75,12.003 L17.25,12.003" id="Shape"></path>
                        <path d="M6.75,16.503 L17.25,16.503" id="Shape"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </i>
            </a>
            <div className="relative flex items-center">
              <a
                href="https://travelpedia.uk/"
                className="mr-[30px] float-left"
              >
                <img
                  src="https://travelpedia.uk/wp-content/uploads/2022/03/TravelpediaUK_Logo_Tagline_CYMK-1.png"
                  alt="Your number one traveling agency located in the UK"
                  className="!max-w-[200px] max-h-[91px]"
                />
              </a>
              <nav className="sm:hidden lg:block">
                <a href="" className="hidden">
                  <i className="fa fa-angle-left"></i>
                </a>
                <ul className="pl-0 mb-0 list-none">
                  <li className="inline-block">
                    <a
                      className="!py-[35px] !px-[20px] block font-semibold uppercase text-[color:var(--main-color)]"
                      href="https://travelpedia.uk/flights/"
                    >
                      Flights
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="!py-[35px] !px-[20px] block font-semibold uppercase text-[color:var(--main-color)]"
                      href="https://travelpedia.uk/flights/"
                    >
                      Holidays
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="!py-[35px] !px-[20px] block font-semibold uppercase text-[color:var(--link-color)]"
                      href="https://travelpedia.uk/destinations/"
                    >
                      Distinations
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="!py-[35px] !px-[20px] block font-semibold uppercase text-[color:var(--main-color)]"
                      href="https://travelpedia.uk/about-us/"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="!py-[35px] !px-[20px] block font-semibold uppercase text-[color:var(--main-color)]"
                      href="https://travelpedia.uk/contact/"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <ul className="flex items-center list-none pl-0 mb-0">
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                    02081253700
                  </a>
                </li>
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                  </a>
                </li>
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                  </a>
                </li>
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                  </a>
                </li>
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                  </a>
                </li>
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faPinterest}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                  </a>
                </li>
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                  </a>
                </li>
                <li className="m-0 font-medium !border-r-[1px] !border-solid !border-[#ddd] !mr-[6px] inline-block !pr-[6px]">
                  <a
                    href="http://02081253700"
                    target="_blank"
                    className="text-[color:var(--main-color)]"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="mr-[5px] h-[14px] w-[14px] inline-block"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
