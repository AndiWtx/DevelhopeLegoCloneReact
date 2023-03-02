import React from "react";
import legoImage from "./images-footer/lego-logo.jpg";
import dropPin from "./images-footer/pin-drop.png";

export class FooterComp1 extends React.Component {
  render() {
    return (
      <div>
        <img src={legoImage} alt="lego-logo" class="legoImage-footer" />
        <div class="footer_selectionRegion">
          <img src={dropPin} alt="lego-logo" class="dropPinImage-footer" />
          <a href="##" id="selectionRegion-footer">
            Romania
          </a>
        </div>
        <div class="footer_giftCards">
          <a href="##" id="giftCards-footer">
            Gift Cards
          </a>
        </div>
        <div class="footer_legoCatalogs">
          <a href="##" id="legoCatalogs-footer">
            LEGO Catalogs
          </a>
        </div>
        <div class="footer_legoFinder">
          <a href="##" id="findLego-footer">
            Find LEGO Store
          </a>
        </div>
      </div>
    );
  }
}
