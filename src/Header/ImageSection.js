import React from "react";

export class ImageSection extends React.Component {
  render() {
    return (
      <div>
        <a href="#" class="main-image-section-anchor">
          <div class="main-image-section-image-container">
            <picture class="main-image-section-picture">
              <source type="image/jpeg" media="(min-width: 901px)" srcset="" />
              <source type="image/jpeg" media="(min-width: 601px)" srcset="" />
              <source type="image/jpeg" media="(max-width: 600px)" srcset="" />
              <img src="" alt="" class="main-image-section-picture-image" />
            </picture>
            <div class="main-image-section-on-image-container">
              <h2 class="main-image-section-on-image-text">
                <span> Be the first to get away </span>
              </h2>
              <span class="main-image-section-on-image-text-span">
                VIP Early Access for the A-Frame Cabin starts 2/1.
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
      </div>
    );
  }
}
