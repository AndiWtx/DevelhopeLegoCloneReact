import React from "react";
import { Images } from "./Images.js";

export function BionicleFinal() {
  return (
    <div className="flex  pb-24">
      <a href="asddfas" className=" bg-red-900 h-auto relative font-Cerapro">
        <div>
          <img src={Images.Bionicle} alt="bionicle" className="h-auto w-[100%]" />
          <img
            className="flex absolute bottom-5 right-5 w-40"
            src={Images.BionicleLogo}
            alt="bionicle"
          />
          <div className="absolute top-[3rem] left-20 pl-[2vw]">
            <div className="relative text-lg ">
              BIONICLE® gift with qualifying purchases over $100*
            </div>
            <a href="asda"
              id="buton"
              className="relative inline-block top-6 bg-black text-white  p-2 w-[140px] h-[40px] rounded-[4px]
                    hover:bg-white hover:text-black text-center text-sm  "
            >
              Shop Now
              <svg
                viewBox="0 0 18 28"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[18px] pl-5 inline-block"
              >
                <path
                  d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </a >
    </div >
  );
}
