import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-b-[1px] border-solid border-[color:var(--light-grey-color)] shadow-footerShadow text-[12px] bg-footerColor !pb-0 text-white block">
      <div className="m-[unset] !w-full !pr-0">
        <div className="container md:w-[750px] lg:w-[970px] xl:w-[1200px] px-[15px] mx-auto h-[32px]"></div>
      </div>
      <div className="m-[unset] !w-full !pr-0">
        <div className="container md:w-[750px] lg:w-[970px] xl:w-[1200px] px-[15px] mx-auto">
          <div className="mx-[-15px] overflow-hidden">
            <div className="lg:w-1/3 lg:float-left relative min-h-[1px] px-[15px]">
              <div>
                <div className="!pl-[20px] mb-[35px]">
                  <div className="mb-0">
                    <h3>
                      <strong className="mb-0">Need Help?</strong>
                    </h3>
                    <p>
                      <strong>Use our live Chat</strong>
                    </p>
                    <p>
                      <strong>Call us</strong>
                    </p>
                    <p>02081253700</p>
                    <p>
                      <strong>Email Us</strong>
                    </p>
                    <p>info@travelpedia.uk</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:float-left relative min-h-[1px] px-[15px]">
              <div>
                <div className="!pl-[20px] mb-[35px]">
                  <div className="mb-0 !leading-[1]">
                    <h3>
                      <strong className="mb-0">Sitemap</strong>
                    </h3>
                    <p>
                      <a
                        className="!text-[#CADEFF] underline"
                        href="https://travelpedia.uk"
                      >
                        HOME
                      </a>
                    </p>
                    <p>
                      <a
                        className="!text-[#CADEFF] underline"
                        href="https://travelpedia.uk"
                      >
                        FLIGHTS
                      </a>
                    </p>
                    <p>
                      <a
                        className="!text-[#CADEFF] underline"
                        href="https://travelpedia.uk/search"
                      >
                        HOLIDAY
                      </a>
                    </p>
                    <p>
                      <a
                        className="!text-[#CADEFF] underline"
                        href="https://travelpedia.uk/destinations"
                      >
                        DESTINATIONS
                      </a>
                    </p>
                    <p>
                      <a
                        className="!text-[#CADEFF] underline"
                        href="https://travelpedia.uk/about-us/"
                      >
                        ABOUT US
                      </a>
                    </p>
                    <p>
                      <a
                        className="!text-[#CADEFF] underline"
                        href="https://travelpedia.uk/contact/"
                      >
                        CONTACT
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:float-left relative min-h-[1px] px-[15px]">
              <div>
                <div className="!pl-[20px] mb-[35px]">
                  <div className="mb-0 !leading-[1]">
                    <h3>
                      <strong className="mb-0">Newsletter</strong>
                    </h3>
                    <p>
                      Join our newsletter to be informed about offers and news.
                    </p>
                  </div>
                </div>
                <div className="mb-[35px]">
                  <div>
                    <form action="#" method="post" className="my-[1em] mx-0">
                      <div>
                        <div className="relative">
                          <div className="mb-[15px]">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Your email address"
                              className="!max-w-[none] w-full min-h-[32px] h-[55px] leading-[53px] text-[14px] shadow-[none] border-[#D7DCE3] align-baseline text-[#555] bg-white border-[1px] border-solid rounded-[4px]"
                            />
                            <input
                              type="submit"
                              name="submit"
                              id="submit"
                              value={"Subcribe"}
                              className="!bg-[#E73A42] border-[none] rounded-t-[0] rounded-r-[5px] rounded-b-[5px] rounded-l-[0] absolute top-0 right-0 h-[55px] leading-[55px] text-white px-[25px] font-[600] uppercase inline-block w-auto align-baseline apperance-none"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[unset] !w-full !pr-0">
        <div className="container md:w-[750px] lg:w-[970px] xl:w-[1200px] px-[15px] mx-auto">
          <div className="mx-[-15px] overflow-hidden">
            <div className="lg:min-w-full lg:float-left relative min-h-[1px] px-[15px]">
              <div>
                <div className="mb-[35px]">
                  <div className="mb-0">
                    <div className="leading-[1] mb-0">
                      <p>
                        <span className="text-[8pt] mb-0">
                          <strong className="mb-0">
                            TRAVEL AWARE – STAYING SAFE AND HEALTHY ABROAD
                          </strong>
                        </span>
                      </p>
                      <p>
                        <span className="text-[8pt] mb-0">
                          <img
                            decoding="async"
                            className="mt-[5px] mr-0 mb-[5px] ml-[20px] float-right align-middle h-auto max-w-full"
                            src="https://travelpedia.uk/wp-content/uploads/2022/03/travel-aware-logo-300x300.png"
                            alt=""
                            width="50"
                            height="46"
                            srcSet="https://travelpedia.uk/wp-content/uploads/2022/03/travel-aware-logo-600x553.png 600w, https://travelpedia.uk/wp-content/uploads/2022/03/travel-aware-logo-768x708.png 768w, https://travelpedia.uk/wp-content/uploads/2022/03/travel-aware-logo.png 78w"
                            sizes="(max-width: 50px) 100vw, 50px"
                          />
                          The Foreign, Commonwealth and Development Office and
                          National Travel, Health Network and Centre have up to
                          date advice on staying safe and healthy abroad. For
                          the latest travel advice from the Foreign,
                          Commonwealth and Development Office including security
                          and local laws, plus passport and visa information
                          please visit{" "}
                          <a
                            href="https://www.gov.uk/travelaware"
                            target="_blank"
                            rel="noopener"
                            className="!text-[#CADEFF] underline"
                          >
                            www.gov.uk/travelaware
                          </a>{" "}
                          and follow
                          <a
                            href="https://twitter.com/FCDOtravelGovUK"
                            target="_blank"
                            rel="noopener"
                            className="!text-[#CADEFF] underline"
                          >
                            {" "}
                            @FCDOtravelGovUK
                          </a>
                          &nbsp;and&nbsp;
                          <a
                            href="https://www.facebook.com/fcdotravel/"
                            target="_blank"
                            rel="noopener"
                            className="!text-[#CADEFF] underline"
                          >
                            facebook.com/fcdotravel
                          </a>
                          .&nbsp;More information is available&nbsp;
                          <a
                            href="https://www.virginholidays.co.uk/holiday-information/things-you-need-to-know/overview"
                            className="!text-[#CADEFF] underline"
                          >
                            here
                          </a>
                          . Keep informed of current travel health news by
                          visiting{" "}
                          <a
                            href="http://www.travelhealthpro.org.uk/"
                            target="_blank"
                            rel="noopener"
                            className="!text-[#CADEFF] underline mb-0"
                          >
                            www.travelhealthpro.org.uk
                          </a>
                          . Do check before you book and regularly before you
                          travel for updates as the advice can change.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative left-0 m-[unset] !w-full !pr-0 !overflow-[inherit]">
                  <div className="px-[15px] mx-auto">
                    <div className="w-[1200px] m-full overflow-hidden">
                      <div className="lg:w-full lg:float-left relative min-h-[1px] px-[15px]">
                        <div className="px-0">
                          <div className="h-[70px] bg-[url(https://travelpedia.uk/wp-content/uploads/2022/06/Footer-banner-3-1.png)] bg-no-repeat bg-contain bg-center !mt-[1px]">
                            <span></span>
                          </div>
                          <div className="!mt-[35px] mb-0">
                            <div className="mb-0">
                              <p className="text-left mb-0">
                                Copyright © 2022 by&nbsp;
                                <a
                                  className="!text-[#CADEFF] underline"
                                  href="https://travelpedia.uk/?customize_changeset_uuid=e9d16347-980d-47c1-a743-349032cc5d07&amp;customize_messenger_channel=preview-0&amp;customize_autosaved=on"
                                >
                                  Travelpedia UK
                                </a>
                                |
                                <a
                                  href="https://travelpedia.uk/privacy-policy/"
                                  className="!text-[#CADEFF] underline"
                                >
                                  Privacy Policy
                                </a>
                                |
                                <a
                                  href="https://travelpedia.uk/terms-conditions/"
                                  className="!text-[#CADEFF] underline"
                                >
                                  Terms&amp;Conditions
                                </a>
                                .
                              </p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
