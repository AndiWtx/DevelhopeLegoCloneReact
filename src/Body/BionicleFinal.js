import React from "react";
import { Images } from "./Images";

export function BionicleFinal() {
  return (
    <div className="flex justify-center mb-52">
      <a href="" className="w-4/5 bg-red-900 h-auto relative font-Cerapro">
        <div>
          <img src={Images.Bionicle} />
          <img
            className="absolute bottom-5 right-5 w-40"
            src={Images.BionicleLogo}
          />
          <div className="absolute top-[4rem] left-20">
            <div className="relative">
              BIONICLE® gift with qualifying purchases over $100*
            </div>
            <div
              itemID="buton"
              className="absolute top-10  bg-black text-white text-center p-3 w-40 rounded-[4px]
                    hover:bg-white hover:text-black"
            >
              Shop Now >
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
