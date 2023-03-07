import React from "react";
import { GiSkeletonKey } from "react-icons/gi";

const CrossedKeys = () => {
  return (
    <div className="key-icon-container">
      <GiSkeletonKey size="1rem" className="key-icon-left" />
      <GiSkeletonKey size="1rem" className="key-icon-right" />
    </div>
  );
};

const Title = () => {
  return (
    <div className="title">
      <span className="skeleton-title-text">SKELETON</span>
      <div className="key-container">
        <CrossedKeys />
        <span className="key-title-text">KEY</span>
        <CrossedKeys />
      </div>
    </div>
  );
};

export default Title;
