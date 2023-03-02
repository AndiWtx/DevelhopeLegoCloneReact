import React from "react";
import { FooterColumn1 } from "./FooterColumn1";
import { FooterColumn2 } from "./FooterColumn2";
import { FooterColumn3 } from "./FooterColumn3";
import { FooterColumn4 } from "./FooterColumn4";

export class FooterColumns extends React.Component {
  render() {
    return (
      <div className="footerInfo">
        <FooterColumn1 />
        <FooterColumn2 />
        <FooterColumn3 />
        <FooterColumn4 />
      </div>
    );
  }
}
