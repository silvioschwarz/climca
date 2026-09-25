import React from "react";

export default function ResearchFeature({href, src, alt, h3Text}) {
  return (
    <div className="research-feature">
      <a href={href}>
        <img
          src={require("./research/"+src+".png")}
          alt={alt}
          className="research-image"
        />
      </a>
      <h3 className="research-text">
        {h3Text}
      </h3>
    </div>
  );
}