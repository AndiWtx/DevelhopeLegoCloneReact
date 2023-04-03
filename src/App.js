import React from "react";
import { NavigationBar } from "./Header/NavigationBar";
import { ImageSection } from "./Header/ImageSection";
import { LayoutSection } from "./Header/LayoutSection";
import { TopBionicle } from "./Body-Part2/TopBionicle";
import { FooterIndex } from "./Footer/FooterIndex";
import { BionicleFinal } from "./Body-Part2/BionicleFinal";
import { Carousel2 } from "./Body-Part1/Carousel2";
import { ReadAllAbout } from "./Body-Part3/ReadAllAbout"
import { TrendindThemes } from "./Body-Part2/TrendingThemes";
// import { CarouselFeaturedSets } from "./Body-Part4/Carousel";

export class App extends React.Component {



  render() {
    return (
      <div >
        {/* Taha's Part Start -> */}
        <NavigationBar />
        <ImageSection />
        <LayoutSection />
        {/*  Taha's Part End <- */}

        {/* Tuna's Part Start -> */}
        <Carousel2 />

        {/*  Tuna's Part End <- */}

        {/*omer*/}
        <TrendindThemes />
        <TopBionicle />

        <BionicleFinal />
        {/*omer-end*/}

        {/* Andrei's Part Start ->  */}
        {/* <CarouselFeaturedSets /> */}
        <ReadAllAbout />
        <FooterIndex />

        {/* Andrei's Part End <- */}
      </div>
    );
  }
}
