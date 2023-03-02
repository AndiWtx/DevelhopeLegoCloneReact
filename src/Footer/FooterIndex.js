import React from "react";
import { FooterComp1 } from "./FooterComp1";
import { FooterColumns } from "./FooterColumns";

export class FooterIndex extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <span>
          <FooterComp1 />
        </span>
        <div>
          <FooterColumns />
        </div>
      </div>
    );
  }
}
