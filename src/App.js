import React from "react";
import { UtilityBar } from "./Header/UtilityBar";
import { MainBar } from "./Header/MainBar";
import { ImageSection } from "./Header/ImageSection";
import { LayoutSection } from "./Header/LayoutSection";
import { TopBionicle } from "./TopBionicle";
import { FooterIndex } from "./Footer/FooterIndex";
import "./index.css";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* Taha's Part Start -> */}
        <UtilityBar />
        <MainBar />
        <ImageSection />
        <LayoutSection />
        <TopBionicle />
        {/*  Taha's Part End <- */}

        {/* Andrei's Part Start ->  */}
        <FooterIndex />

        {/* Andrei's Part End <- */}
      </div>
    );
  }
}
