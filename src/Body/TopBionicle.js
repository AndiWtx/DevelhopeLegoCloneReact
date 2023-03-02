import React from "react";
import { Images } from "./Images";
import "./style.css";

export function TopBionicle() {
  return (
    <div className="w-screen h-auto flex flex-col items-center pb-5">
      <div className="ml-7 w-3/4 text-[2rem] font-Cerapro">
        Our top-selling exclusives
      </div>
      <div className="w-3/4  flex">
        <a href="" className="group">
          <div className="flex flex-col font-Cerapro w-80 text-center m-5">
            <img className="w-80" src={Images.Eiffel} />
            <div className="font-bold text-[20px]">LEGO® Eiffel tower</div>
            <div className="mb-4 text-[14px]">
              Build a model of one of the world’s best-loved landmarks.
            </div>
            <a className="group-hover:underline text-[16px] font-bold ">
              Shop now >
            </a>
          </div>
        </a>
        <a href="" className="group">
          <div className="flex flex-col font-Cerapro w-80 text-center m-5">
            <img className="w-80" src={Images.Club} />
            <div className="font-bold text-[20px]">
              New LEGO® Icons Jazz Club
            </div>
            <div className="mb-4 text-[14px]">
              Build a tribute to the golden age of jazz with this playful set.
            </div>
            <a className="group-hover:underline text-[16px] font-bold">
              Shop now >
            </a>
          </div>
        </a>
        <a href="" className="group">
          <div className="flex flex-col font-Cerapro w-80 text-center m-5">
            <img className="w-80" src={Images.Titanic} />
            <div className="font-bold text-[20px]">LEGO® Titanic</div>
            <div className="mb-4 text-[14px]">
              Bring the 20th century marvel to life in exquisite detail and
              scale.
            </div>
            <a className="group-hover:underline text-[16px] font-bold">
              Shop now >
            </a>
          </div>
        </a>
        <a href="" className="group">
          <div className="flex flex-col font-Cerapro w-80 text-center m-5">
            <img className="w-80" src={Images.Castle} />
            <div className="font-bold text-[20px]">
              LEGO® Lion Knights' Castle
            </div>
            <div className="mb-4 text-[14px]">
              Mark 90 years of LEGO® history with an updated version of a fan
              favorite.
            </div>
            <a className="group-hover:underline text-[16px] font-bold">
              Shop now >
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}
