import React from "react";
import { LoadingStyle } from "./style.module";

const Loading = () => {
  return (
    <LoadingStyle>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </LoadingStyle>
  );
};

export default Loading;
