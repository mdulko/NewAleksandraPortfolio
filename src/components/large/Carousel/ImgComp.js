import React from "react";

function ImgComp({ src, id }) {
  const styleImg = {
    width: 80 + "%",
    height: "auto",
  };
  return <img src={src} alt="" id={id} style={styleImg}></img>;
}

export default ImgComp;
