import React from "react";
import { Images2 } from "./Imgs.js";

export function ReadAllAbout() {
  return (

    <div className="container_trendingThemes">
      <div className="container_titleTrendingThemes">
        <span className="titleTrendingThemes"> Read all about it</span>
      </div>
      <div className="container_trendingCard">
        <img src={Images2.Ford} alt="ford car" />
        <div className="description_trendingCard">
          <h3 className="title_trendingCard">
            Why the first LEGO® Technic™ Ford GT will delight supercar fans
          </h3>
          <span className="text_trendingCard">
            Find out all the cool features of the new set, based on the iconic
            American race car...
          </span>
          <div className="readMore_trendingCard">
            Read More
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
          </div>
        </div>
      </div>
      <div className="container_trendingCard">
        <img src={Images2.VDay} alt="vday" />
        <div className="description_trendingCard">
          <h3 className="title_trendingCard">
            Unique LEGO® Valentine’s Day Gifts 2023
          </h3>
          <span className="text_trendingCard">
            Love is in the air – and your dear one will love these unique
            Valentine’s Day gifts. Build LEGO® sets together for a sweet shared
            activity!
          </span>
          <div className="readMore_trendingCard">
            Read More
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
          </div>
        </div>
      </div>
      <div className="container_trendingCard">
        <img src={Images2.BestGifts} alt="bgifts" />
        <div className="description_trendingCard">
          <h3 className="title_trendingCard">Best Gifts for Gamers</h3>
          <span className="text_trendingCard">
            Looking for gifting inspiration? Discover some unique gifts for
            gamers, perfect for Holidays, Christmas and birthdays!
          </span>
          <div className="readMore_trendingCard">
            Read More
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
          </div>
        </div>
      </div>
      <div className="container_trendingCard">
        <img src={Images2.RelaxingLego} alt="relaxing lego" />
        <div className="description_trendingCard">
          <h3 className="title_trendingCard">
            6 Relaxing LEGO® sets to build for adults
          </h3>
          <span className="text_trendingCard">
            If you’re looking for calming activities, then this is the list for
            you, as we bring together some of our most relaxing and mindful
            sets...
          </span>
          <div className="readMore_trendingCard">
            Read More
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
          </div>
        </div>
      </div>
    </div>
  );
}
=======
    <>
      <div className="flex">
        <div className="w-2/3 h-auto inline-block items-center font-Cerapro pb-5">
          <div className="w-full self-start text-[2rem] mb-3 pl-[7vw]">
            Read all about it
          </div>
          <div className="w-[100vw]  flex   justify-between flex-wrap pl-[7vw] pr-[7vw] pb-[3vw]">
            <a href="asda" className="group">
              <div className="flex flex-col font-Cerapro  w-80 text-center  ">
                <img className="" src={Images2.Ford} alt="eiffel" />
                <div className="font-bold text-[20px] pt-[20px]">
                  Why the first LEGO® Technic™ Ford GT will delight supercar fans
                </div>
                <div className="mb-4 text-[14px] pt-[10px]">
                  Find out all the cool features of the new set, based on the iconic American race car...
                </div>
                <a href="asdasdasd" className="group-hover:underline text-[16px] font-bold ">
                  Read More
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] ml-[8px] p-[3px] inline-block ">
                    <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </a>
            <a href="asddf" className="group ">
              <div className="flex flex-col font-Cerapro  w-80 text-center">
                <img className="" src={Images2.VDay} alt="club" />
                <div className="font-bold text-[20px] pt-[20px]">
                  Unique LEGO® Valentine’s Day Gifts 2023
                </div>
                <div className="mb-4 text-[14px] pt-[10px]">
                  Love is in the air – and your dear one will love these unique Valentine’s Day gifts. Build LEGO® sets together for a sweet shared activity!
                </div>
                <a href="asdasafs" className="group-hover:underline text-[16px] font-bold">
                  Read More
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] ml-[8px] p-[3px] inline-block ">
                    <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </a>
            <a href="dfgadsf" className="group ">
              <div className="flex flex-col font-Cerapro  w-80 text-center">
                <img className="" src={Images2.BestGifts} alt="titanic" />
                <div className="font-bold text-[20px] pt-[20px]">Best Gifts for Gamers</div>
                <div className="mb-4 text-[14px] pt-[10px]">
                  Looking for gifting inspiration? Discover some unique gifts for
                  gamers, perfect for Holidays, Christmas and birthdays!
                </div>
                <a href="asdfa" className="group-hover:underline text-[16px] font-bold">
                  Read More
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] ml-[8px] p-[3px] inline-block ">
                    <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </a>
            <a href="asdfasd" className="group ">
              <div className="flex flex-col font-Cerapro  w-80 text-center">
                <img className="" src={Images2.RelaxingLego} alt="castle" />
                <div className="font-bold text-[20px] pt-[20px]">
                  6 Relaxing LEGO® sets to build for adults
                </div>
                <div className="mb-4 text-[14px] pt-[10px]">
                  If you’re looking for calming activities, then this is the list for you,
                  as we bring together some of our most relaxing and mindful sets...
                </div>
                <a href="asdfadf" className="group-hover:underline text-[16px] font-bold">
                  Read More
                  <svg
                    viewBox="0 0 18 28"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] ml-[8px] p-[3px] inline-block ">
                    <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

