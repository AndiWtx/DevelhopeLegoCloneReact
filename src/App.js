import React from "react";
import { UtilityBar } from "./Header/UtilityBar";
import { MainBar } from "./Header/MainBar";
import { ImageSection } from "./Header/ImageSection";
import { LayoutSection } from "./Header/LayoutSection";

export class App extends React.Component {
  render() {
    return (
      <div>
        <UtilityBar />
        <MainBar />
        <ImageSection />
        <LayoutSection />
      </div>
    );
  }
}
