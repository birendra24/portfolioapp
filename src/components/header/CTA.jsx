import React from "react";
import cvbirendra from "../../assets/cvbirendra.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={cvbirendra} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  );
};

export default CTA;
