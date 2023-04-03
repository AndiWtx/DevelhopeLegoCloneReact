import React from "react";
import facebookImage from "./images-footer/fb-trans.png";
import instagramImage from "./images-footer/ig-trans.png";
import tweeterImage from "./images-footer/tw-trans.png";
import youtubeImage from "./images-footer/yt-trans.png";

export function FooterSocial() {
  return (
    <div className="footer-social-links">
      <div className="subs">
        <p className="subs-text">SUBSCRIBE TO LEGO® SHOP EMAILS</p>
        <span>
          <input
            type="text"
            placeholder="Your email address"
            className="subscribe-inp"
          />
          <button className="submit-footer">
            <svg
              viewBox="0 0 18 28"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[18px] inline-block"
            >
              <path
                d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </span>
      </div>
      <div className="social-media-images">
        <div class="footer_followUs">FOLLOW US</div>
        <div class="footer_socialMedia-links">
          <a href="link">
            <img
              src={facebookImage}
              className="social-image"
              id="social-facebook"
              alt="fb"
            />
          </a>
          <a href="link">
            <img
              src={tweeterImage}
              className="social-image"
              id="social-twitter"
              alt="tw"
            />
          </a>
          <a href="link">
            <img
              src={instagramImage}
              className="social-image"
              id="social-instagram"
              alt="ig"
            />
          </a>
          <a href="link">
            <img
              src={youtubeImage}
              className="social-image"
              id="social-youtube"
              alt="yt"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
