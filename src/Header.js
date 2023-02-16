import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div class="header-desktop" id="header-navbar">
            <section>
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
                    <p
                      class="header-slider-inner-bar-text"
                      id="headerSliderText"
                    >
                      Preview Black Friday now
                      <a
                        class="header-slider-inner-bar-anchor"
                        href="https://www.lego.com/en-us/black-friday-deals?icmp=SW-SHB-Standard-NO_SWB_Black_Friday_Reveal_Phase_HP-F-NO-TJ7B9W69IA"
                      >
                        Learn more
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
                      <g
                        transform="translate(1 1)"
                        fill-rule="nonzero"
                        fill="none"
                      >
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
                      src="assets/images/header_images/header_UB_VipIcon.png"
                      width="20px"
                      height="20px"
                      alt="VIP"
                      class="utility-bar-vip-image"
                    />
                    <span class="utility-bar-vip-span">VIP</span>
                  </a>
                </div>
              </div>
            </section>

            <section class="mainBarSection">
              <div class="main-bar-for-margin">
                <div class="main-bar-container">
                  <div class="main-bar-navigation">
                    <nav class="main-bar-main-navigation">
                      <a href="#" class="main-bar-main-navigation-anchor">
                        <img
                          src="assets/images/header_images/lego-logo.svg"
                          alt="Lego"
                          class="main-bar-main-navigation-lego-logo"
                        />
                      </a>
                    </nav>
                  </div>

                  <ul class="main-bar-menu">
                    <li class="main-bar-menu-li1">
                      <button class="main-bar-menu-button">Shop</button>
                    </li>
                    <li class="main-bar-menu-li2">
                      <button class="main-bar-menu-button">Discover</button>
                    </li>
                    <li class="main-bar-menu-li3">
                      <button class="main-bar-menu-button">Help</button>
                    </li>
                  </ul>

                  <div class="main-bar-actions-container">
                    <div class="main-bar-actions-search">
                      <button class="main-bar-actions-search-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          aria-hidden="true"
                          class="main-bar-actions-search-button-svg"
                        >
                          <path
                            d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423"
                            fill="currentColor"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="main-bar-actions-search-hidden">
                          Open search field
                        </span>
                      </button>
                    </div>
                  </div>

                  <button class="main-bar-actions-like">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      aria-hidden="true"
                      class="main-bar-actions-like-svg"
                    >
                      <path
                        d="M16.84 8.417L10 15.204 3.16 8.417A3.67 3.67 0 012 5.739C2 3.677 3.71 2 5.815 2a3.82 3.82 0 012.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0114.186 2C16.289 2 18 3.677 18 5.739a3.673 3.673 0 01-1.16 2.678M9.986 18l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 001.78-4.126C20 2.569 17.398 0 14.187 0A5.829 5.829 0 0010 1.762 5.827 5.827 0 005.815 0C2.604 0 0 2.569 0 5.739a5.68 5.68 0 001.782 4.126"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <a href="#" class="main-bar-actions-bag-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      class="main-bar-actions-bag-link-svg"
                    >
                      <g fill="currentColor" fill-rule="evenodd">
                        <path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path>
                        <path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path>
                      </g>
                    </svg>
                    (0)
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <header>
          <section class="main-image-section">
            <a href="#" class="main-image-section-anchor">
              <div class="main-image-section-image-container">
                <picture class="main-image-section-picture">
                  <source
                    type="image/jpeg"
                    media="(min-width: 901px)"
                    srcset="assets/images/header_images/imageSection_Large.jpg 1.2x"
                  />
                  <source
                    type="image/jpeg"
                    media="(min-width: 601px)"
                    srcset="
                    assets/images/header_images/imageSection_Medium.jpg 1.5x
                  "
                  />
                  <source
                    type="image/jpeg"
                    media="(max-width: 600px)"
                    srcset="assets/images/header_images/imageSection_Small.jpg 2x"
                  />
                  <img
                    src="assets/images/header_images/imageSection_Large.jpg"
                    alt=""
                    class="main-image-section-picture-image"
                  />
                </picture>
                <div class="main-image-section-on-image-container">
                  <h2 class="main-image-section-on-image-text">
                    <span> LEGO® Black Friday is here! </span>
                  </h2>
                  <span class="main-image-section-on-image-text-span">
                    Explore special offers, gifts with purchase, new rewards and
                    more.
                  </span>
                  <div class="main-image-section-on-image-button-container">
                    <a href="#" class="main-image-section-on-image-button">
                      Learn More
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
                    </a>

                    <a href="#" class="main-image-section-on-image-button">
                      Shop Now
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
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </section>

          <section class="layout-section">
            <div class="layout-section-container">
              <ul class="layout-section-container-ul">
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_New.jpg"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">New</span>
                  </a>
                </li>
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_Exclusives.png"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">
                      Exclusives
                    </span>
                  </a>
                </li>
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_Offers.png"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">Offers</span>
                  </a>
                </li>
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_LastChance.png"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">
                      Last Chance
                    </span>
                  </a>
                </li>
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_Holiday.png"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">
                      Holiday 2022
                    </span>
                  </a>
                </li>
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_GiftCards.png"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">
                      Gift Finder
                    </span>
                  </a>
                </li>
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_Sale.png"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">
                      Best Sellers
                    </span>
                  </a>
                </li>
                <li class="layout-section-container-ul-li">
                  <a href="#" class="layout-section-container-ul-li-anchor">
                    <picture class="layout-section-image-style-container">
                      <img
                        src="assets/images/header_images/layout_VIP.jpg"
                        alt=""
                      />
                    </picture>
                    <span class="layout-section-image-description">VIP</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </header>
      </div>
    );
  }
}
