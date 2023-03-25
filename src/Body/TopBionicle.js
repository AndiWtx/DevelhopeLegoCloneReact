import React from "react";
import { Images } from "./Images";

export function TopBionicle() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-2/3 h-auto flex flex-col items-center font-Cerapro pb-5">
          <div className="w-full self-start text-[2rem] mb-3">
            Our top-selling exclusives
          </div>
          <div className="w-full  flex   justify-between flex-wrap">
            <a href="" className="group">
              <div className="flex flex-col font-Cerapro  w-72 text-center  ">
                <img className="" src={Images.Eiffel} />
                <div className="font-bold text-[20px]">LEGO® Eiffel tower</div>
                <div className="mb-4 text-[14px]">
                  Build a model of one of the world’s best-loved landmarks.
                </div>
                <a className="group-hover:underline text-[16px] font-bold ">
                  Shop now
                </a>
              </div>
            </a>
            <a href="" className="group ">
              <div className="flex flex-col font-Cerapro  w-72 text-center">
                <img className="" src={Images.Club} />
                <div className="font-bold text-[20px]">
                  New LEGO® Icons Jazz Club
                </div>
                <div className="mb-4 text-[14px]">
                  Build a tribute to the golden age of jazz with this playful
                  set.
                </div>
                <a className="group-hover:underline text-[16px] font-bold">
                  Shop now
                </a>
              </div>
            </a>
            <a href="" className="group ">
              <div className="flex flex-col font-Cerapro  w-72 text-center">
                <img className="" src={Images.Titanic} />
                <div className="font-bold text-[20px]">LEGO® Titanic</div>
                <div className="mb-4 text-[14px]">
                  Bring the 20th century marvel to life in exquisite detail and
                  scale.
                </div>
                <a className="group-hover:underline text-[16px] font-bold">
                  Shop now
                </a>
              </div>
            </a>
            <a href="" className="group ">
              <div className="flex flex-col font-Cerapro  w-72 text-center">
                <img className="" src={Images.Castle} />
                <div className="font-bold text-[20px]">
                  LEGO® Lion Knights' Castle
                </div>
                <div className="mb-4 text-[14px]">
                  Mark 90 years of LEGO® history with an updated version of a
                  fan favorite.
                </div>
                <a className="group-hover:underline text-[16px] font-bold">
                  Shop now
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-2/3 h-auto flex flex-col items-center font-Cerapro mb-10 ">
          <div className="w-full text-[2rem] font-Cerapro mb-3">
            Pre-order these sets now!
          </div>
          <div className="w-full flex justify-center">
            <a href="" className="relative group m-3 ">
              <img src={Images.Starwars} />
              <div className="absolute text-gray-50 top-10 left-0 right-0 text-center">
                <div className="text-2xl mb-3">
                  Pre-order a new <i>Star&nbsp;Wars</i>™ helmet
                </div>
                <div className="mb-5 text-sm">
                  Reserve the new Clone Commander Cody™ Helmet today.
                </div>
                <a className="group-hover:underline text-[16px] font-bold ">
                  Shop now
                </a>
              </div>
              <img
                src={Images.Starwars_LOGO}
                className="absolute bottom-3 right-3 min-w-0 w-40"
              ></img>
            </a>
            <a href="" className="relative group m-3">
              <img src={Images.Starwars2} />
              <div className="absolute top-10 left-0  text-gray-50 right-0 text-center">
                <div className="text-2xl mb-3">
                  Pre-order this collectible <i>Star&nbsp;Wars</i>™ set
                </div>
                <div className="mb-5 text-sm">
                  New Princess Leia™ (Boushh™) Helmet. Ships from 3/1.
                </div>
                <a className="group-hover:underline text-[16px] font-bold ">
                  Shop now
                </a>
              </div>
              <img
                src={Images.Starwars_LOGO}
                className="absolute bottom-3 right-3 min-w-0 w-40"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
