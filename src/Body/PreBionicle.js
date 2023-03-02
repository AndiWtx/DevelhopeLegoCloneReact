import React from "react";
import { Images } from "./Images";
import "./style.css";

export function PreBionicle() {
  return (
    <div className="w-screen h-auto flex flex-col items-center   mb-40">
      <div className="ml-7 w-3/4 text-[2rem] font-Cerapro">
        Our top-selling exclusives
      </div>
      <div className="w-3/4  flex justify-center">
        <div>
          <img src={Images.Starwars} />
        </div>
        <div>
          <img src={Images.Starwars2} />
        </div>
      </div>
    </div>
  );
}
