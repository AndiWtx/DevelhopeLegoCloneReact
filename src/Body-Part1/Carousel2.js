import React from "react";
import { Images } from "./Images";

export function Carousel2() {
  return (
    <div className="flex  ">
      <div className="w-2/3 h-auto inline-block items-center font-Cerapro pb-5">
        <div className="w-full self-start text-[2rem] mb-3 pl-[8vw] pb-[10px]">
          Most popular sets
        </div>
        <div className="w-[100vw]  flex   justify-between flex-wrap pl-[8vw] pr-[8vw]">
          <a href="abc" className="group">
            <div className="flex flex-col font-Cerapro  w-[300px] text-center  ">
              <img className="" src={Images.Rivendell} alt="..." />
              <div className="font-bold text-[20px] pt-[20px]">
                New LEGO® Icons Rivendell™
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Build the One to rule them all with this epic creation.
              </div>
              <a
                href="ab"
                className="group-hover:underline text-[16px] font-bold "
              >
                Shop now
                <svg
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] ml-[8px] p-[3px] inline-block "
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="abcd" className="group ">
            <div className="flex flex-col font-Cerapro  w-[300px] text-center">
              <img className="" src={Images.Batman} alt="..." />
              <div className="font-bold text-[20px] pt-[20px]">
                Recreate awesome The Batman™ moments
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Defend Gotham City™ with new LEGO® Technic™ THE BATMAN -
                BATCYCLE™.
              </div>
              <a
                href="abc"
                className="group-hover:underline text-[16px] font-bold"
              >
                Shop now
                <svg
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] ml-[8px] p-[3px] inline-block "
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="abcde" className="group ">
            <div className="flex flex-col font-Cerapro  w-[300px] text-center">
              <img className="" src={Images.Cabin} alt="..." />
              <div className="font-bold text-[20px] pt-[20px]">
                New LEGO® Ideas A-Frame Cabin
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Build the perfect getaway with this cozy, fan-inspired set
              </div>
              <a className="group-hover:underline text-[16px] font-bold">
                Shop now
                <svg
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] ml-[8px] p-[3px] inline-block "
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="abcdef" className="group ">
            <div className="flex flex-col font-Cerapro  w-[300px] text-center ">
              <img classname="" src={Images.Future} alt="..." />
              <div className="font-bold text-[20px] pt-[20px]">
                LEGO® Back to the Future Time Machine
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Relive a timeless movie classic with this detailed LEGO® set.
              </div>
              <a className="group-hover:underline text-[16px] font-bold">
                Shop now
                <svg
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] ml-[8px] p-[3px] inline-block "
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </a>
          <a href="abcdefg" className="group">
            <div className="flex flex-col font-Cerapro  w-[300px] text-center  ">
              <img className="" src={Images.Ancient} alt="..." />
              <div className="font-bold text-[20px] pt-[20px]">
                A wonder of the ancient world
              </div>
              <div className="mb-4 text-[14px] pt-[10px]">
                Travel back in time with the LEGO® Architecture Great Pyramid of
                Giza.
              </div>
              <a className="group-hover:underline text-[16px] font-bold ">
                Shop now
                <svg
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] ml-[8px] p-[3px] inline-block "
                >
                  <path
                    d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
