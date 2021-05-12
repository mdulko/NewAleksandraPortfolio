import { Container } from "@material-ui/core";
import React from "react";
import ImagesInColumn from "../../../components/large/ImagesInColumn/ImagesInColumn";
import Title from "../../../components/small/Title/Title";

const KitchenTemplate1 = ({ ln }) => {
  const content = [
    {
      img: "../../img/Kuchnia1/1.jpg",
    },
    {
      img: "../../img/Kuchnia1/2.jpg",
    },
    {
      img: "../../img/Kuchnia1/3.jpg",
    },
    {
      img: "../../img/Kuchnia1/4.jpg",
    },
    {
      img: "../../img/Kuchnia1/5.jpg",
      title: "Rzuty Techniczne",
      titleEng: "Technical section",
    },
    {
      img: "../../img/Kuchnia1/6.jpg",
    },
    {
      img: "../../img/Kuchnia1/7.jpg",
    },
  ];

  return (
    <Container Container maxWidth="xl">
      <Title>{ln.projects[3][1].name}</Title>
      <ImagesInColumn boxArray={content} ln={ln} />
    </Container>
  );
};

export default KitchenTemplate1;
