import React from "react";
import { UtilityBar } from "./Header/UtilityBar";
import { MainBar } from "./Header/MainBar";
import { ImageSection } from "./Header/ImageSection";
import { LayoutSection } from "./Header/LayoutSection";
import { TopBionicle } from "./Body-Part2/TopBionicle";
import { FooterIndex } from "./Footer/FooterIndex";
import "./index.css";
import { BionicleFinal } from "./Body-Part2/BionicleFinal";
import { Carousel2 } from "./Body-Part1/Carousel2";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* Taha's Part Start -> */}
        <UtilityBar />
        <MainBar />
        <ImageSection />
        <LayoutSection />
        {/*  Taha's Part End <- */}

        {/* Tuna's Part Start -> */}
        <Carousel2 />

        {/*  Tuna's Part End <- */}

        {/*omer*/}
        <TopBionicle />

        <BionicleFinal />
        {/*omer-end*/}

        {/* Andrei's Part Start ->  */}
        <FooterIndex />

        {/* Andrei's Part End <- */}
      </div>
    );
  }
}
