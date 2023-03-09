import React from "react";

export class LayoutSection extends React.Component {
  render() {
    return (
      <div className="flex h-[203px] justify-center items-center">
        <div
          class="layout-section-container"
          className="items-center mx-0 my-5 px-10 py-5 max-w-7xl"
        >
          <ul
            class="layout-section-container-ul"
            className="flex flex-row flex-nowrap leading-[1.125rem] justify-center items-center p-0 m-0"
          >
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a
                href="#"
                class="layout-section-container-ul-li-anchor"
                className=" no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs"
              >
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/newin2023.png"
                    alt="New in 2023"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">
                  New in 2023
                </span>
              </a>
            </li>
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a href="#" class="layout-section-container-ul-li-anchor">
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/exclusives.png"
                    alt="Exclusives"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">Exclusives</span>
              </a>
            </li>
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a href="#" class="layout-section-container-ul-li-anchor">
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/offers.png"
                    alt="Offers"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">Offers</span>
              </a>
            </li>
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a href="#" class="layout-section-container-ul-li-anchor">
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/valentines.png"
                    alt="Valentine's Day"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">
                  Valentine's Day
                </span>
              </a>
            </li>
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a href="#" class="layout-section-container-ul-li-anchor">
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/friends.png"
                    alt="Friends"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">Friends</span>
              </a>
            </li>
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a href="#" class="layout-section-container-ul-li-anchor">
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/marvel.png"
                    alt="Marvel"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">Marvel</span>
              </a>
            </li>
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a href="#" class="layout-section-container-ul-li-anchor">
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/lego-superior-mario.png"
                    alt="Super Mario"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">
                  LEGO® Super Mario™
                </span>
              </a>
            </li>
            <li
              class="layout-section-container-ul-li"
              className="no-underline text-[black] max-w-[6.25rem] cursor-pointer bg-transparent text-center text-xs hover:underline hover:text-[#006db7]"
            >
              <a href="#" class="layout-section-container-ul-li-anchor">
                <picture class="layout-section-image-style-container">
                  <img
                    src="./images/vip_lay.jpeg"
                    alt="VIP"
                    className="w-[80px] h-[65px] "
                  />
                </picture>
                <span class="layout-section-image-description">VIP</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
