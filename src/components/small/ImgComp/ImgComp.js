import React from "react";

const ImgComp = ({ src }) => {
  const styleImg = {
    width: 100 + "%",
    height: "auto",
  };
  return <img src={src} alt="" style={styleImg}></img>;
};

export default ImgComp;
