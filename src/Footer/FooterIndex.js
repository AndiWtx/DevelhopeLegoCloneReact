import { FooterComp1 } from "./FooterComp1";
import { FooterColumns } from "./FooterColumns";
import { FooterCredits } from "./FooterCredits";

export function FooterIndex() {
  return (
    <>
      <div className="footerContainer">
        <span>
          <FooterComp1 />
        </span>
        <div>
          <FooterColumns />
        </div>
      </div>
      <span>
        <FooterCredits />
      </span>
    </>
  );
}
