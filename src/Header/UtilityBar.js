import React from "react";

export function UtilityBar() {
  //I need and array of object like this  or the way of targeting that texts;
  // const texts = [
  // {},
  // {},
  //...
  //]

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isFirsText = currentIndex === 0;
    const newIndex = isFirsText ? texts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    const isLastText = currentIndex === texts.length - 1;
    const newIndex = isLastText ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="z-[100] sticky bg-[rgb(248,248,248)] transition-[0s] duration-[ease-in] delay-[0.3s] top-0 inset-x-0">
      <div className="bg-[rgb(248,248,248)] flex relative items-center justify-between w-full max-w-[100rem] mx-auto my-0 px-7 py-0">
        <div className="flex flex-[0_1_33.33%] items-center mb-[0.94rem] mt-[0.94rem]">
          <a
            href="https://www.lego.com/kids"
            className="inline-flex items-center rounded-sm border-none bg-[rgb(117,217,255)] hover:bg-[white]
            text-black text-xs leading-2 uppercase px-0 py-1 shadow-[rgb(48_85_181_/_44%)_0px_1px_4px_0px]
            w-[7vw] text-center border-collapse font-medium no-underline "
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 37 16"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2.5 leading-none rotate-180 ml-[7px] "
            >
              <path
                fill="currentColor"
                d="M29.493.597l.095.084 6.535 6.54a1 1 0 01.083 1.319l-.083.094-6.535 6.54a1 1 0 01-1.498-1.32l.083-.094 4.83-4.834-31.908.001A1 1 0 01.98 6.934l.116-.007h31.907l-4.83-4.833a1 1 0 01-.082-1.32l.083-.094a1 1 0 011.32-.083z"
              ></path>
            </svg>
            Play Zone
          </a>
        </div>

        <div className="flex max-w-[34.6875rem] mx-auto my-0 justify-evenly h-[3.1875rem] relative">
          <button
            className="text-[rgb(44,44,44)] z-[1] shadow-none cursor-pointer mx-auto p-3 bg-transparent border-0 "
            type="button"
            onClick={goToPrev}
          >
            <svg
              width="18"
              height="28"
              viewBox="0 0 18 28"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180 h-[18px]"
            >
              <path
                d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div className="flex w-full justify-center items-center shrink-0  ">
            <div
              className=" m-0 text-center text-xs leading-5 font-Cerapro"
              id="headerSliderText"
            >
              BIONICLE® gift with qualifying purchases over $100*
              <a
                className="ml-3 no-underline hover:underline text-blue-600"
                href="asdknSDFN"
              >
                Shop now
              </a>
            </div>
          </div>
          <div className="flex w-full justify-center items-center shrink-0  ">
            <div
              className=" m-0 text-center text-xs leading-5 font-Cerapro"
              id="headerSliderText"
            >
              FREE Shipping with orders over $35!*
              <a
                className="ml-3 no-underline hover:underline text-blue-600"
                href="asdknSDFN"
              >
                Learn more
              </a>
            </div>
          </div>
          <button
            className="text-[rgb(44,44,44)] z-[1] shadow-none cursor-pointer mx-auto p-3 bg-transparent border-0 "
            type="button"
            onclick={goToNext}
          >
            <svg
              width="18"
              height="28"
              viewBox="0 0 18 28"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px]"
            >
              <path
                d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-[0_1_33.33%] items-center justify-end mx-auto my-0 ">
          <button className="flex items-center h-full text-xs leading-3 weight font-medium border-0 p-0 cursor-pointer bg-transparent shadow-none overflow-visible m-0  ">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              class="utility-bar-account-button-svg"
              className="mr-2.5 leading-[0] h-5 w-5 "
            >
              <g transform="translate(1 1)" fill-rule="nonzero" fill="none">
                <rect
                  stroke="#2C2C2C"
                  stroke-width="1.5"
                  fill="#FFCF00"
                  x="4.875"
                  width="8.25"
                  height="6.038"
                  rx=".729"
                ></rect>
                <rect
                  stroke="#2C2C2C"
                  stroke-width="1.2"
                  fill="#FFCF00"
                  x="3.75"
                  y="14.34"
                  width="10.5"
                  height="5.66"
                  rx=".729"
                ></rect>
                <path
                  d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z"
                  stroke="#2C2C2C"
                  stroke-width="1.5"
                  fill="#FFCF00"
                ></path>
                <path
                  d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z"
                  fill="#2C2C2C"
                ></path>
              </g>
            </svg>
            <span>Account</span>
          </button>

          <span className="w-px h-5 bg-[rgb(117,117,117)] mx-5 my-0; "></span>
          <a
            href="asdf"
            className="flex items-center h-full text-xs leading-5 font-medium cursor-pointer no-underline bg-transparent "
          >
            <img
              src="./images/header_UB_VipIcon.png"
              width="20px"
              height="20px"
              alt="VIP"
              className="w-5 h-5 mr-2.5 inline-block align-middle border-none
                 "
            />
            <span className="text-xs leading-5 font-medium">VIP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
