import React from "react";

export class UtilityBar extends React.Component {
  render() {
    return (
      <div>
        <div class="utility-bar-container">
          <div class="utiliy-bar-play-zone">
            <a
              href="https://www.lego.com/kids"
              class="utility-bar-play-zone-anchor"
            >
              <svg
                width="37"
                height="16"
                viewBox="0 0 37 16"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="arrow-icon"
              >
                <path
                  fill="currentColor"
                  d="M29.493.597l.095.084 6.535 6.54a1 1 0 01.083 1.319l-.083.094-6.535 6.54a1 1 0 01-1.498-1.32l.083-.094 4.83-4.834-31.908.001A1 1 0 01.98 6.934l.116-.007h31.907l-4.83-4.833a1 1 0 01-.082-1.32l.083-.094a1 1 0 011.32-.083z"
                ></path>
              </svg>
              Play Zone
            </a>
          </div>

          <div class="header-slider-banner">
            <button
              class="header-slider-left-button"
              type="button"
              onclick="buttonSlider()"
            >
              <svg
                width="18"
                height="28"
                viewBox="0 0 18 28"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="header-slider-left-arrow"
              >
                <path
                  d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <div class="header-slider-inner-bar">
              <p class="header-slider-inner-bar-text" id="headerSliderText">
                BIONICLE® gift with qualifying purchases over $100*
                <a
                  class="header-slider-inner-bar-anchor"
                  href="https://www.lego.com/en-us/black-friday-deals?icmp=SW-SHB-Standard-NO_SWB_Black_Friday_Reveal_Phase_HP-F-NO-TJ7B9W69IA"
                >
                  Shop now
                </a>
              </p>
            </div>
            <button
              class="header-slider-right-button"
              type="button"
              onclick="buttonSlider()"
            >
              <svg
                width="18"
                height="28"
                viewBox="0 0 18 28"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="header-slider-right-arrow"
              >
                <path
                  d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>

          <div class="utility-bar-account-vip">
            <button class="utility-bar-account-button">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                class="utility-bar-account-button-svg"
              >
                <g transform="translate(1 1)" fill-rule="nonzero" fill="none">
                  <rect
                    stroke="#2C2C2C"
                    stroke-width="1.5"
                    fill="#FFCF00"
                    x="4.875"
                    width="8.25"
                    height="6.038"
                    rx=".729"
                  ></rect>
                  <rect
                    stroke="#2C2C2C"
                    stroke-width="1.2"
                    fill="#FFCF00"
                    x="3.75"
                    y="14.34"
                    width="10.5"
                    height="5.66"
                    rx=".729"
                  ></rect>
                  <path
                    d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z"
                    stroke="#2C2C2C"
                    stroke-width="1.5"
                    fill="#FFCF00"
                  ></path>
                  <path
                    d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z"
                    fill="#2C2C2C"
                  ></path>
                </g>
              </svg>
              <span>Account</span>
            </button>

            <span class="utility-bar-account-vip-border"></span>
            <a href="#" class="utility-bar-vip-link">
              <img
                src="./Header/assets/header_UB_VipIcon.png"
                width="20px"
                height="20px"
                alt="VIP"
                class="utility-bar-vip-image"
              />
              <span class="utility-bar-vip-span">VIP</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
