import React from "react";
import { Images } from "./Images";

export function Carousel2() {
  return (
    <div className="flex justify-center ">
      <div className="w-2/3 h-auto flex flex-col items-center font-Cerapro pb-5">
        <div className="w-full self-start text-[2rem] mb-3 pl-[100px]">
          Most popular sets
        </div>
        <div className="w-full  flex   justify-between gap-5">
          <a href="" className="group">
            <div className="flex flex-col font-Cerapro  w-72 text-center  ">
              <img className="" src={Images.Rivendell} alt="..." />
              <div className="font-medium  text-[20px] pt-[20px]">
                New LEGO® Icons Rivendell™
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Build the One to rule them all with this epic creation.
              </div>
              <a className="group-hover:underline flex justify-center text-[16px] font-bold align-center">
                Shop now
                <svg
                  className="inline-block w-12 h-8 "
                  viewBox="0 0 18 28"
                  class="w-4 h-4 fill-current "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="" className="group ">
            <div className="flex flex-col font-Cerapro  w-72 text-center">
              <img className="" src={Images.Batman} />
              <div className="font-medium text-[20px] pt-[20px]">
                Recreate awesome The Batman™ moments
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Defend Gotham City™ with new LEGO® Technic™ THE BATMAN -
                BATCYCLE™.
              </div>
              <a className="group-hover:underline flex justify-center text-[16px] font-bold align-center">
                Shop now
                <svg
                  className="inline-block "
                  viewBox="0 0 18 28"
                  class="w-4 h-4 fill-current "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="" className="group ">
            <div className="flex flex-col font-Cerapro  w-72 text-center">
              <img className="" src={Images.Cabin} alt="An image" />
              <div className="font-medium text-[20px] pt-[20px]">
                New LEGO® Ideas A-Frame Cabin
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Build the perfect getaway with this cozy, fan-inspired set
              </div>
              <a className="group-hover:underline flex justify-center text-[16px] font-bold align-center">
                Shop now
                <svg
                  className="inline-block "
                  viewBox="0 0 18 28"
                  class="w-4 h-4 fill-current "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="" className="group ">
            <div className="flex flex-col font-Cerapro  w-72 text-center relative">
              <div className="">
                <img classname="" src={Images.Future} />
              </div>
              <div className="absolute ">
                <img classname="" src={Images.FutureLogo} />
              </div>
              <div className="font-medium text-[20px] pt-[20px]">
                LEGO® Back to the Future Time Machine
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Relive a timeless movie classic with this detailed LEGO® set.
              </div>
              <a className="group-hover:underline flex justify-center text-[16px] font-bold align-center">
                Shop now
                <svg
                  className="inline-block "
                  viewBox="0 0 18 28"
                  class="w-4 h-4 fill-current "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="" className="group">
            <div className="flex flex-col font-Cerapro  w-72 text-center  ">
              <img className="" src={Images.Ancient} alt="An İmage" />
              <div className="font-medium text-[20px] pt-[20px]">
                A wonder of the ancient world
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Travel back in time with the LEGO® Architecture Great Pyramid of
                Giza.
              </div>
              <a className="group-hover:underline flex justify-center text-[16px] font-bold align-center">
                Shop now
                <svg
                  className="inline-block "
                  viewBox="0 0 18 28"
                  class="w-4 h-4 fill-current "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"></path>
                </svg>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
