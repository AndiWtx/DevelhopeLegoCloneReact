import React from "react";
import { NavigationBar } from "./Header/NavigationBar";
import { ImageSection } from "./Header/ImageSection";
import { LayoutSection } from "./Header/LayoutSection";
import { TopBionicle } from "./Body-Part2/TopBionicle";
import { FooterIndex } from "./Footer/FooterIndex";
import { BionicleFinal } from "./Body-Part2/BionicleFinal";
import { ReadAllAbout } from "./Body-Part3/ReadAllAbout"
import { TrendindThemes } from "./Body-Part2/TrendingThemes";
import { CarouselFeaturedSets } from "./Carousel-Bottom/Carousel";
import { CarouselTop } from './Carousel-Top/Carousel2';

export class App extends React.Component {



  render() {
    return (
      <div >
        <NavigationBar />
        <ImageSection />
        <LayoutSection />
        <CarouselTop />
        <TrendindThemes />
        <TopBionicle />
        <BionicleFinal />
        <CarouselFeaturedSets />
        <ReadAllAbout />
        <FooterIndex />

      </div>
    );
  }
}
