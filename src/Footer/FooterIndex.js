import { FooterComp1 } from "./FooterComp1";
import { FooterColumns } from "./FooterColumns";
import { FooterCredits } from "./FooterCredits";
import { FooterSocial } from "./FooterSocial"

export function FooterIndex() {
  return (
    <>
      <div className="footerContainer">

        <FooterComp1 />
        <FooterColumns />

      </div>
      <div>
        <FooterSocial />
      </div>
      <span>
        <FooterCredits />
      </span>
    </>
  );
}
