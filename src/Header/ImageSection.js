import React from "react";

export class ImageSection extends React.Component {
  render() {
    return (
      <div className="w-[100%] max-w-[100%] block mb-7 mx-0 my-auto bg-white">
        <a
          href="#"
          class="main-image-section-anchor"
          className=" cursor-pointer block w-full h-full text-[#006db7] no-underline bg-transparent"
        >
          <div
            class="main-image-section-image-container"
            className=" flex justify-center align-middle transition-opacity duration-[0.3s] ease-[ease-in] delay-[0s] opacity-100 cursor-pointer inset-0"
          >
            <picture
              class="main-image-section-picture"
              className="inset-0 cursor-pointer "
            >
              <source type="image/jpeg" media="(min-width: 901px)" srcset="" />
              <source type="image/jpeg" media="(min-width: 601px)" srcset="" />
              <source type="image/jpeg" media="(max-width: 600px)" srcset="" />
              <img
                src="./images/imagebar.jpeg"
                alt=""
                class="main-image-section-picture-image"
                className="inline-block align-middle max-w-full object-cover w-full h-full relative border-none inset-0"
              />
            </picture>
            <div
              class="main-image-section-on-image-container"
              className="absolute bg-transparent text-left top-1/3 left-[15%] translate-y-[-20%] max-w-[35%] w-[520px]"
            >
              <h2
                class="main-image-section-on-image-text"
                className="text-[2.5rem] leading-[3.125rem] font-normal text-[white] cursor-default m-0"
              >
                <span> Be the first to get away </span>
              </h2>
              <span
                class="main-image-section-on-image-text-span"
                className="text-lg leading-7 inline mt-[0.9375rem] cursor-default text-[white] font-normal text-left max-w-[35%]"
              >
                VIP Early Access for the A-Frame Cabin starts 2/1.
              </span>
              <div
                class="main-image-section-on-image-button-container"
                className="flex flex-row-reverse w-[500px] items-center justify-start"
              >
                <a
                  href="#"
                  class="main-image-section-on-image-button"
                  className="text-base leading-[1.5625rem] inline-block flex-nowrap items-center font-medium border text-center rounded uppercase text-[black] w-[200vw] no-underline cursor-pointer ml-2.5 mr-4 px-[0.9375rem] py-2.5 border-solid border-collapse border-transparent hover:text-[white] hover:bg-[black]"
                >
                  Learn More
                  <svg
                    width="18"
                    height="28"
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    class="header-slider-right-arrow"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                <a href="#" class="main-image-section-on-image-button">
                  Shop Now
                  <svg
                    width="18"
                    height="28"
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    class="header-slider-right-arrow"
                  >
                    <path
                      d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
