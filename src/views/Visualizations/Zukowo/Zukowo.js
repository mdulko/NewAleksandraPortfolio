import React from "react";
import Blocks from "../../../components/large/Blocks/Blocks";
import Title from "../../../components/small/Title/Title";
import {useSelector} from "react-redux";

const Zukowo = () => {
  const ln = useSelector(state => state.languageReducer)
  const blocksArray = [
    { src: "../../img/Zukowo/1.jpg", name: "Salon", nameEng: "Salon" },
    { src: "../../img/Zukowo/3.jpg", name: "Kuchnia", nameEng: "Kitchen" },
    { src: "../../img/Zukowo/4.jpg", name: "Kuchnia", nameEng: "Kitchen" },
    {
      src: "../../img/Zukowo/5.jpg",
      name: "Łazienka 1.",
      nameEng: "Bathroom 1.",
    },
    {
      src: "../../img/Zukowo/6.jpg",
      name: "Łazienka 1.",
      nameEng: "Bathroom 1.",
    },
    {
      src: "../../img/Zukowo/7.jpg",
      name: "Łazienka 1.",
      nameEng: "Bathroom 1.",
    },
    {
      src: "../../img/Zukowo/8.jpg",
      name: "Łazienka 2.",
      nameEng: "Bathroom 2.",
    },
    {
      src: "../../img/Zukowo/2.jpg",
      name: "Sypialnia 1.",
      nameEng: "Bedroom 1.",
    },
    {
      src: "../../img/Zukowo/13.jpg",
      name: "Sypialnia 2.",
      nameEng: "Bedroom 2.",
    },
    {
      src: "../../img/Zukowo/15.jpg",
      name: "Sypialnia 2.",
      nameEng: "Bedroom 2.",
    },
    {
      src: "../../img/Zukowo/14.jpg",
      name: "Sypialnia 2.",
      nameEng: "Bedroom 2.",
    },
    {
      src: "../../img/Zukowo/12.jpg",
      name: "Sypialnia 2.",
      nameEng: "Bedroom 2.",
    },
    {
      src: "../../img/Zukowo/10.jpg",
      name: "Sypialnia nr.3",
      nameEng: "Bedroom 3.",
    },
    {
      src: "../../img/Zukowo/11.jpg",
      name: "Sypialnia nr.3",
      nameEng: "Bedroom 3.",
    },
    {
      src: "../../img/Zukowo/9.jpg",
      name: "Sypialnia nr.3",
      nameEng: "Bedroom 3.",
    },
    {
      src: "../../img/Zukowo/16.jpg",
      name: "Rzut mieszkania",
      nameEng: "Technical section",
    },
    {
      src: "../../img/Zukowo/17.jpg",
      name: "Kuchnia",
      nameEng: "Technical section",
    },
    {
      src: "../../img/Zukowo/18.jpg",
      name: "Łazienka 1.",
      nameEng: "Technical section",
    },
  ];

  const descriptionArray = [
    {
      topic: "Lokalizacja",
      topicEng: "Location",
      value: ln.projects[0][2].location,
    },
    {
      topic: "Powierzchnia",
      topicEng: "Area",
      value: ln.projects[0][2].area,
    },
    {
      topic: "Przeznaczenie",
      topicEng: "Destiny",
      value: ln.projects[0][2].destiny,
    },
  ];

  return (
    <>
      <Title>{ln.projects[0][2].name}</Title>
      <Blocks arrBlocks={blocksArray} descripiton={descriptionArray} ln={ln} />
    </>
  );
};

export default Zukowo;
