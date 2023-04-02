import React from "react";

export function ImageSection() {
  return (
    <div className="w-[100%] max-w-[100%] block mb-7 mx-0 my-auto bg-white">
      <a
        href="asdfasdf"
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
            className="absolute left-24 bg-transparent text-left top-2/4  translate-y-[-20%] max-w-[35%] w-[520px] leading-[2rem] font-Cerapro "
          >
            <h2
              class="main-image-section-on-image-text"
              className="text-[2.5rem] pb-[20px] leading-[3.125rem] font-normal text-[white] cursor-default m-0  "
            >
              <span> Be the first to get away </span>
            </h2>
            <span
              class="main-image-section-on-image-text-span"
              className="text-lg leading-7 inline  cursor-default text-[white] font-normal text-left max-w-[35%] "
            >
              VIP Early Access for the A-Frame Cabin starts 2/1.
            </span>
            <div
              class="main-image-section-on-image-button-container"
              className="flex flex-row-reverse w-[160px] items-center justify-start mt-[20px]"
            >
              <a
                href="asdf"
                class="main-image-section-on-image-button"
                className="text-base inline-block flex-nowrap items-center font-bold border text-center 
                rounded text-[black] w-[200vw] no-underline cursor-pointer  mr-4 px-[0.9375rem] py-2.5 
                border-solid border-collapse border-transparent bg-white hover:text-[white] hover:bg-[black] text-[14px] font-Cerapro,sans-seris"
              >
                Learn more
                <svg
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] ml-[8px] p-[1px] inline-block "
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
