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
       
        <NavigationBar />
        <ImageSection />
        <LayoutSection />
        

        {/* Tuna's Part Start -> */}
//         <Carousel2 />

        {/*  Tuna's Part End <- */}

      
        <TrendindThemes />
        <TopBionicle />

        <BionicleFinal />
       

        
        {/* <CarouselFeaturedSets /> */}
        <ReadAllAbout />
        <FooterIndex />

        
      </div>
    );
  }
}
