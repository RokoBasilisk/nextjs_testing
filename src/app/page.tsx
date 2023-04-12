import Image from "next/image";
import styles from "./page.module.css";

import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="pb-[100px]">
        <div className="py-[20px] px-0 border-b-[1px] border-solid border-[color:var(--light-grey-color)]">
          <div className="container md:w-[750px] lg:w-[970px] xl:w-[1200px] px-[15px] mx-auto">
            <ul className="list-none block w-full mb-0 pl-0 bg-white">
              <li className="pl-0 relative inline-block pr-[20px] z-0">
                <a
                  href="https://travelpedia.uk/"
                  className="block font-[500] text-[color:var(--main-color)] leading-[21px]"
                >
                  Home
                </a>
                <div className="absolute w-[4px] h-[4px] bg-[color:var(--light-grey-color)] z-[1] top-[40%] right-[-2px]" />
              </li>
              <li className="pr-0 relative inline-block pl-[20px] z-0">
                <a
                  href="https://travelpedia.uk/"
                  className="block font-[500] text-[color:var(--grey-color)] leading-[21px]"
                >
                  Destinations
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container md:w-[750px] lg:w-[970px] xl:w-[1200px] px-[15px] mx-auto mb-[35px]">
          <div className="mx-[-15px] pt-[60px]">
            <div className="container md:w-[750px] lg:w-[970px] xl:w-[1200px] px-[15px] mx-auto">
              <div className="wrapper">
                <div className="contentlist">
                  <div>
                    <div>
                      <h2 className="font-[600] relative leading-[42px] pb-[15px] mb-[40px] mt-0 text-center block text-[28px]">
                        List of Destinations
                        <div className="bg-[#E73A42] absolute bottom-0 !left-[calc(50%-40px)] w-[80px] h-[2px]" />
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="mx-[-15px] overflow-hidden">
                  <div className=" h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/06/Web-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Dubai
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            11 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/06/Singapore-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Singapore
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            10 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/06/NYC-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Usa
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            10 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/06/Japan-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Japan
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            10 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/06/Maldives-1000x1000-1-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Maldives
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            12 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/Mexico-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Mexico
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            11 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/6-18-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Malta
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            11 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/Egypt-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Egypt
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            11 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/Bali-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Indonesia
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            11 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/65919122_2370590726596009_272531420281307136_n-2-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Morocco
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            11 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/Thailand-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Thailand
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            12 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/Portugal-1-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Portugal
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            10 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/192039029_2978303959158013_8936983744760964103_n-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Poland
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            11 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/Spain-1-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Spain
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            13 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            src="https://travelpedia.uk/wp-content/uploads/2022/05/Iceland-270x200.jpg"
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              Iceland
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            13 Holidays
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[304.062px] lg:w-1/3 float-left md:w-1/2 w-full relative min-h-[1px] px-[15px]">
                    <div className="mb-[30px] image">
                      <div className="relative overflow-hidden rounded-[5px]">
                        <a href="" className="text-white outline-none">
                          <img
                            // src={data[0].img}
                            className="w-full h-auto rounded-[5px] transition-all duration-[0.3s] block max-w-full"
                          />
                        </a>
                        <div className="absolute top-[50%] left-[50%] z-1 text-center translate-x-[-50%] translate-y-[-50%] w-[90%]">
                          <h4 className="mb-0 text-white !text-[24px] uppercase !font-[450] mt-0">
                            <a href="" className="text-white">
                              {/* {data[0].name} */}
                            </a>
                            <div className="h-[2px] w-[50px] bg-white block m-auto mt-[15px] transition-all duration-[0.3s] image-decoration"></div>
                          </h4>
                        </div>
                        <div className="absolute bottom-[20px] translate-x-[-50%] translate-y-0 left-1/2 text-white p-0 bg-transparent inline-block rounded-[100px] !font-[14px] mt-10px">
                          <a href="" className="text-white">
                            {/* {data[0].dayDuration} Holidays */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// export const getStaticProps = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const posts = await response.json();
//   return {
//     props: {
//       data: posts,
//     },
//   };
// };
