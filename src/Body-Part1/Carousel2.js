import React from "react";
import { Images } from "./Images";

export function Carousel2() {
  return (
    <div className="flex justify-center ">
      <div className="w-2/3 h-auto flex flex-col items-center font-Cerapro pb-5">
        <div className="w-full self-start text-[2rem] mb-3">
          Most popular sets
        </div>
        <div className="w-full  flex   justify-between flex-wrap">
          <a href="" className="group">
            <div className="flex flex-col font-Cerapro  w-72 text-center  ">
              <img className="" src={Images.Rivendell} alt="An İmage" />
              <div className="font-bold text-[20px]">
                New LEGO® Icons Rivendell™
              </div>
              <div className="mb-4 text-[14px]">
                Build the One to rule them all with this epic creation.
              </div>
              <a className="group-hover:underline text-[16px] font-bold ">
                Shop now
              </a>
            </div>
          </a>
          <a href="" className="group ">
            <div className="flex flex-col font-Cerapro  w-72 text-center">
              <img className="" src={Images.Batman} />
              <div className="font-bold text-[20px]">
                Recreate awesome The Batman™ moments
              </div>
              <div className="mb-4 text-[14px]">
                Defend Gotham City™ with new LEGO® Technic™ THE BATMAN -
                BATCYCLE™.
              </div>
              <a className="group-hover:underline text-[16px] font-bold">
                Shop now
              </a>
            </div>
          </a>
          <a href="" className="group ">
            <div className="flex flex-col font-Cerapro  w-72 text-center">
              <img className="" src={Images.Cabin} alt="An image" />
              <div className="font-bold text-[20px]">
                New LEGO® Ideas A-Frame Cabin
              </div>
              <div className="mb-4 text-[14px]">
                Build the perfect getaway with this cozy, fan-inspired set
              </div>
              <a className="group-hover:underline text-[16px] font-bold">
                Shop now
              </a>
            </div>
          </a>
          <a href="" className="group ">
            <div className="flex flex-col font-Cerapro  w-72 text-center">
              <img className="" src={Images.Future} />
              <div className="font-bold text-[20px]">
                LEGO® Back to the Future Time Machine
              </div>
              <div className="mb-4 text-[14px]">
                Relive a timeless movie classic with this detailed LEGO® set.
              </div>
              <a className="group-hover:underline text-[16px] font-bold">
                Shop now
              </a>
            </div>
          </a>
          <a href="" className="group">
            <div className="flex flex-col font-Cerapro  w-72 text-center  ">
              <img className="" src={Images.Ancient} alt="An İmage" />
              <div className="font-bold text-[20px]">
                A wonder of the ancient world
              </div>
              <div className="mb-4 text-[14px]">
                Travel back in time with the LEGO® Architecture Great Pyramid of
                Giza.
              </div>
              <a className="group-hover:underline text-[16px] font-bold ">
                Shop now
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
