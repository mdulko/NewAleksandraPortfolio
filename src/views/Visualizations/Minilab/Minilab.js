import React from "react";
import Chessboard from "../../../components/large/Chessboard/Cheesboard";

const Minilab = ({ ln }) => {
  const boxArr = [
    {
      src: "../../img/Karuzela/1.jpg",
      title: "Strefa wejściowa",
      titleEng: "Entrance zone",
    },
    { src: "../../img/Karuzela/2.jpg" },
    {
      src: "../../img/Karuzela/3.jpg",
      title: "Strefa główna",
      titleEng: "Main zone",
    },
    { src: "../../img/Karuzela/4.jpg" },
    {
      src: "../../img/Karuzela/5.jpg",
      title: "Strefa techniczna",
      titleEng: "Technical zone",
    },
    { src: "../../img/Karuzela/5a.jpg" },
    {
      src: "../../img/Karuzela/6.jpg",
      title: "mini lab - Strefa kreatywna",
      titleEng: "Creative zone",
    },
    { src: "../../img/Karuzela/7.jpg" },
    {
      src: "../../img/Karuzela/8.jpg",
      title: "Warsztat",
      titleEng: "Workshop",
    },
    { src: "../../img/Karuzela/9.jpg" },
    {
      src: "../../img/Karuzela/10.jpg",
      title: "Rysunki techniczne",
      titleEng: "Technical section",
    },
    { src: "../../img/Karuzela/11.jpg" },
  ];
  const descripiton = [
    ln.projects[0][1].description,
    ln.projects[0][1].subDescription,
  ];

  return (
    <>
      <Chessboard boxArray={boxArr} ln={ln} descripiton={descripiton} />
    </>
  );
};
export default Minilab;
